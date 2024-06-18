'use client'
import NavigationBar from '@/components/Header/Navigation/NavigationBar'
import FullSearchBar from '@/components/Header/SearchBar/FullSearchBar'
import SearchBar from '@/components/Header/SearchBar/SearchBar'
import SearchInputModal from '@/components/Header/SearchBar/SearchInputModal'

function SearchForm() {
  return (
    <form onSubmit={e => e.preventDefault()} className='w-full max-w-[850px]' action='/'>
      <div className='flex w-full flex-col items-center justify-center gap-10'>
        <SearchBar>
          <div className='flex w-full min-w-fit flex-col items-center justify-center gap-8'>
            <NavigationBar />
            <FullSearchBar />
          </div>
          <SearchInputModal />
        </SearchBar>
      </div>
    </form>
  )
}

export default SearchForm
