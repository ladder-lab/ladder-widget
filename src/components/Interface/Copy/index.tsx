import { Check as CheckIcon,ContentCopy } from '@mui/icons-material'
import { Box } from '@mui/material'
import useCopyClipboard from 'hooks/useCopyClipboard'
import React from 'react'

interface Props {
  toCopy: string
  children?: React.ReactNode
}

export default function Copy(props: Props) {
  const [isCopied, setCopied] = useCopyClipboard()
  const { toCopy, children } = props

  return (
    <Box
      sx={{
        display: 'flex',
        cursor: 'pointer',
        height: 17,
        '& svg': {
          mr: '10px',
        },
      }}
      onClick={(e) => {
        e.stopPropagation()
        setCopied(toCopy)
      }}
    >
      {isCopied ? (
        <CheckIcon sx={{ opacity: 0.6, fontSize: 16 }} />
      ) : (
        <ContentCopy sx={{ opacity: 0.6, fontSize: 16 }} />
      )}
      {children}
    </Box>
  )
}
