import { useWeb3React } from '@web3-react/core'
import SwitchChainButton from 'components/Swap/SwapActionButton/SwitchChainButton'
import { SupportedChainId } from 'constants/chains'
import { useMintContext } from 'context/MintContext'
import { ChainError } from 'context/SwapContext'
import useOnSupportedNetwork from 'hooks/useOnSupportedNetwork'
import { useMemo } from 'react'
import { MintField } from 'state/mint'
import { useTheme } from 'styled-components/macro'

import MintButton from './MintButton'

export default function MintActionButton() {
  const { chainId, isActivating, isActive } = useWeb3React()
  const isSupported = useOnSupportedNetwork()
  const {
    currencies: { [MintField.CURRENCY_A]: currencyA, [MintField.CURRENCY_B]: currencyB },
  } = useMintContext()

  const { tokenColorExtraction } = useTheme()
  const color = tokenColorExtraction ? 'interactive' : 'accent'

  const chainError = useMemo(() => {
    const chainIdIn = currencyA?.chainId
    const chainIdOut = currencyB?.chainId
    const tokenChainId = chainIdIn || chainIdOut
    if (!isActive) return isActivating ? ChainError.ACTIVATING_CHAIN : ChainError.UNCONNECTED_CHAIN
    if (!isSupported) return ChainError.UNSUPPORTED_CHAIN
    if (chainIdIn && chainIdOut && chainIdIn !== chainIdOut) return ChainError.MISMATCHED_TOKEN_CHAINS
    if (chainId && tokenChainId && chainId !== tokenChainId) return ChainError.MISMATCHED_CHAINS
    return undefined
  }, [chainId, currencyA?.chainId, currencyB?.chainId, isActivating, isActive, isSupported])

  if (chainError === ChainError.MISMATCHED_CHAINS) {
    const tokenChainId = currencyA?.chainId ?? currencyB?.chainId ?? SupportedChainId.MAINNET
    return <SwitchChainButton color={color} chainId={tokenChainId} />
  } else {
    return <MintButton />
  }
}
