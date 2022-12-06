import { Currency } from '@ladder/sdk'
import { Box, styled, Typography, useTheme } from '@mui/material'
import { ReactComponent as GasStationIcon } from 'assets/svg/gas_station.svg'
import Accordion from 'components/Interface/Accordion'
import CurrencyLogo from 'components/Interface/CurrencyLogo'
import Divider from 'components/Interface/Divider'
import QuestionHelper from 'components/Interface/QuestionHelper'
import { HelperText } from 'constants/helperText'
import { Token721 } from 'constants/token/token721'
import { AllTokens } from 'models/allTokens'
import { useCallback, useMemo, useState } from 'react'
// import AddIcon from '@mui/icons-material/Add'
import { getTokenText } from 'utils/checkIs1155'

import { AssetAccordion } from './AssetAccordion'

export function SwapSummary({
  fromAsset,
  toAsset,
  margin,
  gasFee,
  price,
  minReceiveQty,
  slippage,
  toVal,
  routerTokens,
  fromErc721SubTokens,
  toErc721SubTokens,
  priceImpact,
}: {
  routerTokens?: AllTokens[]
  fromAsset?: AllTokens
  toAsset?: AllTokens
  gasFee?: string
  margin: string
  minReceiveQty: string
  slippage: number
  toVal?: string
  price?: string
  fromErc721SubTokens?: Token721[]
  toErc721SubTokens?: Token721[]
  priceImpact?: string
}) {
  const [expanded, setExpanded] = useState(false)
  const theme = useTheme()
  const { Token1Text, Token2Text, token2Text } = getTokenText(fromAsset, toAsset)

  const handleExpand = useCallback(() => {
    setExpanded((prev) => !prev)
  }, [])

  const summary = useMemo(() => {
    return (
      <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <InfoIcon color={theme.palette.text.primary} />
          <Typography color={theme.palette.text.secondary}>
            1 <Token1Text /> = {price} <Token2Text />
            {/* (${currencyRate}) */}
          </Typography>
        </Box>

        <Box display="flex" gap={5} alignItems="center">
          <GasStationIcon />
          <Typography color={theme.palette.text.secondary}>~${gasFee || '-'}</Typography>
        </Box>
      </Box>
    )
  }, [theme.palette.text.primary, theme.palette.text.secondary, Token1Text, price, Token2Text, gasFee])

  const details = useMemo(() => {
    return (
      <>
        <Box display="grid" gap={8} padding="12px 0">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center" gap={9}>
              <Typography>Expected Output</Typography>

              <QuestionHelper
                text={HelperText.expectedOuptut}
                style={{ color: theme.palette.text.secondary, background: 'transparent', display: 'inline-block' }}
              />
            </Box>

            <Typography textAlign={'right'}>
              {toVal} <span style={{ color: theme.palette.text.secondary }}>{token2Text}s</span>
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center" gap={9}>
              <Typography>Price Impact</Typography>

              <QuestionHelper
                text={HelperText.priceImpact}
                style={{ color: theme.palette.text.secondary, background: 'transparent', display: 'inline-block' }}
              />
            </Box>

            <Typography sx={{ color: theme.palette.text.secondary }} textAlign={'right'}>
              {priceImpact}%
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box display="grid" gap={8} padding="12px 0">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center" gap={9} sx={{ maxWidth: 154 }}>
              <Typography>Minimum received after slippage ({slippage}%)</Typography>

              <QuestionHelper
                text={HelperText.minReceived}
                style={{ color: theme.palette.text.secondary, background: 'transparent', display: 'inline-block' }}
              />
            </Box>

            <Typography textAlign={'right'}>
              {minReceiveQty} <span style={{ color: theme.palette.text.secondary }}>{token2Text}s</span>
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center" gap={9}>
              <Typography>Network Fee</Typography>

              <QuestionHelper
                text={HelperText.networkFee}
                style={{ color: theme.palette.text.secondary, background: 'transparent' }}
              />
            </Box>

            <Typography sx={{ color: theme.palette.text.secondary }}>~${gasFee || '-'}</Typography>
          </Box>
        </Box>
        <Divider />
        <Box padding="12px 0">
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography>Router</Typography>
            {/* <AddIcon /> */}
          </Box>
          <RouterGraph tokens={routerTokens} fromAsset={fromAsset} toAsset={toAsset} fee="0.3%" />
          <Typography sx={{ color: theme.palette.text.secondary, opacity: 0.5 }}>
            Best price route costs ~${gasFee} in gas.This route optimizes your total output by considering aplit
            routes,multiple hops,and the gas cost of each step.
          </Typography>
        </Box>
      </>
    )
  }, [
    theme.palette.text.secondary,
    toVal,
    token2Text,
    priceImpact,
    slippage,
    minReceiveQty,
    gasFee,
    routerTokens,
    fromAsset,
    toAsset,
  ])

  return (
    <Box padding="10px">
      <TokenInfo
        fromAsset={fromAsset}
        toAsset={toAsset}
        fromErc721SubTokens={fromErc721SubTokens}
        toErc721SubTokens={toErc721SubTokens}
      />
      <Accordion summary={summary} details={details} expanded={expanded} onChange={handleExpand} margin={margin} />
    </Box>
  )
}

function RouterGraph({
  fromAsset,
  toAsset,
  fee,
  tokens,
}: {
  tokens?: AllTokens[]
  fromAsset?: AllTokens
  toAsset?: AllTokens
  fee: string
}) {
  const theme = useTheme()

  const Dashline = styled(Box)({
    borderBottom: `1px dashed ${theme.palette.text.secondary}`,
    position: 'absolute',
    width: 'calc(100% - 64px)',
  })

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" padding="16px 0" position="relative">
      {fromAsset && <CurrencyLogo currency={fromAsset} style={{ width: 24 }} />}
      <Box
        sx={{
          background: (theme) => theme.palette.background.paper,
          minWidth: 125,
          height: 38,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px',
          zIndex: 1,
        }}
      >
        <Box sx={{ display: 'flex' }}>
          {fromAsset && <CurrencyLogo currency={fromAsset} style={{ width: 24 }} />}
          {tokens?.map((token, idx) => {
            return (
              <CurrencyLogo
                currency={token}
                style={{ width: 24, marginLeft: -5 * (idx + 1), zIndex: 2 }}
                key={token?.symbol ?? '' + idx}
              />
            )
          })}
          {toAsset && <CurrencyLogo currency={toAsset} style={{ width: 24, marginLeft: -5, zIndex: 2 }} />}
        </Box>
        <Typography ml={10}>{fee}</Typography>
      </Box>
      {toAsset && <CurrencyLogo currency={toAsset} style={{ width: 24 }} />}
      <Box sx={{ position: 'absolute', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Dashline />
      </Box>
    </Box>
  )
}

function InfoIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M8.16406 4.52311H9.83073V6.18978H8.16406V4.52311ZM8.16406 7.85645H9.83073V12.8564H8.16406V7.85645ZM8.9974 0.356445C4.3974 0.356445 0.664062 4.08978 0.664062 8.68978C0.664062 13.2898 4.3974 17.0231 8.9974 17.0231C13.5974 17.0231 17.3307 13.2898 17.3307 8.68978C17.3307 4.08978 13.5974 0.356445 8.9974 0.356445ZM8.9974 15.3564C5.3224 15.3564 2.33073 12.3648 2.33073 8.68978C2.33073 5.01478 5.3224 2.02311 8.9974 2.02311C12.6724 2.02311 15.6641 5.01478 15.6641 8.68978C15.6641 12.3648 12.6724 15.3564 8.9974 15.3564Z"
        fill={color}
      />
    </svg>
  )
}

function TokenInfo({
  fromAsset,
  toAsset,
  fromErc721SubTokens,
  toErc721SubTokens,
}: {
  fromAsset?: Currency
  toAsset?: Currency
  fromErc721SubTokens?: Token721[] | null
  toErc721SubTokens?: Token721[] | null
}) {
  return (
    <Box display="flex" flexDirection="column" gap={12}>
      {fromAsset && <AssetAccordion token={fromAsset} subTokens={fromErc721SubTokens} />}
      {toAsset && <AssetAccordion token={toAsset} subTokens={toErc721SubTokens} />}
    </Box>
  )
}
