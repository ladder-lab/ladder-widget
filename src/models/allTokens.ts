import { Currency, Token } from '@ladder/sdk'
import * as sdk from '@ladder/sdk'
import { Token721 } from 'constants/token/token721'
import { Token1155 } from 'constants/token/token1155'

declare module '@ladder/sdk' {
  interface Currency {
    tokenId: string | number | undefined
    chainId: sdk.ChainId | undefined
  }
}

export type AllTokens = Currency | Token1155 | Token

export type NFT = Token1155 | Token721

export type TokenType = 'erc1155' | 'erc20' | 'erc721'
