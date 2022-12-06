import { Trans } from '@lingui/macro'
import { Button, styled, Typography } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import { useState } from 'react'

const AccountButton = styled(Button)<{ hidden?: boolean }>`
  display: inline-block;
  filter: none;
  visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visible')};
  width: max-content;
`

export default function ConnectedWalletChip({ disabled, account }: { disabled?: boolean; account?: string }) {
  const [hover, setHover] = useState(false)
  const { connector } = useWeb3React()

  return (
    <>
      <AccountButton
        variant="text"
        hidden={disabled}
        onClick={() => (connector.deactivate ? connector.deactivate() : connector.resetState())}
        color="secondary"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        data-testid="account"
      >
        {hover ? (
          <Typography display={'flex'} gap={5} color="primary">
            {/* <WalletDisconnectIcon /> */}
            <Trans>Disconnect wallet</Trans>
          </Typography>
        ) : (
          <Typography display={'flex'} gap={5} color="primary">
            {/* <WalletDisconnectIcon /> */}
            <Trans>Disconnect wallet</Trans>
          </Typography>
          // <Typography display={'flex'} gap={5} color="primary">
          //   {account?.substring(0, 6)}...{account?.substring(account?.length - 4)}
          // </Typography>
        )}
      </AccountButton>
    </>
  )
}
