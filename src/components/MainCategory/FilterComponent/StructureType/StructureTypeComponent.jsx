import { useState } from 'react'

import FilterEachComponent from '@/components/MainCategory/FilterComponent/FilterEachComponent'
import StructureTypeEachComponent from './StructureTypeEachButton'

function StructureTypeComponent() {
  const [isHouse, setIsHouse] = useState(false)
  const [isApartment, setIsApartment] = useState(false)
  const [isOutbuilding, setIsOutbuilding] = useState(false)
  const [isHotel, setIsHotel] = useState(false)

  const structureList = [
    {
      structureIcon: '/images/houseIcon.svg',
      structureName: '주택',
      isSelect: isHouse,
      setIsSelect: setIsHouse,
    },
    {
      structureIcon: '/images/apartmentIcon.svg',
      structureName: '아파트',
      isSelect: isApartment,
      setIsSelect: setIsApartment,
    },
    {
      structureIcon: '/images/outbuildingIcon.svg',
      structureName: '게스트용 별채',
      isSelect: isOutbuilding,
      setIsSelect: setIsOutbuilding,
    },
    {
      structureIcon: '/images/hotelIcon.svg',
      structureName: '호텔',
      isSelect: isHotel,
      setIsSelect: setIsHotel,
    },
  ]

  return (
    <>
      <FilterEachComponent title={'건물 유형'}>
        <div className='grid grid-cols-4 h-[154px] gap-4 mb-2'>
          {structureList.map((structure, idx) => (
            <StructureTypeEachComponent
              key={idx}
              structureIcon={structure.structureIcon}
              structureName={structure.structureName}
              isSelect={structure.isSelect}
              setIsSelect={structure.setIsSelect}
            />
          ))}
        </div>
      </FilterEachComponent>
    </>
  )
}

export default StructureTypeComponent
