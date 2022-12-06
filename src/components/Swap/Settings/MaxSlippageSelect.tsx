import { Trans } from '@lingui/macro'
import { Box, Typography } from '@mui/material'
import NumericalInput from 'components/Interface/Input/InputNumerical'
import QuestionHelper from 'components/Interface/QuestionHelper'
import { getSlippageWarning, toPercent } from 'hooks/useSlippage'
import { AlertTriangle, Icon, LargeIcon, XOctagon } from 'icons'
import { useAtom } from 'jotai'
import { useAtomValue } from 'jotai/utils'
import { memo, useCallback, useEffect, useState } from 'react'
import { swapEventHandlersAtom } from 'state/swap'
import { slippageAtom } from 'state/swap/settings'

const Warning = memo(function Warning({ state }: { state?: 'warning' | 'error' }) {
  let icon: Icon | undefined

  switch (state) {
    case 'error':
      icon = XOctagon
      break
    case 'warning':
      icon = AlertTriangle
      break
  }
  return <LargeIcon icon={icon} color={state} size={1.25} />
})

export default function MaxSlippageSelect() {
  const { onSlippageChange } = useAtomValue(swapEventHandlersAtom)
  const [slippage, setSlippageBase] = useAtom(slippageAtom)
  const setSlippage = useCallback(
    (update: typeof slippage) => {
      onSlippageChange?.(update)
      setSlippageBase(update)
    },
    [onSlippageChange, setSlippageBase]
  )

  const [maxSlippageInput, setMaxSlippageInput] = useState(slippage.max?.toString() || '')

  const [warning, setWarning] = useState<'warning' | 'error' | undefined>(getSlippageWarning(toPercent(slippage.max)))
  useEffect(() => {
    setMaxSlippageInput(slippage.max?.toString() || '')
    setWarning(getSlippageWarning(toPercent(slippage.max)))
  }, [slippage.max])

  const processInput = useCallback(
    (max: string | undefined) => {
      setMaxSlippageInput(max || '')
      setSlippage({ max })
    },
    [setSlippage]
  )

  return (
    <Box gap={10} display="grid" mt={20}>
      <Box display="flex" alignItems={'center'} gap={10}>
        <Typography>
          <Trans>Max slippage</Trans>
        </Typography>
        <QuestionHelper
          text={'Your transaction will revert if the price changes unfavorably by more than this percentage.'}
        />
      </Box>
      <Box alignItems={'center'} justifyItems="center">
        <NumericalInput
          width={'100%'}
          onChange={(e) => processInput(e.target.value)}
          value={maxSlippageInput}
          placeholder={'0.10'}
          size={Math.max(maxSlippageInput.length, 4)}
          endAdornment={
            <Box display="flex" alignItems="center" padding="0 10px" gap="10px">
              <Typography> %</Typography>

              {warning && <Warning state={warning} />}
            </Box>
          }
        />
        <Typography color={warning} fontSize="12px" textAlign={'right'} mt={8}>
          {warning === 'error' && <Trans>Please enter a valid slippage %</Trans>}
          {warning === 'warning' && <Trans>High slippage increases the risk of price movement</Trans>}
        </Typography>
      </Box>
    </Box>
  )
}
