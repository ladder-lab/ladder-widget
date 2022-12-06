import { Currency, Token } from '@ladder/sdk'
import { Box, Grid, Typography, useTheme } from '@mui/material'
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg'
import LogoBase from 'components/Interface/CurrencyLogo/LogoBase'
import Input from 'components/Interface/Input/index'
import { Token1155 } from 'constants/token/token1155'
import { useToken1155Balance, useToken1155Balances } from 'hooks/useBalances'
import useDebounce from 'hooks/useDebounce'
import useModal from 'hooks/useModal'
import { AllTokens } from 'models/allTokens'
import { ChangeEvent, KeyboardEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { isAddress, shortenAddress } from 'utils'
import { filterTokens } from 'utils/swap/filtering'

import { Loader } from '../../Loader'

interface Props {
  selectedCurrency?: Currency | null
  onSelectCurrency?: (currency: Currency) => void
  erc1155List?: Token1155[]
  onClick?: (token: AllTokens) => void
}

export default function NftList({ onClick, onSelectCurrency, erc1155List }: Props) {
  const [searchQueryNFT, setSearchQueryNFT] = useState<string>('')
  const List = useRef<HTMLDivElement>(null)
  const { hideModal } = useModal()

  const debouncedQueryNFT = useDebounce(searchQueryNFT, 200)

  const handleNFTInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value
    const checksummedInput = isAddress(input)
    setSearchQueryNFT(checksummedInput || input)
    List.current?.scrollTo({ top: 0 })
  }, [])

  const filteredTokens1155: Token[] | Token1155[] = useMemo(() => {
    if (!erc1155List) return []
    const idSearch = debouncedQueryNFT.match(/^#[0-9]+/) ? debouncedQueryNFT.slice(1) : false

    return idSearch
      ? erc1155List.filter((item) => item.tokenId == idSearch)
      : filterTokens(Object.values(erc1155List), debouncedQueryNFT)
  }, [debouncedQueryNFT, erc1155List])

  const { balances, loading } = useToken1155Balances(filteredTokens1155 as Token1155[])
  const sortedList = useMemo(() => {
    return balances?.sort((amount1, amount2) => {
      return amount1.greaterThan(amount2) ? -1 : 1
    })
  }, [balances])

  const handleEnter1155 = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        if (filteredTokens1155.length > 0) {
          if (
            filteredTokens1155[0].symbol?.toLowerCase() === debouncedQueryNFT.trim().toLowerCase() ||
            filteredTokens1155.length === 1
          ) {
            onSelectCurrency && onSelectCurrency(filteredTokens1155[0])
          }
        }
      }
    },
    [filteredTokens1155, debouncedQueryNFT, onSelectCurrency]
  )

  useEffect(() => {
    return () => setSearchQueryNFT('')
  }, [])

  return (
    <Box display="flex" flexDirection={'column'} height="100%" sx={{ overflow: 'auto', padding: '0 10px' }} ref={List}>
      <Input
        style={{ marginTop: 2 }}
        value={searchQueryNFT}
        onChange={handleNFTInput}
        placeholder="Search name or paste address"
        startAdornment={<SearchIcon />}
        onKeyDown={handleEnter1155}
        height={48}
      />

      <Grid
        container
        spacing={10}
        paddingTop={'5px'}
        position="relative"
        flexGrow={1}
        sx={{ marginTop: 10, marginBottom: '10px' }}
      >
        {filteredTokens1155.length === 0 ? (
          <Box width={'100%'} display="flex" alignItems="center" justifyContent="center" height="60%">
            <Typography textAlign="center" mb="20px" fontSize={16} fontWeight={500}>
              No results found
            </Typography>
          </Box>
        ) : (
          <>
            {loading && (
              <Box width={'100%'} display="flex" alignItems="center" justifyContent="center" height="60%">
                <Loader />
              </Box>
            )}
            {!loading &&
              sortedList?.map(({ token }, idx) => (
                <Grid item xs={6} key={idx}>
                  <NftCard
                    key={idx}
                    token={token as Token1155}
                    onClick={() => {
                      onClick && onClick(token)

                      hideModal()
                    }}
                  />
                </Grid>
              ))}
          </>
        )}
      </Grid>
    </Box>
  )
}

function NftCard({ token, onClick }: { token: Token1155; onClick: () => void }) {
  const theme = useTheme()
  const balance = useToken1155Balance(token)

  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 5,
        alignItems: 'center',
        borderRadius: '8px',
        background: theme.palette.background.paper,
        transition: '0.5s',
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '0px 0px 5px ' + theme.palette.primary.main,
          cursor: 'pointer',
        },
      }}
    >
      <Box sx={{ width: '100%', height: 80, overflow: 'hidden' }}>
        <LogoBase
          srcs={token?.uri ? [token.uri] : []}
          alt={token.name ?? ''}
          style={{
            borderRadius: '8px',
            overflow: 'hidden',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>
      <Typography
        sx={{
          color: theme.palette.text.secondary,
          fontSize: 12,
          fontWeight: 600,
          mt: 8,

          width: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          textAlign: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        {token.name}
      </Typography>
      <Typography sx={{ color: theme.palette.text.secondary, fontSize: 12, fontWeight: 600, mb: 8 }}>
        #{token.tokenId}
      </Typography>
      <Typography sx={{ color: theme.palette.text.secondary, fontSize: 10, fontWeight: 400, mb: 4 }}>
        {shortenAddress(token.address)}
      </Typography>
      <Typography sx={{ fontSize: 10, fontWeight: 600 }}>
        <span style={{ color: theme.palette.text.secondary }}>balance: </span>
        {balance?.toFixed(0)}
        {/* /<span style={{ color: theme.palette.text.secondary }}>1 M</span> */}
      </Typography>
    </Box>
  )
}
