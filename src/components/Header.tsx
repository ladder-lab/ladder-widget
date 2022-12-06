import { Box, styled, Typography } from '@mui/material'
import { ReactElement, ReactNode } from 'react'

const HeaderRow = styled(Box)`
  align-items: center;
  display: flex;
  height: 1.75em;
  justify-content: space-between;
  margin: 0 10px 10px;
  margin-bottom: 20px;
  padding-top: 0.5em;
`

export interface HeaderProps {
  title?: ReactElement
  children: ReactNode
}

export default function Header({ title, children }: HeaderProps) {
  return (
    <HeaderRow>
      <Box>
        {title && (
          <Typography variant="h5" fontWeight={700} fontSize={16}>
            {title}
          </Typography>
        )}
      </Box>
      <Box sx={{ whiteSpace: 'nowrap' }} display="flex" alignItems={'center'}>
        {children}
      </Box>
    </HeaderRow>
  )
}
