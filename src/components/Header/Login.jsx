'use client'
import React from 'react'

import AccountModal from '@/components/Header/AccountModal'
import useModal from '@/hooks/useModal'
import Image from 'next/image'

const Login = () => {
  const { Modal, isOpen, open, close } = useModal()
  return (
    <>
      <div className='relative flex items-center justify-center h-full gap-4'>
        {/* MakeHost*/}
        <div className='flex items-center justify-center'>
          <a
            href='#'
            className="px-4 py-2 transition-all duration-100 ease-in cursor-pointer hover:bg-gray-200 rounded-2xl text-neutral-800 text-sm font-['SF Pro']"
          >
            당신의 공간을 에어비엔비하세요
          </a>

          {/* LanguageBtn*/}
          <div className='px-3 py-2 transition-all duration-100 ease-in cursor-pointer hover:bg-gray-200 rounded-2xl'>
            <a href='#'>
              <Image src='/images/globe.svg' width={30} height={30} alt='globe' />
            </a>
          </div>
        </div>

        <>
          {/* AccountBtn */}
          <button
            onClick={() => (isOpen ? close() : open())}
            className='flex items-center justify-center gap-2 px-4 py-1 transition-all duration-200 ease-in border border-gray-300 rounded-3xl hover:shadow-md'
          >
            <div className='flex items-center justify-center w-10 px-1 gap-1'>
              <Image src='/images/burger_menu.svg' width={30} height={30} alt='burger_men' />
              <Image src='/images/myAccountImg.svg' width={40} height={40} alt='account' />
            </div>
            <div className='relative'>
              <div className={`absolute right-0 top-10 opacity-100`}>
                <Modal>
                  <AccountModal />
                </Modal>
              </div>
              {/* 모달이 들어갈 곳 */}
            </div>
          </button>
        </>
      </div>
    </>
  )
}

export default Login
