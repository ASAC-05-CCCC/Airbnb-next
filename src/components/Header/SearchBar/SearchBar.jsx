const SearchBar = ({ children, open, isOpen, close, dispatch }) => {
  return (
    <div className='flex justify-center sm:w-full lg:w-[800px] transition-all'>
      <div className='relative w-full '>
        {children}
        {/* Search Bar */}
        <div className='flex items-center w-full max-w-4xl bg-white rounded-full shadow-md cursor-pointer'>
          {/* 여행지 검색 */}
          <div
            onClick={() => {
              isOpen ? close() : open()
              dispatch({ type: 'LOCATION' })
            }}
            className='px-6 py-2 overflow-hidden transition-all rounded-full hover:bg-gray-200 '
          >
            <div className='flex items-center border-r border-gray-300 '>
              <div className='flex flex-col'>
                <h2 className='text-xs font-semibold'>여행지</h2>
                <input
                  type='text'
                  placeholder='여행지 검색'
                  className='text-gray-900 bg-transparent focus:outline-none'
                />
              </div>
            </div>
          </div>

          {/* 날짜 추가 */}
          <div
            onClick={() => {
              isOpen ? close() : open()
              dispatch({ type: 'datePicker' })
            }}
            className='flex items-center flex-1 px-4 py-2 rounded-full hover:bg-gray-200 '
          >
            <div className='w-full border-r'>
              <span className='block text-xs font-semibold '>날짜</span>
              <button className='text-gray-500'>날짜 추가</button>
            </div>
          </div>

          <div className='flex items-center justify-center rounded-full hover:bg-gray-200'>
            {/* 게스트 추가 */}

            <div
              onClick={() => {
                isOpen ? close() : open()
                dispatch({ type: 'guest' })
              }}
              className='flex items-center px-4 py-2 rounded-full hover:bg-gray-200'
            >
              <div>
                <span className='block text-xs font-semibold '>여행자</span>
                <button className='text-gray-500'>게스트 추가</button>
              </div>
            </div>

            {/* 검색 버튼 */}
            <div className='flex items-center px-2 ml-2'>
              <button className='flex items-center justify-center p-3 text-white bg-red-500 rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-5 h-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
