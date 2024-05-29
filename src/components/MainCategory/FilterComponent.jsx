import { useRef, useEffect } from 'react'

import DetailModal from '../common/DetailModal'
import FilterClearButton from './FilterComponent/FilterClearButton'
import FilterDoneButton from './FilterComponent/FilterDoneButton'
import PlaceTypeComponent from './FilterComponent/PlaceType/PlaceTypeComponent'
import PriceScopeComponent from './FilterComponent/PriceScope/PriceScopeComponent'
import BedroomComponent from './FilterComponent/Bedroom/BedroomComponent'
import GuestPreferenceComponent from './FilterComponent/GuestPreference/GuestPreferenceComponent'
import StructureTypeComponent from './FilterComponent/StructureType/StructureTypeComponent'
import FacilitiesComponent from './FilterComponent/SelectOption/Facilities/FacilitiesComponent'
import ReservationComponent from './FilterComponent/Reservation/ReservationComponent'
import AccessibilityComponent from './FilterComponent/SelectOption/Accessibility/AccessibilityComponent'
import LanguageComponent from './FilterComponent/SelectOption/Language/LanguageComponent'

function FilterComponent({ setIsFilterModal }) {
  const filterModalRef = useRef()

  useEffect(() => {
    function handleOutside(e) {
      if (!filterModalRef.current.contains(e.target)) {
        setIsFilterModal(prev => !prev)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => {
      document.removeEventListener('mousedown', handleOutside)
    }
  })

  const onClickXButton = () => {
    setIsFilterModal(prev => !prev)
  }

  return (
    <DetailModal>
      <div
        className='relative max-w-[730px] w-[70%] h-[90%] bg-white rounded-xl'
        ref={filterModalRef}
      >
        <div
          className='absolute top-0 flex place-items-center place-content-center 
        w-full h-[60px] rounded-t-xl border-b-[1px] border-b-slate-200'
        >
          <button onClick={onClickXButton} className='absolute left-0 p-5'>
            <img src='/src/assets/XIcon.svg' />
          </button>
          <div className='text-sm	font-bold'>필터</div>
        </div>
        <div className='absolute w-full top-[60px] bottom-[70px] overflow-y-scroll'>
          <PlaceTypeComponent />
          <PriceScopeComponent />
          <BedroomComponent />
          <GuestPreferenceComponent />
          <StructureTypeComponent />
          <FacilitiesComponent />
          <ReservationComponent />
          <AccessibilityComponent />
          <LanguageComponent />
        </div>
        <div
          className='absolute bottom-0 w-full h-[70px] flex flex-row place-content-between 
        place-items-center rounded-b-xl border-t-[1px] border-t-slate-200'
        >
          <div className='pl-3'>
            <FilterClearButton />
          </div>
          <div className='pr-3'>
            <FilterDoneButton setIsFilterModal={setIsFilterModal} countPlace={125} />
          </div>
        </div>
      </div>
    </DetailModal>
  )
}

export default FilterComponent
