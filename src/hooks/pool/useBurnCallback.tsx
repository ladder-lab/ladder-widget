import { BigNumber } from '@ethersproject/bignumber'
import { splitSignature } from '@ethersproject/bytes'
import { Contract } from '@ethersproject/contracts'
import { ETHER } from '@ladder/sdk'
import { useWeb3React } from '@web3-react/core'
import TransacitonPendingModal from 'components/Interface/TransactionModals/TransactionPendingModal'
import { ROUTER_ADDRESSES, ROUTER_ADDRESSES_721 } from 'constants/addresses'
import { ApprovalState } from 'constants/approve'
import { NETWORK_CHAIN_ID } from 'constants/chain'
import { BurnField, useBurnContext } from 'context/BurnContext'
import { useApproveCallback } from 'hooks/useApproveCallback'
import { usePairContract } from 'hooks/useContract'
import useIsArgentWallet from 'hooks/useIsArgentWallet'
import useModal from 'hooks/useModal'
import useSlippage from 'hooks/useSlippage'
import useTransactionDeadline from 'hooks/useTransactionDeadline'
import { AllTokens } from 'models/allTokens'
import { useCallback, useState } from 'react'
import { getRouterContract, getRouterContract721 } from 'utils'
import { calculateGasMargin, calculateSlippageAmount } from 'utils/calculateGasMargin'
import { checkIs721 } from 'utils/checkIs1155'
import { generateErc20 } from 'utils/getHashAddress'
import { wrappedCurrency } from 'utils/wrappedCurrency'

export function useBurnCallback(currencyA: AllTokens | undefined, currencyB: AllTokens | undefined) {
  // allowance handling
  const [signatureData, setSignatureData] = useState<{ v: number; r: string; s: string; deadline: number } | null>(null)

  const { showModal, hideModal } = useModal()
  const { chainId, provider: library, account } = useWeb3React()
  const { allowed: allowedSlippage } = useSlippage({})
  const deadline = useTransactionDeadline()
  const { parsedAmounts, pair } = useBurnContext()
  const Field = BurnField
  const is721Pair = checkIs721(currencyA) || checkIs721(currencyB)
  const [approval, approveCallback] = useApproveCallback(
    parsedAmounts?.[Field.LIQUIDITY],
    is721Pair ? ROUTER_ADDRESSES_721[chainId ?? NETWORK_CHAIN_ID] : ROUTER_ADDRESSES[chainId ?? NETWORK_CHAIN_ID]
  )
  const isArgentWallet = useIsArgentWallet()

  // pair contract
  const pairContract: Contract | null = usePairContract(pair?.liquidityToken?.address)

  const burnCallback = useCallback(async () => {
    if (!chainId || !library || !account || !deadline) throw new Error('missing dependencies')

    const currencyAmountA = parsedAmounts?.[Field.CURRENCY_A]
    const currencyAmountB = parsedAmounts?.[Field.CURRENCY_B]

    if (!currencyAmountA || !currencyAmountB) {
      throw new Error('missing currency amounts')
    }

    const router = is721Pair
      ? getRouterContract721(chainId, library, account)
      : getRouterContract(chainId, library, account)

    const slippageRaw = Number.parseFloat(allowedSlippage.toFixed(5)) * 100
    const amountsMin = {
      [Field.CURRENCY_A]: calculateSlippageAmount(currencyAmountA, slippageRaw)[0],
      [Field.CURRENCY_B]: calculateSlippageAmount(currencyAmountB, slippageRaw)[0],
    }

    if (!currencyA || !currencyB) throw new Error('missing tokens')
    const liquidityAmount = parsedAmounts[Field.LIQUIDITY]
    if (!liquidityAmount) throw new Error('missing liquidity amount')

    const currencyBIsETH = currencyB === ETHER
    const oneCurrencyIsETH = currencyA === ETHER || currencyBIsETH

    const [tokenA, tokenB] = [
      generateErc20(wrappedCurrency(currencyA, chainId)),
      generateErc20(wrappedCurrency(currencyB, chainId)),
    ]

    if (!tokenA || !tokenB) throw new Error('could not wrap')

    let methodNames: string[], args: Array<string | string[] | number | boolean>
    // we have approval, use normal remove liquidity
    if (approval === ApprovalState.APPROVED) {
      // removeLiquidityETH
      if (oneCurrencyIsETH) {
        methodNames = is721Pair
          ? ['removeLiquidityETH']
          : ['removeLiquidityETH', 'removeLiquidityETHSupportingFeeOnTransferTokens']
        args = [
          currencyBIsETH ? tokenA.address : tokenB.address,
          liquidityAmount.raw.toString(),
          amountsMin[currencyBIsETH ? Field.CURRENCY_A : Field.CURRENCY_B].toString(),
          amountsMin[currencyBIsETH ? Field.CURRENCY_B : Field.CURRENCY_A].toString(),
          account,
          deadline.toHexString(),
        ]
      }
      // removeLiquidity
      else {
        methodNames = ['removeLiquidity']
        args = [
          tokenA.address,
          tokenB.address,
          liquidityAmount.raw.toString(),
          amountsMin[Field.CURRENCY_A].toString(),
          amountsMin[Field.CURRENCY_B].toString(),
          account,
          deadline.toHexString(),
        ]
      }
    }
    // we have a signataure, use permit versions of remove liquidity
    else if (signatureData !== null) {
      // removeLiquidityETHWithPermit
      if (oneCurrencyIsETH) {
        methodNames = is721Pair
          ? ['removeLiquidityETHWithPermit']
          : ['removeLiquidityETHWithPermit', 'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens']
        args = [
          currencyBIsETH ? tokenA.address : tokenB.address,
          liquidityAmount.raw.toString(),
          amountsMin[currencyBIsETH ? Field.CURRENCY_A : Field.CURRENCY_B].toString(),
          amountsMin[currencyBIsETH ? Field.CURRENCY_B : Field.CURRENCY_A].toString(),
          account,
          signatureData.deadline,
          false,
          signatureData.v,
          signatureData.r,
          signatureData.s,
        ]
      }
      // removeLiquidityWithPermit
      else {
        methodNames = ['removeLiquidityWithPermit']
        args = [
          tokenA.address,
          tokenB.address,
          liquidityAmount.raw.toString(),
          amountsMin[Field.CURRENCY_A].toString(),
          amountsMin[Field.CURRENCY_B].toString(),
          account,
          signatureData.deadline,
          false,
          signatureData.v,
          signatureData.r,
          signatureData.s,
        ]
      }
    } else {
      throw new Error('Attempting to confirm without approval or a signature. Please contact support.')
    }

    const safeGasEstimates: (BigNumber | undefined)[] = await Promise.all(
      methodNames.map((methodName) =>
        router.estimateGas[methodName](...args)
          .then(calculateGasMargin)
          .catch((error) => {
            console.error(`estimateGas failed`, methodName, args, error)
            throw new Error(error)
            // return undefined
          })
      )
    )

    const indexOfSuccessfulEstimation = safeGasEstimates.findIndex((safeGasEstimate) =>
      BigNumber.isBigNumber(safeGasEstimate)
    )

    // all estimations failed...
    if (indexOfSuccessfulEstimation === -1) {
      console.error('This transaction would fail. Please contact support.')
      return null
    } else {
      const methodName = methodNames[indexOfSuccessfulEstimation]
      const safeGasEstimate = safeGasEstimates[indexOfSuccessfulEstimation]

      return router[methodName](...args, {
        gasLimit: safeGasEstimate,
      })
    }
  }, [
    Field.CURRENCY_A,
    Field.CURRENCY_B,
    Field.LIQUIDITY,
    account,
    allowedSlippage,
    approval,
    chainId,
    currencyA,
    currencyB,
    deadline,
    is721Pair,
    library,
    parsedAmounts,
    signatureData,
  ])

  const burnApproveCallback = useCallback(async () => {
    if (!pairContract || !pair || !library || !deadline) throw new Error('missing dependencies')
    const liquidityAmount = parsedAmounts?.[Field.LIQUIDITY]
    if (!liquidityAmount) throw new Error('missing liquidity amount')

    if (isArgentWallet) {
      return approveCallback()
    }

    // try to gather a signature for permission
    const nonce = await pairContract.nonces(account)

    const EIP712Domain = [
      { name: 'name', type: 'string' },
      { name: 'version', type: 'string' },
      { name: 'chainId', type: 'uint256' },
      { name: 'verifyingContract', type: 'address' },
    ]
    const domain = {
      name: 'Ladder V1',
      version: '1',
      chainId,
      verifyingContract: pair.liquidityToken.address,
    }
    const Permit = [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'nonce', type: 'uint256' },
      { name: 'deadline', type: 'uint256' },
    ]
    const message = {
      owner: account,
      spender: is721Pair
        ? ROUTER_ADDRESSES_721[chainId ?? NETWORK_CHAIN_ID]
        : ROUTER_ADDRESSES[chainId ?? NETWORK_CHAIN_ID],
      value: liquidityAmount.raw.toString(),
      nonce: nonce.toHexString(),
      deadline: deadline.toNumber(),
    }
    const data = JSON.stringify({
      types: {
        EIP712Domain,
        Permit,
      },
      domain,
      primaryType: 'Permit',
      message,
    })
    showModal(<TransacitonPendingModal />)
    library
      .send('eth_signTypedData_v4', [account, data])
      .then(splitSignature)
      .then((signature) => {
        hideModal()
        setSignatureData({
          v: signature.v,
          r: signature.r,
          s: signature.s,
          deadline: deadline.toNumber(),
        })
      })
      .catch((error) => {
        // for all errors other than 4001 (EIP-1193 user rejected request), fall back to manual approve
        if (error?.code !== 4001) {
          approveCallback()
        }
      })
  }, [
    Field.LIQUIDITY,
    account,
    approveCallback,
    chainId,
    deadline,
    hideModal,
    is721Pair,
    isArgentWallet,
    library,
    pair,
    pairContract,
    parsedAmounts,
    showModal,
  ])

  return { burnCallback, burnApproveCallback, setSignatureData, approval, signatureData }
}
