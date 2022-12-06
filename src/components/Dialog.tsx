import 'wicg-inert'

import { Box, Button, styled, Typography } from '@mui/material'
import { ChevronLeft } from 'icons'
import { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Layer, ThemeProvider } from 'theme'
import { ThemeProvider as MuiThemeProvider } from 'theme/muiTheme'
import { useUnmountingAnimation } from 'utils/animations'

// Include inert from wicg-inert
declare global {
  interface HTMLElement {
    inert?: boolean
  }
}

export enum Animation {
  /** Used when the Dialog is closing. */
  CLOSING = 'closing',
  /**
   * Used when the Dialog is paging to another Dialog screen.
   * Paging occurs when multiple screens are sequenced in the Dialog, so that an action that closes
   * one will simultaneously open the next. Special-casing paging animations can make the user feel
   * like they are not leaving the Dialog, despite the initial screen closing.
   */
  PAGING = 'paging',
}

const Context = createContext({
  element: null as HTMLElement | null,
  active: false,
  setActive: (active: boolean) => undefined as void,
})

interface ProviderProps {
  value: HTMLElement | null
  children: ReactNode
}

export function Provider({ value, children }: ProviderProps) {
  // If a Dialog is active, mark the main content inert
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const context = { element: value, active, setActive }
  useEffect(() => {
    if (ref.current) {
      ref.current.inert = active
    }
  }, [active])
  return (
    <div
      ref={ref}
      style={{ isolation: 'isolate', flexGrow: 1, display: 'flex', flexDirection: 'column' }} // creates a new stacking context, preventing the dialog from intercepting non-dialog clicks
    >
      <Context.Provider value={context}>{children}</Context.Provider>
    </div>
  )
}

const OnCloseContext = createContext<(() => void) | undefined>(undefined)

const HeaderRow = styled(Box)(
  `
  disply: flex;
  justify-content:flex-start;
  height: 1.75em;
  margin: 0 15px;
  padding-top: 15px;
  button:{
    height: max-content
  }
`
)

interface HeaderProps {
  title?: ReactNode | string
  ruled?: boolean
  children?: ReactNode
  closeIcon?: boolean
}

export function Header({ title, children }: HeaderProps) {
  const onClose = useContext(OnCloseContext)
  return (
    <Box display="grid" data-testid="dialog-header">
      <HeaderRow>
        <Button color="primary" onClick={onClose} variant="text" sx={{ height: 'max-content', width: 'max-content' }}>
          <Box display="flex" justifyContent="flex-start" gap={10}>
            <ChevronLeft />
            {title && <Typography>{title}</Typography>}
          </Box>
        </Button>
        {children}
      </HeaderRow>
    </Box>
  )
}

export const Modal = styled('div', { shouldForwardProp: (prop) => prop !== 'type' })<{ type?: 'module' | 'dialog' }>(
  ({ theme, type }) => `
  background-color: ${theme.palette.background.default};
  border-radius: ${theme.shape.borderRadius * 0.75}px;
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: ${Layer.DIALOG};
`
)

interface DialogProps {
  type?: 'module' | 'dialog'
  children: ReactNode
  onClose?: () => void
}

export default function Dialog({ children, onClose, type }: DialogProps) {
  const context = useContext(Context)
  useEffect(() => {
    context.setActive(true)
    return () => context.setActive(false)
  }, [context])

  const modal = useRef<HTMLDivElement>(null)
  useUnmountingAnimation(modal, () => {
    // Returns the context element's child count at the time of unmounting.
    // This cannot be done through state because the count is updated outside of React's lifecycle -
    // it *must* be checked at the time of unmounting in order to include the next page of Dialog.
    return (context.element?.childElementCount ?? 0) > 1 ? Animation.PAGING : Animation.CLOSING
  })

  useEffect(() => {
    const close = (e: KeyboardEvent) => e.key === 'Escape' && onClose?.()
    document.addEventListener('keydown', close, true)
    return () => document.removeEventListener('keydown', close, true)
  }, [onClose])
  return (
    context.element &&
    createPortal(
      <MuiThemeProvider>
        <ThemeProvider>
          <OnCloseContext.Provider value={onClose}>
            <Modal type={type} ref={modal} className="modal">
              {children}
            </Modal>
          </OnCloseContext.Provider>
        </ThemeProvider>
      </MuiThemeProvider>,
      context.element
    )
  )
}
