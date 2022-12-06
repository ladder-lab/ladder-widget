import { atom } from 'jotai'
import { atomWithImmer } from 'jotai/immer'
import { useUpdateAtom } from 'jotai/utils'
import { useCallback } from 'react'

export enum MintField {
  CURRENCY_A = 'CURRENCY_A',
  CURRENCY_B = 'CURRENCY_B',
}

export interface MintState {
  readonly independentField: MintField
  readonly typedValue: string
  readonly otherTypedValue: string // for the case when there's no liquidity
  readonly tokenIds: undefined | Array<string | number>
}

const initialMint: MintState = {
  independentField: MintField.CURRENCY_A,
  typedValue: '',
  otherTypedValue: '',
  tokenIds: undefined,
}

const controlledAtom = atom<MintState | undefined>(undefined)
const stateAtom = atomWithImmer(initialMint)

export const mintAtom = atom((get) => {
  const controlled = get(controlledAtom)
  return controlled ? controlled : get(stateAtom)
}, stateAtom.write)

export function useMintActionHandlers(noLiquidity: boolean | undefined): {
  onFieldAInput: (typedValue: string) => void
  onFieldBInput: (typedValue: string) => void
  onSetTokenIds: (tokenIds: Array<string | number>) => void
  onResetMintState: () => void
} {
  const setMint = useUpdateAtom(mintAtom)
  const setMintState = useCallback(
    (field: MintField, typedValue: string, noLiquidity: boolean) => {
      setMint((state) => {
        if (noLiquidity) {
          // they're typing into the field they've last typed in
          if (field === state.independentField) {
            return {
              ...state,
              independentField: field,
              typedValue,
            }
          }
          // they're typing into a new field, store the other value
          else {
            return {
              ...state,
              independentField: field,
              typedValue,
              otherTypedValue: state.typedValue,
            }
          }
        } else {
          return {
            ...state,
            independentField: field,
            typedValue,
            otherTypedValue: '',
          }
        }
      })
    },
    [setMint]
  )

  const onFieldAInput = useCallback(
    (typedValue: string) => {
      setMintState(MintField.CURRENCY_A, typedValue, noLiquidity === true)
    },
    [noLiquidity, setMintState]
  )
  const onFieldBInput = useCallback(
    (typedValue: string) => {
      setMintState(MintField.CURRENCY_B, typedValue, noLiquidity === true)
    },
    [noLiquidity, setMintState]
  )

  const onSetTokenIds = useCallback(
    (tokenIds: Array<string | number>) => {
      setMint((state) => {
        return { ...state, tokenIds }
      })
    },
    [setMint]
  )

  const onResetMintState = useCallback(() => {
    setMint((state) => {
      return initialMint
    })
  }, [setMint])

  return {
    onFieldAInput,
    onFieldBInput,
    onSetTokenIds,
    onResetMintState,
  }
}
