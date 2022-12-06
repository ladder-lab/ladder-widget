import { Trans } from '@lingui/macro'
import { Button, styled } from '@mui/material'
import { useConditionalHandler } from 'hooks/useConditionalHandler'
import { useAtomValue } from 'jotai/utils'
import { useCallback, useState } from 'react'
import { onConnectWalletClickAtom } from 'state/wallet'
import { ThemedText } from 'theme'

import Dialog from '../Dialog'
import Row from '../Row'
import { ConnectWalletDialog } from './ConnectWalletDialog'

interface ConnectWalletProps {
  disabled?: boolean
}

const WalletButton = styled(Button)<{ hidden?: boolean }>`
  filter: none;
  visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visible')};
`

export default function ConnectWallet({ disabled }: ConnectWalletProps) {
  // Opens a dialog that initiates own wallet connection flow
  const [open, setOpen] = useState(false)
  const onClose = () => setOpen(false)

  const onConnectWalletClick = useConditionalHandler(useAtomValue(onConnectWalletClickAtom))
  const onClick = useCallback(async () => {
    setOpen(await onConnectWalletClick())
  }, [onConnectWalletClick])

  return (
    <>
      <WalletButton hidden={disabled} onClick={onClick} color="secondary" data-testid="connect-wallet">
        <ThemedText.Caption>
          <Row gap={0.5}>
            <Trans>Connect wallet </Trans>
          </Row>
        </ThemedText.Caption>
      </WalletButton>
      {open && (
        <Dialog onClose={onClose}>
          <ConnectWalletDialog />
        </Dialog>
      )}
    </>
  )
}
