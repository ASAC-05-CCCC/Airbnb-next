import clsx from 'clsx'

function SmallSearchBar() {
  // const scrolled = useIsScroll()
  return (
    <>
      <div
        className={clsx(
          ' flex w-[400px] items-center justify-center rounded-full border-[1px] border-gray-200 py-2 shadow-sm shadow-gray-300 transition-all hover:shadow-lg',
          // scrolled ? 'visible' : 'invisible',
        )}
      >
        <button className='flex w-full items-center justify-center text-sm'>
          {/* location */}
          <div className='w-full border-r-[1px] border-gray-300'>
            <span className='whitespace-nowrap'>어디든지</span>
          </div>
          {/* date */}
          <div className='w-full border-r-[1px] border-gray-300'>
            <span className='whitespace-nowrap '>언제든지 일주일</span>
          </div>
          {/* guest */}
          <div className='flex w-full items-center justify-center gap-2'>
            <span className='whitespace-nowrap text-gray-300'>게스트 추가</span>
            <div className='flex items-center justify-center rounded-full bg-red-500 p-3 text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='h-3 w-3'
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
      </div>
    </>
  )
}

export default SmallSearchBar
