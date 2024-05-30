import Image from 'next/image'
import clsx from 'clsx'
import { useState } from 'react'

import FilterEachComponent from '@/components/MainCategory/FilterComponent/FilterEachComponent'
import preferenceIcon from '/public/images/preferenceIcon.svg'

function GuestPreferenceComponent() {
  const [isPreference, setIsPreference] = useState(false)

  const onClickEventHandler = () => {
    console.log(isPreference)
    setIsPreference(!isPreference)
  }

  return (
    <>
      <FilterEachComponent title={'최고 수준의 숙소'}>
        <div className='h-[154px] mb-6'>
          <button
            onClick={onClickEventHandler}
            className={clsx(
              'w-[320px] h-[154px] rounded-xl py-[20px] px-[24px] duration-200 active:scale-90 active:border-black',
              isPreference ? 'bg-gray-100 border-2 border-black' : 'border-[1px] border-gray-300',
            )}
          >
            <Image src={preferenceIcon} width={38} height={38} alt='preference' />
            <div className='text-left text-[15px] mt-2'>게스트 선호</div>
            <div className='text-left text-xs text-gray-500 mt-1'>
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
