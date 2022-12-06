import MessageBox from 'components/Interface/TransactionModals/MessageBox'
import TransacitonPendingModal from 'components/Interface/TransactionModals/TransactionPendingModal'
import { useSwapAmount } from 'hooks/swap'
import { useAddTransactionInfo } from 'hooks/transactions'
import useModal from 'hooks/useModal'
import { useUpdateAtom } from 'jotai/utils'
import { useCallback } from 'react'
import { displayTxHashAtom, Field } from 'state/swap'
import { TransactionInfo } from 'state/transactions'
import { isAnimating } from 'utils/animations'

/** Submits a transaction. Returns true if the transaction was submitted. */
export default function useOnSubmit() {
  const addTransactionInfo = useAddTransactionInfo()
  const setDisplayTxHash = useUpdateAtom(displayTxHashAtom)
  const [, setInputAmount] = useSwapAmount(Field.INPUT)
  const { showModal, hideModal } = useModal()

  return useCallback(
    async (submit: () => Promise<TransactionInfo | undefined | any>): Promise<boolean> => {
      let info: TransactionInfo | undefined
      try {
        showModal(<TransacitonPendingModal />)
        info = await submit()

        hideModal()
      } catch (e) {
        hideModal()
        showModal(<MessageBox type="error">{e.message}</MessageBox>)
        console.error('Failed to submit', e)
      }
      if (!info) return false

      addTransactionInfo(info)

      setDisplayTxHash(info.response.hash)

      if (isAnimating(document)) {
        return new Promise((resolve) => {
          const onAnimationEnd = () => {
            document.removeEventListener('animationend', onAnimationEnd)
            setInputAmount('')
          }
          document.addEventListener('animationend', onAnimationEnd)
        })
      } else {
        setInputAmount('')
      }

      return true
    },
    [addTransactionInfo, hideModal, setDisplayTxHash, setInputAmount, showModal]
  )
}
