import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material'
import { Box, ButtonBase, useTheme } from '@mui/material'
import React from 'react'

interface Props {
  onClick?: () => void
  width?: string
  height?: string
  children?: React.ReactNode
  primary?: boolean
  disabled?: boolean
  selected?: boolean
}

export default function SelectButton(props: Props) {
  const { onClick, disabled, width, height, primary, children, selected } = props
  const theme = useTheme()

  return (
    <ButtonBase
      onClick={onClick}
      disabled={disabled}
      sx={{
        width: width || '100%',
        height: height || 52,
        backgroundColor: primary ? theme.palette.primary.main : theme.palette.background.paper,
        color: selected ? theme.palette.text.primary : theme.palette.text.primary + '80',
        borderRadius: 1,
        fontSize: 16,
        fontWeight: 400,
        transition: '.3s',
        padding: '0 15.67px 0 20px',
        position: 'relative',
        '& *': {
          zIndex: 2,
        },
        '&:hover, :active': {
          borderRadius: '10px',
          background:
            theme.gradient.gradient1 && theme.palette.primary.main === '#1F9898'
              ? theme.gradient.gradient1
              : theme.palette.primary.main,
          backgroundClip: 'padding-box',
          zIndex: 1,
        },
        '&:before': {
          background: theme.palette.background.paper,
          position: 'absolute',
          borderRadius: '9px',
          top: 1,
          right: 1,
          bottom: 1,
          left: 1,
          content: '""',
          pointerEvents: 'none !important',
        },
        display: 'flex',
        justifyContent: 'space-between',
        '&.MuiButtonBase-root.Mui-disabled': {
          opacity: theme.palette.action.disabledOpacity,
        },
      }}
    >
      <Box>{children}</Box>
      <ExpandMoreIcon />
    </ButtonBase>
  )
}
