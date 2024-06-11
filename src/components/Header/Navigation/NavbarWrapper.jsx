'use client'

import NavigationBar from '@/components/Header/Navigation/NavigationBar'
import FullSearchBar from '@/components/Header/SearchBar/FullSearchBar'
import SearchBar from '@/components/Header/SearchBar/SearchBar'
import SearchInputModal from '@/components/Header/SearchBar/SearchInputModal'
import SmallSearchBar from '@/components/Header/SearchBar/SmallSearchBar'
import { SearchContextProvider } from '@/context/SearchContext'
// import useIsScroll from '@/hooks/useIsScroll'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

const NavbarWrapper = () => {
  const pathname = usePathname()
  console.log(pathname)
  // const scrolled = useIsScroll()
  return (
    <div className='text  flex-1 '>
      <div
        className={clsx(
          'left-0 w-full origin-center transition-all ',
          // scrolled ? 'sm:absolute sm:top-20 lg:top-6' : 'sm:absolute sm:top-20 lg:top-6',
        )}
      >
        <form onSubmit={e => e.preventDefault()} className='w-full' action='/'>
          <div className='relative flex w-full flex-col items-center justify-center gap-10'>
            <SearchContextProvider>
              {/* smaall가 있으면 Navigation은 사라짐 */}
              <SearchBar>
                {pathname === '/' ? ( //
                  <div
                    className={clsx(
                      'absolute flex w-full flex-col items-center justify-center',
                      // scrolled ? 'invisible' : 'visible',
                    )}
                  >
                    <NavigationBar />
                    <FullSearchBar />
                  </div>
                ) : (
                  <SmallSearchBar />
                )}
                <SearchInputModal />
              </SearchBar>
            </SearchContextProvider>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NavbarWrapper
