import React from 'react'

import StartHostButton from '@/components/Header/startHostButton'
import LanguageButton from '@/components/Header/languageButton'
import AccountButton from '@/components/Header/accountButton'

const HeaderSideBox = () => {
  return (
    <>
      <div className='relative flex h-full items-center justify-center gap-4'>
        <div className='flex items-center justify-center'>
          <StartHostButton />
          <LanguageButton />
        </div>
        <AccountButton />
      </div>
    </>
  )
}

export default HeaderSideBox
