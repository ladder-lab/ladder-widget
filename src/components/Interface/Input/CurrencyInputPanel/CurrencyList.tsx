import { Currency, ETHER, Token } from '@ladder/sdk'
import { Box, Typography } from '@mui/material'
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg'
import Input from 'components/Interface/Input/index'
import { getAddress } from 'ethers/lib/utils'
import useDebounce from 'hooks/useDebounce'
import { ChangeEvent, KeyboardEvent, useCallback, useMemo, useRef, useState } from 'react'
import { filterTokens, useSortedTokensByQuery } from 'utils/swap/filtering'
import { useTokenComparator } from 'utils/swap/sorting'

import { CurrencyListComponent } from './ListComponent'

interface Props {
  selectedCurrency?: Currency | null
  onSelectCurrency?: (currency: Currency) => void
  erc20List?: Currency[]
}

export default function CurrencyList({ onSelectCurrency, erc20List }: Props) {
  const [invertSearchOrder] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>('')

  const fixedList = useRef<HTMLDivElement>()

  const debouncedQuery = useDebounce(searchQuery, 200)
  const tokenComparator = useTokenComparator(invertSearchOrder)

  const filteredTokens: Token[] = useMemo(() => {
    if (!erc20List) return []
    return filterTokens(Object.values(erc20List as Token[]), debouncedQuery)
  }, [debouncedQuery, erc20List])

  const showETH: boolean = useMemo(() => {
    const s = debouncedQuery.toLowerCase().trim()
    return s === '' || s === 'e' || s === 'et' || s === 'eth'
  }, [debouncedQuery])

  const sortedTokens: Token[] = useMemo(() => {
    return filteredTokens.sort(tokenComparator)
  }, [filteredTokens, tokenComparator])

  const filteredSortedTokens = useSortedTokensByQuery(sortedTokens, debouncedQuery)
  //const filteredSortedTokensNFT = useSortedTokensByQuery(sortedTokens, debouncedQueryNFT)

  // manage focus on modal show
  const handleInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value
    const checksummedInput = getAddress(input)
    setSearchQuery(checksummedInput || input)
    fixedList.current?.scrollTo({ top: 0 })
  }, [])

  const handleEnter = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        const s = debouncedQuery.toLowerCase().trim()
        if (s === 'eth') {
          onSelectCurrency && onSelectCurrency(ETHER)
        } else if (filteredSortedTokens.length > 0) {
          if (
            filteredSortedTokens[0].symbol?.toLowerCase() === debouncedQuery.trim().toLowerCase() ||
            filteredSortedTokens.length === 1
          ) {
            onSelectCurrency && onSelectCurrency(filteredSortedTokens[0])
          }
        }
      }
    },
    [filteredSortedTokens, onSelectCurrency, debouncedQuery]
  )

  return (
    <Box display="flex" flexDirection={'column'} height="100%" sx={{ overflow: 'auto', padding: '0 10px' }}>
      <Input
        style={{ marginTop: 2 }}
        value={searchQuery}
        onChange={handleInput}
        placeholder="Search name or paste address"
        startAdornment={<SearchIcon />}
        onKeyDown={handleEnter}
        height={48}
      />
      <Box paddingTop={'24px'} position="relative" ref={fixedList}>
        {filteredSortedTokens?.length > 0 || filteredSortedTokens?.length > 0 ? (
          <CurrencyListComponent onSelect={onSelectCurrency} options={filteredSortedTokens} showETH={showETH} />
        ) : (
          <Box width={'100%'} display="flex" alignItems="center" justifyContent="center" height="60%">
            <Typography textAlign="center" mb="20px" fontSize={16} fontWeight={500}>
              No results found
            </Typography>
          </Box>
        )}
      </Box>{' '}
    </Box>
  )
}
