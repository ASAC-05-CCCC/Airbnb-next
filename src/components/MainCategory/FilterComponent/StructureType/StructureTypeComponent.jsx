import { useDispatch, useSelector } from 'react-redux'

import FilterEachComponent from '@/components/MainCategory/FilterComponent/FilterEachComponent'
import StructureTypeEachComponent from './StructureTypeEachButton'
import { setIsHouse, setIsApartment, setIsOutbuilding, setIsHotel } from '@/app/redux/filterSlice'

function StructureTypeComponent() {
  const dispatch = useDispatch()

  const isHouse = useSelector(states => states['filter'].isHouse)
  const isApartment = useSelector(states => states['filter'].isApartment)
  const isOutbuilding = useSelector(states => states['filter'].isOutbuilding)
  const isHotel = useSelector(states => states['filter'].isHotel)

  const structureList = [
    {
      structureIcon: '/images/houseIcon.svg',
      structureName: '주택',
      isSelect: isHouse,
      setIsSelect: () => dispatch(setIsHouse()),
    },
    {
      structureIcon: '/images/apartmentIcon.svg',
      structureName: '아파트',
      isSelect: isApartment,
      setIsSelect: () => dispatch(setIsApartment()),
    },
    {
      structureIcon: '/images/outbuildingIcon.svg',
      structureName: '게스트용 별채',
      isSelect: isOutbuilding,
      setIsSelect: () => dispatch(setIsOutbuilding()),
    },
    {
      structureIcon: '/images/hotelIcon.svg',
      structureName: '호텔',
      isSelect: isHotel,
      setIsSelect: () => dispatch(setIsHotel()),
    },
  ]

  return (
    <>
      <FilterEachComponent title={'건물 유형'}>
        <div className='mb-2 grid h-[154px] grid-cols-4 gap-4'>
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
