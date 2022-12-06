import { Box, Paper, Typography, useTheme } from '@mui/material'
import Dialog, { Header } from 'components/Dialog'

import Spinner from '../Spinner'

export default function TransacitonPendingModal({ pendingText }: { pendingText?: string }) {
  const theme = useTheme()
  return (
    <Dialog type="dialog">
      <Header title={'Waiting For Confirmation'} />
      <Paper sx={{ margin: '20px 10px 30px', boxShadow: 'none', height: '100%' }}>
        <Box display="grid" padding="40px 24px" gap="24px" justifyItems="center" mt={'20%'}>
          <Spinner size="40px" />
          <Typography fontWeight={400} fontSize={18}>
            Waiting For Confirmation
          </Typography>
          <Typography fontWeight={400} fontSize={14} textAlign="center" color={theme.palette.text.primary}>
            {pendingText || 'Please initiate transaction in your wallet'}
          </Typography>
        </Box>
      </Paper>
    </Dialog>
  )
}
