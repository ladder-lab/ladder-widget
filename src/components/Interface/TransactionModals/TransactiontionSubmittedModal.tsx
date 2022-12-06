import { Box } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import React from 'react'
import { ExplorerDataType, getExplorerLink } from 'utils/getExplorerLink'

import { ExternalLink } from '../components'
import MessageBox from './MessageBox'

export default function TransactionSubmittedModal({ children, hash }: { hash?: string; children?: React.ReactNode }) {
  const { chainId } = useWeb3React()

  return (
    <MessageBox type={'success'} header={'Transaction Submitted'}>
      <Box display="grid" gap="20px" justifyContent="center">
        {children}
        {chainId && hash && (
          <ExternalLink
            underline="always"
            href={getExplorerLink(chainId, hash, ExplorerDataType.TRANSACTION)}
            style={{ color: '#ffffff', fontSize: 12 }}
          >
            View on Etherscan
          </ExternalLink>
        )}
      </Box>
    </MessageBox>
  )
}
