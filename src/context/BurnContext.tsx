import { Currency, CurrencyAmount, Fraction, JSBI, Pair, Percent, Token, TokenAmount } from '@ladder/sdk'
import { useWeb3React } from '@web3-react/core'
import { useTotalSupply } from 'data/TotalSupply'
import { AllTokens } from 'models/allTokens'
import React, { useContext, useMemo, useState } from 'react'
import { checkIs721, checkIs1155 } from 'utils/checkIs1155'
import { generateErc20 } from 'utils/getHashAddress'
import { wrappedCurrency } from 'utils/wrappedCurrency'

import { tryParseAmount } from './SwapContext'

export enum BurnField {
  LIQUIDITY_PERCENT = 'LIQUIDITY_PERCENT',
  LIQUIDITY = 'LIQUIDITY',
  CURRENCY_A = 'CURRENCY_A',
  CURRENCY_B = 'CURRENCY_B',
}

export interface BurnContextType {
  readonly independentField: BurnField
  readonly typedValue: string
  pair?: Pair | null
  parsedAmounts?: {
    [BurnField.LIQUIDITY_PERCENT]: Percent
    [BurnField.LIQUIDITY]?: TokenAmount
    [BurnField.CURRENCY_A]?: CurrencyAmount
    [BurnField.CURRENCY_B]?: CurrencyAmount
  }
  error?: string
  lpBalance: undefined | TokenAmount
  poolShare: string
  warning: undefined | [string, (() => void) | undefined]
}

const initialState: BurnContextType = {
  independentField: BurnField.LIQUIDITY_PERCENT,
  typedValue: '0',
  lpBalance: undefined,
  poolShare: '',
  warning: undefined,
}

// const { onUserInput } = useBurnActionHandlers()
// const { independentField, typedValue } = useBurnState()
// // pair + totalsupply
// const [, pair] = usePair(tokenA, tokenB)
const { independentField, typedValue } = { independentField: BurnField.CURRENCY_A, typedValue: '0' }
const pair: any = undefined,
  relevantTokenBalances: any = undefined
// balances
// const relevantTokenBalances = useTokenBalances(account ?? undefined, [pair?.liquidityToken])

export const BurnContext = React.createContext<BurnContextType>(initialState)

export const BurnProvider = ({ children }: { children: React.ReactNode }) => {
  const [currencyA, setCurrencyA] = useState<undefined | AllTokens>(undefined)
  const [currencyB, setCurrencyB] = useState<undefined | AllTokens>(undefined)
  const derivedInfo = useDerivedBurnInfo(currencyA, currencyB)
  return (
    <BurnContext.Provider value={{ ...derivedInfo, independentField, typedValue }}>{children}</BurnContext.Provider>
  )
}

export const useBurnContext = () => {
  const context = useContext(BurnContext)
  return context
}

export function useDerivedBurnInfo(
  currencyA: Currency | undefined,
  currencyB: Currency | undefined
): {
  pair?: Pair | null
  parsedAmounts: {
    [BurnField.LIQUIDITY_PERCENT]: Percent
    [BurnField.LIQUIDITY]?: TokenAmount
    [BurnField.CURRENCY_A]?: CurrencyAmount
    [BurnField.CURRENCY_B]?: CurrencyAmount
  }
  error?: string
  lpBalance: undefined | TokenAmount
  poolShare: string
  warning: undefined | [string, (() => void) | undefined]
} {
  const { account, chainId } = useWeb3React()

  const [tokenA, tokenB] = useMemo(
    () => [generateErc20(wrappedCurrency(currencyA, chainId)), generateErc20(wrappedCurrency(currencyB, chainId))],
    [chainId, currencyA, currencyB]
  )

  const userLiquidity: undefined | TokenAmount = relevantTokenBalances?.[pair?.liquidityToken?.address ?? '']

  const tokens: { [key in BurnField]?: Token | undefined } = {
    [BurnField.CURRENCY_A]: tokenA,
    [BurnField.CURRENCY_B]: tokenB,
    [BurnField.LIQUIDITY]: pair?.liquidityToken,
  }

  // liquidity values
  const totalSupply = useTotalSupply(pair?.liquidityToken)
  const liquidityValueA = useMemo(() => {
    return pair &&
      totalSupply &&
      userLiquidity &&
      tokenA &&
      // this condition is a short-circuit in the case where useTokenBalance updates sooner than useTotalSupply
      JSBI.greaterThanOrEqual(totalSupply.raw, userLiquidity.raw)
      ? new TokenAmount(tokenA, pair.getLiquidityValue(tokenA, totalSupply, userLiquidity, false).raw)
      : undefined
  }, [tokenA, totalSupply, userLiquidity])
  const liquidityValueB = useMemo(() => {
    return pair &&
      totalSupply &&
      userLiquidity &&
      tokenB &&
      // this condition is a short-circuit in the case where useTokenBalance updates sooner than useTotalSupply
      JSBI.greaterThanOrEqual(totalSupply.raw, userLiquidity.raw)
      ? new TokenAmount(tokenB, pair.getLiquidityValue(tokenB, totalSupply, userLiquidity, false).raw)
      : undefined
  }, [tokenB, totalSupply, userLiquidity])

  const liquidityValues: { [BurnField.CURRENCY_A]?: TokenAmount; [BurnField.CURRENCY_B]?: TokenAmount } =
    useMemo(() => {
      return {
        [BurnField.CURRENCY_A]: liquidityValueA,
        [BurnField.CURRENCY_B]: liquidityValueB,
      }
    }, [liquidityValueA, liquidityValueB])

  let percentToRemove: Percent = new Percent('0', '100')
  // user specified a %
  if ((independentField as BurnField) === BurnField.LIQUIDITY_PERCENT) {
    percentToRemove = new Percent(typedValue, '100')
  }
  // user specified a specific amount of liquidity tokens
  else if ((independentField as BurnField) === BurnField.LIQUIDITY) {
    if (pair?.liquidityToken) {
      const independentAmount = tryParseAmount(typedValue, pair.liquidityToken)
      if (independentAmount && userLiquidity && !independentAmount.greaterThan(userLiquidity)) {
        percentToRemove = new Percent(independentAmount.raw, userLiquidity.raw)
      }
    }
  }
  // user specified a specific amount of token a or b
  else {
    if (tokens[independentField as BurnField]) {
      const independentAmount = tryParseAmount(typedValue, tokens[independentField as BurnField])
      const liquidityValue = liquidityValues[independentField as keyof typeof liquidityValues]
      if (independentAmount && liquidityValue && !independentAmount.greaterThan(liquidityValue)) {
        percentToRemove = new Percent(independentAmount.raw, liquidityValue.raw)
      }
    }
  }
  const poolShare = totalSupply && userLiquidity ? new Percent(userLiquidity.raw, totalSupply.raw).toFixed(2) : '0'

  const removeAll = typedValue === '100' && poolShare === '100.00'

  const parsedAmounts: {
    [BurnField.LIQUIDITY_PERCENT]: Percent
    [BurnField.LIQUIDITY]?: TokenAmount
    [BurnField.CURRENCY_A]?: TokenAmount
    [BurnField.CURRENCY_B]?: TokenAmount
  } = {
    [BurnField.LIQUIDITY_PERCENT]: percentToRemove,
    [BurnField.LIQUIDITY]:
      userLiquidity && percentToRemove && percentToRemove.greaterThan('0')
        ? new TokenAmount(userLiquidity.token, percentToRemove.multiply(userLiquidity.raw).quotient)
        : undefined,
    [BurnField.CURRENCY_A]:
      tokenA && percentToRemove && percentToRemove.greaterThan('0') && liquidityValueA
        ? removeAll
          ? pair?.token0.equals(tokenA)
            ? pair?.reserve0
            : pair?.reserve1
          : new TokenAmount(tokenA, percentToRemove.multiply(liquidityValueA.raw).quotient)
        : undefined,
    [BurnField.CURRENCY_B]:
      tokenB && percentToRemove && percentToRemove.greaterThan('0') && liquidityValueB
        ? removeAll
          ? pair?.token0.equals(tokenB)
            ? pair?.reserve0
            : pair?.reserve1
          : new TokenAmount(tokenB, percentToRemove.multiply(liquidityValueB.raw).quotient)
        : undefined,
  }

  const removeAmountRaw = {
    [BurnField.CURRENCY_A]:
      tokenA && percentToRemove && percentToRemove.greaterThan('0') && liquidityValueA
        ? removeAll
          ? pair?.token0.equals(tokenA)
            ? pair?.reserve0
            : pair?.reserve1
          : percentToRemove.multiply(liquidityValueA.raw)
        : undefined,
    [BurnField.CURRENCY_B]:
      tokenB && percentToRemove && percentToRemove.greaterThan('0') && liquidityValueB
        ? removeAll
          ? pair?.token0.equals(tokenB)
            ? pair?.reserve0
            : pair?.reserve1
          : percentToRemove.multiply(liquidityValueB.raw)
        : undefined,
  }

  let error: string | undefined
  if (!account) {
    error = 'Connect Wallet'
  }

  if (
    !parsedAmounts[BurnField.LIQUIDITY] ||
    !parsedAmounts[BurnField.CURRENCY_A] ||
    !parsedAmounts[BurnField.CURRENCY_B]
  ) {
    error = error ?? 'Enter an amount'
  }

  const isANft = checkIs1155(currencyA) || checkIs721(currencyA)
  const isBNft = checkIs1155(currencyB) || checkIs721(currencyB)
  const nftField = isANft ? BurnField.CURRENCY_A : isBNft ? BurnField.CURRENCY_B : undefined
  const nftAmount = nftField ? removeAmountRaw[nftField] : undefined

  const warning = useMemo(() => {
    if (!nftAmount || removeAll || !nftField) return undefined
    if (typedValue === '100' && nftAmount.remainder.greaterThan('0')) {
      return ['NFT value less than 1 will be traded for equal amount of ERC20', undefined] as [string, undefined]
    }
    if (+typedValue < 100 && (nftAmount.remainder.greaterThan(new Fraction('5', '10')) || nftAmount.lessThan('1'))) {
      const roundedUp = nftAmount.toFixed(0, undefined, 2)
      const liquidityRaw = liquidityValues[nftField]
      if (!liquidityRaw?.greaterThan('0')) {
        return undefined
      }
      const percent = liquidityRaw ? new Fraction(roundedUp).divide(liquidityRaw).toFixed(3) : undefined
      if (percent) {
        const percentString = Math.ceil(+percent * 100) + ''

        return [
          'Increase percentage to remove interger amount of NFT',
          () => {
            // onUserInput(BurnField.LIQUIDITY_PERCENT, percentString)
          },
        ] as [string, () => void]
      }

      return undefined
    }
    return undefined
  }, [liquidityValues, nftAmount, nftField, removeAll])

  return { pair, parsedAmounts, error, lpBalance: userLiquidity, poolShare, warning }
}

// export function useBurnActionHandlers(): {
//   onUserInput: (field: Field, typedValue: string) => void
// } {
//   const dispatch = useDispatch<AppDispatch>()

//   const onUserInput = useCallback(
//     (field: Field, typedValue: string) => {
//       dispatch(typeInput({ field, typedValue }))
//     },
//     [dispatch]
//   )

//   return {
//     onUserInput,
//   }
// }
