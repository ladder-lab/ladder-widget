import { BigNumber } from '@ethersproject/bignumber'
import { TransactionResponse } from '@ethersproject/providers'
import { ETHER } from '@ladder/sdk'
import { useWeb3React } from '@web3-react/core'
import { useMintContext } from 'context/MintContext'
import { useSetOldestValidBlock } from 'hooks/useIsValidBlock'
import useSlippage from 'hooks/useSlippage'
import useTransactionDeadline from 'hooks/useTransactionDeadline'
import { useCallback, useMemo } from 'react'
import { MintField as Field, useMintActionHandlers } from 'state/mint'
import { TransactionType } from 'state/transactions'
import { getRouterContract, getRouterContract721 } from 'utils'
import { calculateGasMargin, calculateSlippageAmount } from 'utils/calculateGasMargin'
import { checkIs721, checkIs1155, filter721, filter1155 } from 'utils/checkIs1155'
import { getSymbol } from 'utils/getSymbol'
import { wrappedCurrency } from 'utils/wrappedCurrency'

export function useMintCallback() {
  const { chainId, provider: library, account } = useWeb3React()
  const { parsedAmounts, noLiquidity, currencies, currencyA, currencyB, tokenIds } = useMintContext()
  const { allowed: allowedSlippage } = useSlippage({})
  const deadline = useTransactionDeadline()
  const setOldestValidBlock = useSetOldestValidBlock()
  const { onResetMintState } = useMintActionHandlers(noLiquidity)

  const is721Pair = checkIs721(currencyA) || checkIs721(currencyB)

  const addLiquidityCb = useCallback(async () => {
    if (!chainId || !library || !account || !currencyA || !currencyB) return

    const router = is721Pair
      ? getRouterContract721(chainId, library, account)
      : getRouterContract(chainId, library, account)

    const { [Field.CURRENCY_A]: parsedAmountA, [Field.CURRENCY_B]: parsedAmountB } = parsedAmounts
    if (!parsedAmountA || !parsedAmountB || !currencyA || !currencyB || !deadline) {
      return
    }

    const slippageRaw = Number.parseFloat(allowedSlippage.toFixed(5)) * 100
    const amountsMin = {
      [Field.CURRENCY_A]: calculateSlippageAmount(parsedAmountA, noLiquidity ? 0 : slippageRaw)[0],
      [Field.CURRENCY_B]: calculateSlippageAmount(parsedAmountB, noLiquidity ? 0 : slippageRaw)[0],
    }

    let estimate,
      method: (...args: any) => Promise<TransactionResponse>,
      args: Array<string | string[] | number | Array<string | number>>,
      value: BigNumber | null
    const isA1155 = checkIs1155(currencyA) || checkIs721(currencyA)
    const isB1155 = checkIs1155(currencyB) || checkIs721(currencyB)

    if (currencyA === ETHER || currencyB === ETHER) {
      const tokenBIsETH = currencyB === ETHER
      const noNft = !isA1155 && !isB1155
      const methodName = noNft ? 'addLiquidityETH' : is721Pair ? 'addLiquidityETH721' : 'addLiquidityETH1155'
      estimate = router.estimateGas[methodName]
      method = router[methodName]
      args = is721Pair
        ? [
            wrappedCurrency(tokenBIsETH ? currencyA : currencyB, chainId)?.address ?? '', //721 address
            tokenIds ?? [], //ids
            (tokenBIsETH ? parsedAmountA : parsedAmountB).raw.toString(), //721 amount
            (tokenBIsETH ? amountsMin[Field.CURRENCY_B] : amountsMin[Field.CURRENCY_A]).toString(), //eth min,
            account,
            deadline.toHexString(),
          ]
        : [
            wrappedCurrency(tokenBIsETH ? currencyA : currencyB, chainId)?.address ?? '', // token
            ...(noNft
              ? []
              : [
                  tokenBIsETH
                    ? (filter1155(currencyA) ?? filter721(currencyA))?.tokenId ?? ''
                    : (filter1155(currencyB) ?? filter721(currencyB))?.tokenId ?? '',
                ]), //tokenId
            (tokenBIsETH ? parsedAmountA : parsedAmountB).raw.toString(), // token desired
            amountsMin[tokenBIsETH ? Field.CURRENCY_A : Field.CURRENCY_B].toString(), // token min
            amountsMin[tokenBIsETH ? Field.CURRENCY_B : Field.CURRENCY_A].toString(), // eth min
            account,
            deadline.toHexString(),
          ]
      value = BigNumber.from((tokenBIsETH ? parsedAmountB : parsedAmountA).raw.toString())
    } else {
      const tokenAIs1155 = checkIs1155(currencyA) || checkIs721(currencyA)
      const noNft = !isA1155 && !isB1155
      const methodName = noNft ? 'addLiquidity' : is721Pair ? 'addLiquidity721' : 'addLiquidity1155'
      const token1155 =
        filter1155(tokenAIs1155 ? currencyA : currencyB) ?? filter721(tokenAIs1155 ? currencyA : currencyB)
      const token = tokenAIs1155 ? currencyB : currencyA
      estimate = router.estimateGas[methodName]
      method = router[methodName]

      args = is721Pair
        ? [
            token1155?.address ?? '', //token721 address
            tokenIds, //nftIds
            ((tokenAIs1155 ? currencyB : currencyA) as any).address ?? '', //tokenB address
            (tokenAIs1155 ? parsedAmountB : parsedAmountA).raw.toString(), //amountBDesired
            (tokenAIs1155 ? amountsMin[Field.CURRENCY_B] : amountsMin[Field.CURRENCY_A]).toString(), //amountBMin
            account,
            deadline.toHexString(),
          ]
        : [
            token1155?.address ?? wrappedCurrency(currencyB, chainId)?.address,
            ...(noNft ? [] : [token1155?.tokenId ?? '']),
            wrappedCurrency(token, chainId)?.address ?? '',
            (tokenAIs1155 ? parsedAmountA : parsedAmountB).raw.toString(),
            (tokenAIs1155 ? parsedAmountB : parsedAmountA).raw.toString(),
            amountsMin[tokenAIs1155 ? Field.CURRENCY_A : Field.CURRENCY_B].toString(),
            amountsMin[tokenAIs1155 ? Field.CURRENCY_B : Field.CURRENCY_A].toString(),
            account,
            deadline.toHexString(),
          ]
      value = null
    }
    const estimatedGasLimit = await estimate(...args, value ? { value } : {})

    return method(...args, {
      ...(value ? { value } : {}),
      gasLimit: calculateGasMargin(estimatedGasLimit),
    })
      .then((response) => {
        onResetMintState()
        const summary =
          'Add ' +
          parsedAmounts[Field.CURRENCY_A]?.toSignificant(3) +
          ' ' +
          getSymbol(currencies[Field.CURRENCY_A]) +
          ' and ' +
          parsedAmounts[Field.CURRENCY_B]?.toSignificant(3) +
          ' ' +
          getSymbol(currencies[Field.CURRENCY_B])

        response.blockNumber && setOldestValidBlock(response.blockNumber)
        return {
          response: response as TransactionResponse,
          summary,
          type: TransactionType.MINT,
        }
      })
      .catch((error) => {
        // if the user rejected the tx, pass this along
        if (error?.code === 4001) {
          throw new Error('Transaction rejected.')
        } else {
          // otherwise, the error was unexpected and we need to convey that
          console.error(`Mint failed`, error, args, value)
          throw new Error(`Mint failed: ${error.message}`)
        }
      })
  }, [
    account,
    allowedSlippage,
    chainId,
    currencies,
    currencyA,
    currencyB,
    deadline,
    is721Pair,
    library,
    noLiquidity,
    onResetMintState,
    parsedAmounts,
    setOldestValidBlock,
    tokenIds,
  ])

  return useMemo(
    () => ({
      addLiquidityCb,
    }),
    [addLiquidityCb]
  )
}
