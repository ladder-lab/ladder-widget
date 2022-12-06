import { Box, Button, ButtonBase, Typography, useTheme } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import SelectButton from 'components/Interface/Button/SelectButton'
import CurrencyLogo from 'components/Interface/CurrencyLogo'
import Erc721IdSelectionModal from 'components/Interface/Erc721IdSelectionModal'
import InputNumerical from 'components/Interface/Input/InputNumerical'
import LogoText from 'components/Interface/LogoText'
import QuestionHelper from 'components/Interface/QuestionHelper'
import { Token721 } from 'constants/token/token721'
import { useTokenLists } from 'context/TokenListContext'
import { useCurrencyBalance } from 'hooks/useBalances'
import useModal from 'hooks/useModal'
import { AllTokens, TokenType } from 'models/allTokens'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { checkIs1155, filter721 } from 'utils/checkIs1155'
import { getSymbol } from 'utils/getSymbol'

import SelectCurrencyModal from './SelectCurrencyModal'

interface Props {
  currency?: AllTokens | null
  value: string
  onChange: (val: string) => void
  disabled?: boolean
  placeholder?: string
  selectActive?: boolean
  inputFocused?: boolean
  disableCurrencySelect?: boolean
  onSelectCurrency?: (cur: AllTokens) => void
  selectedTokenType?: TokenType
  onMax?: () => void
  disableInput?: boolean
  hideBalance?: boolean
  onSelectSubTokens?: (tokens: Token721[]) => void
  enableAuto?: boolean
  pairAddress?: string | undefined
}

enum SwapType {
  AUTO = 'Auto',
  MANUAL = 'Choose by yourself',
}

function SwapTypeButton({
  onClick,
  text,
  helperText,
  selected,
  disabled,
}: {
  onClick: () => void
  text: string
  helperText: string
  selected: boolean
  disabled?: boolean
}) {
  return (
    <ButtonBase
      disabled={disabled}
      onClick={onClick}
      sx={{
        height: 22,
        padding: '0 12px',
        borderRadius: '10px',
        background: (theme) => theme.palette.background.paper,
        border: (theme) => `1px solid ${selected ? theme.palette.primary.main : 'none'}`,
      }}
    >
      <Typography sx={{ color: (theme) => theme.palette.primary.main, mr: 4, fontSize: 12 }}>{text}</Typography>
      <QuestionHelper text={helperText} />
    </ButtonBase>
  )
}

const trimBalance = (balance: string) => {
  if (balance.length > 11) {
    const str = balance.slice(0, 10)
    return str + '...'
  }
  return balance
}

export default function CurrencyInputPanel({
  value,
  disabled,
  placeholder,
  selectActive,
  inputFocused,
  disableCurrencySelect,
  currency,
  onSelectCurrency,
  onChange,
  selectedTokenType,
  onMax,
  disableInput,
  hideBalance,
  onSelectSubTokens,
  enableAuto,
  pairAddress,
}: Props) {
  // const [isOpen, setIsOpen] = useState(false)
  const { account } = useWeb3React()
  const is1155 = checkIs1155(currency)
  const is721 = filter721(currency)
  const selectedCurrencyBalance = useCurrencyBalance(account ?? undefined, currency ?? undefined)
  const [swapType, setSwapType] = useState(SwapType.AUTO)

  const { hideModal, showModal } = useModal()
  const theme = useTheme()
  const { erc1155List, erc20List, erc721Map } = useTokenLists()

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value)
    },
    [onChange]
  )

  const showCurrencySearch = useCallback(() => {
    if (!disableCurrencySelect) {
      showModal(
        <SelectCurrencyModal
          onSelectCurrency={onSelectCurrency}
          selectedTokenType={selectedTokenType}
          erc20Tokens={erc20List}
          erc1155Tokens={erc1155List}
          erc721Tokens={erc721Map}
          // onSelectSubTokens={onSelectSubTokens}
        />
      )
    }
  }, [disableCurrencySelect, showModal, onSelectCurrency, selectedTokenType, erc20List, erc1155List, erc721Map])

  const subTokenSelection = useCallback(() => {
    if (onSelectSubTokens) {
      showModal(
        <Erc721IdSelectionModal
          // amount={value ? +value : 0}
          onSelectSubTokens={onSelectSubTokens}
          collection={is721}
          pairAddress={pairAddress}
          setAmount={handleChange}
          // isOpen={true}
          onDismiss={hideModal}
          // onDismiss={() => {
          //   setIsOpen(false)
          // }}
        />
      )
    }
  }, [handleChange, hideModal, is721, onSelectSubTokens, pairAddress, showModal])

  const handleOpenIdSelectionModal = useCallback(() => {
    subTokenSelection()
    setSwapType(SwapType.MANUAL)
  }, [subTokenSelection])

  useEffect(() => {
    if (enableAuto && swapType === SwapType.AUTO && onSelectSubTokens) {
      onSelectSubTokens([])
    }
  }, [enableAuto, onSelectSubTokens, swapType])

  return (
    <>
      {is721 && onSelectSubTokens && (
        <>
          <Box
            sx={{
              paddingBottom: 8,
              margin: '0 auto',
              paddingLeft: 0,

              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                justifyContent: 'flex-end',
              }}
            >
              {enableAuto && (
                <SwapTypeButton
                  selected={swapType === SwapType.AUTO}
                  text={SwapType.AUTO}
                  helperText="You will receive non-selective/random NFT after each swap."
                  onClick={() => {
                    setSwapType(SwapType.AUTO)
                    onSelectSubTokens && onSelectSubTokens([])
                  }}
                />
              )}
              <SwapTypeButton
                disabled={enableAuto && !pairAddress}
                selected={swapType === SwapType.MANUAL}
                text={SwapType.MANUAL}
                helperText={
                  enableAuto && !pairAddress
                    ? 'Choose the input token first'
                    : 'You can choose specific NFTs from the pool.'
                }
                onClick={handleOpenIdSelectionModal}
              />
            </Box>
          </Box>
        </>
      )}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        {/* <InputLabel>Token</InputLabel> */}
        <SelectButton
          width={'100%'}
          onClick={showCurrencySearch}
          disabled={disableCurrencySelect || disabled}
          primary={selectActive}
          height={'48px'}
          selected={!!currency}
        >
          {currency ? (
            <LogoText logo={<CurrencyLogo currency={currency} />} text={is1155 ? currency.name : getSymbol(currency)} />
          ) : (
            <>Select Token</>
          )}
        </SelectButton>
        {is721 && !enableAuto ? (
          <Box flexGrow={1}>
            <SelectButton onClick={handleOpenIdSelectionModal} selected={!!value}>
              {!!value ? value.toString() : 'Choose token Id'}
            </SelectButton>
          </Box>
        ) : (
          <Box flexGrow={1}>
            <InputNumerical
              placeholder={placeholder ?? 'Enter amount'}
              value={value.toString()}
              onChange={handleChange}
              type={'number'}
              disabled={disabled || disableInput}
              focused={inputFocused}
              integer={!!is1155 || !!is721}
              height={48}
            />
          </Box>
        )}{' '}
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={-6}>
          <Typography fontSize={12} sx={{ color: theme.palette.text.secondary }}></Typography>
          <Box display="flex" alignItems={'center'}>
            {!hideBalance && (
              <Typography fontSize={12} sx={{ color: theme.palette.text.secondary }}>
                Balance:{' '}
                {!!currency && selectedCurrencyBalance ? trimBalance(selectedCurrencyBalance?.toSignificant(6)) : ''}
                {!selectedCurrencyBalance && '-'}
              </Typography>
            )}
            {currency && onMax && (
              <Button
                variant="text"
                sx={{
                  fontSize: 12,
                  minWidth: 'unset',
                  width: 'max-content',
                  height: 'max-content',
                  padding: '0 10px',
                }}
                onClick={onMax}
              >
                MAX
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </>
  )
}
