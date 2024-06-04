import { useDispatch } from 'react-redux'

import { setClear } from '@/app/redux/filterSlice'

function FilterClearButton() {
  const dispatch = useDispatch()

  const onClickClearButton = () => {
    dispatch(setClear())
  }

  return (
    <button
      className='flex h-[2rem] w-[5rem] place-content-center place-items-center rounded-lg bg-white duration-200 hover:bg-gray-100 active:scale-95'
      onClick={onClickClearButton}
    >
      <div className='whitespace-nowrap p-3'>
        <div className='text-[14px] font-medium'>전체 해제</div>
      </div>
    </button>
  )
}

export default FilterClearButton
