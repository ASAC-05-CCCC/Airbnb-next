'use client'

import NavigationBar from '@/components/Header/Navigation/NavigationBar'
import FullSearchBar from '@/components/Header/SearchBar/FullSearchBar'
import SearchBar from '@/components/Header/SearchBar/SearchBar'
import SearchInputModal from '@/components/Header/SearchBar/SearchInputModal'
import { SearchContextProvider } from '@/context/SearchContext'
import clsx from 'clsx'

const NavbarWrapper = () => {
  return (
    <div className='flex-auto text'>
      <div
        className={clsx(
          'left-0 w-full transition-all origin-center sm:absolute sm:top-20 lg:top-6',
        )}
      >
        <form onSubmit={e => e.preventDefault()} className='w-full' action='/'>
          <div className='flex flex-col items-center justify-center w-full gap-10'>
            <SearchContextProvider>
              {/* smaall가 있으면 Navigation은 사라짐 */}
              <NavigationBar />
              <SearchBar>
                {/* <SmallSearchBar /> */}
                <FullSearchBar />
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
