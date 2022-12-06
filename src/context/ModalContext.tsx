import React, { useCallback, useMemo, useState } from 'react'

interface ModalContextType {
  isOpen: boolean
  showModal: (component: React.ReactNode) => void
  hideModal: () => void
}

export const ModalContext = React.createContext<ModalContextType>({
  isOpen: false,
  showModal() {
    return undefined as void
  },
  hideModal() {
    return undefined as void
  },
})

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modal, setModal] = useState<React.ReactNode>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const hideModal = useCallback(() => {
    setModal(false)
    setIsOpen(false)
  }, [])

  const showModal = useCallback((modal: React.ReactNode) => {
    setModal(modal)
    setIsOpen(true)
  }, [])

  const val = useMemo(
    () => ({
      isOpen,
      hideModal,
      showModal,
    }),
    [hideModal, isOpen, showModal]
  )

  return (
    <ModalContext.Provider value={val}>
      {children}
      {modal}
    </ModalContext.Provider>
  )
}
