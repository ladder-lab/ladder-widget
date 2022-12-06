import { Currency, CurrencyAmount, ETHER, JSBI, Pair, Percent, Price, Token, TokenAmount } from '@ladder/sdk'
import { useWeb3React } from '@web3-react/core'
import { PairState, usePair } from 'data/Reserves'
import { useTotalSupply } from 'data/TotalSupply'
import { useCurrencyBalance, useTokenBalance } from 'hooks/useBalances'
import { useAtomValue } from 'jotai/utils'
import { AllTokens } from 'models/allTokens'
import React, { useContext, useMemo, useState } from 'react'
import { mintAtom, MintField as Field } from 'state/mint'
import { checkIs721, checkIs1155 } from 'utils/checkIs1155'
import { generateErc20 } from 'utils/getHashAddress'
import { wrappedCurrency, wrappedCurrencyAmount } from 'utils/wrappedCurrency'

import { tryParseAmount } from './SwapContext'

const ZERO = JSBI.BigInt(0)
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))

interface MintContextType {
  dependentField: Field
  independentField?: Field
  currencies: { [field in Field]?: Currency }
  pair?: Pair | null
  pairState: PairState
  currencyBalances: { [field in Field]?: CurrencyAmount }
  parsedAmounts: { [field in Field]?: CurrencyAmount }
  price?: Price
  noLiquidity?: boolean
  liquidityMinted?: TokenAmount
  poolTokenPercentage?: Percent
  error?: string
  setCurrencyA?: any
  setCurrencyB?: any
  shareOfPool?: string
  typedValue?: string
  otherTypedValue?: string
  tokenIds?: any
  currencyA?: undefined | AllTokens
  currencyB?: undefined | AllTokens
}

export const MintContext = React.createContext<MintContextType>({
  dependentField: Field.CURRENCY_B,
  currencies: {},
  currencyBalances: {},
  parsedAmounts: {},
  pairState: PairState.NOT_EXISTS,
  setCurrencyA: () => undefined as void,
  setCurrencyB: () => undefined as void,
})

export const MintProvider = ({ children }: { children: React.ReactNode }) => {
  const [currencyA, setCurrencyA] = useState<undefined | AllTokens>(undefined)
  const [currencyB, setCurrencyB] = useState<undefined | AllTokens>(undefined)
  const defivedInfo = useDerivedMintInfo(currencyA, currencyB)
  const { typedValue, otherTypedValue, tokenIds } = useAtomValue(mintAtom)

  return (
    <MintContext.Provider
      value={{
        ...defivedInfo,
        setCurrencyA,
        setCurrencyB,
        typedValue,
        otherTypedValue,
        tokenIds,
        currencyA,
        currencyB,
      }}
    >
      {children}
    </MintContext.Provider>
  )
}

export const useMintContext = () => {
  const context = useContext(MintContext)
  return context
}

export function useDerivedMintInfo(currencyA: Currency | undefined, currencyB: Currency | undefined): MintContextType {
  const { account, chainId } = useWeb3React()

  const { independentField, typedValue, otherTypedValue, tokenIds } = useAtomValue(mintAtom)

  const dependentField = independentField === Field.CURRENCY_A ? Field.CURRENCY_B : Field.CURRENCY_A

  // tokens
  const currencies: { [field in Field]?: Token } = useMemo(
    () => ({
      [Field.CURRENCY_A]: generateErc20(wrappedCurrency(currencyA, chainId)),
      [Field.CURRENCY_B]: generateErc20(wrappedCurrency(currencyB, chainId)),
    }),
    [currencyA, currencyB, chainId]
  )

  const currenciesRaw = useMemo(() => {
    return {
      [Field.CURRENCY_A]: currencyA === ETHER ? ETHER : generateErc20(wrappedCurrency(currencyA, chainId)),
      [Field.CURRENCY_B]: currencyB === ETHER ? ETHER : generateErc20(wrappedCurrency(currencyB, chainId)),
    }
  }, [chainId, currencyA, currencyB])

  // pair
  const [pairState, pair] = usePair(currencies[Field.CURRENCY_A], currencies[Field.CURRENCY_B])

  const totalSupply = useTotalSupply(pair?.liquidityToken)
  const lpBalance = useTokenBalance(account ?? undefined, pair?.liquidityToken)

  const noReserves = pair?.token0Price.equalTo('0') && pair?.token1Price.equalTo('0')
  const noLiquidity: boolean =
    pairState === PairState.NOT_EXISTS || Boolean(totalSupply && JSBI.equal(totalSupply.raw, ZERO)) || !!noReserves

  // balances

  const balanceA = useCurrencyBalance(account ?? undefined, currencyA ?? undefined)
  const balanceB = useCurrencyBalance(account ?? undefined, currencyB ?? undefined)

  const currencyBalances: { [field in Field]?: CurrencyAmount } = useMemo(
    () => ({
      [Field.CURRENCY_A]: balanceA,
      [Field.CURRENCY_B]: balanceB,
    }),
    [balanceA, balanceB]
  )

  // amounts
  const independentAmount: CurrencyAmount | undefined = tryParseAmount(
    typedValue,
    currenciesRaw[independentField as Field]
  )
  const dependentAmount: CurrencyAmount | undefined = useMemo(() => {
    if (noLiquidity) {
      if (otherTypedValue && currencies[dependentField]) {
        return tryParseAmount(otherTypedValue, currenciesRaw[dependentField])
      }
      return undefined
    } else if (independentAmount) {
      // we wrap the currencies just to get the price in terms of the other token
      const wrappedIndependentAmount = wrappedCurrencyAmount(independentAmount, chainId)
      const [tokenA, tokenB] = [currencies[Field.CURRENCY_A], currencies[Field.CURRENCY_B]]
      if (tokenA && tokenB && wrappedIndependentAmount && pair) {
        const dependentCurrency =
          dependentField === Field.CURRENCY_B ? currenciesRaw[Field.CURRENCY_B] : currenciesRaw[Field.CURRENCY_A]
        const dependentTokenAmount =
          dependentField === Field.CURRENCY_B
            ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              pair.priceOf(tokenA).quote(wrappedIndependentAmount)
            : // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              pair.priceOf(tokenB).quote(wrappedIndependentAmount)
        return dependentCurrency === ETHER ? CurrencyAmount.ether(dependentTokenAmount.raw) : dependentTokenAmount
      }
      return undefined
    } else {
      return undefined
    }
  }, [noLiquidity, independentAmount, otherTypedValue, currencies, dependentField, chainId, pair, currenciesRaw])

  const parsedAmounts: { [field in Field]: CurrencyAmount | undefined } = useMemo(
    () => ({
      [Field.CURRENCY_A]: independentField === Field.CURRENCY_A ? independentAmount : dependentAmount,
      [Field.CURRENCY_B]: independentField === Field.CURRENCY_A ? dependentAmount : independentAmount,
    }),
    [dependentAmount, independentAmount, independentField]
  )

  const price = useMemo(() => {
    if (noLiquidity) {
      const { [Field.CURRENCY_A]: currencyAAmount, [Field.CURRENCY_B]: currencyBAmount } = parsedAmounts
      if (currencyAAmount && currencyBAmount) {
        return new Price(currencyAAmount.currency, currencyBAmount.currency, currencyAAmount.raw, currencyBAmount.raw)
      }
      return undefined
    } else {
      const wrappedCurrencyA = wrappedCurrency(currencies[Field.CURRENCY_A], chainId)
      return pair && wrappedCurrencyA ? pair.priceOf(wrappedCurrencyA) : undefined
    }
  }, [chainId, currencies, noLiquidity, pair, parsedAmounts])

  // liquidity minted
  const liquidityMinted = useMemo(() => {
    try {
      const { [Field.CURRENCY_A]: currencyAAmount, [Field.CURRENCY_B]: currencyBAmount } = parsedAmounts

      const [tokenAmountA, tokenAmountB] = [
        wrappedCurrencyAmount(currencyAAmount, chainId),
        wrappedCurrencyAmount(currencyBAmount, chainId),
      ]

      if (pair && totalSupply && tokenAmountA && tokenAmountB) {
        if (+tokenAmountA?.toExact() === 0 || +tokenAmountB?.toExact() === 0 || noReserves) {
          return undefined
        }
        return pair.getLiquidityMinted(totalSupply, tokenAmountA, tokenAmountB)
      } else {
        return undefined
      }
    } catch (e) {
      console.error(e)
      return undefined
    }
  }, [parsedAmounts, chainId, pair, totalSupply, noReserves])

  const poolTokenPercentage = useMemo(() => {
    if (totalSupply && pair?.liquidityToken) {
      const balance = lpBalance ?? new TokenAmount(pair?.liquidityToken, JSBI.BigInt(0))
      const amount = liquidityMinted ? balance?.add(liquidityMinted) : balance
      const totalSupplyAmount = liquidityMinted ? totalSupply?.add(liquidityMinted) : totalSupply
      return new Percent(amount.raw, totalSupplyAmount.raw)
    } else {
      return undefined
    }
  }, [liquidityMinted, lpBalance, pair?.liquidityToken, totalSupply])

  const shareOfPool = useMemo(() => {
    return noLiquidity && price
      ? '100'
      : (poolTokenPercentage?.lessThan(ONE_BIPS) ? '<0.01' : poolTokenPercentage?.toFixed(2)) ?? '0'
  }, [noLiquidity, poolTokenPercentage, price])

  let error: string | undefined

  if (!account) {
    error = 'Connect Wallet'
  }

  if (!currencyA || !currencyB) {
    error = error ?? 'Select Currency and/or NFT'
  }

  if (pairState === PairState.INVALID) {
    error = error ?? 'Invalid pair'
  }

  if (!parsedAmounts[Field.CURRENCY_A] || !parsedAmounts[Field.CURRENCY_B]) {
    error = error ?? 'Enter an amount'
  }

  const { [Field.CURRENCY_A]: currencyAAmount, [Field.CURRENCY_B]: currencyBAmount } = parsedAmounts

  if (currencyAAmount && currencyBalances?.[Field.CURRENCY_A]?.lessThan(currencyAAmount)) {
    error = 'Insufficient ' + currencies[Field.CURRENCY_A]?.symbol + ' balance'
  }

  if (currencyBAmount && currencyBalances?.[Field.CURRENCY_B]?.lessThan(currencyBAmount)) {
    error = 'Insufficient ' + currencies[Field.CURRENCY_B]?.symbol + ' balance'
  }

  if (currencyBAmount?.equalTo('0')) {
    error = 'Insufficient ' + currencies[Field.CURRENCY_B]?.symbol + ' amount'
  }

  if (currencyAAmount?.equalTo('0')) {
    error = 'Insufficient ' + currencies[Field.CURRENCY_A]?.symbol + ' amount'
  }

  const isANft = checkIs1155(currencyA) || checkIs721(currencyA)
  const isBNft = checkIs1155(currencyB) || checkIs721(currencyB)

  if (isANft && isBNft) {
    error = 'Invalid pair'
  }

  if ((checkIs721(currencyA) || checkIs721(currencyB)) && (!tokenIds || tokenIds.length < 1)) {
    error = error ?? 'Please choose NFT token IDs'
  }

  return {
    dependentField,
    independentField: independentField === Field.CURRENCY_A ? Field.CURRENCY_A : Field.CURRENCY_B,
    currencies,
    pair,
    pairState,
    currencyBalances,
    parsedAmounts,
    price,
    noLiquidity,
    liquidityMinted,
    poolTokenPercentage,
    error,
    shareOfPool,
  }
}
