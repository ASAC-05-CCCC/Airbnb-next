'use client'

import SmallSearchBar from '@/components/Header/SearchBar/SmallSearchBar'
import SearchForm from '@/components/Header/SearchBar/searchForm'
// import useIsScroll from '@/hooks/useIsScroll'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

const NavbarWrapper = () => {
  const pathname = usePathname()
  console.log(pathname)
  // const scrolled = useIsScroll()
  return (
    <div className='text w-full flex-1 justify-center'>
      <div className={clsx('left-0 flex w-full origin-center justify-center transition-all ')}>
        {true && <SmallSearchBar />}
      </div>
    </div>
  )
}

export default NavbarWrapper
