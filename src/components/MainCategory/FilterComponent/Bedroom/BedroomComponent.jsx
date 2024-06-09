import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FilterEachComponent from '@/components/MainCategory/FilterComponent/FilterEachComponent'
import BedroomEachComponent from '@/components/MainCategory/FilterComponent/Bedroom/BedroomEachComponent'
import { setBedroomCount } from '@/app/redux/filterSlice'
import { setBedCount } from '@/app/redux/filterSlice'
import { setBathroomCount } from '@/app/redux/filterSlice'

function BedroomComponent() {
  const dispatch = useDispatch()
  const bedroomCount = useSelector(states => states['filter'].bedroomCount)
  const bedCount = useSelector(states => states['filter'].bedCount)
  const bathroomCount = useSelector(states => states['filter'].bathroomCount)

  const onEventHandlerBedroom = number => dispatch(setBedroomCount(number))

  const onEventHandlerBed = number => dispatch(setBedCount(number))

  const onEventHandlerBathroom = number => dispatch(setBathroomCount(number))

  return (
    <>
      <FilterEachComponent title={'침실과 침대'}>
        <div>
          <BedroomEachComponent
            type={'침실'}
            onClick={onEventHandlerBedroom}
            present={bedroomCount}
          />
          <BedroomEachComponent type={'침대'} onClick={onEventHandlerBed} present={bedCount} />
          <BedroomEachComponent
            type={'욕실'}
            onClick={onEventHandlerBathroom}
            present={bathroomCount}
          />
        </div>
      </FilterEachComponent>
    </>
  )
}

export default BedroomComponent
