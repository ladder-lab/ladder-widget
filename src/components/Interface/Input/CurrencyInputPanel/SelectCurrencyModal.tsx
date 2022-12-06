import { Currency } from '@ladder/sdk'
import { Box, ButtonBase, darken, lighten, Typography, useTheme } from '@mui/material'
import Dialog, { Header } from 'components/Dialog'
import { Token721 } from 'constants/token/token721'
import { Token1155 } from 'constants/token/token1155'
import useModal from 'hooks/useModal'
import { AllTokens, NFT, TokenType } from 'models/allTokens'
import React, { useEffect, useState } from 'react'

import CurrencyList from './CurrencyList'
import ERC721List from './ERC721List'
import NftList from './ERC1155List'

export enum Mode {
  ERC20 = 'erc20',
  ERC1155 = 'erc1155',
  ERC721 = 'erc721',
}
interface SwapContextType {
  selectedToken: NFT | undefined
  setSelectedToken: (nft: NFT | undefined) => void
}

export const SwapContext = React.createContext<SwapContextType>({
  selectedToken: undefined,
  setSelectedToken: () => undefined as void,
})

export default function SelectCurrencyModal({
  onSelectCurrency,
  selectedTokenType,
  erc20Tokens,
  erc1155Tokens,
  erc721Tokens,
}: // onSelectSubTokens
{
  erc20Tokens: Currency[]
  erc1155Tokens: Token1155[]
  erc721Tokens: { [address: string]: Token721 }
  onSelectCurrency?: (currency: AllTokens) => void
  selectedTokenType?: TokenType
  // onSelectSubTokens?: (tokens: Token721[]) => void
}) {
  const [mode, setMode] = useState(selectedTokenType === 'erc20' ? Mode.ERC1155 : Mode.ERC20)

  const { hideModal } = useModal()

  useEffect(() => {
    if (selectedTokenType === 'erc20') {
      setMode(Mode.ERC1155)
    } else {
      setMode(Mode.ERC20)
    }
  }, [selectedTokenType])

  return (
    <>
      <Dialog onClose={hideModal}>
        <Box display="flex" flexDirection={'column'} justifyContent="flex-start" maxHeight={'100%'} flexGrow={1}>
          <Header title={mode === Mode.ERC20 ? 'Select a Token' : 'Select a NFT'} />

          <Box display="flex" gap={20} padding="10px 10px 10px " alignItems="center">
            <ModeButton
              selected={mode === Mode.ERC20}
              onClick={() => {
                setMode(Mode.ERC20)
              }}
              disabled={selectedTokenType === 'erc20'}
            >
              ERC20
            </ModeButton>
            <ModeButton
              selected={mode === Mode.ERC1155}
              onClick={() => {
                setMode(Mode.ERC1155)
              }}
              disabled={selectedTokenType === 'erc1155'}
            >
              ERC1155
            </ModeButton>
            <ModeButton
              selected={mode === Mode.ERC721}
              onClick={() => {
                setMode(Mode.ERC721)
              }}
              disabled={selectedTokenType === 'erc721'}
            >
              ERC721
            </ModeButton>
          </Box>

          <Box
            padding={'0 0 10px'}
            position="relative"
            height="100%"
            sx={{ overflowY: 'auto', overflowX: 'hidden' }}
            flexGrow={1}
            maxWidth="100%"
          >
            {mode === Mode.ERC20 && (
              <CurrencyList onSelectCurrency={onSelectCurrency} erc20List={erc20Tokens}></CurrencyList>
            )}

            {mode === Mode.ERC1155 && (
              <NftList
                onSelectCurrency={onSelectCurrency}
                onClick={onSelectCurrency}
                erc1155List={erc1155Tokens}
              ></NftList>
            )}

            {mode === Mode.ERC721 && (
              <ERC721List
                erc721List={erc721Tokens}
                // searchToken={searchTokenNFT}
                // searchTokenIsAdded={searchTokenIsAddedNFT}
                onSelectCurrency={onSelectCurrency}
                // onSelectSubTokens={onSelectSubTokens}
                // commonCollectionList={commonCollectionList}
                // collectionOptions={commonCollectionList}
                // selectedCollection={collection}
                // onSelectCollection={setCollection}
                // selectedCurrencies={filteredTokens1155}
              />
            )}
          </Box>
        </Box>
      </Dialog>
    </>
  )
}

function ModeButton({
  children,
  selected,
  onClick,
  disabled,
}: {
  children?: React.ReactNode
  selected?: boolean
  onClick?: () => void
  disabled?: boolean
}) {
  const theme = useTheme()

  return (
    <ButtonBase
      onClick={onClick}
      disabled={disabled}
      sx={{
        padding: {
          xs: '4px 12px',
          md: '7px 20px',
        },
        borderRadius: '18px',
        background: theme.palette.background.default,
        boxShadow: selected
          ? '0 0 5px ' + darken(theme.palette.background.default, 0.2)
          : 'inset 0px 2px 12px ' + darken(theme.palette.background.default, 0.2),

        '&:hover': {
          opacity: 0.8,
        },
      }}
    >
      <Typography
        sx={{
          color: selected ? lighten(theme.palette.text.primary, 0.5) : 'transparent',
          fontSize: {
            xs: 14,
            md: 16,
          },
          background: selected ? theme.palette.primary.main : theme.palette.text.primary,
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {children}
      </Typography>
    </ButtonBase>
  )
}
