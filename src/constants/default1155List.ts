import { ChainId } from '@ladder/sdk'

const test1155List = [
  '0x322dE6C57eAEDbc01ab9695Ad37E0d1541014CA0',
  '0x1F25b15E58fE4B3E3866eed0263203D6318059D8',
  '0x11Da20BE3C3C14dAAFfBbe21743BF38D8567c7D5',
  '0x4afd442Ffb1Db26F647C09cFEd1046141C694043',
  '0x8Ff71Db9cBDae961b1f3bF092E815408968e2c38',
  '0xF57b4Cd37FdF1503D3233aA498A0eE86C4b73c58',
  '0xB6281d059A011982f46B885AaBA52dA608933757',
  '0x3AD70F216c0be1DFB6761C957D33dE1291ca1B79',
  '0x33d26866424F7791eB46A274F43344F6c9981A3b',
  '0x27b1940Ebc0C54A7cEF7ebc3b5A23133582A9feF',
]

const test1155Sepolia = [
  '0xC0Bd9b7F1508D2CE63D20789D50E84e8c92ec5CE',
  '0x252192e4DE982fB255f5263A3062B0E8bce6922b',
  '0xC7f387cAe7F1aD95E0F4454377275afcBef1C006',
  '0x45b0Bc415fA105B554D8E0832eAa77C5Fefe2Fe0',
  '0x434bEC95FEC15041ADF240c91FBa7A3Ef51c03CA',
  '0x4F9D8Cf796104C29dcf0E7df1Fa4225527DD7235',
  '0x41aa9fC2A343Aa9e699d87D2B8963C5dB1A58D12',
  '0x43f1138F109cAD8322754F97a46aF480A8F71A66',
  '0xF120b1be9Ab77c3cE13806016e647633F7Ca75D9',
]

const TEST_1155_LIST = test1155List.map((address, idx) => {
  return {
    address,
    tokenId: '1',
    metadata: {
      name: `Test NFT-ERC1155-${idx + 1}`,
      symbol: `TNT-${idx + 1}`,
      uri: ` https://info.chainswap.com/file/tnt-${idx + 1}.jpg`,
    },
  }
})
TEST_1155_LIST.push({ address: '0xbc0625fBFbCc7fe95197308b9660Ced5f7Ed9631', tokenId: 1 } as any)

export const DEFAULT_1155_LIST: {
  [chainId in ChainId]?: {
    address: string
    tokenId: string | number
    metadata?: {
      name?: string
      symbol?: string
      uri?: string
    }
  }[]
} = {
  [ChainId.MAINNET]: [] as any[],
  [ChainId.RINKEBY]: [
    {
      address: '0x75e4b5644eA842817155f960600b3cC3194D14C2',
      tokenId: 1,
      metadata: {
        name: 'Standard ERC1155',
        symbol: 'ERC1155',
      },
    },
    {
      address: '0x75e4b5644eA842817155f960600b3cC3194D14C2',
      tokenId: 17,
      metadata: {
        name: 'Standard ERC1155',
        symbol: 'ERC1155',
      },
    },
  ],
  [ChainId.BSC]: [
    {
      address: '0x26cA871A864f85A3673F7240D72daE54d1FcFd63',
      tokenId: 4,
    },
    { address: '0x26cA871A864f85A3673F7240D72daE54d1FcFd63', tokenId: 2 },
  ],
  [ChainId.GÖRLI]: TEST_1155_LIST,
  [ChainId.SEPOLIA]: test1155Sepolia.map((address, idx) => {
    return {
      address,
      tokenId: '1',
      metadata: {
        name: `LADDER-TEST-1155-${idx + 1}`,
        symbol: `T-1155-${idx + 1}`,
        uri: ` https://info.chainswap.com/file/tnt-${idx + 1}.jpg`,
      },
    }
  }),
}
