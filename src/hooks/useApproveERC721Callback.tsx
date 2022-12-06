import { Contract } from '@ethersproject/contracts'
import { TransactionResponse } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import MessageBox from 'components/Interface/TransactionModals/MessageBox'
import TransacitonPendingModal from 'components/Interface/TransactionModals/TransactionPendingModal'
import { ROUTER_ADDRESSES_721 } from 'constants/addresses'
import { ApprovalState } from 'constants/approve'
import { Token721 } from 'constants/token/token721'
import { useCallback, useMemo } from 'react'
import { TransactionType } from 'state/transactions'
import { calculateGasMargin } from 'utils/calculateGasMargin'

import { useSingleCallResult } from './multicall'
import { useAddTransactionInfo, useHasPendingApproval } from './transactions'
import { use721Contract } from './useContract'
import useModal from './useModal'

function useGetApproved(contract: Contract | null, spender: string) {
  const { account } = useWeb3React()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const arg = useMemo(() => [account ?? '', spender], [account, spender])
  const res = useSingleCallResult(account ? contract : null, 'isApprovedForAll', arg)
  return useMemo(() => {
    if (res.loading) return undefined
    return !!res.result?.[0]
  }, [res.loading, res.result])
}

// returns a variable indicating the state of the approval and a function which approves if necessary or early returns

export function useApproveERC721Callback(token721: Token721 | undefined): [ApprovalState, () => Promise<void>] {
  const { chainId } = useWeb3React()
  const contractAddress = token721?.address
  const spender = chainId ? ROUTER_ADDRESSES_721[chainId] : undefined

  const { hideModal, showModal } = useModal()
  const contract = use721Contract(contractAddress)
  const isApproved = useGetApproved(contract, spender ?? '')
  const pendingApproval = useHasPendingApproval(contract?.address, spender ?? '')
  // check the current approval status
  const approvalState: ApprovalState = useMemo(() => {
    // if (!spender) return ApprovalState.UNKNOWN
    // we might not have enough data to know whether or not we need to approve
    if (isApproved) return ApprovalState.APPROVED
    if (pendingApproval) return ApprovalState.PENDING
    if (isApproved === undefined) return ApprovalState.UNKNOWN
    return ApprovalState.NOT_APPROVED
  }, [isApproved, pendingApproval])

  const addTransaction = useAddTransactionInfo()

  const approve = useCallback(async (): Promise<void> => {
    if (approvalState !== ApprovalState.NOT_APPROVED) {
      console.error('approve was called unnecessarily')
      return
    }
    // if (!tokenId) {
    //   console.error('no nft token id')
    //   return
    // }

    if (!contract) {
      console.error('Contract is null')
      return
    }

    if (!spender) {
      console.error('no spender')
      return
    }
    showModal(<TransacitonPendingModal />)
    const estimatedGas = await contract.estimateGas.setApprovalForAll(spender, true).catch((error: Error) => {
      console.debug('Failed to approve nft', error)
      throw error
    })

    return contract
      .setApprovalForAll(spender, true, {
        gasLimit: calculateGasMargin(estimatedGas),
      })
      .then((response: TransactionResponse) => {
        hideModal()
        addTransaction({
          response,
          type: TransactionType.APPROVAL,
          summary: 'Approve NFT',
          tokenAddress: contract.address,
          spenderAddress: spender,
        })
      })
      .catch((error: Error) => {
        hideModal()
        showModal(<MessageBox type="error">Failed to approve NFT</MessageBox>)
        console.debug('Failed to approve nft', error)
        throw error
      })
  }, [approvalState, contract, spender, showModal, hideModal, addTransaction])

  return [approvalState, approve]
}
