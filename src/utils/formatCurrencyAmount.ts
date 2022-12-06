import { CurrencyAmount, Price } from '@ladder/sdk'

import {
  currencyAmountToPreciseFloat,
  formatDollar,
  formatTransactionAmount,
  priceToPreciseFloat,
} from './formatNumbers'

interface FormatCurrencyAmountArgs {
  amount: CurrencyAmount | undefined
  isUsdPrice?: boolean
}

/**
 * Returns currency amount formatted as a human readable string.
 * @param amount currency amount
 * @param isUsdPrice whether the amount is denominated in USD or USD equivalent
 */
export function formatCurrencyAmount({ amount, isUsdPrice = false }: FormatCurrencyAmountArgs): string {
  if (!amount) return ''
  const currencyAmountNumber = currencyAmountToPreciseFloat(amount)
  return isUsdPrice ? formatDollar({ num: currencyAmountNumber }) : formatTransactionAmount(currencyAmountNumber)
}

/**
 * Returns price formatted as a human readable string.
 * @param price price
 */
export function formatPrice(price: Price | undefined): string {
  return formatTransactionAmount(priceToPreciseFloat(price))
}
