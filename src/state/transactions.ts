import { TransactionReceipt, TransactionResponse } from '@ethersproject/abstract-provider'
import { Trade } from '@ladder/sdk'
import { Currency, CurrencyAmount, Percent, TradeType } from '@uniswap/sdk-core'
import { atomWithImmer } from 'jotai/immer'

export enum TransactionType {
  APPROVAL,
  SWAP,
  WRAP,
  UNWRAP,
  MINT,
}

interface BaseTransactionInfo {
  type: TransactionType
  response: TransactionResponse
  summary?: string
}

export interface ApprovalTransactionInfo extends BaseTransactionInfo {
  type: TransactionType.APPROVAL
  tokenAddress: string
  spenderAddress: string
}

export interface SwapTransactionInfo extends BaseTransactionInfo {
  type: TransactionType.SWAP
  tradeType?: TradeType
  trade?: Trade
  slippageTolerance?: Percent
}

export interface ExactInputSwapTransactionInfo extends SwapTransactionInfo {
  tradeType: TradeType.EXACT_INPUT
}

export interface ExactOutputSwapTransactionInfo extends SwapTransactionInfo {
  tradeType: TradeType.EXACT_OUTPUT
}

export interface WrapTransactionInfo extends BaseTransactionInfo {
  type: TransactionType.WRAP
  amount: CurrencyAmount<Currency>
}

export interface UnwrapTransactionInfo extends BaseTransactionInfo {
  type: TransactionType.UNWRAP
  amount: CurrencyAmount<Currency>
}

export interface MintTransactionInfo extends BaseTransactionInfo {
  type: TransactionType.MINT
}

export type TransactionInfo =
  | ApprovalTransactionInfo
  | SwapTransactionInfo
  | WrapTransactionInfo
  | UnwrapTransactionInfo
  | MintTransactionInfo

export interface Transaction<T extends TransactionInfo = TransactionInfo> {
  addedTime: number
  lastCheckedBlockNumber?: number
  receipt?: TransactionReceipt
  info: T
}

export const transactionsAtom = atomWithImmer<{
  [chainId: string]: { [hash: string]: Transaction }
}>({})
