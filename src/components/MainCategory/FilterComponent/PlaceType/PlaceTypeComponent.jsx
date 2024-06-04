import { useSelector } from 'react-redux'

import FilterEachComponent from '@/components/MainCategory/FilterComponent/FilterEachComponent'
import PlaceSelectButton from '@/components/MainCategory/FilterComponent/PlaceType/PlaceSelectButton'

function PlaceTypeComponent() {
  const typeDescription = useSelector(states => states['filter'].description)

  return (
    <>
      <FilterEachComponent title={'숙소 유형'} description={typeDescription}>
        <div className='h-[90px] w-full'>
          <div className='flex-rows mx-8 flex h-[60px]'>
            <PlaceSelectButton name={'모든 유형'} />
            <PlaceSelectButton name={'방'} />
            <PlaceSelectButton name={'집 전체'} />
          </div>
        </div>
      </FilterEachComponent>
    </>
  )
}

export default PlaceTypeComponent
