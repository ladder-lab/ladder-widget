import { BigNumber } from '@ethersproject/bignumber'
import { Contract } from '@ethersproject/contracts'
import { TransactionResponse } from '@ethersproject/providers'
import { Percent, Router, SwapParameters, Trade, TradeType } from '@ladder/sdk'
import { useWeb3React } from '@web3-react/core'
import { isAddress } from 'ethers/lib/utils'
import useENS from 'hooks/useENS'
import { useSetOldestValidBlock } from 'hooks/useIsValidBlock'
import { DEFAULT_SLIPPAGE } from 'hooks/useSlippage'
import useTransactionDeadline from 'hooks/useTransactionDeadline'
import { useMemo } from 'react'
import { TransactionType } from 'state/transactions'
import { getRouterContract, getRouterContract721, shortenAddress } from 'utils'
import { calculateGasMargin } from 'utils/calculateGasMargin'
import { getSymbol } from 'utils/getSymbol'
import isZero from 'utils/isZero'

// import { calculateGasMargin, getRouterContract, getRouterContract721, isAddress, shortenAddress } from '../utils'

export enum SwapCallbackState {
  INVALID,
  LOADING,
  VALID,
}

interface SwapCall {
  contract: Contract
  parameters: SwapParameters
}

interface SuccessfulCall {
  call: SwapCall
  gasEstimate: BigNumber
}

interface FailedCall {
  call: SwapCall
  error: Error
}

type EstimatedSwapCall = SuccessfulCall | FailedCall

/**
 * Returns the swap calls that can be used to make the trade
 * @param trade trade to execute
 * @param allowedSlippage user allowed slippage
 * @param recipientAddressOrName
 */
function useSwapCallArguments(
  trade: Trade | undefined, // trade to execute, required
  allowedSlippage: Percent = DEFAULT_SLIPPAGE.allowed as any,
  recipientAddressOrName: string | null,
  tokenIds?: Array<number | string> // the ENS name or address of the recipient of the trade, or null if swap should be returned to sender
): SwapCall[] {
  const { account, chainId, provider: library } = useWeb3React()

  const { address: recipientAddress } = useENS(recipientAddressOrName)
  const recipient = recipientAddressOrName === null ? account : recipientAddress
  const deadline = useTransactionDeadline()

  return useMemo(() => {
    if (!trade || !recipient || !library || !account || !chainId || !deadline) return []

    const contract1155: Contract | null = getRouterContract(chainId, library, account)
    const contract721: Contract | null = getRouterContract721(chainId, library, account)

    const contract = tokenIds ? contract721 : contract1155
    if (!contract) {
      return []
    }

    const swapMethods = []

    swapMethods.push(
      Router.swapCallParameters(trade, {
        feeOnTransfer: false,
        allowedSlippage,
        recipient,
        deadline: deadline.toNumber(),
        tokenIds,
      })
    )

    if (trade.tradeType === TradeType.EXACT_INPUT) {
      swapMethods.push(
        Router.swapCallParameters(trade, {
          feeOnTransfer: tokenIds ? false : true,
          allowedSlippage,
          recipient,
          deadline: deadline.toNumber(),
          tokenIds,
        })
      )
    }

    return swapMethods.map((parameters) => ({ parameters, contract }))
  }, [account, allowedSlippage, chainId, deadline, library, recipient, tokenIds, trade])
}

// returns a function that will execute a swap, if the parameters are all valid
// and the user has approved the slippage adjusted input amount for the trade
export function useSwapCallback({
  trade,
  allowedSlippage = DEFAULT_SLIPPAGE.allowed as any,
  recipientAddressOrName,
  tokenIds,
}: {
  trade: Trade | undefined // trade to execute, required
  allowedSlippage: Percent
  recipientAddressOrName: string | null
  tokenIds?: Array<string | number> // the ENS name or address of the recipient of the trade, or null if swap should be returned to sender
}): { state: SwapCallbackState; callback: null | (() => Promise<string>); error: string | null } {
  const { account, chainId, provider: library } = useWeb3React()
  const setOldestValidBlock = useSetOldestValidBlock()
  const swapCalls = useSwapCallArguments(trade, allowedSlippage, recipientAddressOrName, tokenIds)

  const { address: recipientAddress } = useENS(recipientAddressOrName)
  const recipient = recipientAddressOrName === null ? account : recipientAddress

  return useMemo(() => {
    if (!trade || !library || !account || !chainId) {
      return { state: SwapCallbackState.INVALID, callback: null, error: 'Missing dependencies' }
    }
    if (!recipient) {
      if (recipientAddressOrName !== null) {
        return { state: SwapCallbackState.INVALID, callback: null, error: 'Invalid recipient' }
      } else {
        return { state: SwapCallbackState.LOADING, callback: null, error: null }
      }
    }

    return {
      state: SwapCallbackState.VALID,
      callback: async function onSwap(): Promise<string> {
        const estimatedCalls: EstimatedSwapCall[] = await Promise.all(
          swapCalls.map((call) => {
            const {
              parameters: { methodName, args, value },
              contract,
            } = call

            const options = !value || isZero(value) ? {} : { value }
            return contract.estimateGas[methodName](...args, options)
              .then((gasEstimate) => {
                return {
                  call,
                  gasEstimate,
                }
              })
              .catch((gasError) => {
                console.debug('Gas estimate failed, trying eth_call to extract error', call)

                return contract.callStatic[methodName](...args, options)
                  .then((result) => {
                    console.debug('Unexpected successful call after failed estimate gas', call, gasError, result)
                    return { call, error: new Error('Unexpected issue with estimating the gas. Please try again.') }
                  })
                  .catch((callError) => {
                    console.debug('Call threw error', call, callError)
                    let errorMessage: string
                    switch (callError.reason) {
                      case 'Router: INSUFFICIENT_OUTPUT_AMOUNT':
                      case '2Router: EXCESSIVE_INPUT_AMOUNT':
                        errorMessage =
                          'This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.'
                        break
                      default:
                        errorMessage = `The transaction cannot succeed due to error: ${callError.reason}. This is probably an issue with one of the tokens you are swapping.`
                    }
                    return { call, error: new Error(errorMessage) }
                  })
              })
          })
        )

        // a successful estimation is a bignumber gas estimate and the next call is also a bignumber gas estimate
        const successfulEstimation = estimatedCalls.find(
          (el, ix, list): el is SuccessfulCall =>
            'gasEstimate' in el && (ix === list.length - 1 || 'gasEstimate' in list[ix + 1])
        )

        if (!successfulEstimation) {
          const errorCalls = estimatedCalls.filter((call): call is FailedCall => 'error' in call)
          if (errorCalls.length > 0) throw errorCalls[errorCalls.length - 1].error
          throw new Error('Unexpected error. Please contact support: none of the calls threw an error')
        }

        const {
          call: {
            contract,
            parameters: { methodName, args, value },
          },
          gasEstimate,
        } = successfulEstimation

        return contract[methodName](...args, {
          gasLimit: calculateGasMargin(gasEstimate),
          ...(value && !isZero(value) ? { value, from: account } : { from: account }),
        })
          .then((response: any) => {
            const inputSymbol = getSymbol(trade.inputAmount.currency)
            const outputSymbol = getSymbol(trade.outputAmount.currency)
            const inputAmount = trade.inputAmount.toSignificant(3)
            const outputAmount = trade.outputAmount.toSignificant(3)

            const base = `Swap ${inputAmount} ${inputSymbol} for ${outputAmount} ${outputSymbol}`
            const withRecipient =
              recipient === account
                ? base
                : `${base} to ${
                    recipientAddressOrName && isAddress(recipientAddressOrName)
                      ? shortenAddress(recipientAddressOrName)
                      : recipientAddressOrName
                  }`

            setOldestValidBlock(response.blockNumber)
            return {
              response: response as TransactionResponse,
              summary: withRecipient,
              type: TransactionType.SWAP,
              trade,
            }
          })
          .catch((error: any) => {
            // if the user rejected the tx, pass this along
            if (error?.code === 4001) {
              throw new Error('Transaction rejected.')
            } else {
              // otherwise, the error was unexpected and we need to convey that
              console.error(`Swap failed`, error, methodName, args, value)
              throw new Error(`Swap failed: ${error.message}`)
            }
          })
      },
      error: null,
    }
  }, [trade, library, account, chainId, recipient, recipientAddressOrName, swapCalls, setOldestValidBlock])
}
