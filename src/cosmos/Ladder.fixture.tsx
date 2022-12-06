import { LadderWidget } from '@ladder/widgets'
import { Box } from '@mui/material'

function Fixture() {
  // If framed in a different origin, only display the SwapWidget, without any chrome.
  // This is done to faciliate iframing in the documentation (https://docs.uniswap.org).
  if (!window.frameElement) return <LadderWidget />

  return (
    <Box>
      <LadderWidget />
    </Box>
  )
}

export default <Fixture />
