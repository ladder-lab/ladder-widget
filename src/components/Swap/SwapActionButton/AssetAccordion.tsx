import { Box, Typography, useTheme } from '@mui/material'
import Accordion from 'components/Interface/Accordion'
import { ExternalLink } from 'components/Interface/components'
import Copy from 'components/Interface/Copy'
import CurrencyLogo from 'components/Interface/CurrencyLogo'
// import SampleNftImg from 'assets/images/sample-nft.png'
import LogoText from 'components/Interface/LogoText'
import Tag from 'components/Interface/Tag'
import { Token721 } from 'constants/token/token721'
import { AllTokens } from 'models/allTokens'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { shortenAddress } from 'utils'
import { checkIs721, checkIs1155, getTokenText } from 'utils/checkIs1155'
import { getName } from 'utils/getSymbol'

export function AssetAccordion({
  token,
  // disabled,
  subTokens,
}: {
  token?: AllTokens
  // disabled?: boolean
  subTokens?: Token721[] | null
}) {
  const [expanded, setExpanded] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    if (!subTokens) {
      setExpanded(false)
    }
  }, [subTokens])

  const handleChange = useCallback(() => {
    setExpanded((prev) => !prev)
  }, [])

  const is1155 = checkIs1155(token)
  const is721 = checkIs721(token)

  const summary = useMemo(() => {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          gap: 10,
          alignItems: {
            xs: 'flex-start',
            md: 'center',
          },
          width: '100%',
        }}
      >
        <CurrencyLogo currency={token} style={{ width: 36 }} />
        <Box display="flex" flexDirection="column" gap={4} width="100%" sx={{ '& *': { fontSize: 14 } }}>
          <Typography color={theme.palette.text.secondary}>Name: {getTokenText(token).token1Text ?? '-'}</Typography>
          <Typography
            color={theme.palette.text.secondary}
            component="div"
            sx={{ wordWrap: 'break-word', display: 'flex', alignItems: 'center', gap: 5, flexWrap: 'wrap' }}
          >
            Contract:{' '}
            {token && 'address' in token && token?.address ? (
              <>
                <Typography sx={{ wordWrap: 'break-word', maxWidth: '100%' }}>
                  {shortenAddress(token?.address)}
                </Typography>
                <Copy toCopy={token?.address} />
              </>
            ) : (
              '-'
            )}
          </Typography>
          {is1155 && (
            <Typography color={theme.palette.text.secondary} sx={{ wordWrap: 'break-word' }}>
              Token Id: {token && 'tokenId' in token ? token.tokenId : 'none'}
            </Typography>
          )}
        </Box>

        <Tag sx={{ position: 'absolute', right: 0, top: 0 }}>{is1155 ? 'ERC1155' : is721 ? 'ERC721' : 'ERC20'}</Tag>
      </Box>
    )
  }, [token, theme.palette.text.secondary, is1155, is721])

  const details = useMemo(() => {
    return (
      <Box sx={{ display: 'grid', gap: 10, pt: 10 }}>
        {subTokens &&
          subTokens.length > 0 &&
          subTokens.map((token, idx) => (
            <Box key={idx} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <LogoText
                logo={<CurrencyLogo currency={token} style={{ width: 28 }} />}
                text={getName(token) + `#${token.tokenId}`}
                fontSize={12}
              />
              <ExternalLink sx={{ color: theme.palette.text.secondary, fontSize: 12 }} href={'#'} showIcon>
                {shortenAddress(token.address)}
              </ExternalLink>
              <Typography sx={{ color: theme.palette.text.secondary, fontSize: 12 }}>Quantity: 1</Typography>
            </Box>
          ))}
      </Box>
    )
  }, [subTokens, theme.palette.text.secondary])

  return (
    <Accordion
      summary={summary}
      details={details}
      expanded={expanded}
      onChange={handleChange}
      margin={'0'}
      disabled={subTokens && subTokens.length > 0 ? false : true}
      iconCssOverride={{ right: 0, bottom: 0, position: 'absolute' }}
    />
  )
}
