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
          ' left-0 top-8 z-20 mb-2 flex w-full justify-center lg:absolute lg:px-32',
          'transition-all duration-300 before:absolute before:left-0 before:h-full before:w-full',
          !searchBarOpen && '-translate-y-20 scale-0',
        )}
      >
        <SearchForm />
      </div>
    </>
  )
}

export default SearchFormWrapper
