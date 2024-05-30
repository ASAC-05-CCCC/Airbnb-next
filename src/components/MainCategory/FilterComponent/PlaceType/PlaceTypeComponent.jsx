import { useState } from 'react'

import FilterEachComponent from '@/components/MainCategory/FilterComponent/FilterEachComponent'
import PlaceSelectButton from '@/components/MainCategory/FilterComponent/PlaceType/PlaceSelectButton'

function PlaceTypeComponent() {
  const [type, setType] = useState('모든 유형')
  const [description, setDescription] = useState('방, 집 전체 등 원하는 숙소 유형을 검색해 보세요.')

  return (
    <>
      <FilterEachComponent title={'숙소 유형'} description={description}>
        <div className='w-full h-[90px]'>
          <div className='flex flex-rows h-[60px] mx-8'>
            <PlaceSelectButton
              name={'모든 유형'}
              setType={setType}
              type={type}
              setDescription={setDescription}
            />
            <PlaceSelectButton
              name={'방'}
              setType={setType}
              type={type}
              setDescription={setDescription}
            />
            <PlaceSelectButton
              name={'집 전체'}
              setType={setType}
              type={type}
              setDescription={setDescription}
            />
          </div>
        </div>
      </FilterEachComponent>
    </>
  )
}

export default PlaceTypeComponent
