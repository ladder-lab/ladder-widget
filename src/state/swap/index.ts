import { Currency, TradeType } from '@ladder/sdk'
import { FeeOptions } from '@uniswap/v3-sdk'
import { Token721 } from 'constants/token/token721'
import { atom } from 'jotai'
import { atomWithImmer } from 'jotai/immer'
import { AllTokens } from 'models/allTokens'

import { Slippage } from './settings'

export enum Field {
  INPUT = 'INPUT',
  OUTPUT = 'OUTPUT',
}

export interface Swap {
  type: TradeType
  amount: string
  [Field.INPUT]?: AllTokens
  [Field.OUTPUT]?: AllTokens
  tokenIdsIn?: Token721[] | undefined
  tokenIdsOut?: Token721[] | undefined
}

const initialSwap: Swap = {
  type: TradeType.EXACT_INPUT,
  amount: '',
  tokenIdsIn: undefined,
  tokenIdsOut: undefined,
}

export const controlledAtom = atom<Swap | undefined>(undefined)
export const stateAtom = atomWithImmer(initialSwap)
export const swapAtom = atom((get) => {
  const controlled = get(controlledAtom)
  return controlled ? controlled : get(stateAtom)
}, stateAtom.write)

// If set to a transaction hash, that transaction will display in a status dialog.
export const displayTxHashAtom = atom<string | undefined>(undefined)

export const feeOptionsAtom = atom<FeeOptions | undefined>(undefined)

/** An integration hook called when the user resets settings. */
export type OnSettingsReset = () => void

/** An integration hook called when the user changes slippage settings. */
export type OnSlippageChange = (slippage: Slippage) => void

/** An integration hook called when the user changes transaction deadline settings. */
export type OnTransactionDeadlineChange = (ttl: number | undefined) => void

interface SettingsEventHandlers {
  onSettingsReset?: OnSettingsReset
  onSlippageChange?: OnSlippageChange
  onTransactionDeadlineChange?: OnTransactionDeadlineChange
}

/** An integration hook called when the user selects a new token. */
export type OnTokenChange = (field: Field, token: Currency) => void

/**
 * An integration hook called when the user enters a new amount.
 * If the amount changed from the user clicking Max, origin will be set to 'max'.
 */
export type OnAmountChange = (field: Field, amount: string) => void

/** An integration hook called when the user switches the tokens. */
export type OnSwitchTokens = () => void

/**
 * An integration hook called when the user clicks the token selector.
 * If the hook resolve to false or rejects, the token selector will not open.
 */
export type OnTokenSelectorClick = (field: Field) => void | boolean | Promise<boolean>

interface InputEventHandlers {
  onTokenChange?: OnTokenChange
  onAmountChange?: OnAmountChange
  onSwitchTokens?: OnSwitchTokens
  onTokenSelectorClick?: OnTokenSelectorClick
  onSubTokenSwapChange?: onSubTokenSwapChange
}

/** An integration hook called when the user approves a token, either through allowance or permit. */
export type OnSwapApprove = () => void

/** An integration hook called when the user receives an initial quote for a set of inputs. */
export type OnInitialSwapQuote = (trade: TradeType) => void

/** An integration hook called when the user acks a quote's price update. */
export type OnSwapPriceUpdateAck = (stale: TradeType, update: TradeType) => void

/** An integration hook called when the user expands a swap's details. */
export type OnExpandSwapDetails = () => void

/**
 * An integration hook called when the user clicks 'Review swap'.
 * If the hook resolves to false or rejects, the review dialog will not open.
 */
export type OnReviewSwapClick = () => void | boolean | Promise<boolean>

/** An integration hook called when the user confirms a swap, but before it is submitted. */
export type OnSubmitSwapClick = (trade: TradeType) => void

export type onSubTokenSwapChange = (field: Field, subToken: Token721[]) => void

export interface SwapEventHandlers extends SettingsEventHandlers, InputEventHandlers {
  onSwapApprove?: OnSwapApprove
  onInitialSwapQuote?: OnInitialSwapQuote
  onSwapPriceUpdateAck?: OnSwapPriceUpdateAck
  onExpandSwapDetails?: OnExpandSwapDetails
  onReviewSwapClick?: OnReviewSwapClick
  onSubmitSwapClick?: OnSubmitSwapClick
}

export const swapEventHandlersAtom = atom<SwapEventHandlers>({})
