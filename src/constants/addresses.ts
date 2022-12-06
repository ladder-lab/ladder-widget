import { SupportedChainId } from 'constants/chains'
import { constructSameAddressMap } from 'utils/constructSameAddressMap'

type AddressMap = { [chainId: number]: string }

export const MULTICALL_ADDRESS: AddressMap = {
  ...constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984'),
  [SupportedChainId.SEPOLIA]: '0xE78D911B56a6321bF622172D32D916f9563e8D84',
}

export const SWAP_ROUTER_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45'),
}

export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8',
}

export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.GOERLI]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}

export const ROUTER_ADDRESSES = {
  4: '0x2cB34c38f7FFF789fab70AB69DAA9f7F05a4ecc8',
  56: '0x54F0d8485e931c22D542D7b95dbbf5ecdE9C91E8',
  1: '',
  5: '0x6ECBC55F9087b86aF9AADF553F086EfdAC5c1458',
  11155111: '0x6e2c879382520c7B15927902eEf1c0FbC1F8de91',
} as any

export const ROUTER_ADDRESSES_721 = {
  5: '0xB2d06a54f2DBC5a2b608358c034be6aA88646Df4',
  4: '0xC61d146BB1965ba0e387aA2Ad94c500a17dfe65F',
  56: '',
  1: '',
  11155111: '0x855AA5FAC685841C96F6d5cE103BF4a7122B016C',
} as any

export const FACTORY_ADDRESSES = {
  4: '0xB4AA7ce0558A8EbfC943928d6F3E5ceCc1650a46',
  56: '0xa1bf45AF7cDe8c105054611383E8ae3dA65615a3',
  1: '',
  5: '0x075333bF761555D28D78E40232ABdC548083C3D7',
} as any
