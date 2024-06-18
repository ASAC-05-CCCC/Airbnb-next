import clsx from 'clsx'
import { useDispatch } from 'react-redux'

function SearchBarLocation({ modalToggle, isOpenModal, location }) {
  const dispatch = useDispatch()

  return (
    <div
      onClick={() => {
        dispatch(modalToggle({ key: 'location' }))
      }}
      className={clsx(
        'h-full  basis-1/3 border-gray-200  transition-all hover:rounded-full hover:bg-gray-200',
        isOpenModal.location && 'rounded-full bg-white shadow-lg  hover:bg-white ',
      )}
    >
      <div className='flex items-center'>
        <div className='flex flex-col p-4'>
          <h2 className='text-xs font-semibold'>여행지</h2>
          <input
            type='text'
            placeholder='여행지 검색'
            className='bg-transparent text-gray-900 focus:outline-none'
            // @ts-ignore
            readOnly={location || '유연한 검색'}
          />
        </div>
      </div>
    </div>
  )
}

export default SearchBarLocation
