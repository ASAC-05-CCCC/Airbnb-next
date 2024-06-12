import { useDispatch, useSelector } from 'react-redux'

import FilterEachComponent from '@/components/MainCategory/FilterComponent/FilterEachComponent'
import ReservationEachOption from '@/components/MainCategory/FilterComponent/Reservation/ReservationEachOption'
import { setIsInstantBook } from '@/app/redux/filterSlice'
import { setIsSelfCheckIn } from '@/app/redux/filterSlice'
import { setIsAllowPet } from '@/app/redux/filterSlice'

function ReservationComponent() {
  const dispatch = useDispatch()

  const reservationOptions = [
    {
      title: '즉시 예약',
      description: '호스트 승인을 기다릴 필요 없이 예약할 수 있는 숙소',
      isCheck: useSelector(states => states['filter'].isInstantBook),
      setIsCheck: () => dispatch(setIsInstantBook()),
    },
    {
      title: '셀프 체크인',
      description: '숙소에 도착한 후 복잡한 절차 없이 쉽게 입실할 수 있습니다.',
      isCheck: useSelector(states => states['filter'].isSelfCheckIn),
      setIsCheck: () => dispatch(setIsSelfCheckIn()),
    },
    {
      title: '반려동물 동반 가능',
      description: '보조동물을 동반하시나요?',
      isCheck: useSelector(states => states['filter'].isAllowPet),
      setIsCheck: () => dispatch(setIsAllowPet()),
    },
  ]

  return (
    <>
      <FilterEachComponent title={'예약 옵션'}>
        {reservationOptions.map((reservationOption, index) => (
          <ReservationEachOption
            key={index}
            title={reservationOption.title}
            description={reservationOption.description}
            isCheck={reservationOption.isCheck}
            setIsCheck={reservationOption.setIsCheck}
          />
        ))}
      </FilterEachComponent>
    </>
  )
}

export default ReservationComponent
