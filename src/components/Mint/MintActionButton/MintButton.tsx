import { Box, Button } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import ConnectWallet from 'components/ConnectWallet/ConnectWallet'
import ActionButton from 'components/Interface/Button/ActionButton'
import { ApprovalState } from 'constants/approve'
import { useMintContext } from 'context/MintContext'
import { useMintCallback } from 'hooks/pool/useMintCallback'
import { useAllTokenApproveCallback } from 'hooks/useApproveCallback'
import { useCallback, useEffect, useState } from 'react'
import { MintField as Field } from 'state/mint'
import { checkIs721 } from 'utils/checkIs1155'
import { generateErc20 } from 'utils/getHashAddress'
import { wrappedCurrency } from 'utils/wrappedCurrency'

import useOnSubmit from '../../../hooks/useOnSubmit'
import Dialog, { Header } from '../../Dialog'
import { MintSummary } from './MintSummary'

/**
 * A swapping ActionButton.
 * Should only be rendered if a valid swap exists.
 */
export default function MintButton() {
  const { account, chainId } = useWeb3React()
  const {
    currencyA,
    currencyB,
    currencies,
    shareOfPool,
    error,
    pair,
    noLiquidity,
    parsedAmounts,
    dependentField,
    typedValue,
    otherTypedValue,
    independentField,
    liquidityMinted,
  } = useMintContext()

  const submitCb = useOnSubmit()
  const { addLiquidityCb: mintCallback } = useMintCallback()

  const [open, setOpen] = useState(false)

  // check whether the user has approved the router on the tokens
  const [approvalA, approveACallback] = useAllTokenApproveCallback(
    currencyA,
    parsedAmounts[Field.CURRENCY_A],
    checkIs721(currencyB)
  )
  const [approvalB, approveBCallback] = useAllTokenApproveCallback(
    currencyB,
    parsedAmounts[Field.CURRENCY_B],
    checkIs721(currencyA)
  )

  // get formatted amounts
  const formattedAmounts = {
    [independentField ?? Field.CURRENCY_A]: typedValue,
    [dependentField]: noLiquidity ? otherTypedValue : parsedAmounts[dependentField]?.toSignificant(6) ?? '',
  }

  const priceA = pair?.token0Price.equalTo('0')
    ? '0'
    : pair?.token0Price?.toFixed(6, undefined, 2).trimTrailingZero() ?? '-'
  const priceB = pair?.token1Price.equalTo('0')
    ? '0'
    : pair?.token1Price?.toFixed(6, undefined, 2).trimTrailingZero() ?? '-'

  const flipOrder =
    pair?.token0.address === ((generateErc20(wrappedCurrency(currencyA, chainId)) as any)?.address ?? '')

  const handleAdd = useCallback(() => {
    setOpen(true)
  }, [])

  const onMint = useCallback(() => {
    if (!mintCallback) {
      return
    }
    submitCb(mintCallback)
    setOpen(false)
  }, [mintCallback, submitCb])

  // Close the review modal on chain change.
  useEffect(() => setOpen(false), [chainId])

  return (
    <>
      {!account ? (
        <ConnectWallet />
      ) : (
        <Box display="grid" gap={'6px'}>
          {(approvalA === ApprovalState.NOT_APPROVED ||
            approvalA === ApprovalState.PENDING ||
            approvalB === ApprovalState.NOT_APPROVED ||
            approvalB === ApprovalState.PENDING) &&
            !error && (
              <Box display="flex" gap={16}>
                {approvalA !== ApprovalState.APPROVED && (
                  <ActionButton
                    onAction={approveACallback}
                    disableAction={approvalA === ApprovalState.PENDING}
                    pending={approvalA === ApprovalState.PENDING}
                    pendingText="Approving"
                    // pendingText={`Approving ${
                    //   currencies[Field.CURRENCY_A]?.symbol ?? currencies[Field.CURRENCY_A]?.name
                    // }`}
                    actionText={
                      'Approve ' +
                      (currencies[Field.CURRENCY_A]?.symbol ?? currencies[Field.CURRENCY_A]?.name?.slice(0, 8) + '...')
                    }
                  />
                )}
                {approvalB !== ApprovalState.APPROVED && (
                  <ActionButton
                    onAction={approveBCallback}
                    disableAction={approvalB === ApprovalState.PENDING}
                    pending={approvalB === ApprovalState.PENDING}
                    pendingText="Approving"
                    // pendingText={`Approving ${
                    //   currencies[Field.CURRENCY_B]?.symbol ?? currencies[Field.CURRENCY_B]?.name
                    // }`}
                    actionText={
                      'Approve ' +
                      (currencies[Field.CURRENCY_B]?.symbol ?? currencies[Field.CURRENCY_B]?.name?.slice(0, 8) + '...')
                    }
                  />
                )}
              </Box>
            )}
          <Button
            onClick={handleAdd}
            disabled={!!error || approvalA !== ApprovalState.APPROVED || approvalB !== ApprovalState.APPROVED}
          >
            {error ?? 'Supply'}
          </Button>
        </Box>
      )}

      {open && (
        <Dialog onClose={() => setOpen(false)}>
          <Header title="Swap Summary" />
          <Box maxHeight={'100%'} sx={{ overflowY: 'auto' }}>
            <MintSummary
              liquidityMinted={liquidityMinted}
              tokenA={currencyA}
              tokenB={currencyB}
              priceA={flipOrder ? priceA : priceB}
              priceB={flipOrder ? priceB : priceA}
              valA={formattedAmounts[Field.CURRENCY_A] ?? '-'}
              valB={formattedAmounts[Field.CURRENCY_B] ?? '-'}
              shareOfPool={shareOfPool ?? '-'}
            />
          </Box>
          <Box padding="0 10px" margin={'15px 0'}>
            <Button onClick={onMint}>Confirm Supply</Button>
          </Box>
        </Dialog>
      )}
    </>
  )
}
