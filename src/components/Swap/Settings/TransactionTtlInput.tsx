import { Trans } from '@lingui/macro'
import { Box, Typography } from '@mui/material'
import NumericalInput from 'components/Interface/Input/InputNumerical'
import QuestionHelper from 'components/Interface/QuestionHelper'
import { useDefaultTransactionTtl, useTransactionTtl } from 'hooks/useTransactionDeadline'

export default function TransactionTtlInput() {
  const [ttl, setTtl] = useTransactionTtl()
  const defaultTtl = useDefaultTransactionTtl()
  const placeholder = defaultTtl.toString()

  return (
    <Box gap={10} display="grid">
      <Box display="flex" alignItems={'center'} gap={10}>
        <Typography>
          <Trans>Transaction deadline</Trans>
        </Typography>
        <QuestionHelper
          text={'Your transaction will revert if it has been pending for longer than this period of time.'}
        />
      </Box>

      <NumericalInput
        width={'100%'}
        integer
        size={Math.max(ttl?.toString().length || 0, placeholder.length)}
        placeholder={placeholder}
        value={ttl?.toString() ?? ''}
        onChange={(e) => setTtl(e.target.value ? parseFloat(e.target.value) : undefined)}
        endAdornment={
          <Typography padding="0 10px">
            <Trans>minutes</Trans>
          </Typography>
        }
      ></NumericalInput>
    </Box>
  )
}
