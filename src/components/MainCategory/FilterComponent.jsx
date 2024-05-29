'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'

import DetailModal from '@/components/common/DetailModal'
import FilterClearButton from '@/components/MainCategory/FilterComponent/FilterClearButton'
import FilterDoneButton from '@/components/MainCategory/FilterComponent/FilterDoneButton'
import PlaceTypeComponent from '@/components/MainCategory/FilterComponent/PlaceType/PlaceTypeComponent'
import PriceScopeComponent from '@/components/MainCategory/FilterComponent/PriceScope/PriceScopeComponent'
import BedroomComponent from '@/components/MainCategory/FilterComponent/Bedroom/BedroomComponent'
import GuestPreferenceComponent from '@/components/MainCategory/FilterComponent/GuestPreference/GuestPreferenceComponent'
import StructureTypeComponent from '@/components/MainCategory/FilterComponent/StructureType/StructureTypeComponent'
import FacilitiesComponent from '@/components/MainCategory/FilterComponent/SelectOption/Facilities/FacilitiesComponent'
import ReservationComponent from '@/components/MainCategory/FilterComponent/Reservation/ReservationComponent'
import AccessibilityComponent from '@/components/MainCategory/FilterComponent/SelectOption/Accessibility/AccessibilityComponent'
import LanguageComponent from '@/components/MainCategory/FilterComponent/SelectOption/Language/LanguageComponent'

import XIcon from '/public/images/XIcon.svg'

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
            <Image src={XIcon} alt='X' />
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
