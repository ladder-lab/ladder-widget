import { Currency, CurrencyAmount, JSBI, Pair, Percent, Token, TokenAmount, Trade } from '@ladder/sdk'
import { TradeType } from '@uniswap/sdk-core'
import { useWeb3React } from '@web3-react/core'
import { NETWORK_CHAIN_ID } from 'constants/chain'
import { Token721 } from 'constants/token/token721'
import { parseUnits } from 'ethers/lib/utils'
import { useTradeExactIn, useTradeExactOut } from 'hooks/Trades'
import { useCurrencyBalance } from 'hooks/useBalances'
import useOnSupportedNetwork from 'hooks/useOnSupportedNetwork'
import useSlippage, { DEFAULT_SLIPPAGE, Slippage } from 'hooks/useSlippage'
import { useAtomValue } from 'jotai/utils'
import { createContext, PropsWithChildren, useContext, useMemo } from 'react'
import { Field, swapAtom } from 'state/swap'
import { checkIs721, checkIs1155 } from 'utils/checkIs1155'
import { getHashAddress } from 'utils/getHashAddress'
import { computeSlippageAdjustedAmounts, computeTradePriceBreakdown } from 'utils/swap/prices'
import { wrappedCurrency } from 'utils/wrappedCurrency'

export enum ChainError {
  UNCONNECTED_CHAIN,
  ACTIVATING_CHAIN,
  UNSUPPORTED_CHAIN,
  MISMATCHED_TOKEN_CHAINS,
  MISMATCHED_CHAINS,
}

interface SwapField {
  currency?: Currency
  amount?: CurrencyAmount
  balance?: CurrencyAmount
  usdc?: CurrencyAmount
  tokenId?: string | undefined | number
  standard?: undefined | string
  subTokens?: Token721[] | undefined
}

interface SwapInfo {
  [Field.INPUT]: SwapField
  [Field.OUTPUT]: SwapField
  error?: ChainError | string
  trade?: Trade | null
  slippage: Slippage
  // approval: SwapApproval
  impact?: any
  independentField?: Field
  pair721Address?: string
  priceImpact?: Percent
  slippageAdjustedAmounts?:
    | {
        INPUT?: CurrencyAmount | undefined
        OUTPUT?: CurrencyAmount | undefined
      }
    | undefined
  tokenIdsForCb?: Array<string | number>
}

function useComputeSwapInfo(): SwapInfo {
  const { account, chainId, isActivating, isActive } = useWeb3React()
  const isSupported = useOnSupportedNetwork()

  const {
    type,
    amount,
    [Field.INPUT]: currencyIn,
    [Field.OUTPUT]: currencyOut,
    tokenIdsIn,
    tokenIdsOut,
  } = useAtomValue(swapAtom)

  const inputCurrency =
    (currencyIn as any)?.address && (currencyIn?.tokenId || currencyIn?.tokenId === 0)
      ? new Token(
          chainId ?? NETWORK_CHAIN_ID,
          getHashAddress((currencyIn as any).address, +currencyIn.tokenId),
          0,
          currencyIn?.symbol,
          currencyIn?.name
        )
      : currencyIn

  const outputCurrency =
    ((currencyOut as any)?.address && currencyOut?.tokenId) || currencyOut?.tokenId === 0
      ? new Token(
          chainId ?? NETWORK_CHAIN_ID,
          getHashAddress((currencyOut as any)?.address, +currencyOut.tokenId),
          0,
          currencyOut?.symbol,
          currencyOut?.name
        )
      : currencyOut

  const inputBalance = useCurrencyBalance(account ?? undefined, currencyIn ?? undefined)
  const outputBalance = useCurrencyBalance(account ?? undefined, currencyOut ?? undefined)

  const isExactIn: boolean = type === TradeType.EXACT_INPUT
  const parsedAmount = tryParseAmount(amount, (isExactIn ? inputCurrency : outputCurrency) ?? undefined)

  const bestTradeExactIn = useTradeExactIn(isExactIn ? parsedAmount : undefined, outputCurrency ?? undefined)
  const bestTradeExactOut = useTradeExactOut(inputCurrency ?? undefined, !isExactIn ? parsedAmount : undefined)

  const v2Trade = isExactIn ? bestTradeExactIn : bestTradeExactOut

  const parsedAmounts = useMemo(
    () => ({
      [Field.INPUT]: isExactIn ? parsedAmount : v2Trade?.inputAmount,
      [Field.OUTPUT]: !isExactIn ? parsedAmount : v2Trade?.outputAmount,
    }),
    [isExactIn, parsedAmount, v2Trade?.inputAmount, v2Trade?.outputAmount]
  )

  const currencies: { [field in Field]?: Currency } = useMemo(
    () => ({
      [Field.INPUT]: currencyIn ?? undefined,
      [Field.OUTPUT]: currencyOut ?? undefined,
    }),
    [currencyIn, currencyOut]
  )

  const is721Input = checkIs721(currencies[Field.INPUT])
  const is721Output = checkIs721(currencies[Field.OUTPUT])

  const selectedTokenIds = useMemo(() => {
    const list = is721Input ? tokenIdsIn : is721Output ? tokenIdsOut : undefined
    const ids: any[] | undefined = list?.map(({ tokenId }) => tokenId) ?? undefined
    return ids
  }, [is721Input, is721Output, tokenIdsIn, tokenIdsOut])

  // Compute slippage and impact off of the trade so that it refreshes with the trade.
  // Wait until the trade is valid to avoid displaying incorrect intermediate values.
  const slippage = useSlippage({ trade: v2Trade as any })

  const chainIdIn = currencyIn?.chainId
  const chainIdOut = currencyOut?.chainId
  const tokenChainId = chainIdIn || chainIdOut

  const slippageAdjustedAmounts = useMemo(() => {
    return v2Trade && slippage ? computeSlippageAdjustedAmounts(v2Trade, slippage.allowed) : undefined
  }, [slippage, v2Trade])

  const error = useMemo(() => {
    if (!isActive) return isActivating ? ChainError.ACTIVATING_CHAIN : ChainError.UNCONNECTED_CHAIN
    if (!isSupported) return ChainError.UNSUPPORTED_CHAIN
    if (chainIdIn && chainIdOut && chainIdIn !== chainIdOut) return ChainError.MISMATCHED_TOKEN_CHAINS
    if (chainId && tokenChainId && chainId !== tokenChainId) return ChainError.MISMATCHED_CHAINS
    let inputError: string | undefined
    if (!account) {
      inputError = 'Connect Wallet'
    }

    if (!parsedAmount) {
      inputError = inputError ?? 'Enter an amount'
    }

    if (is721Input && tokenIdsIn?.length + '' !== v2Trade?.inputAmount.toExact()) {
      inputError = inputError ?? 'Choose token Ids'
    }

    if (!currencies[Field.INPUT] || !currencies[Field.OUTPUT]) {
      inputError = 'Select a token'
    }

    // compare input balance to max input based on version
    const [balanceIn, amountIn] = [inputBalance, slippageAdjustedAmounts ? slippageAdjustedAmounts[Field.INPUT] : null]

    if (balanceIn && amountIn && balanceIn.lessThan(amountIn)) {
      inputError = 'Insufficient ' + amountIn.currency.symbol + ' balance'
    }
    if (
      (is721Input && is721Output) ||
      (is721Input && checkIs1155(currencies[Field.OUTPUT])) ||
      (is721Output && checkIs1155(currencies[Field.INPUT]))
    ) {
      inputError = 'Invalid Pair'
    }
    const userHasSpecifiedInputOutput = Boolean(
      currencies[Field.INPUT] && currencies[Field.OUTPUT] && parsedAmount?.greaterThan(JSBI.BigInt(0))
    )
    if (!v2Trade?.route && userHasSpecifiedInputOutput) {
      inputError = 'Insufficient liquidity for this trade.'
      // { singleHopOnly && 'Try enabling multi-hop trades.' }
    }

    return inputError
  }, [
    account,
    chainId,
    chainIdIn,
    chainIdOut,
    currencies,
    inputBalance,
    is721Input,
    is721Output,
    isActivating,
    isActive,
    isSupported,
    parsedAmount,
    slippageAdjustedAmounts,
    tokenChainId,
    tokenIdsIn?.length,
    v2Trade?.inputAmount,
    v2Trade?.route,
  ])

  const pair721Address = useMemo(() => {
    const tokenFrom = wrappedCurrency(currencyIn, chainId)
    const tokenTo = wrappedCurrency(currencyOut, chainId)
    return tokenFrom && tokenTo && checkIs721(currencyOut) ? Pair.getAddress(tokenFrom, tokenTo) : undefined
  }, [chainId, currencyIn, currencyOut])

  return useMemo(() => {
    return {
      [Field.INPUT]: {
        currency: currencyIn,
        amount: parsedAmounts[Field.INPUT],
        balance: inputBalance,
        subTokens: tokenIdsIn,
      },
      [Field.OUTPUT]: {
        currency: currencyOut,
        amount: parsedAmounts[Field.OUTPUT],
        balance: outputBalance,
        subTokens: tokenIdsOut,
      },
      independentField: type === TradeType.EXACT_INPUT ? Field.INPUT : Field.OUTPUT,
      error,
      trade: v2Trade,
      slippage,
      pair721Address,
      priceImpact: computeTradePriceBreakdown(v2Trade).priceImpactWithoutFee,
      slippageAdjustedAmounts,
      tokenIdsForCb: selectedTokenIds,
    }
  }, [
    currencyIn,
    parsedAmounts,
    inputBalance,
    tokenIdsIn,
    currencyOut,
    outputBalance,
    tokenIdsOut,
    type,
    error,
    v2Trade,
    slippage,
    pair721Address,
    slippageAdjustedAmounts,
    selectedTokenIds,
  ])
}

const DEFAULT_SWAP_INFO: SwapInfo = {
  [Field.INPUT]: {},
  [Field.OUTPUT]: {},
  error: ChainError.UNCONNECTED_CHAIN,
  trade: undefined,
  slippage: DEFAULT_SLIPPAGE,

  // approval: { state: SwapApprovalState.APPROVED },
}

const SwapContext = createContext(DEFAULT_SWAP_INFO)

export function SwapProvider({ children }: PropsWithChildren<{ routerUrl?: string }>) {
  const swapInfo = useComputeSwapInfo()

  return <SwapContext.Provider value={swapInfo}>{children}</SwapContext.Provider>
}

/** Requires that SwapInfoUpdater be installed in the DOM tree. **/
export default function useSwapInfo(): SwapInfo {
  return useContext(SwapContext)
}

export function tryParseAmount(value?: string, currency?: Currency): CurrencyAmount | undefined {
  if (!value || !currency) {
    return undefined
  }
  try {
    const typedValueParsed = parseUnits(value, currency.decimals).toString()
    if (typedValueParsed !== '0' || +typedValueParsed > 0) {
      return currency instanceof Token
        ? new TokenAmount(currency, JSBI.BigInt(typedValueParsed))
        : CurrencyAmount.ether(JSBI.BigInt(typedValueParsed))
    }
  } catch (error) {
    // should fail if the user specifies too many decimal places of precision (or maybe exceed max uint?)
    console.debug(`Failed to parse input amount: "${value}"`, error)
  }
  // necessary for all paths to return a value
  return undefined
}
