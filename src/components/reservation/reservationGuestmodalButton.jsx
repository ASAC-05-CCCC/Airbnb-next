import { useSelector } from 'react-redux'
import ReservationGuestInput from '@/components/reservation/reservationGuestInput'

export default function ReservationGuestModalButton({
  GuestModal,
  guestOpen,
  guestClose,
  guestIsOpen,
  dateIsOpen,
  dateClose,
}) {
  const { guestCount } = useSelector(state => state.reservation)
  return (
    <section className='relative'>
      <div
        onClick={e => {
          e.stopPropagation()

          guestIsOpen ? guestClose() : guestOpen()
          dateIsOpen && dateClose()
        }}
        className='cursor-pointer  px-2 py-3'
      >
        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
            <span className='text-sm'>인원</span>
            <div className='text-gray-400'>
              게스트 {Object.values(guestCount).reduce((prev, current) => prev + current)}명
            </div>
          </div>
          <div>버튼</div>
        </div>
      </div>
      <div className='absolute right-0 top-full z-20 w-full  bg-white'>
        <GuestModal>
          <ReservationGuestInput />
        </GuestModal>
      </div>
    </section>
  )
}
