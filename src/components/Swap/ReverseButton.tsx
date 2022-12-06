import { Box } from '@mui/material'
import { ReactComponent as SwitchCircle } from 'assets/svg/switch_circle.svg'
import useSwapInfo from 'context/SwapContext'
import { useSwitchSwapCurrencies } from 'hooks/swap'

export default function ReverseButton() {
  const { error } = useSwapInfo()
  const isDisabled = error !== undefined
  const switchCurrencies = useSwitchSwapCurrencies()

  return (
    <Box
      sx={{
        paddingBottom: 12,
        margin: '0 auto',
        width: 'max-content',
        '&:hover': {
          opacity: 0.8,
        },
        display: 'flex',
        justifyContent: {
          xs: 'center',
          md: 'flex-start',
        },
      }}
    >
      <SwitchCircle onClick={switchCurrencies} style={{ cursor: isDisabled ? 'none' : 'pointer' }} />
    </Box>
  )
}
