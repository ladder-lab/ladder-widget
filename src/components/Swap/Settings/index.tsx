import { Trans } from '@lingui/macro'
import { Box, Button, IconButton, styled } from '@mui/material'
import { Settings as SettingsIcon } from 'icons'
import { useAtomValue, useResetAtom } from 'jotai/utils'
import { useCallback, useState } from 'react'
import { swapEventHandlersAtom } from 'state/swap'
import { settingsAtom } from 'state/swap/settings'

import Dialog, { Header } from '../../Dialog'
import MaxSlippageSelect from './MaxSlippageSelect'
import TransactionTtlInput from './TransactionTtlInput'

export function SettingsDialog() {
  const { onSettingsReset } = useAtomValue(swapEventHandlersAtom)
  const resetSettingsBase = useResetAtom(settingsAtom)
  const resetSettings = useCallback(() => {
    onSettingsReset?.()
    resetSettingsBase()
  }, [onSettingsReset, resetSettingsBase])
  return (
    <>
      <Header title={<Trans>Settings</Trans>} ruled></Header>
      <Box display="grid" gap={30} style={{ paddingTop: '1em' }} padding={'10px'}>
        <MaxSlippageSelect />
        <TransactionTtlInput />
        <Button onClick={resetSettings} sx={{ marginTop: 20 }}>
          <Trans>Reset</Trans>
        </Button>
      </Box>
    </>
  )
}

const SettingsButton = styled(IconButton, { shouldForwardProp: (prop) => prop !== 'hover' })<{ hover: boolean }>`
  padding: 3px;
  transform: ${({ hover }) => hover && 'rotate(45deg)'};
  transition: ${({ hover }) => hover && 'transform 0.25s'};
  will-change: transform;
`

export default function Settings({ disabled }: { disabled?: boolean }) {
  const [open, setOpen] = useState(false)
  const [hover, setHover] = useState(false)
  return (
    <>
      <SettingsButton
        disabled={disabled}
        hover={hover}
        onClick={() => setOpen(true)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <SettingsIcon />
      </SettingsButton>

      {open && (
        <Dialog onClose={() => setOpen(false)}>
          <SettingsDialog />
        </Dialog>
      )}
    </>
  )
}
