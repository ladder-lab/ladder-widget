import { Box } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import ConnectWallet from 'components/ConnectWallet/ConnectWallet'
import CurrencyInputPanel from 'components/Interface/Input/CurrencyInputPanel'
import useSwapInfo from 'context/SwapContext'
import { useSwapAmount, useSwapCurrency, useSwapSubTokens } from 'hooks/swap'
import useSyncController, { SwapController } from 'hooks/swap/useSyncController'
import useSyncConvenienceFee, { FeeOptions } from 'hooks/swap/useSyncConvenienceFee'
import useSyncSwapEventHandlers, { SwapEventHandlers } from 'hooks/swap/useSyncSwapEventHandlers'
import { useState } from 'react'
import { Field } from 'state/swap'

import ReverseButton from './ReverseButton'
import SwapActionButton from './SwapActionButton'

// SwapProps also currently includes props needed for wallet connection (eg hideConnectionUI),
// since the wallet connection component exists within the Swap component.
// TODO(zzmp): refactor WalletConnection into Widget component
export interface SwapProps extends FeeOptions, SwapController, SwapEventHandlers {
  hideConnectionUI?: boolean
}

export default function Swap(props: SwapProps) {
  useSyncController(props as SwapController)
  useSyncConvenienceFee(props as FeeOptions)
  useSyncSwapEventHandlers(props as SwapEventHandlers)

  const { account } = useWeb3React()

  const [wrapper, setWrapper] = useState<HTMLDivElement | null>(null)

  const [, onSelectInput] = useSwapCurrency(Field.INPUT)
  const [, onSelectOutput] = useSwapCurrency(Field.OUTPUT)

  const [typedIn, onAmountInput] = useSwapAmount(Field.INPUT)
  const [typedOut, onAmountOutput] = useSwapAmount(Field.OUTPUT)

  const {
    [Field.INPUT]: { currency: currencyIn, amount: amountIn },
    [Field.OUTPUT]: { currency: currencyOut, amount: amountOut },
    independentField,
    pair721Address,
  } = useSwapInfo()

  const { updateTokenIdsIn, updateTokenIdsOut } = useSwapSubTokens()

  return (
    <>
      {/* <Header title={<Trans>Swap</Trans>}>
        <Wallet disabled={props.hideConnectionUI} />
        <Settings />
      </Header> */}
      <div ref={setWrapper}>
        <CurrencyInputPanel
          value={independentField === Field.INPUT ? typedIn ?? '' : amountIn?.toExact() ?? ''}
          onChange={onAmountInput}
          disabled={!account}
          currency={currencyIn}
          onSelectCurrency={onSelectInput}
          onSelectSubTokens={updateTokenIdsIn}
        />
        <ReverseButton />
        <CurrencyInputPanel
          enableAuto
          currency={currencyOut}
          value={independentField === Field.OUTPUT ? typedOut ?? '' : amountOut?.toExact() ?? ''}
          onChange={onAmountOutput}
          disabled={!account}
          onSelectCurrency={onSelectOutput}
          onSelectSubTokens={updateTokenIdsOut}
          pairAddress={pair721Address}
        />
      </div>
      <Box mt={'auto'}> {account ? <SwapActionButton /> : <ConnectWallet />}</Box>
    </>
  )
}
