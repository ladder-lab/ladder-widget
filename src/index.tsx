import 'polyfills'

import Ladder from 'components/Ladder'
import Swap, { SwapProps } from 'components/Swap'
import Widget, { LadderProps, WidgetProps as InterfaceProps } from 'components/Widget'

export type { Provider as EthersProvider } from '@ethersproject/abstract-provider'
export type { JsonRpcProvider } from '@ethersproject/providers'
export type { Currency } from '@uniswap/sdk-core'
export { TradeType } from '@uniswap/sdk-core'
export type { TokenInfo } from '@uniswap/token-lists'
export type { Provider as Eip1193Provider } from '@web3-react/types'
export type { SwapWidgetSkeletonProps } from 'components/Swap/Skeleton'
export { SwapWidgetSkeleton } from 'components/Swap/Skeleton'
export { SupportedChainId } from 'constants/chains'
export type { SupportedLocale } from 'constants/locales'
export { DEFAULT_LOCALE, SUPPORTED_LOCALES } from 'constants/locales'
export type { SwapController } from 'hooks/swap/useSyncController'
export type { FeeOptions } from 'hooks/swap/useSyncConvenienceFee'
export type { OnTxFail, OnTxSubmit, OnTxSuccess, TransactionEventHandlers } from 'hooks/transactions'
export type {
  AddEthereumChainParameter,
  OnConnectWalletClick,
  OnError,
  OnSwitchChain,
  WidgetEventHandlers,
} from 'hooks/useSyncWidgetEventHandlers'
export type { JsonRpcConnectionMap } from 'hooks/web3/useJsonRpcUrlsMap'
export type {
  OnAmountChange,
  OnExpandSwapDetails,
  OnInitialSwapQuote,
  OnReviewSwapClick,
  OnSettingsReset,
  OnSlippageChange,
  OnSubmitSwapClick,
  OnSwapApprove,
  OnSwapPriceUpdateAck,
  OnSwitchTokens,
  OnTokenChange,
  OnTokenSelectorClick,
  OnTransactionDeadlineChange,
  SwapEventHandlers,
} from 'state/swap'
export { Field } from 'state/swap'
export type { Slippage } from 'state/swap/settings'
export type {
  ApprovalTransactionInfo,
  ExactInputSwapTransactionInfo,
  ExactOutputSwapTransactionInfo,
  SwapTransactionInfo,
  Transaction,
  TransactionInfo,
  UnwrapTransactionInfo,
  WrapTransactionInfo,
} from 'state/transactions'
export { TransactionType } from 'state/transactions'
export type { Theme } from 'theme'
export { darkTheme, defaultTheme, lightTheme } from 'theme'
export { invertTradeType, toTradeType } from 'utils/tradeType'

export type WidgetProps = InterfaceProps

export function LadderWidget(props: WidgetProps & LadderProps) {
  return (
    <Widget {...props}>
      <Ladder />
    </Widget>
  )
}

export function SwapWidget(props: WidgetProps & SwapProps) {
  return (
    <Widget {...props}>
      <Swap {...props} />
    </Widget>
  )
}
