'use client'
import SmallSearchBar from '@/components/Header/SearchBar/SmallSearchBar'
import SearchFormWrapper from '@/components/Header/SearchBar/searchFormWrapper'
import Logo from '@/components/Header/Logo'
import HeaderSideBox from '@/components/Header/headerSideBox'
import clsx from 'clsx'
import useIsScroll from '@/hooks/useIsScroll'
import { useEffect, useState } from 'react'
import { useSelectedLayoutSegment } from 'next/navigation'

const Header = () => {
  const [searchBarOpen, setSearchBarOpen] = useState(false)
  const isScroll = useIsScroll()

  const segments = useSelectedLayoutSegment()

  useEffect(() => {
    // 메인 페이지
    if (segments === null) {
      isScroll ? setSearchBarOpen(false) : setSearchBarOpen(true)
      // 메인 페이지가 아닐때
    } else {
      isScroll && setSearchBarOpen(false)
    }
  }, [isScroll, segments])

  return (
    <>
      <div className='xl:px-18 w-full border-b-[1px] border-solid bg-white py-2 sm:px-8 lg:px-10'>
        <header className='w-full'>
          <div
            className={clsx(
              'relative z-30 flex h-full w-full items-center justify-between bg-white py-3',
            )}
          >
            <Logo />
            <SmallSearchBar searchBarOpen={searchBarOpen} setSearchBarOpen={setSearchBarOpen} />
            <HeaderSideBox />
          </div>
          <SearchFormWrapper searchBarOpen={searchBarOpen} />
        </header>
        <div
          className={clsx(
            'w-full bg-white transition-all duration-300',
            !searchBarOpen ? 'h-0' : 'h-32 lg:h-24',
          )}
        ></div>
      </div>
    </>
  )
}

export default Header
