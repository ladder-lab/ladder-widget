// import { MaxUint256 } from '@ethersproject/constants'
import { TransactionResponse } from '@ethersproject/providers'
import { CurrencyAmount, ETHER, TokenAmount } from '@ladder/sdk'
import { useWeb3React } from '@web3-react/core'
import MessageBox from 'components/Interface/TransactionModals/MessageBox'
import TransacitonPendingModal from 'components/Interface/TransactionModals/TransactionPendingModal'
import TransactionSubmittedModal from 'components/Interface/TransactionModals/TransactiontionSubmittedModal'
import { ROUTER_ADDRESSES, ROUTER_ADDRESSES_721 } from 'constants/addresses'
import { ApprovalState } from 'constants/approve'
import { useTokenAllowance } from 'data/Allowances'
import { AllTokens } from 'models/allTokens'
import { useCallback, useMemo } from 'react'
import { calculateGasMargin } from 'utils/calculateGasMargin'
import { checkIs721, checkIs1155, filter721, filter1155 } from 'utils/checkIs1155'

import { TransactionType } from '../state/transactions'
import { useAddTransactionInfo, useHasPendingApproval } from './transactions'
import { useApproveERC721Callback } from './useApproveERC721Callback'
import { useApproveERC1155Callback } from './useApproveERC1155Callback'
import { useTokenContract } from './useContract'
import useModal from './useModal'

// returns a variable indicating the state of the approval and a function which approves if necessary or early returns
export function useApproveCallback(
  amountToApprove?: CurrencyAmount,
  spender?: string
): [ApprovalState, () => Promise<void>] {
  const { showModal, hideModal } = useModal()
  const { account } = useWeb3React()
  const token = amountToApprove instanceof TokenAmount ? amountToApprove.token : undefined
  const currentAllowance = useTokenAllowance(token, account ?? undefined, spender)
  const pendingApproval = useHasPendingApproval(token?.address, spender)
  // check the current approval status
  const approvalState: ApprovalState = useMemo(() => {
    if (!amountToApprove || !spender) return ApprovalState.UNKNOWN
    if (amountToApprove.currency === ETHER) return ApprovalState.APPROVED
    // we might not have enough data to know whether or not we need to approve
    if (!currentAllowance) return ApprovalState.UNKNOWN

    // amountToApprove will be defined if currentAllowance is
    return currentAllowance.lessThan(amountToApprove)
      ? pendingApproval
        ? ApprovalState.PENDING
        : ApprovalState.NOT_APPROVED
      : ApprovalState.APPROVED
  }, [amountToApprove, currentAllowance, pendingApproval, spender])

  const tokenContract = useTokenContract(token?.address)
  const addTransaction = useAddTransactionInfo()

  const approve = useCallback(async (): Promise<void> => {
    if (approvalState !== ApprovalState.NOT_APPROVED) {
      console.error('approve was called unnecessarily')
      return
    }
    if (!token) {
      console.error('no token')
      return
    }

    if (!tokenContract) {
      console.error('tokenContract is null')
      return
    }

    if (!amountToApprove) {
      console.error('missing amount to approve')
      return
    }

    if (!spender) {
      console.error('no spender')
      return
    }

    // let useExact = false
    // const estimatedGas = await tokenContract.estimateGas.approve(spender, MaxUint256).catch(() => {
    //   // general fallback for tokens who restrict approval amounts
    //   useExact = true
    //   return tokenContract.estimateGas.approve(spender, amountToApprove.raw.toString())
    // })

    const estimatedGas = await tokenContract.estimateGas.approve(spender, amountToApprove.raw.toString())
    showModal(<TransacitonPendingModal />)
    return tokenContract
      .approve(spender, amountToApprove.raw.toString(), {
        // .approve(spender, useExact ? amountToApprove.raw.toString() : MaxUint256, {
        gasLimit: calculateGasMargin(estimatedGas),
      })
      .then((response: TransactionResponse) => {
        hideModal()
        showModal(<TransactionSubmittedModal />)
        addTransaction({
          response,
          type: TransactionType.APPROVAL,
          summary: 'Approve ' + amountToApprove.currency.symbol,
          tokenAddress: token.address,
          spenderAddress: spender,
        })
      })
      .catch((error: Error) => {
        hideModal()
        showModal(<MessageBox type="error">Failed to approve token</MessageBox>)
        console.debug('Failed to approve token', error)
        throw error
      })
  }, [approvalState, token, tokenContract, amountToApprove, spender, hideModal, showModal, addTransaction])

  return [approvalState, approve]
}

export function useAllTokenApproveCallback(token: AllTokens | undefined, amount?: CurrencyAmount, is721Pair?: boolean) {
  const { chainId } = useWeb3React()
  const is1155 = checkIs1155(token)
  const is721 = checkIs721(token)
  const erc20 = useApproveCallback(
    is1155 || is721 ? undefined : amount,
    chainId ? (is721Pair ? ROUTER_ADDRESSES_721[chainId] : ROUTER_ADDRESSES[chainId]) : undefined
  )

  const erc1155 = useApproveERC1155Callback(filter1155(token))
  const erc721 = useApproveERC721Callback(filter721(token))
  return is721 ? erc721 : is1155 ? erc1155 : erc20
}
