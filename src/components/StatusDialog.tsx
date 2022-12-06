import { Trans } from '@lingui/macro'
import { Box, Typography } from '@mui/material'
import EtherscanLink from 'components/EtherscanLink'
import Spinner from 'components/Interface/Spinner'
import MessageBox from 'components/Interface/TransactionModals/MessageBox'
import useInterval from 'hooks/useInterval'
import { Clock } from 'icons'
import ms from 'ms.macro'
import { useCallback, useMemo, useState } from 'react'
import { Transaction, TransactionType } from 'state/transactions'
import { ThemedText } from 'theme'
import { ExplorerDataType } from 'utils/getExplorerLink'

import Row from './Row'

function ElapsedTime({ tx }: { tx: Transaction }) {
  const [elapsedMs, setElapsedMs] = useState(0)

  useInterval(() => setElapsedMs(Date.now() - tx.addedTime), tx.receipt ? null : ms`1s`)

  const toElapsedTime = useCallback((ms: number) => {
    let sec = Math.floor(ms / 1000)
    const min = Math.floor(sec / 60)
    sec = sec % 60
    if (min) {
      return (
        <Trans>
          {min}m {sec}s
        </Trans>
      )
    } else {
      return <Trans>{sec}s</Trans>
    }
  }, [])
  return (
    <Row gap={0.5}>
      <Clock />
      <ThemedText.Body2>{toElapsedTime(elapsedMs)}</ThemedText.Body2>
    </Row>
  )
}

interface TransactionStatusProps {
  tx: Transaction
  onClose: () => void
}

function TransactionStatus({ tx, onClose }: TransactionStatusProps) {
  const Icon = useMemo(() => {
    return tx.receipt?.status ? () => null : () => <Spinner size={'60px'} />
  }, [tx.receipt?.status])
  const heading = useMemo(() => {
    if (tx.info.type === TransactionType.SWAP) {
      return tx.receipt?.status ? <Trans>Swap confirmed</Trans> : <Trans>Swap pending</Trans>
    } else if (tx.info.type === TransactionType.MINT) {
      return tx.receipt?.status ? <Trans>Add Liquidity confirmed</Trans> : <Trans>Add Liquidity pending</Trans>
    } else if (tx.info.type === TransactionType.WRAP) {
      return tx.receipt?.status ? <Trans>Unwrap confirmed</Trans> : <Trans>Unwrap pending</Trans>
    } else if (tx.info.type === TransactionType.UNWRAP) {
      return tx.receipt?.status ? <Trans>Unwrap confirmed</Trans> : <Trans>Unwrap pending</Trans>
    }
    return tx.receipt?.status ? <Trans>Transaction confirmed</Trans> : <Trans>Transaction pending</Trans>
  }, [tx.info, tx.receipt?.status])

  return (
    <>
      <MessageBox type={tx.receipt?.status ? 'success' : 'none'} header={heading} actionText="Close" action={onClose}>
        <Box display="grid" justifyItems={'center'} gap={10} style={{ height: '100%' }}>
          <Icon />
          <Typography>{tx.info.summary}</Typography>

          <EtherscanLink type={ExplorerDataType.TRANSACTION} data={tx.info.response.hash}>
            <Trans>View on Etherscan</Trans>
          </EtherscanLink>

          <ElapsedTime tx={tx} />
        </Box>
      </MessageBox>
    </>
  )
}

export default function StatusDialog({ tx, onClose }: TransactionStatusProps) {
  return tx.receipt?.status === 0 ? (
    <MessageBox
      type={'error'}
      header={
        <Trans>
          Try increasing your slippage tolerance.
          <br />
          NOTE: Fee on transfer and rebase tokens are incompatible with Uniswap V3.
        </Trans>
      }
      // error={new Error('TODO(zzmp)')}
      actionText={<Trans>Dismiss</Trans>}
      action={onClose}
    />
  ) : (
    <TransactionStatus tx={tx} onClose={onClose} />
  )
}
