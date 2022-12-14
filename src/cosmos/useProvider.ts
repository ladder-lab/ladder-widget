import { initializeConnector } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { Connector } from '@web3-react/types'
import { WalletConnect } from '@web3-react/walletconnect'
import { SupportedChainId } from 'constants/chains'
import { useEffect, useState } from 'react'

import useOption from './useOption'

const INFURA_KEY = process.env.INFURA_KEY
if (INFURA_KEY === undefined) {
  console.error(`INFURA_KEY must be a defined environment variable to use jsonRpcUrlMap in the cosmos viewer`)
}

export const INFURA_NETWORK_URLS: { [chainId: number]: string[] } = INFURA_KEY
  ? {
      [SupportedChainId.MAINNET]: [`https://mainnet.infura.io/v3/${INFURA_KEY}`],
      [SupportedChainId.SEPOLIA]: [`https://goerli.infura.io/v3/${INFURA_KEY}`],
      [SupportedChainId.GOERLI]: [`https://goerli.infura.io/v3/${INFURA_KEY}`],
    }
  : {}

enum Wallet {
  MetaMask = 'MetaMask',
  WalletConnect = 'WalletConnect',
}
const [metaMask] = initializeConnector<MetaMask>((actions) => new MetaMask({ actions }))
const [walletConnect] = initializeConnector<WalletConnect>(
  (actions) =>
    new WalletConnect({
      actions,
      options: {
        rpc: INFURA_NETWORK_URLS as { [chainId: number]: string[] },
      },
    })
)

export default function useProvider(defaultChainId?: number) {
  const connectorType = useOption('provider', { options: [Wallet.MetaMask, Wallet.WalletConnect] })
  const [connector, setConnector] = useState<Connector>()
  useEffect(() => {
    let stale = false
    activateConnector(connectorType)
    return () => {
      stale = true
    }

    async function activateConnector(connectorType: Wallet | undefined) {
      let connector: Connector | undefined
      switch (connectorType) {
        case Wallet.MetaMask:
          await metaMask.activate(defaultChainId)
          connector = metaMask
          break
        case Wallet.WalletConnect:
          await walletConnect.activate(defaultChainId)
          connector = walletConnect
      }
      if (!stale) {
        setConnector((oldConnector) => {
          oldConnector?.deactivate?.()
          return connector
        })
      }
    }
  }, [connectorType, defaultChainId])

  return connector?.provider
}
