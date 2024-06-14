import clsx from 'clsx'
import { useDispatch } from 'react-redux'

function SearchBarDatePicker({ modalToggle, isOpenModal, checkInDate, checkOutDate }) {
  const dispatch = useDispatch()

  return (
    <div className='flex flex-1 items-center justify-center '>
      <div
        onClick={() => {
          dispatch(modalToggle({ key: 'checkInDate' }))
        }}
        className={clsx(
          'w-full rounded-full  transition-all duration-75 hover:bg-gray-200 ',
          isOpenModal.checkInDate && 'bg-white shadow-lg  hover:bg-white',
        )}
      >
        <div className='w-full border-r-[1px] border-gray-200 p-4'>
          <span className='block text-xs font-semibold '>체크인</span>
          <button className='text-gray-500'>{checkInDate || '날짜 추가'}</button>
        </div>
      </div>

      <div
        onClick={() => {
          dispatch(modalToggle({ key: 'checkOutDate' }))
        }}
        className={clsx(
          'w-full rounded-full   transition-all duration-75 hover:bg-gray-200',
          isOpenModal.checkOutDate && 'bg-white shadow-lg  hover:bg-white',
        )}
      >
        <div className='w-full border-r border-gray-300 p-4'>
          <span className='block text-xs font-semibold '>체크아웃</span>
          <button className='text-gray-500'>{checkOutDate || '날짜 추가'}</button>
        </div>
      </div>
    </div>
  )
}

export default SearchBarDatePicker
