import { useState } from 'react'
import SearchModal from '../components/common/SearchModal'

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => {
    setIsOpen(true)
  }
  //
  const close = () => {
    setIsOpen(false)
  }

  return {
    // Modal이 열린 상태라면, 컴포넌트 반환, 아니면 null
    Modal: isOpen
      ? ({ children }) => {
          return <SearchModal>{children}</SearchModal>
        }
      : () => null,
    open,
    close,
    isOpen,
  }
}

export default useModal
