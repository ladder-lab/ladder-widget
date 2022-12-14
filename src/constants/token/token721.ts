import { ChainId, Token } from '@ladder/sdk'
import { Axios } from 'utils/axios'

import { IS_TEST_NET } from '../chain'

/**
 * Represents an ERC721 token with a unique address and some metadata.
 */
export class Token721 extends Token {
  public readonly tokenId: string | number | undefined
  public readonly is721: true
  public name?: string
  public uri?: string
  public symbol?: string

  public constructor(
    chainId: ChainId,
    address: string,
    tokenId: string | number | undefined,
    metadata?: {
      name?: string
      symbol?: string
      uri?: string
    }
  ) {
    super(chainId, address, 0, metadata?.symbol, metadata?.name)
    this.tokenId = tokenId === '' ? undefined : tokenId
    this.is721 = true
    this.uri = metadata?.uri
    this.name = metadata?.name ?? 'ERC721'
    this.symbol = metadata?.symbol ?? 'NFT'

    if ((!metadata || !metadata.uri) && !IS_TEST_NET) {
      if (tokenId) {
        Axios.getMetadata(address, tokenId)
          .then((r) => {
            const metadata = r.data.result.metadata
            this.uri = metadata.image
            this.name = metadata.name
          })
          .catch((e) => {
            console.error(e)
          })
      }
    }
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token721): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true
    }
    return (
      this.chainId === other.chainId &&
      this.address.toLocaleLowerCase() === other.address.toLocaleLowerCase() &&
      this.tokenId === other.tokenId
    )
  }

  public setUri(uri: string) {
    this.uri = uri
  }
}
