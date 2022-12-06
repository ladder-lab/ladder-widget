import { Token721 } from 'constants/token/token721'
import { useAtom } from 'jotai'
import { useAtomValue, useUpdateAtom } from 'jotai/utils'
import { AllTokens } from 'models/allTokens'
import { useCallback, useMemo } from 'react'
import { pickAtom } from 'state/atoms'
import { Field, swapAtom, swapEventHandlersAtom } from 'state/swap'
import { checkIs721 } from 'utils/checkIs1155'
import { invertTradeType, toTradeType } from 'utils/tradeType'

function otherField(field: Field) {
  switch (field) {
    case Field.INPUT:
      return Field.OUTPUT
    case Field.OUTPUT:
      return Field.INPUT
  }
}

export function useSwitchSwapCurrencies() {
  const { onSwitchTokens } = useAtomValue(swapEventHandlersAtom)
  const setSwap = useUpdateAtom(swapAtom)
  return useCallback(() => {
    setSwap((swap) => {
      onSwitchTokens?.()
      swap.type = invertTradeType(swap.type)
      const oldOutput = swap[Field.OUTPUT]
      swap[Field.OUTPUT] = swap[Field.INPUT]
      swap[Field.INPUT] = oldOutput
      const to = swap.tokenIdsIn
      swap.tokenIdsIn = swap.tokenIdsOut
      swap.tokenIdsOut = to
    })
  }, [onSwitchTokens, setSwap])
}

const tokenIdsInAtom = pickAtom(swapAtom, 'tokenIdsIn')
const tokenIdsOutAtom = pickAtom(swapAtom, 'tokenIdsOut')
const amountAtom = pickAtom(swapAtom, 'amount')

export function useSwapCurrency(field: Field): [AllTokens | undefined, (currency: AllTokens) => void] {
  const currencyAtom = useMemo(() => pickAtom(swapAtom, field), [field])
  const [, setTokenIdsIn] = useAtom(tokenIdsInAtom)
  const [, setTokenIdsOut] = useAtom(tokenIdsOutAtom)
  const [, setAmount] = useAtom(amountAtom)

  const [currency, setCurrency] = useAtom(currencyAtom)
  const otherCurrencyAtom = useMemo(() => pickAtom(swapAtom, otherField(field)), [field])
  const otherCurrency = useAtomValue(otherCurrencyAtom)
  const { onTokenChange } = useAtomValue(swapEventHandlersAtom)
  const switchSwapCurrencies = useSwitchSwapCurrencies()
  const setOrSwitchCurrency = useCallback(
    (update: AllTokens) => {
      const is721 = checkIs721(update)
      if (!is721) {
        field === Field.INPUT ? setTokenIdsIn(undefined) : setTokenIdsOut(undefined)
        setAmount('')
      }
      if (update === currency) return
      if (update === otherCurrency) {
        switchSwapCurrencies()
      } else {
        onTokenChange?.(field, update)
        setCurrency(update)
      }
    },
    [
      currency,
      field,
      onTokenChange,
      otherCurrency,
      setAmount,
      setCurrency,
      setTokenIdsIn,
      setTokenIdsOut,
      switchSwapCurrencies,
    ]
  )
  return [currency, setOrSwitchCurrency]
}

const tradeTypeAtom = pickAtom(swapAtom, 'type')

export function useIsSwapFieldIndependent(field: Field): boolean {
  const type = useAtomValue(tradeTypeAtom)
  return type === toTradeType(field)
}

// check if any amount has been entered by user
export function useIsAmountPopulated() {
  return Boolean(useAtomValue(amountAtom))
}

export function useSwapAmount(field: Field): [string | undefined, (amount: string) => void] {
  const value = useAtomValue(amountAtom)
  const isFieldIndependent = useIsSwapFieldIndependent(field)
  const amount = isFieldIndependent ? value : undefined

  const { onAmountChange } = useAtomValue(swapEventHandlersAtom)
  const setSwap = useUpdateAtom(swapAtom)
  const updateAmount = useCallback(
    (update: string) => {
      if (update === amount) return
      onAmountChange?.(field, update)
      setSwap((swap) => {
        swap.type = toTradeType(field)
        swap.amount = update
      })
    },
    [amount, field, onAmountChange, setSwap]
  )
  return [amount, updateAmount]
}

export function useSwapSubTokens(): {
  tokenIdsIn: Token721[] | undefined
  tokenIdsOut: Token721[] | undefined
  updateTokenIdsIn: (tokenList: Token721[]) => void
  updateTokenIdsOut: (tokenList: Token721[]) => void
} {
  const { onSubTokenSwapChange } = useAtomValue(swapEventHandlersAtom)
  const [tokenIdsIn, setTokenIdsIn] = useAtom(tokenIdsInAtom)
  const [tokenIdsOut, setTokenIdsOut] = useAtom(tokenIdsOutAtom)

  const updateTokenIds = useCallback(
    (field: Field, tokenList: Token721[]) => {
      onSubTokenSwapChange?.(field, tokenList)

      if (field === Field.INPUT) {
        setTokenIdsIn(tokenList)
      } else {
        setTokenIdsOut(tokenList)
      }
    },
    [onSubTokenSwapChange, setTokenIdsIn, setTokenIdsOut]
  )

  const updateTokenIdsIn = useCallback(
    (tokenList: Token721[]) => {
      updateTokenIds(Field.INPUT, tokenList)
    },
    [updateTokenIds]
  )

  const updateTokenIdsOut = useCallback(
    (tokenList: Token721[]) => {
      updateTokenIds(Field.OUTPUT, tokenList)
    },
    [updateTokenIds]
  )

  return { updateTokenIdsIn, updateTokenIdsOut, tokenIdsIn, tokenIdsOut }
}
