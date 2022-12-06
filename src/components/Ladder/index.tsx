import { AddCircle } from '@mui/icons-material'
import { Box, ButtonBase, IconButton, MenuItem, Typography, useTheme } from '@mui/material'
import BrandedFooter from 'components/BrandedFooter'
import Wallet from 'components/ConnectWallet'
import Header from 'components/Header'
import Mint from 'components/Mint'
import StatusDialog from 'components/StatusDialog'
import Swap from 'components/Swap'
import Settings from 'components/Swap/Settings'
import { usePendingTransactions } from 'hooks/transactions'
import { useBrandingSetting } from 'hooks/useSyncBrandingSetting'
import { useAtom } from 'jotai'
import { useCallback, useMemo, useState } from 'react'
import { displayTxHashAtom } from 'state/swap'

enum Page {
  SWAP,
  MINT,
  BURN,
}

const PageTitle = {
  [Page.SWAP]: 'Swap',
  [Page.MINT]: 'Add Liquidity',
  [Page.BURN]: 'Remove Liquidity',
}

export default function Ladder() {
  const [page, setPage] = useState<Page>(Page.SWAP)
  const [menuOpen, setMenuOpen] = useState(false)

  const [displayTxHash, setDisplayTxHash] = useAtom(displayTxHashAtom)
  const pendingTxs = usePendingTransactions()
  const displayTx = useMemo(() => displayTxHash && pendingTxs[displayTxHash], [displayTxHash, pendingTxs])
  const disableBranding = useBrandingSetting()

  const handleClose = useCallback(() => {
    setDisplayTxHash(undefined)
  }, [setDisplayTxHash])

  return (
    <>
      <Header
        title={
          <Box
            display="flex"
            alignItems="center"
            gap={5}
            sx={{
              '& svg': { height: 20, width: 20 },
              maxWidth: 150,
              '& button': { padding: '3px', flexWrap: 'nowrap' },
            }}
          >
            {PageTitle[page]}
          </Box>
        }
      >
        <Wallet /*disabled={props.hideConnectionUI}*/ />
        <Settings />
        <Box sx={{ position: 'relative', width: 'max-content', display: 'inline-block' }}>
          <MenuButton
            onClick={() => {
              setMenuOpen((open) => !open)
            }}
          />
          {menuOpen && (
            <DesktopMenu
              setPage={setPage}
              onDismiss={() => {
                setMenuOpen(false)
              }}
            />
          )}
        </Box>
      </Header>

      {page === Page.SWAP && <Swap key="swap" />}
      {page === Page.MINT && <Mint key="swap" />}
      {!disableBranding && <BrandedFooter />}
      {displayTx && <StatusDialog tx={displayTx} onClose={handleClose} />}
    </>
  )
}

function MenuButton({ onClick }: { onClick: () => void }) {
  const theme = useTheme()

  return (
    <IconButton
      sx={{
        height: 40,
        width: 40,
        padding: '2px',
        borderRadius: '8px',
        background: (theme) => theme.palette.background.default,
      }}
      onClick={onClick}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 10.7825H7"
          stroke={theme.palette.text.primary}
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 6H3"
          stroke={theme.palette.text.primary}
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 15.5652H3"
          stroke={theme.palette.text.primary}
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 20.3479H7"
          stroke={theme.palette.text.primary}
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconButton>
  )
}

export function DesktopMenu({ setPage, onDismiss }: { setPage: any; onDismiss: () => void }) {
  const theme = useTheme()
  return (
    <Box
      sx={{
        background: theme.palette.background.paper,
        borderRadius: '10px',
        width: '180px',
        position: 'absolute',
        right: 0,
        top: '40px',
        padding: '10px 0',
        zIndex: 2000,
        boxShadow: '0 0 5px #00000010',
      }}
    >
      <MenuItem sx={{ height: 33 }}>
        <ButtonBase
          onClick={() => {
            setPage(Page.SWAP)
            onDismiss()
          }}
          sx={{ width: '100%', height: '100%', padding: 0 }}
        >
          <Box display="flex" alignItems="center" justifyContent="space-between" height="100%" width="100%">
            <Typography color={theme.palette.text.primary}>Swap</Typography>
            <AddCircle />
          </Box>
        </ButtonBase>
      </MenuItem>
      <MenuItem sx={{ height: 33 }}>
        <ButtonBase
          onClick={() => {
            setPage(Page.MINT)
            onDismiss()
          }}
          sx={{ width: '100%', height: '100%', padding: 0 }}
        >
          <Box display="flex" alignItems="center" justifyContent="space-between" height="100%" width="100%">
            <Typography color={theme.palette.text.primary}>Add Liquidity</Typography>
            <AddCircle />
          </Box>
        </ButtonBase>
      </MenuItem>
      {/* <MenuItem sx={{ height: 33 }}>
        <ButtonBase
          onClick={() => {
            setPage(Page.BURN)
            onDismiss()
          }}
          sx={{ width: '100%', height: '100%', padding: 0 }}
        >
          <Box display="flex" alignItems="center" justifyContent="space-between" height="100%" width="100%">
            <Typography color={theme.palette.text.primary}>Remove Liquidity</Typography>
            <AddCircle />
          </Box>
        </ButtonBase>
      </MenuItem> */}
    </Box>
  )
}
