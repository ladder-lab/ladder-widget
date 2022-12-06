import { NETWORK_CHAIN_ID } from 'constants/chain'
import { getChainInfo } from 'constants/chainInfo'
import { AllTokens } from 'models/allTokens'

export function getSymbol(token: AllTokens | undefined) {
  return token ? (token.symbol === 'ETH' ? getChainInfo(NETWORK_CHAIN_ID)?.nativeCurrency.symbol : token.symbol) : ''
}

export function getName(token: AllTokens | undefined) {
  return token ? (token.symbol === 'ETH' ? getChainInfo(NETWORK_CHAIN_ID)?.nativeCurrency.name : token.name) : ''
}
