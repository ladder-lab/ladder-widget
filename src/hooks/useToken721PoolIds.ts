import { ChainId } from '@ladder/sdk'
import { useWeb3React } from '@web3-react/core'
import { getTest721uri, isTest721 } from 'constants/default721List'
import { Token721 } from 'constants/token/token721'
import { useMemo } from 'react'

import { useSingleCallResult } from './multicall'
import { use721PairContract } from './useContract'

export function useToken721PoolIds(pairAddress: string | undefined, collection: Token721 | undefined) {
  const { chainId } = useWeb3React()
  const contract = use721PairContract(pairAddress)
  const length = useSingleCallResult(contract, 'erc721MapLength')

  const args = useMemo(() => {
    return length.result ? [0, length.result.toString()] : undefined
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length?.result?.toString()])

  const ids = useSingleCallResult(args ? contract : null, 'erc721IDlist', args)

  const results = useMemo(() => {
    const isTeset721 = collection?.address && chainId === ChainId.GÖRLI && isTest721(collection?.address)

    return {
      loading: ids.loading,
      poolTokens:
        ids.result && collection
          ? ids.result?.[0]?.map(
              (id: any) =>
                new Token721(collection?.chainId, collection?.address, +id.toString(), {
                  name: collection.name,
                  symbol: collection.symbol,
                  uri: isTeset721 && collection.name ? getTest721uri(collection.name) : undefined,
                })
            )
          : undefined,
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainId, collection, ids.loading, ids.result?.[0].toString()])
  return results
}
