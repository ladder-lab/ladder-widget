import { SupportedChainId } from 'constants/chains'
import useSwapInfo, { ChainError } from 'context/SwapContext'
import { useMemo } from 'react'
import { Field } from 'state/swap'
import { useTheme } from 'styled-components/macro'

import SwapButton from './SwapButton'
import SwitchChainButton from './SwitchChainButton'

export default function SwapActionButton() {
  const {
    [Field.INPUT]: { currency: inputCurrency, amount: inputCurrencyAmount, balance: inputCurrencyBalance },
    [Field.OUTPUT]: { currency: outputCurrency },
    error,
    trade,
  } = useSwapInfo()

  const isDisabled = useMemo(
    () =>
      error !== undefined ||
      !trade ||
      !(inputCurrencyAmount && inputCurrencyBalance) ||
      inputCurrencyBalance.lessThan(inputCurrencyAmount),
    [error, trade, inputCurrencyAmount, inputCurrencyBalance]
  )

  const { tokenColorExtraction } = useTheme()
  const color = tokenColorExtraction ? 'interactive' : 'accent'

  if (error === ChainError.MISMATCHED_CHAINS) {
    const tokenChainId = inputCurrency?.chainId ?? outputCurrency?.chainId ?? SupportedChainId.MAINNET
    return <SwitchChainButton color={color} chainId={tokenChainId} />
  } else {
    return <SwapButton disabled={isDisabled} />
  }
}
