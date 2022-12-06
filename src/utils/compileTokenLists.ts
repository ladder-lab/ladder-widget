import { ChainId, Token } from '@ladder/sdk'
import { Token721 } from 'constants/token/token721'
import { Token1155 } from 'constants/token/token1155'
import { UserTokenLists } from 'models/userTokenLists'

export function compileTokenLists(tokenLists?: UserTokenLists) {
  if (!tokenLists) return { erc20: {}, erc1155: {}, erc721: {} }
  const list1155 = Object.keys(tokenLists.erc1155).reduce((acc, chainId) => {
    const list = tokenLists?.erc1155[+chainId as ChainId]
    if (!list) return acc
    acc[+chainId as ChainId] = list.map(
      ({ address, tokenId, metadata }) => new Token1155(+chainId, address, tokenId, metadata)
    )
    return acc
  }, {} as any)
  const list721 = Object.keys(tokenLists.erc721).reduce((acc, chainId) => {
    const list = tokenLists?.erc721[+chainId as ChainId]
    if (!list) return acc
    acc[+chainId as ChainId] = list.map(
      ({ address, tokenId, metadata }) => new Token721(+chainId, address, tokenId, metadata)
    )
    return acc
  }, {} as any)
  const list20 = Object.keys(tokenLists.erc20).reduce((acc, chainId) => {
    const list = tokenLists?.erc20[+chainId as ChainId]
    if (!list) return acc
    acc[+chainId as ChainId] = list.map(
      ({ address, decimals, symbol, name }) => new Token(+chainId, address, decimals, symbol, name)
    )
    return acc
  }, {} as any)
  return { erc20: list20, erc1155: list1155, erc721: list721 }
}
