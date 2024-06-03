import FilterEachComponent from '@/components/MainCategory/FilterComponent/FilterEachComponent'
import ReservationEachOption from '@/components/MainCategory/FilterComponent/Reservation/ReservationEachOption'

function ReservationComponent() {
  return (
    <>
      <FilterEachComponent title={'예약 옵션'}>
        <ReservationEachOption
          title={'즉시 예약'}
          description={'호스트 승인을 기다릴 필요 없이 예약할 수 있는 숙소'}
        />
        <ReservationEachOption
          title={'셀프 체크인'}
          description={'숙소에 도착한 후 복잡한 절차 없이 쉽게 입실할 수 있습니다.'}
        />
        <ReservationEachOption
          title={'반려동물 동반 가능'}
          description={'보조동물을 동반하시나요?'}
        />
      </FilterEachComponent>
    </>
  )
}

export default ReservationComponent
