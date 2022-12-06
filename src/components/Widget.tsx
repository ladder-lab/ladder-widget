// eslint-disable-next-line simple-import-sort/imports
import { styled as muiStyled } from '@mui/material'
import { TokenInfo } from '@uniswap/token-lists'
import { Animation, Provider as DialogProvider } from 'components/Dialog'
import ErrorBoundary, { OnError } from 'components/Error/ErrorBoundary'
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, SupportedLocale } from 'constants/locales'
import { ModalProvider } from 'context/ModalContext'
import { TokenListsProvider } from 'context/TokenListContext'
import { TransactionEventHandlers, TransactionsUpdater } from 'hooks/transactions'
import { BlockNumberProvider } from 'hooks/useBlockNumber'
import useInitialAtomValues from 'hooks/useInitialAtomValues'
import useSyncBrandingSetting, { BrandingSettings } from 'hooks/useSyncBrandingSetting'
import useSyncWidgetEventHandlers, { WidgetEventHandlers } from 'hooks/useSyncWidgetEventHandlers'
import { Provider as Web3Provider, ProviderProps as Web3Props } from 'hooks/web3'
import { Provider as I18nProvider } from 'i18n'
import { Atom, Provider as AtomProvider } from 'jotai'
import { PropsWithChildren, StrictMode, useMemo, useState } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from 'state'
import { MulticallUpdater } from 'state/multicall'
import styled, { keyframes } from 'styled-components/macro'
import { Theme, ThemeProvider } from 'theme'
import { ThemeProvider as MuiThemeProvider } from 'theme/muiTheme'
import { SwapProvider } from 'context/SwapContext'
import { MintProvider } from 'context/MintContext'
import { UserTokenLists } from 'models/userTokenLists'
import { compileTokenLists } from 'utils/compileTokenLists'

export const WidgetWrapper = muiStyled('div')<{ width?: number | string }>(({ theme, width }) => {
  return `
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: ${theme.palette.background.default};
  border-radius: ${theme.shape.borderRadius}px;
  box-sizing: border-box;
  color: ${theme.palette.text.primary};
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-smooth: always;
  font-variant: none;
  min-height:  554px;
  min-width: 300px;
  padding: 10px;
  position: relative;
  user-select: none;
  width: ${width && (isNaN(Number(width)) ? width : `${width}px`)};
`
})

const slideInLeft = keyframes`
  from {
    transform: translateY(calc(100% - 0.25em));
  }
`
const slideOutLeft = keyframes`
  to {
    transform: translateY(calc(0.25em - 100%));
  }
`
const slideOutRight = keyframes`
  to {
    transform: translateY(calc(100% - 0.25em));
  }
`

export const DialogWrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius * 0.75}em;
  height: 100%;
  left: 0;
  margin: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  @supports (overflow: clip) {
    overflow: clip;
  }

  .modal {
    animation: ${slideInLeft} 0.25s ease-in;

    &.${Animation.PAGING} {
      animation: ${slideOutLeft} 0.25s ease-in;
    }
    &.${Animation.CLOSING} {
      animation: ${slideOutRight} 0.25s ease-out;
    }
  }
`

export interface WidgetProps extends BrandingSettings, TransactionEventHandlers, Web3Props, WidgetEventHandlers {
  theme?: Theme
  locale?: SupportedLocale
  tokenList?: string | TokenInfo[]
  width?: string | number
  dialog?: HTMLDivElement | null
  className?: string
  onError?: OnError
}

export interface LadderProps extends BrandingSettings, TransactionEventHandlers, Web3Props, WidgetEventHandlers {
  tokenLists?: UserTokenLists
}

export default function Widget(props: PropsWithChildren<WidgetProps> & LadderProps) {
  return <TestableWidget {...props} initialAtomValues={undefined} />
}

export interface TestableWidgetProps extends WidgetProps {
  initialAtomValues?: Iterable<readonly [Atom<unknown>, unknown]>
}

export function TestableWidget(props: PropsWithChildren<TestableWidgetProps> & LadderProps) {
  if (props.initialAtomValues && process.env.NODE_ENV !== 'test') {
    throw new Error('initialAtomValues may only be used for testing')
  }

  // UI configuration must be passed for the initial render, or the first frame will render incorrectly.
  const initialAtomValues = useInitialAtomValues(props)

  const width = useMemo(() => {
    if (props.width && props.width < 300) {
      console.warn(`Widget width must be at least 300px (you set it to ${props.width}). Falling back to 300px.`)
      return 300
    }
    return props.width ?? 360
  }, [props.width])
  const locale = useMemo(() => {
    if (props.locale && ![...SUPPORTED_LOCALES, 'pseudo'].includes(props.locale)) {
      console.warn(`Unsupported locale: ${props.locale}. Falling back to ${DEFAULT_LOCALE}.`)
      return DEFAULT_LOCALE
    }
    return props.locale ?? DEFAULT_LOCALE
  }, [props.locale])
  const [dialog, setDialog] = useState<HTMLDivElement | null>(props.dialog || null)

  const compiledTokenList = useMemo(() => {
    return compileTokenLists(props.tokenLists)
  }, [props.tokenLists])
  return (
    <StrictMode>
      <MuiThemeProvider>
        <ThemeProvider theme={props.theme}>
          <WidgetWrapper width={width} className={props.className}>
            <I18nProvider locale={locale}>
              <DialogWrapper ref={setDialog} />
              <DialogProvider value={props.dialog || dialog}>
                <ErrorBoundary onError={props.onError}>
                  <ReduxProvider store={store}>
                    <AtomProvider initialValues={props.initialAtomValues || initialAtomValues}>
                      <WidgetUpdater {...props} />
                      <Web3Provider {...(props as Web3Props)}>
                        <BlockNumberProvider>
                          <ModalProvider>
                            <MulticallUpdater />
                            <TransactionsUpdater {...(props as TransactionEventHandlers)} />
                            <TokenListsProvider
                              erc1155List={compiledTokenList.erc1155}
                              erc20List={compiledTokenList.erc20}
                              erc721List={compiledTokenList.erc721}
                            >
                              <MintProvider>
                                <SwapProvider>{props.children}</SwapProvider>
                              </MintProvider>
                            </TokenListsProvider>
                          </ModalProvider>
                        </BlockNumberProvider>
                      </Web3Provider>
                    </AtomProvider>
                  </ReduxProvider>
                </ErrorBoundary>
              </DialogProvider>
            </I18nProvider>
          </WidgetWrapper>
        </ThemeProvider>
      </MuiThemeProvider>
    </StrictMode>
  )
}

/** A component in the scope of AtomProvider to set Widget-scoped state. */
function WidgetUpdater(props: WidgetProps) {
  useSyncBrandingSetting(props as BrandingSettings)
  useSyncWidgetEventHandlers(props as WidgetEventHandlers)
  return null
}
