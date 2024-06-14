'use client'
import Login from '@/components/Header/Login'
import Logo from '@/components/Header/Logo'
import SearchFormWrapper from '@/components/Header/SearchBar/SearchFormWrapper'
import SmallSearchBar from '@/components/Header/SearchBar/SmallSearchBar'
import clsx from 'clsx'
import useIsScroll from '@/hooks/useIsScroll'

const Header = () => {
  const isScroll = useIsScroll()

  return (
    <>
      <div className='xl:px-18 w-full border-b-[1px] border-solid bg-white py-2 sm:px-8 lg:px-10'>
        <header className='w-full'>
          <div
            className={clsx(
              'relative flex h-full w-full items-center justify-between bg-white py-3',
            )}
          >
            <Logo />
            {isScroll && <SmallSearchBar />}
            <Login />
          </div>
          {!isScroll && <SearchFormWrapper />}
        </header>
      </div>
    </>
  )
}

export default Header
