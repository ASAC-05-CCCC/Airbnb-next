import AccountModalList from '@/components/Header/AccountModalList'
import AccountModalItem from '@/components/Header/accountModalItem'
import LoginModal from '@/components/login/loginModal'
import { useState } from 'react'

export default function AccountModalWrapper({ Modal }) {
  const [isLoginModal, setIsLoginModal] = useState(false)

  const openLoginModal = () => {
    setIsLoginModal(true)
  }
  const closeLoginModal = () => {
    setIsLoginModal(false)
  }

  return (
    <div className='relative'>
      <div className={`absolute right-0 top-10 z-40 opacity-100`}>
        <Modal>
          <AccountModalList>
            <div onClick={() => openLoginModal()} className='flex flex-col border-b-2'>
              <AccountModalItem text='회원가입' />
              <AccountModalItem text='로그인' />
            </div>
            <div className='flex flex-col'>
              <AccountModalItem text='당신의 공간을 에어비엔비하세요' />
              <AccountModalItem text='도움말 센터' />
            </div>
          </AccountModalList>
        </Modal>
      </div>
      {isLoginModal && <LoginModal closeLoginModal={closeLoginModal} />}
    </div>
  )
}
