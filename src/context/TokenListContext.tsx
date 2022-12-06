/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Currency } from '@ladder/sdk'
import { useWeb3React } from '@web3-react/core'
import { Token721 } from 'constants/token/token721'
import { Token1155 } from 'constants/token/token1155'
import { createContext, PropsWithChildren, useContext, useMemo } from 'react'

interface Lists {
  erc20List: Currency[]
  erc1155List: Token1155[]
  erc721Map: { [key: string]: Token721 }
  erc721List: Token721[]
}

export type ChainTokenMap = Readonly<Lists>

export const EMPTY_TOKEN_LIST = []

const defaultContext = {
  erc20List: [] as Currency[],
  erc1155List: [] as Token1155[],
  erc721Map: {},
  erc721List: [] as Token721[],
}

const TokenMapContext = createContext(defaultContext)

export function useTokenLists() {
  const chainTokenMap = useContext(TokenMapContext)

  return chainTokenMap
}

export function TokenListsProvider({
  children,
  erc20List,
  erc1155List,
  erc721List,
}: PropsWithChildren<{
  erc20List: { [chainId: number]: Currency[] | undefined } | undefined
  erc1155List: { [chainId: number]: Token1155[] | undefined } | undefined
  erc721List: { [chainId: number]: Token721[] | undefined } | undefined
}>) {
  const { chainId } = useWeb3React()

  const val = useMemo(() => {
    if (!chainId) {
      return defaultContext
    }
    return {
      erc20List: erc20List?.[chainId] ? erc20List[chainId]! : [],
      erc1155List: erc1155List?.[chainId] ? erc1155List[chainId]! : [],
      erc721List: erc721List?.[chainId] ? erc721List[chainId]! : [],
      erc721Map: erc721List?.[chainId] ? ListToMap(erc721List[chainId]!) : {},
    }
  }, [chainId, erc1155List, erc20List, erc721List])
  return <TokenMapContext.Provider value={val}>{children}</TokenMapContext.Provider>
}

function ListToMap(list: any[]) {
  return list.reduce((acc, item) => {
    if (item.address) {
      acc[item.address] = item
    }

    return acc
  }, {} as { [key: string]: any })
}
