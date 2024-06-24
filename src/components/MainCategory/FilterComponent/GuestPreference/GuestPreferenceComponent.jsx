// @ts-nocheck
import Image from 'next/image'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'

import FilterEachComponent from '@/components/MainCategory/FilterComponent/FilterEachComponent'
const preferenceIcon = '/images/preferenceIcon.svg'
import { setIsPreference } from '@/redux/filterSlice'

function GuestPreferenceComponent() {
  const dispatch = useDispatch()
  const isPreference = useSelector(states => states['filter'].isPreference)

  const onClickEventHandler = () => {
    dispatch(setIsPreference())
  }

  return (
    <>
      <FilterEachComponent
        title={'최고 수준의 숙소'}
        description={undefined}
        // eslint-disable-next-line react/no-children-prop
        children={undefined}
      >
        <div className='mb-6 h-[154px]'>
          <button
            onClick={onClickEventHandler}
            className={clsx(
              'h-[154px] w-[320px] rounded-xl px-[24px] py-[20px] duration-200 active:scale-90 active:border-black',
              isPreference ? 'border-2 border-black bg-gray-100' : 'border-[1px] border-gray-300',
            )}
          >
            <Image src={preferenceIcon} width={38} height={38} alt='preference' />
            <div className='mt-2 text-left text-[15px]'>게스트 선호</div>
            <div className='mt-1 text-left text-xs text-gray-500'>
              에어비앤비 게스트에게 가장 사랑받는
              <br />
              숙소
            </div>
          </button>
        </div>
      </FilterEachComponent>
    </>
  )
}

export default GuestPreferenceComponent
