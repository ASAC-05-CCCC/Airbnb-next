import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'

import { selectPlaceType } from '@/redux/filterSlice'

function PlaceSelectButton({ name }) {
  const dispatch = useDispatch()
  const typeName = useSelector(states => states['filter'].type)

  const onEventHandler = () => {
    dispatch(selectPlaceType(name))
  }

  return (
    <>
      <button
        onClick={onEventHandler}
        className={clsx(
          'h-[100%] w-full border-[0.5px] border-gray-300 border-l-white first:rounded-l-xl first:border-l-gray-300 last:rounded-r-xl hover:border-[1.2px] hover:border-black active:bg-gray-100',
          typeName === name ? 'bg-slate-800 text-white' : 'bg-white',
        )}
      >
        <div className='text-sm font-medium'>{name}</div>
      </button>
    </>
  )
}

export default PlaceSelectButton
