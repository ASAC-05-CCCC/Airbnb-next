import { useDispatch } from 'react-redux'

import { setPrice } from '@/app/redux/filterSlice'

function PriceInputBox({ type, price }) {
  const dispatch = useDispatch()

  const onEventHandler = price => {
    dispatch(setPrice({ minmax: type, price: price }))
  }

  return (
    <>
      <div className='flex w-[270px] flex-col rounded-lg border-[1px] border-gray-400'>
        <div className='ml-3 mt-2 text-xs text-gray-600'>{type}</div>
        <div className='mb-2 ml-3 flex flex-row'>
          <div className='pr-2'>
            <div className='text-sm'>₩</div>
          </div>
          <input
            type='number'
            value={price}
            onChange={e => {
              onEventHandler(e.target.value)
            }}
            className='mr-3 text-sm text-gray-700 focus:outline-none'
          ></input>
        </div>
      </div>
    </>
  )
}

export default PriceInputBox
