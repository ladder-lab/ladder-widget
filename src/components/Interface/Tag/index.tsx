import { Box, SxProps, useTheme } from '@mui/material'
import React from 'react'

export default function Tag({ children, sx }: { children: React.ReactNode; sx?: SxProps }) {
  const theme = useTheme()

  return (
    <Box
      sx={{
        borderRadius: '10px',
        boxShadow: '0px 3px 10px rgba(0,0,0,0.15)',
        fontSize: 12,
        padding: '4px 12px',
        background: '#FFFFFF',
        '&:before': {
          content: `'${children}'`,
          background: theme.palette.primary.main,
          color: 'transparent',
          overflow: 'hidden',
          textFillColor: 'transparent',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
        ...sx,
      }}
    />
  )
}
