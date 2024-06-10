import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { modalToggle } from '@/app/redux/searchSlice'
import { useRouter } from 'next/navigation'

function FullSearchBar() {
  const dispatch = useDispatch()
  const { isOpenModal } = useSelector(state => state.search)
  const { checkInDate, checkOutDate } = useSelector(state => state.datePicker)
  const guest = useSelector(state => state.guest)

  const router = useRouter()

  const handleSearchSubmit = () => {
    //
    router.push(
      `/search?location=${location}&startDate=${checkInDate}&endDate=${checkOutDate}&guest=${Object.values(
        guest,
      ).reduce((prev, current) => prev + current)}`,
    )
  }
  /**
   * ! 컴포넌트 나누기
   */

  return (
    <>
      <section
        className={clsx(
          'flex w-full cursor-pointer items-center  overflow-hidden rounded-full shadow-md transition-all  duration-75 ',
          (isOpenModal.location ||
            isOpenModal.checkInDate ||
            isOpenModal.checkOutDate ||
            isOpenModal.guest) &&
            'bg-gray-200',
        )}
      >
        {/* location 선택 */}
        {/* <SearchBarLocation> */}
        <div
          onClick={() => {
            console.log(isOpenModal)
            dispatch(modalToggle({ key: 'location' }))
          }}
          className={clsx(
            'basis-1/3 rounded-full px-4 py-2 transition-all hover:bg-gray-200',
            isOpenModal.location && 'bg-white shadow-lg  hover:bg-white',
            "after:h-full after:w-1 after:bg-gray-200 after:content-['']",
          )}
        >
          <div className='flex items-center '>
            <div className='flex flex-col'>
              <h2 className='text-xs font-semibold'>여행지</h2>
              <input
                type='text'
                placeholder='여행지 검색'
                className='bg-transparent text-gray-900 focus:outline-none'
                // onChange={e => {
                //   location === '유연한 검색'
                //     ? (e.target.value = '여행지 검색')
                //     : (e.target.value = location)
                // }}
                // value={location || '유연한 검색'}
              />
            </div>
          </div>
        </div>

        {/* 날짜 추가 */}
        {/* <SearchBarDatepicker/> */}
        <div className='flex flex-1 items-center justify-center'>
          <div
            onClick={() => {
              dispatch(modalToggle({ key: 'checkInDate' }))
            }}
            className={clsx(
              'w-full rounded-full border-r border-gray-300 px-4 py-2 transition-all duration-75 hover:bg-gray-200 ',
              (isOpenModal.checkInDate || isOpenModal.checkOutDate) &&
                'bg-white shadow-lg  hover:bg-white',
            )}
          >
            <div className='w-full'>
              <span className='block text-xs font-semibold '>체크인</span>
              <button className='text-gray-500'>{checkInDate || '날짜 추가'}</button>
            </div>
          </div>

          <div
            onClick={() => {
              dispatch(modalToggle({ key: 'checkOutDate' }))
            }}
            className={clsx(
              'w-full border-r border-gray-300 px-4 py-2 transition-all duration-75 hover:rounded-full hover:bg-gray-200 ',
              (isOpenModal.checkInDate || isOpenModal.checkOutDate) &&
                'bg-white shadow-lg  hover:bg-white',
            )}
          >
            <div className='w-full'>
              <span className='block text-xs font-semibold '>체크아웃</span>
              <button className='text-gray-500'>{checkOutDate || '날짜 추가'}</button>
            </div>
          </div>
        </div>

        {/* guest 선택 */}
        {/* <SearchBarGuest/> */}
        <div
          onClick={() => {
            dispatch(modalToggle({ key: 'guest' }))
          }}
          className={clsx(
            'flex basis-1/3 rounded-full px-4 py-2 transition-all hover:bg-gray-200',
            isOpenModal.guest && 'bg-white shadow-lg  hover:bg-white',
          )}
        >
          {/* 게스트 추가 */}
          <div className='flex w-full items-center  hover:bg-gray-200'>
            <div>
              <span className='block text-xs font-semibold '>여행자</span>
              <button className='text-gray-500'>
                {`게스트
                ${Object.values(guest) //
                  .reduce((prev, current) => prev + current)}` || //
                  '게스트 추가'}
              </button>
            </div>
          </div>

          {/* 검색 버튼 */}
          <div className='ml-2 flex items-center px-2'>
            <button
              onClick={handleSearchSubmit}
              className='flex items-center justify-center rounded-full bg-red-500 p-3 text-white'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='h-4 w-4'
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
      </section>
    </>
  )
}

export default FullSearchBar
