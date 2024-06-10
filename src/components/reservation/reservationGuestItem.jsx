'use client'

import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease } from '@/app/redux/guestSlice'

const ReservationGuestItem = ({ name, desc, title }) => {
  const dispatch = useDispatch()
  const guestCount = useSelector(state => state.guest)
  return (
    <li
      className={`flex items-center justify-between   ${
        name === 'pets' ? 'border-none pb-0 ' : 'border-b-2 pb-4'
      }`}
    >
      <div className='flex flex-col'>
        <p className=''>{title}</p>
        <span className='text-gray-400'>{desc}</span>
      </div>

      <div className='flex-1'></div>

      <div className='flex gap-4'>
        <button
          onClick={() => dispatch(decrease({ key: name }))}
          className='rounded-full border border-gray-200 px-2 transition-all hover:border-gray-600'
        >
          -
        </button>
        <span>{guestCount[name]}</span>
        <button
          onClick={() => {
            dispatch(increase({ key: name }))
          }}
          className='rounded-full border border-gray-200 px-2 transition-all hover:border-gray-600'
        >
          +
        </button>
      </div>
    </li>
  )
}

export default ReservationGuestItem
