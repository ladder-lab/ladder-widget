import { Token } from '@ladder/sdk'
import { Box, Typography } from '@mui/material'
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg'
import Input from 'components/Interface/Input/index'
// TOOD: Update to ERC721
import { Token721 } from 'constants/token/token721'
import useDebounce from 'hooks/useDebounce'
import useModal from 'hooks/useModal'
import { AllTokens } from 'models/allTokens'
import { ChangeEvent, KeyboardEvent, useCallback, useMemo, useState } from 'react'
import { isAddress } from 'utils'
import { filterTokens } from 'utils/swap/filtering'

import { CollectionListComponent } from './ListComponent'

export default function ERC721List({
  onSelectCurrency,
  erc721List,
}: {
  onSelectCurrency: ((currency: AllTokens) => void) | undefined
  erc721List: { [address: string]: Token721 }
}) {
  const [searchQueryNFT, setSearchQueryNFT] = useState<string>('')

  const { hideModal } = useModal()

  const debouncedQueryNFT = useDebounce(searchQueryNFT, 200)

  const filteredTokens: Token[] | Token721[] = useMemo(() => {
    return filterTokens(Object.values(erc721List), debouncedQueryNFT)
  }, [debouncedQueryNFT, erc721List])

  const handleInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value
    const checksummedInput = isAddress(input)
    setSearchQueryNFT(checksummedInput || input)
  }, [])

  const onSelectCollection = useCallback(
    (collection: Token721) => {
      onSelectCurrency && onSelectCurrency(collection)

      hideModal()
    },
    [hideModal, onSelectCurrency]
  )

  const handleEnter721 = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        if (filteredTokens.length > 0) {
        }
      }
    },
    [filteredTokens.length]
  )

  return (
    <Box display="flex" flexDirection={'column'} height="100%" sx={{ overflow: 'auto', padding: '0 10px' }}>
      <Input
        style={{ marginTop: 2 }}
        value={searchQueryNFT}
        onChange={handleInput}
        placeholder="Search name or paste address"
        // outlined
        startAdornment={<SearchIcon />}
        onKeyDown={handleEnter721}
        height={48}
      />

      <Box sx={{ overflow: 'auto' }}>
        <Box paddingTop={'24px'} position="relative">
          {filteredTokens.length === 0 ? (
            <Box width={'100%'} display="flex" alignItems="center" justifyContent="center" mt={100}>
              <Typography
                textAlign="center"
                mb="20px"
                fontSize={16}
                fontWeight={500}
                component="div"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                No results found.
              </Typography>
            </Box>
          ) : (
            <CollectionListComponent
              onSelect={onSelectCollection}
              options={filteredTokens.length ? (filteredTokens as Token721[]) : []}
            />
          )}
        </Box>
      </Box>
    </Box>
  )
}
