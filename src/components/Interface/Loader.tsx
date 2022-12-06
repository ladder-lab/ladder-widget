import { Box, Typography } from '@mui/material'

import { Dots } from './components'

export function Loader({ color, margin = '0 auto', size = 90 }: { color?: string; margin?: string; size?: number }) {
  return (
    <Box display="grid" gap={19} justifyItems="center">
      <Typography sx={{ color: (theme) => theme.palette.text.secondary }} fontSize={16} fontWeight={500}>
        Loading
        <Dots />
      </Typography>
    </Box>
  )
}
