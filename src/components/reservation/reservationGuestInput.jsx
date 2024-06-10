import GuestItem from '@/components/common/GuestItem'
import { useSelector } from 'react-redux'
import { increaseGuest, decreaseGuest } from '@/app/redux/reservationSlice'

const ReservationGuestInput = () => {
  const { guestCount } = useSelector(state => state.reservation)

  const list = [
    { name: 'adults', title: '성인', desc: '13세 이상' },
    { name: 'kids', title: '어린이', desc: '2~12세' },
    { name: 'babies', title: '유아', desc: '2세 미만' },
    { name: 'pets', title: '반려동물', desc: '보조동물을 동반하시나요?' },
  ]
  return (
    <ul className='flex w-full flex-col gap-5 p-4'>
      {list.map((each, idx) => {
        return (
          <GuestItem
            key={idx}
            guestCount={guestCount}
            increaseGuest={increaseGuest}
            decreaseGuest={decreaseGuest}
            name={each.name}
            desc={each.desc}
            title={each.title}
          />
        )
      })}
    </ul>
  )
}

export default ReservationGuestInput
