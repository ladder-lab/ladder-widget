import { Currency, Token } from '@ladder/sdk'
import { useWeb3React } from '@web3-react/core'
import tokenLogoUriList from 'assets/tokenLogoUriList.json'
import { NETWORK_CHAIN_ID } from 'constants/chain'
import { getChainInfo } from 'constants/chainInfo'
import { Token721 } from 'constants/token/token721'
import { Token1155 } from 'constants/token/token1155'
import useHttpLocations from 'hooks/useHttpLocations'
import { WrappedTokenInfo } from 'models/tokenList'
import React, { useMemo } from 'react'

import Logo from './LogoBase'

export const getTokenLogoURL = (address: string) =>
  `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${address}/logo.png`

export default function CurrencyLogo({
  currency,
  size = '24px',
  style,
  currencySymbol,
}: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
  currencySymbol?: string
}) {
  const { chainId } = useWeb3React()

  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)
  const srcs: string[] = useMemo(() => {
    if (!currency && !currencySymbol) {
      return []
    }

    if (currency?.symbol === 'ETH') {
      const uri = (tokenLogoUriList as any)[getChainInfo(chainId ?? NETWORK_CHAIN_ID)?.nativeCurrency.symbol ?? 'ETH']
      if (uri) return [uri]
    }

    if (currencySymbol) {
      const uri = (tokenLogoUriList as any)[currencySymbol]
      if (uri) return [uri]
    }
    if (!currency) return []

    if (currency instanceof Token1155 || currency instanceof Token721) {
      if (currency.uri) {
        return [currency.uri]
      }
    }

    if (currency?.symbol) {
      const uri = (tokenLogoUriList as any)[currency.symbol]
      if (uri) return [uri]
    }

    if (currency instanceof Token) {
      let uri = ''
      if (currency?.symbol) {
        uri = (tokenLogoUriList as any)[currency.symbol]
      }
      return [...uriLocations, getTokenLogoURL(currency.address), uri]
    }

    return []
  }, [chainId, currency, currencySymbol, uriLocations])

  return (
    <Logo
      style={{
        ...style,
        width: size,
        height: size,
        borderRadius: size,
        boxShadow: ' 0px 6px 10px rgba(0, 0, 0, 0.075)',
        objectFit: 'cover',
        background: '#ffffff',
      }}
      srcs={srcs}
      alt={`${currency?.symbol ?? 'token'} logo`}
    />
  )
}
