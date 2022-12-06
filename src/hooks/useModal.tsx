import { useContext } from 'react'

import { ModalContext } from '../context/ModalContext'

export default function useModal(): any {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModal must be used within a provider')
  }

  return context
}
