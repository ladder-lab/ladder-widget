import { Trans } from '@lingui/macro'
import { Box, Button } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import ActionButton from 'components/Interface/Button/ActionButton'
import { ApprovalState } from 'constants/approve'
import useSwapInfo, { ChainError } from 'context/SwapContext'
import { useSwapCallback } from 'hooks/swap/useSwapCallback'
import { useAllTokenApproveCallback } from 'hooks/useApproveCallback'
import { useConditionalHandler } from 'hooks/useConditionalHandler'
import { useAtomValue } from 'jotai/utils'
import { useCallback, useEffect, useState } from 'react'
import { Field, swapEventHandlersAtom } from 'state/swap'
import { checkIs721 } from 'utils/checkIs1155'

import Dialog, { Header } from '../../Dialog'
import { SwapSummary } from './SwapSummary'
import useOnSubmit from './useOnSubmit'

/**
 * A swapping ActionButton.
 * Should only be rendered if a valid swap exists.
 */
export default function SwapButton({ disabled }: { disabled: boolean }) {
  const { account, chainId } = useWeb3React()
  const {
    trade,
    slippage,
    [Field.INPUT]: { currency: fromAsset, subTokens: subTokensIn },
    [Field.OUTPUT]: { currency: toAsset, amount: toVal, subTokens: subTokensOut },
    priceImpact,
    slippageAdjustedAmounts,
    error,
    tokenIdsForCb,
  } = useSwapInfo()
  const submitCb = useOnSubmit()

  const { callback: swapCallback } = useSwapCallback({
    trade: trade ?? undefined,
    allowedSlippage: slippage.allowed as any,
    recipientAddressOrName: account ?? null,
    tokenIds: tokenIdsForCb,
  })

  const [open, setOpen] = useState(false)
  // Close the review modal if there is no available trade.
  useEffect(() => setOpen((open) => (trade ? open : false)), [trade])
  // Close the review modal on chain change.
  useEffect(() => setOpen(false), [chainId])

  const onSwap = useCallback(() => {
    if (!swapCallback) {
      return
    }
    submitCb(swapCallback)
  }, [submitCb, swapCallback])

  const [approval, approveCallback] = useAllTokenApproveCallback(
    fromAsset,
    slippageAdjustedAmounts?.[Field.INPUT],
    checkIs721(toAsset)
  )
  const [approvalSubmitted, setApprovalSubmitted] = useState<boolean>(false)
  const handleApprove = useCallback(() => {
    approveCallback()
  }, [approveCallback])

  const onReviewSwapClick = useConditionalHandler(useAtomValue(swapEventHandlersAtom).onReviewSwapClick)
  const onClick = useCallback(async () => {
    setOpen(await onReviewSwapClick())
  }, [onReviewSwapClick])

  const showApproveFlow =
    !error &&
    (approval === ApprovalState.NOT_APPROVED ||
      approval === ApprovalState.PENDING ||
      (approvalSubmitted && approval === ApprovalState.APPROVED))
  const formattedError =
    error && Object.values(ChainError).includes(error) ? 'Chain Error' : error ? error + '' : undefined

  useEffect(() => {
    if (approval === ApprovalState.PENDING) {
      setApprovalSubmitted(true)
    } else {
      setApprovalSubmitted(false)
    }
  }, [approval, approvalSubmitted])

  useEffect(() => {
    setApprovalSubmitted(false)
  }, [fromAsset])

  return (
    <>
      {showApproveFlow ? (
        <ActionButton
          onAction={handleApprove}
          actionText={
            approvalSubmitted && approval === ApprovalState.APPROVED
              ? 'Approved'
              : `Allow the Ladder to use your ${fromAsset?.symbol}`
          }
          error={formattedError}
          disableAction={approval !== ApprovalState.NOT_APPROVED || approvalSubmitted}
          pending={approval === ApprovalState.PENDING}
          pendingText="Approving"
        />
      ) : (
        <ActionButton
          onAction={onClick}
          disableAction={disabled}
          actionText={<Trans>Swap</Trans>}
          error={formattedError}
        ></ActionButton>
      )}

      {open && trade && (
        <Dialog onClose={() => setOpen(false)}>
          <Header title="Swap Summary" />
          <Box maxHeight={'100%'} sx={{ overflowY: 'auto' }}>
            <SwapSummary
              price={trade?.executionPrice?.toFixed(6) ?? '-'}
              margin="10px 0 0"
              gasFee="8.23"
              routerTokens={trade?.route.path.slice(1, -1)}
              fromAsset={fromAsset ?? undefined}
              toAsset={toAsset ?? undefined}
              toVal={toVal?.toExact() ?? undefined}
              slippage={+slippage.allowed.toFixed(2)}
              minReceiveQty={slippageAdjustedAmounts?.OUTPUT?.toFixed(6) ?? '-'}
              priceImpact={priceImpact?.toSignificant(4)}
              fromErc721SubTokens={subTokensIn}
              toErc721SubTokens={subTokensOut}
            />
          </Box>
          <Box padding="0 10px" margin={'15px 0'}>
            <Button onClick={onSwap}>Confirm</Button>
          </Box>
        </Dialog>
      )}
    </>
  )
}
