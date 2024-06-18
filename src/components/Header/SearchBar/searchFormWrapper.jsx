import SearchForm from '@/components/Header/SearchBar/searchForm'
import clsx from 'clsx'

function SearchFormWrapper({ searchBarOpen }) {
  return (
    <>
      <div
        className={clsx(
          'w-full bg-white transition-all duration-300',
          !searchBarOpen ? 'h-0' : 'lg:h-24',
        )}
      ></div>
      <div
        className={clsx(
          'pointer-events-none left-0 top-8 z-20 mb-2 flex h-full w-full justify-center transition-all duration-300 lg:absolute lg:px-32',
          // 'before:absolute before:left-0 before:top-2/4 before:h-screen before:w-full before:bg-[#00000040]',
          !searchBarOpen && '-translate-y-28 scale-0 opacity-0 sm:h-0',
        )}
      >
        <SearchForm />
      </div>
    </>
  )
}

export default SearchFormWrapper
