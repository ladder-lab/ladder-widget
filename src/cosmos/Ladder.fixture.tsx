import { LadderWidget } from '@ladder/widgets'
import { Box } from '@mui/material'
import { DEFAULT_20_LIST } from 'constants/default20List'
import { DEFAULT_721_LIST } from 'constants/default721List'
import { DEFAULT_1155_LIST } from 'constants/default1155List'
import { useCallback, useMemo, useState } from 'react'
import { useValue } from 'react-cosmos/fixture'

import EventFeed, { Event, HANDLERS } from './EventFeed'

const defaultTokenLists = {
  erc1155: DEFAULT_1155_LIST,
  erc721: DEFAULT_721_LIST,
  erc20: DEFAULT_20_LIST,
}

function Fixture() {
  const [events, setEvents] = useState<Event[]>([])

  const useHandleEvent = useCallback(
    (name: string) =>
      (...data: unknown[]) =>
        setEvents((events) => [{ name, data }, ...events]),
    []
  )
  const eventHandlers = useMemo(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    () => HANDLERS.reduce((handlers, name) => ({ ...handlers, [name]: useHandleEvent(name) }), {}),
    [useHandleEvent]
  )

  const [tokenLists] = useValue('tokenLists', { defaultValue: defaultTokenLists })

  if (!window.frameElement) return <LadderWidget tokenLists={tokenLists} />

  return (
    <Box display="flex" gap={3} flexWrap="wrap">
      <LadderWidget tokenLists={tokenLists} {...eventHandlers} />
      <EventFeed events={events} onClear={() => setEvents([])} />
    </Box>
  )
}

export default <Fixture />
