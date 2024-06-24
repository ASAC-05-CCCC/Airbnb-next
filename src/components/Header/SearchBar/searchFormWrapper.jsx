import clsx from 'clsx'

function SearchFormWrapper({ searchBarOpen, children }) {
  return (
    <>
      <div
        className={clsx(
          'pointer-events-none absolute left-0 top-16 z-20 mb-2 flex h-full w-full justify-center transition-all duration-300 lg:top-8 lg:px-32',
          // 'before:absolute before:left-0 before:top-2/4 before:h-screen before:w-full before:bg-[#00000040]',
          !searchBarOpen && '-translate-y-28 scale-0 opacity-0 sm:h-0',
        )}
      >
        {children}
      </div>
    </>
  )
}

export default SearchFormWrapper
