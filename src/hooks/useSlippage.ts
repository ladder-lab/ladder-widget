import { Percent, Trade } from '@ladder/sdk'
import { CurrencyAmount, Token } from '@uniswap/sdk-core'
import { useAtomValue } from 'jotai/utils'
import { useMemo } from 'react'
import { slippageAtom } from 'state/swap/settings'

const ONE_TENTHS_PERCENT = new Percent(10 + '', 10_000 + '') // .10%
export const DEFAULT_AUTO_SLIPPAGE = ONE_TENTHS_PERCENT

export function toPercent(maxSlippage: string | undefined): Percent | undefined {
  if (!maxSlippage) return undefined
  if (Number.isNaN(maxSlippage)) return undefined
  const numerator = Math.floor(Number(maxSlippage) * 100)
  return new Percent(numerator.toString(), 10_000 + '')
}

export interface Slippage {
  allowed: Percent
  warning?: 'warning' | 'error'
}

export const DEFAULT_SLIPPAGE = { auto: true, allowed: DEFAULT_AUTO_SLIPPAGE }

/** Returns the allowed slippage, and whether it is auto-slippage. */
export default function useSlippage(trade: { trade?: Trade; gasUseEstimateUSD?: CurrencyAmount<Token> }): Slippage {
  const slippage = useAtomValue(slippageAtom)

  const maxSlippage = useMemo(() => toPercent(slippage.max), [slippage.max])
  return useMemo(() => {
    const allowed = maxSlippage ?? DEFAULT_AUTO_SLIPPAGE
    const warning = getSlippageWarning(allowed)
    if (allowed === DEFAULT_AUTO_SLIPPAGE) {
      return DEFAULT_SLIPPAGE
    }
    return { allowed, warning }
  }, [maxSlippage])
}

export const MAX_VALID_SLIPPAGE = new Percent(1 + '', 2 + '')
export const MIN_HIGH_SLIPPAGE = new Percent(1 + '', 100 + '')

export function getSlippageWarning(slippage?: Percent): 'warning' | 'error' | undefined {
  if (slippage?.greaterThan(MAX_VALID_SLIPPAGE)) return 'error'
  if (slippage?.greaterThan(MIN_HIGH_SLIPPAGE)) return 'warning'
  return
}
