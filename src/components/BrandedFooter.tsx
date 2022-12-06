import { Trans } from '@lingui/macro'
import { Box, styled, Typography } from '@mui/material'
import { memo } from 'react'

import { ExternalLink } from './Interface/components'

const Wrapper = styled(Box)`
  margin-top: auto;
`

export default memo(function BrandedFooter() {
  return (
    <Wrapper display="flex" justifyContent={'center'}>
      <ExternalLink href="">
        <Typography>
          <Trans>Powered by Ladder protocol</Trans>
        </Typography>
      </ExternalLink>
    </Wrapper>
  )
})
