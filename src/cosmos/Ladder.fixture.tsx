import { LadderWidget } from '@ladder/widgets'
import { Box } from '@mui/material'
import { DEFAULT_721_LIST } from 'constants/default721List'
import { DEFAULT_1155_LIST } from 'constants/default1155List'
import { useState } from 'react'
import { useValue } from 'react-cosmos/fixture'

import EventFeed from './EventFeed'

const defaultTokenLists = {
  erc1155: DEFAULT_1155_LIST,
  erc721: DEFAULT_721_LIST,
  erc20: {
    5: [
      {
        address: '0x38D915d21dE6e22bbcB295b54aB7e611A0E90F7F',
        tokenId: 18,
        symbol: 'TEST',
        name: 'TEST COIN',
        decimals: 18,
      },
    ],
  },
}

function Fixture() {
  const [events, setEvents] = useState<Event[]>([])
  const [tokenLists, setTokenLists] = useValue('tokenLists', { defaultValue: defaultTokenLists })

  if (!window.frameElement) return <LadderWidget tokenLists={tokenLists} />

  return (
    <Box>
      <LadderWidget tokenLists={tokenLists} />
      <EventFeed events={events} onClear={() => setEvents([])} />
    </Box>
  )
}

export default <Fixture />
