import { getAddress } from '@ethersproject/address'
import { AddressZero } from '@ethersproject/constants'
import { Contract } from '@ethersproject/contracts'
import { JsonRpcProvider, JsonRpcSigner } from '@ethersproject/providers'
import { FeeAmount } from '@uniswap/v3-sdk'
import router721ABI from 'abis/router721.json'
import V2RouterABI from 'abis/v2Router.json'
import { ROUTER_ADDRESSES, ROUTER_ADDRESSES_721 } from 'constants/addresses'
import { NETWORK_CHAIN_ID } from 'constants/chain'

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
  try {
    return getAddress(value)
  } catch {
    return false
  }
}

// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export function shortenAddress(address: string, chars = 4): string {
  const parsed = isAddress(address)
  if (!parsed) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }
  return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`
}

// account is not optional
function getSigner(provider: JsonRpcProvider, account: string): JsonRpcSigner {
  return provider.getSigner(account).connectUnchecked()
}

// account is optional
function getProviderOrSigner(provider: JsonRpcProvider, account?: string): JsonRpcProvider | JsonRpcSigner {
  return account ? getSigner(provider, account) : provider
}

// account is optional
export function getContract(address: string, ABI: any, provider: JsonRpcProvider, account?: string): Contract {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }

  return new Contract(address, ABI, getProviderOrSigner(provider, account) as any)
}

export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}

export function formattedFeeAmount(feeAmount: FeeAmount): number {
  return feeAmount / 10000
}

// account is optional
export function getRouterContract(chainId = NETWORK_CHAIN_ID, library: JsonRpcProvider, account?: string): Contract {
  return getContract(ROUTER_ADDRESSES[chainId], V2RouterABI, library, account)
}

export function getRouterContract721(chainId = NETWORK_CHAIN_ID, library: JsonRpcProvider, account?: string): Contract {
  return getContract(ROUTER_ADDRESSES_721[chainId], router721ABI, library, account)
}

declare global {
  interface String {
    trimTrailingZero(): string
  }
}

// eslint-disable-next-line no-extend-native
String.prototype.trimTrailingZero = function (this: string) {
  return this.replace(/(\.[0-9]*[1-9])0+$|\.0*$/, '$1')
}
