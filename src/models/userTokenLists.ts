import { ChainId } from '@ladder/sdk'

export interface UserTokenLists {
  erc1155: {
    [chainId in ChainId]?: {
      address: string
      tokenId: string | number
      metadata?: {
        name?: string
        symbol?: string
        uri?: string
      }
    }[]
  }
  erc721: {
    [chainId in ChainId]?: {
      address: string
      tokenId?: string | number
      metadata?: {
        name?: string
        symbol?: string
        uri?: string
      }
    }[]
  }
  erc20: {
    [chainId in ChainId]?: {
      address: string
      decimals: number
      symbol: string
      name: string
      uri?: string
    }[]
  }
}
