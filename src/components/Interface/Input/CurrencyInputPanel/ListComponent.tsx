import { Currency, ETHER } from '@ladder/sdk'
import { Box, styled, Typography } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import CurrencyLogo from 'components/Interface/CurrencyLogo'
import Spinner from 'components/Interface/Spinner'
import { Token721 } from 'constants/token/token721'
import { useCurrencyBalance } from 'hooks/useBalances'
import useModal from 'hooks/useModal'
import { useCallback, useMemo } from 'react'
import { getName, getSymbol } from 'utils/getSymbol'

export function CurrencyListComponent({
  onSelect,
  options,
  showETH,
}: {
  onSelect?: (currency: Currency) => void
  options: Currency[]
  showETH?: boolean
}) {
  const { hideModal } = useModal()

  const Rows = useCallback(
    ({ data, index }: any) => {
      const currency: Currency = data
      const onClickCurrency = () => {
        onSelect && onSelect(currency)
        hideModal()
      }

      return <CurrencyRow currency={currency} onClick={onClickCurrency} />
    },
    [hideModal, onSelect]
  )

  const itemData: (Currency | undefined)[] = useMemo(() => {
    const formatted: (Currency | undefined)[] = showETH ? [ETHER, ...options] : options

    return formatted
  }, [options, showETH])

  return (
    <Box>
      {itemData && itemData.map((data, index) => <Rows data={data} index={index} key={JSON.stringify(data) + index} />)}
    </Box>
  )
}

export function CollectionListComponent({
  onSelect,
  options,
}: {
  onSelect?: (collection: Token721) => void
  options: Token721[]
}) {
  // const isDownMd = useBreakpoint('md')

  // const key = useCallback((collection: Token721): string => {
  //   return collection ? collection.tokenId?.toString() || idx + '' : ''
  // }, [])

  const Rows = useCallback(
    ({ data }: any) => {
      const collection: Token721 = data
      const onClickCollection = () => {
        onSelect && onSelect(collection)
      }

      return <CurrencyRow currency={collection} onClick={onClickCollection} />
    },
    [onSelect]
  )

  return (
    <Box width="100%">
      {options.map((item, index) => (
        <Rows data={item} key={item?.symbol + '' + index} />
      ))}
    </Box>
  )
}

const StyledBalanceText = styled(Typography)(`
  white-space: nowrap;
  overflow: hidden;
  max-width: 5rem;
  text-overflow: ellipsis;
`)

const ListItem = styled('div')({
  display: 'flex',
  cursor: 'pointer',
  padding: '0 32px',
  height: '48px',
  justifyContent: 'space-between',
})

function CurrencyRow({ currency, onClick, style }: { currency: Currency; onClick: () => void; style?: any }) {
  const { account } = useWeb3React()
  const balance = useCurrencyBalance(account ?? undefined, currency)

  return (
    <ListItem onClick={onClick} style={style}>
      <Box display="flex">
        <CurrencyLogo currency={currency} style={{ width: '30px', height: '30px' }} />
        <Box display="flex" flexDirection="column" marginLeft="16px">
          <Typography variant="inherit">{getSymbol(currency)}</Typography>
          <Typography variant="caption">{getName(currency)}</Typography>
        </Box>
      </Box>
      <span style={{ fontWeight: 500 }}>
        {balance ? (
          <StyledBalanceText title={balance.toExact()} sx={{}}>
            {balance.toSignificant(6)}
          </StyledBalanceText>
        ) : account ? (
          <Spinner />
        ) : null}
      </span>
    </ListItem>
  )
}
