/* eslint-disable @typescript-eslint/no-empty-function */
import Close from '@mui/icons-material/Close'
import { Box, Button, Grid, IconButton, Typography, useTheme } from '@mui/material'
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg'
import { ReactComponent as Xcircle } from 'assets/svg/xcircle.svg'
import Dialog, { Header } from 'components/Dialog'
// import { useERC721Tokens } from 'state/swap/useSwap721State'
import { CloseIcon, ExternalLink } from 'components/Interface/components'
import CurrencyLogo from 'components/Interface/CurrencyLogo'
import LogoBase from 'components/Interface/CurrencyLogo/LogoBase'
import InputNumerical from 'components/Interface/Input/InputNumerical'
import { Loader } from 'components/Interface/Loader'
import LogoText from 'components/Interface/LogoText'
import SwitchToggle from 'components/Interface/SwitchToggle'
import { Token721 } from 'constants/token/token721'
import { useERC721Tokens } from 'hooks/swap/useSwap721State'
import { useToken721Balance, useToken721BalanceTokens } from 'hooks/useBalances'
import { useToken721PoolIds } from 'hooks/useToken721PoolIds'
import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { shortenAddress } from 'utils'

export default function Erc721IdSelectionModal({
  // isOpen,
  onDismiss,
  collection,
  onSelectSubTokens,
  pairAddress,
  setAmount,
}: {
  // isOpen: boolean
  onDismiss: () => void
  collection?: Token721
  onSelectSubTokens: (tokens: Token721[]) => void
  pairAddress?: string
  setAmount?: (e: ChangeEvent<HTMLInputElement>) => void
}) {
  const [searchId, setSearchId] = useState('')
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [selectAll, setSelectAll] = useState(false)
  const container = useRef<any>(null)

  const { onClearTokens, onRemoveToken, tokens, onToggleToken, setTokens } = useERC721Tokens()

  const balance = useToken721Balance(pairAddress ? undefined : collection)
  const { loading, availableTokens } = useToken721BalanceTokens(balance)
  const { loading: poolLoading, poolTokens } = useToken721PoolIds(pairAddress, collection)

  const [filteredAvailableTokens, setFilteredAvailableTokens] = useState(pairAddress ? poolTokens : availableTokens)

  const onConfirm = useCallback(() => {
    if (!collection) {
      return
    }
    setAmount && setAmount({ target: { value: tokens.length + '' } } as any)
    onSelectSubTokens && onSelectSubTokens([...tokens])
    const tokenIds = tokens.map(({ tokenId }) => tokenId)
    setFilteredAvailableTokens((prev: Token721[] | undefined) => {
      return prev?.filter((token: Token721) => !tokenIds.includes(token.tokenId))
    })

    onDismiss()
  }, [collection, onDismiss, onSelectSubTokens, setAmount, tokens])

  const searchIdToken = useMemo(() => {
    if (!filteredAvailableTokens || searchId == '') return undefined
    const res = filteredAvailableTokens.find((token: Token721) => (token.tokenId + '').includes(searchId))
    return res ? res : null
  }, [filteredAvailableTokens, searchId])

  const handleSearchId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchId(e.target.value)
  }, [])

  const resetSearchId = useCallback(() => {
    setSearchId('')
  }, [])

  useEffect(() => {
    setFilteredAvailableTokens(pairAddress ? poolTokens : availableTokens)
  }, [availableTokens, pairAddress, poolTokens])

  return (
    <Dialog onClose={onDismiss}>
      <Box width="100%" display="grid" gap={14}>
        <Header title="Select a NFT" />
        <Box padding="0 10px">
          <InputNumerical
            integer
            value={searchId}
            onChange={handleSearchId}
            placeholder="Search NFT token ID"
            endAdornment={<CloseIcon onClick={resetSearchId} sx={{ position: 'static' }} />}
            startAdornment={<SearchIcon />}
            onKeyDown={handleSearchId as any}
            height={48}
          />
        </Box>
      </Box>

      <Box display="flex" flexDirection={'column'} height="100%" sx={{ overflowY: 'auto', padding: '0 10px ' }}>
        <Box margin={'10px 0 20px'} sx={{ display: 'grid', alignItems: 'center', gap: 10 }}>
          <Typography>Collection:</Typography>
          <Box
            sx={{
              borderRadius: '8px',
              background: (theme) => theme.palette.background.paper,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              height: 50,
              padding: '0px 23px',
            }}
          >
            {collection?.name}
            <ExternalLink href={'#'} showIcon sx={{ fontSize: 12 }}>
              {collection ? shortenAddress(collection.address) : ''}
            </ExternalLink>
          </Box>

          <Box display="flex" alignItems="center" gap={5} marginLeft="auto">
            <Typography>Select all</Typography>
            <SwitchToggle
              checked={selectAll}
              onChange={() => {
                setSelectAll((state) => {
                  if (!state) {
                    setTokens(filteredAvailableTokens)
                  } else {
                    setTokens([])
                  }
                  return !state
                })
              }}
            />
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" gap={20}>
          <Box sx={{ minHeight: 290, width: '100%', maxWidth: '100%' }}>
            {loading || poolLoading ? (
              <Box width={'100%'} display="flex" mt={20} alignItems="center" justifyContent="center">
                <Loader />
              </Box>
            ) : (
              <Grid container spacing={6} width="100%" maxWidth="100%" flexBasis={0}>
                {(searchIdToken === null ||
                  filteredAvailableTokens?.length === 0 ||
                  (!filteredAvailableTokens && !loading)) && (
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
                )}
                {searchIdToken && (
                  <Grid item xs={6}>
                    <NftCard
                      selected={!!tokens.find((item: any) => item.tokenId === searchIdToken.tokenId)}
                      token={searchIdToken}
                      onClick={() => {
                        onToggleToken(searchIdToken)
                        resetSearchId()
                      }}
                      disabled={false}
                    />
                  </Grid>
                )}
                {searchIdToken === undefined &&
                  filteredAvailableTokens?.map((token: Token721) => {
                    const selected = tokens.filter((item: any) => item.tokenId === token.tokenId)
                    return (
                      <Grid item key={token.tokenId} xs={6}>
                        <NftCard
                          selected={!!selected.length}
                          token={token}
                          onClick={() => {
                            onToggleToken(token)
                            resetSearchId()
                          }}
                          disabled={false}
                        />
                      </Grid>
                    )
                  })}
              </Grid>
            )}
          </Box>
        </Box>
      </Box>

      <Box
        margin="15px 10px 20px"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
        ref={container}
      >
        <Button
          onClick={onConfirm}
          disabled={tokens.length === 0}
          // disabled={!!amount && tokens.length !== amount}
        >
          {tokens.length} NFTs has been chosen
          {/* {tokens.length === amount
                      ? `${tokens.length}/${amount} Confirm`
                      : amount === 0
                      ? `${tokens.length} NFTs has been chosen`
                      : `${amount} NFTs should be chosen`} */}
        </Button>
        {tokens.length > 0 && (
          <Button
            variant="text"
            sx={{ width: 85 }}
            onClick={() => {
              setDetailsOpen((state) => !state)
            }}
          >
            {detailsOpen ? <Close /> : 'Details'}
          </Button>
        )}
        {detailsOpen && (
          <Box
            sx={{
              position: 'absolute',
              bottom: '100%',
              boxShadow: 'none',
              maxHeight: 200,
              height: 'max-content',
              padding: '20px 0',
              background: (theme) => theme.palette.background.paper,
              zIndex: 1200,
              width: '100%',
            }}
          >
            {tokens.length > 0 && (
              <Box width="100%" mt={0}>
                {tokens.map((token: any, idx: number) => (
                  <Box
                    key={`${token.symbol}-${idx}`}
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}
                  >
                    <LogoText
                      logo={<CurrencyLogo currency={token} />}
                      text={token.name + `#${token.tokenId}`}
                      fontSize={12}
                    />
                    <ExternalLink href={'#'} showIcon sx={{ fontSize: 10 }}>
                      {shortenAddress(token.address)}
                    </ExternalLink>
                    <Typography sx={{ fontSize: 12 }}>Quantity: 1</Typography>
                    <IconButton onClick={() => onRemoveToken(token)}>
                      <Xcircle />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Dialog>
  )
}

function NftCard({
  token,
  onClick,
  disabled,
  selected = false,
}: {
  token: Token721
  onClick: () => void
  disabled: boolean
  selected?: boolean
}) {
  const theme = useTheme()

  return (
    <Box
      onClick={disabled ? undefined : onClick}
      sx={{
        border: '1px solid transparent',
        borderColor: selected ? theme.palette.primary.main : 'transparnet',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: 8,
        boxSizing: 'border-box',
        alignItems: 'center',
        borderRadius: '8px',
        background: theme.palette.background.default,
        transition: '0.5s',
        cursor: 'pointer',
        opacity: disabled ? 0.8 : 1,
        '&:hover': disabled
          ? {}
          : {
              borderColor: theme.palette.primary.main,
              background: theme.palette.background.default,
              cursor: 'pointer',
            },
      }}
    >
      <Box sx={{ maxWidth: '100%', height: 120, overflow: 'hidden' }}>
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
        {token.name ?? ''}
      </Typography>
      <Typography sx={{ color: theme.palette.text.secondary, fontSize: 12, fontWeight: 600, mb: 8 }}>
        #{token.tokenId ?? ''}
      </Typography>
      <Typography sx={{ color: theme.palette.text.secondary, fontSize: 10, fontWeight: 400, mb: 4 }}>
        {shortenAddress(token.address) ?? ''}
      </Typography>
      <Typography sx={{ fontSize: 10, fontWeight: 600 }}>
        <span style={{ color: theme.palette.text.secondary }}>balance: </span> 1
      </Typography>
    </Box>
  )
}
