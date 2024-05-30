function SmallSearchBar({ children }) {
  return (
    <>
      <div className='flex justify-center items-center w-[360px] transition-all rounded-full shadow-sm shadow-gray-300 hover:shadow-lg py-2 border-gray-200 border-[1px]'>
        <button className='flex items-center justify-center w-full text-sm'>
          {/* location */}
          <div className='w-full border-gray-300 border-r-[1px]'>
            <span className='whitespace-nowrap'>어디든지</span>
          </div>
          {/* date */}
          <div className='w-full border-gray-300 border-r-[1px]'>
            <span className='whitespace-nowrap '>언제든지 일주일</span>
          </div>
          {/* guest */}
          <div className='flex items-center justify-center w-full gap-2'>
            <span className='whitespace-nowrap '>게스</span>
            <div className='flex items-center justify-center p-3 text-white bg-red-500 rounded-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='w-3 h-3'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </div>
          </div>
        </button>
        {children}
      </div>
    </>
  )
}

export default SmallSearchBar
