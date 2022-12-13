import { ArrowBackIosNew as ArrowBackIosNewIcon, Close as MuiCloseIcon } from '@mui/icons-material'
import { ButtonBase, IconButton, Link, styled, Theme, useTheme } from '@mui/material'
import { SxProps } from '@mui/system'
import { ReactComponent as ExternalArrow } from 'assets/svg/external_arrow.svg'
import React, { HTMLProps, useCallback } from 'react'

export function BackBtn({ onClick, sx }: { onClick?: () => void; sx?: SxProps }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        padding: 0,
        width: { xs: 32, md: 52 },
        height: { xs: 32, md: 52 },
        background: (theme) => theme.palette.background.default,
        borderRadius: '8px',
        ...sx,
      }}
    >
      <ArrowBackIosNewIcon sx={{ color: (theme) => theme.palette.grey[500], size: 13 }} />
    </IconButton>
  )
}

export function CloseIcon({
  onClick,
  variant = 'button',
  sx,
}: {
  onClick?: () => void
  variant?: 'button' | 'plain'
  sx?: SxProps
}) {
  const theme = useTheme()

  if (variant === 'plain') {
    return (
      <ButtonBase onClick={onClick} sx={{ position: 'absolute', ...sx }}>
        <MuiCloseIcon
          sx={{ fontSize: 20, color: theme.palette.text.secondary, '&:hover': { color: theme.palette.text.primary } }}
        />
      </ButtonBase>
    )
  }

  return (
    <IconButton
      onClick={onClick}
      sx={{
        padding: 0,
        position: 'absolute',
        background: theme.palette.background.default,
        borderRadius: '8px',
        width: { xs: 32, md: 52 },
        height: { xs: 32, md: 52 },
        '&:hover': {
          background: theme.palette.text.secondary + '50',
        },
        '&:hover path': {
          fill: theme.palette.text.primary,
        },
        ...sx,
      }}
    >
      <MuiCloseIcon sx={{ fontSize: 20, color: theme.palette.text.secondary }} />
    </IconButton>
  )
}

export function ExternalLink({
  target = '_blank',
  href,
  rel = 'noopener noreferrer',
  style,
  sx,
  className,
  children,
  underline,
  showIcon,
}: Omit<HTMLProps<HTMLAnchorElement>, 'as' | 'ref' | 'onClick'> & {
  href: string
  style?: React.CSSProperties
  sx?: SxProps<Theme>
  underline?: 'always' | 'hover' | 'none'
  className?: string
  showIcon?: boolean
}) {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (target === '_blank' || event.ctrlKey || event.metaKey) {
      } else {
        event.preventDefault()
        window.location.href = href
      }
    },
    [href, target]
  )
  return (
    <Link
      className={className}
      target={target}
      rel={rel}
      href={href}
      onClick={handleClick}
      style={style}
      sx={sx}
      underline={underline ?? 'none'}
    >
      {children}
      {showIcon && <ExternalArrow style={{ marginLeft: 8 }} />}
    </Link>
  )
}

export const Dots = styled('span')(`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`)
