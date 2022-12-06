import { useWeb3React } from '@web3-react/core'
import { SupportedChainId } from 'constants/chains'
import { Link } from 'icons'
import { ReactNode, useMemo } from 'react'
import { Color } from 'theme'
import { ExplorerDataType, getExplorerLink } from 'utils/getExplorerLink'

import { ExternalLink } from './Interface/components'
import Row from './Row'

interface EtherscanLinkProps {
  type: ExplorerDataType
  data?: string
  color?: Color
  children: ReactNode
}

export default function EtherscanLink({ data, type, color = 'currentColor', children }: EtherscanLinkProps) {
  const { chainId } = useWeb3React()
  const url = useMemo(
    () => data && getExplorerLink(chainId || SupportedChainId.MAINNET, data, type),
    [chainId, data, type]
  )

  return (
    <ExternalLink href={url ?? ''} target="_blank" underline="none">
      <Row gap={0.25}>
        {children}
        {url && <Link />}
      </Row>
    </ExternalLink>
  )
}
