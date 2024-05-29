const SearchModal = ({ children }) => {
  return (
    <>
      <div className='w-full p-4 bg-white border border-gray-100 shadow-md rounded-xl'>
        {children}
      </div>
    </>
  )
}

export default SearchModal
