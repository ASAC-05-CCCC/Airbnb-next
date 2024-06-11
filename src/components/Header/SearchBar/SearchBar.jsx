const SearchBar = ({ children }) => {
  return (
    <div className='flex justify-center transition-all  sm:w-full'>
      <div className='relative flex w-full items-center justify-center'>{children}</div>
    </div>
  )
}

export default SearchBar
