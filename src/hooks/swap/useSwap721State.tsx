import { Token721 } from 'constants/token/token721'
import { useCallback, useState } from 'react'

export function useERC721Tokens() {
  const [tokens, setTokens] = useState<Token721[]>([])

  const onRemoveToken = useCallback(
    (token: Token721) => {
      const newTokens = tokens.filter((el) => el != token)
      setTokens(newTokens)
    },
    [tokens]
  )

  const onAddToken = useCallback(
    (token: Token721) => {
      const list = tokens
      const index = tokens.findIndex((el) => el.tokenId === token.tokenId)
      if (index !== -1) {
        return
      }

      list.push(token)
      setTokens([...list])
    },
    [tokens]
  )

  const onToggleToken = useCallback(
    (token: Token721) => {
      const newToken = tokens.find((el) => el.tokenId == token.tokenId)
      if (newToken) {
        onRemoveToken(token)
      } else {
        onAddToken(token)
      }
    },
    [onAddToken, onRemoveToken, tokens]
  )

  const onClearTokens = useCallback(() => {
    setTokens([])
  }, [])

  return { tokens, setTokens, onRemoveToken, onAddToken, onClearTokens, onToggleToken }
}
