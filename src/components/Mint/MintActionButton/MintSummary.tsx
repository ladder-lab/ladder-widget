import { TokenAmount } from '@ladder/sdk'
import { Box, Typography, useTheme } from '@mui/material'
import CurrencyLogo from 'components/Interface/CurrencyLogo'
import { DoubleCurrencyLogo } from 'components/Interface/CurrencyLogo/DoubleLogo'
import { AllTokens } from 'models/allTokens'
import { getTokenText } from 'utils/checkIs1155'
// import AddIcon from '@mui/icons-material/Add'

export function MintSummary({
  shareOfPool,
  liquidityMinted,
  valA,
  valB,
  tokenA,
  tokenB,
  priceA,
  priceB,
}: {
  liquidityMinted: TokenAmount | undefined
  valA: string
  valB: string
  tokenA?: AllTokens
  tokenB?: AllTokens
  priceA: string
  priceB: string
  shareOfPool: string
}) {
  const theme = useTheme()
  const { Token1Text, Token2Text } = getTokenText(tokenA, tokenB)
  return (
    <Box padding="33px 32px">
      <Typography fontSize={28} mb={{ xs: 20, md: 39 }} fontWeight={500}>
        You will receive
      </Typography>
      <Box display="flex" justifyContent="space-between" alignItems={'center'} gap={10}>
        <Typography
          fontSize={{ xs: 26, md: 32 }}
          fontWeight={900}
          sx={{
            whiteSpace: 'wrap',
            wordBreak: 'break-all',
          }}
        >
          {liquidityMinted?.toSignificant(6) ?? '-'}
        </Typography>
        <DoubleCurrencyLogo currency0={tokenA} currency1={tokenB} size={28} />
      </Box>

      <Typography fontSize={16} mt={4} mb={12}>
        <Token1Text fontSize={16} /> /<Token2Text fontSize={16} />
      </Typography>
      <Typography sx={{ fontSize: 16, color: theme.palette.text.secondary, mb: 24 }}>
        Output is estimated.If the price changes by more than 5% your transaction will revert.
      </Typography>
      <AddLiquidityDetails
        token1={tokenA}
        token2={tokenB}
        token1Val={valA}
        token2Val={valB}
        rateToken1Token2={priceA}
        rateToken2Token1={priceB}
        shareOfPool={shareOfPool}
      />
    </Box>
  )
}

function AddLiquidityDetails({
  token1,
  token2,
  token1Val,
  token2Val,
  rateToken1Token2,
  rateToken2Token1,
  shareOfPool,
}: {
  token1?: AllTokens
  token2?: AllTokens
  token1Val: string
  token2Val: string
  rateToken1Token2: string
  rateToken2Token1: string
  shareOfPool: string
}) {
  const theme = useTheme()
  const { Token2Text, Token1Text } = getTokenText(token1, token2)

  return (
    <Box
      sx={{
        padding: 20,
        background: theme.palette.background.default,
        borderRadius: '8px',
        display: 'grid',
        gap: { xs: 20, md: 12 },
        mb: 40,
      }}
    >
      <Box display={{ xs: 'grid', md: 'flex' }} justifyContent="space-between" alignItems="center" gap={8}>
        <Box display="flex" alignItems="center" gap={9}>
          <Typography>
            <Token1Text /> <span style={{ color: theme.palette.text.primary }}> Deposited</span>
          </Typography>
        </Box>

        <Typography display={'flex'} alignItems="center" gap={8}>
          <CurrencyLogo currency={token1} size={'18px'} />
          {token1Val}
        </Typography>
      </Box>
      <Box display={{ xs: 'grid', md: 'flex' }} justifyContent="space-between" alignItems="center" gap={8}>
        <Box display="flex" alignItems="center" gap={9}>
          <Typography>
            <Token2Text /> <span style={{ color: theme.palette.text.primary }}>Deposited</span>
          </Typography>
        </Box>

        <Typography display={'flex'} alignItems="center" gap={8}>
          <CurrencyLogo currency={token2} size={'18px'} />
          {token2Val}
        </Typography>
      </Box>
      {(!rateToken1Token2 && !rateToken2Token1) || (rateToken1Token2 === '0' && rateToken2Token1 === '0') ? null : (
        <Box
          display={{ xs: 'grid', md: 'flex' }}
          justifyContent="space-between"
          alignItems="center"
          margin={{ xs: 0, md: '20px 0' }}
          gap={8}
        >
          <Box display="flex" alignItems="center" gap={9}>
            <Typography sx={{ color: theme.palette.text.secondary }}>Rates</Typography>
          </Box>
          <Box display="grid" gap={8}>
            <Typography>
              1 <Token1Text /> = {rateToken1Token2} <Token2Text />
            </Typography>
            <Typography>
              1 <Token2Text /> = {rateToken2Token1} <Token1Text />
            </Typography>
          </Box>
        </Box>
      )}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center" gap={9}>
          <Typography sx={{ color: theme.palette.text.secondary }}>Share of Pool</Typography>
        </Box>

        <Typography>{shareOfPool}%</Typography>
      </Box>
    </Box>
  )
}
