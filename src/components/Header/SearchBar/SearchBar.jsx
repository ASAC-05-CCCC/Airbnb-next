const SearchBar = ({ children }) => {
  return (
    <div className='flex justify-center sm:w-full lg:w-[800px] transition-all'>
      <div className='relative w-full '>{children}</div>
    </div>
  )
}

export default SearchBar
