import { TokenAmount } from '@ladder/sdk'
import { Box } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import { ReactComponent as AddCircle } from 'assets/svg/add_circle.svg'
import ConnectWallet from 'components/ConnectWallet/ConnectWallet'
import CurrencyInputPanel from 'components/Interface/Input/CurrencyInputPanel'
import { Token721 } from 'constants/token/token721'
import { useMintContext } from 'context/MintContext'
import { SwapController } from 'hooks/swap/useSyncController'
import { FeeOptions } from 'hooks/swap/useSyncConvenienceFee'
import { SwapEventHandlers } from 'hooks/swap/useSyncSwapEventHandlers'
import { useCallback } from 'react'
import { useMintActionHandlers } from 'state/mint'
import { MintField as Field } from 'state/mint'
import { maxAmountSpend } from 'utils/maxAmountSpend'

import MintActionButton from './MintActionButton'

// SwapProps also currently includes props needed for wallet connection (eg hideConnectionUI),
// since the wallet connection component exists within the Swap component.
// TODO(zzmp): refactor WalletConnection into Widget component
export interface SwapProps extends FeeOptions, SwapController, SwapEventHandlers {
  hideConnectionUI?: boolean
}

export default function Mint(props: SwapProps) {
  const { account } = useWeb3React()
  const {
    dependentField,
    currencyA,
    currencyB,
    currencyBalances,
    parsedAmounts,
    noLiquidity,
    setCurrencyA,
    setCurrencyB,
    independentField,
    typedValue,
    otherTypedValue,
  } = useMintContext()
  const { onFieldAInput, onFieldBInput, onSetTokenIds } = useMintActionHandlers(noLiquidity)

  // get formatted amounts
  const formattedAmounts = {
    [independentField ?? Field.CURRENCY_A]: typedValue,
    [dependentField]: noLiquidity ? otherTypedValue : parsedAmounts[dependentField]?.toSignificant(6) ?? '',
  }

  // get the max amounts user can add
  const maxAmounts: { [field in Field]?: TokenAmount } = [Field.CURRENCY_A, Field.CURRENCY_B].reduce(
    (accumulator, field) => {
      return {
        ...accumulator,
        [field]: maxAmountSpend(currencyBalances[field]),
      }
    },
    {}
  )

  const handleMaxInputA = useCallback(() => {
    onFieldAInput(maxAmounts[Field.CURRENCY_A]?.toFixed(6, undefined, 0) ?? '')
  }, [maxAmounts, onFieldAInput])

  const handleMaxInputB = useCallback(() => {
    onFieldBInput(maxAmounts[Field.CURRENCY_B]?.toFixed(6, undefined, 0) ?? '')
  }, [maxAmounts, onFieldBInput])

  const handleTokenIds = useCallback(
    (tokens: Token721[]) => {
      const list = tokens.map(({ tokenId }) => tokenId)
      onSetTokenIds(list as any[])
    },
    [onSetTokenIds]
  )

  return (
    <>
      <div>
        <CurrencyInputPanel
          value={formattedAmounts[Field.CURRENCY_A] ?? '-'}
          onChange={onFieldAInput}
          onSelectCurrency={setCurrencyA}
          currency={currencyA}
          onMax={handleMaxInputA}
          onSelectSubTokens={handleTokenIds}
          disabled={!account}
        />
        <Box
          sx={{
            paddingBottom: 12,
            margin: '0 auto',
            width: 'max-content',
            '&:hover': {
              opacity: 0.8,
            },
            display: 'flex',
            justifyContent: {
              xs: 'center',
              md: 'flex-start',
            },
          }}
        >
          <AddCircle />
        </Box>
        <CurrencyInputPanel
          value={formattedAmounts[Field.CURRENCY_B] ?? '-'}
          onChange={onFieldBInput}
          onSelectCurrency={setCurrencyB}
          currency={currencyB}
          onMax={handleMaxInputB}
          onSelectSubTokens={handleTokenIds}
          disabled={!account}
        />
      </div>
      <Box mt={'auto'}> {account ? <MintActionButton /> : <ConnectWallet />}</Box>
    </>
  )
}
