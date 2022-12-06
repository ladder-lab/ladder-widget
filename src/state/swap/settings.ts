import { atom } from 'jotai'
import { atomWithReset } from 'jotai/utils'

import { pickAtom } from '../atoms'

export interface Slippage {
  max: string | undefined // expressed as a percent (eg '0.42' is 0.42%)
}

export interface Settings {
  slippage: Slippage
  transactionTtl: number | undefined
  userSingleHopOnly: boolean
}

const initialSettings: Settings = {
  slippage: { max: undefined },
  transactionTtl: undefined,
  userSingleHopOnly: false,
}

export const controlledAtom = atom<Settings | undefined>(undefined)
export const stateAtom = atomWithReset(initialSettings)
export const settingsAtom = atom((get) => {
  const controlled = get(controlledAtom)
  return controlled ? controlled : get(stateAtom)
}, stateAtom.write)

export const slippageAtom = pickAtom(settingsAtom, 'slippage')
export const transactionTtlAtom = pickAtom(settingsAtom, 'transactionTtl')
export const userSingleHopOnlyAtom = pickAtom(settingsAtom, 'userSingleHopOnly')
