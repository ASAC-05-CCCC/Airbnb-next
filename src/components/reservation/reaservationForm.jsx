import useModal from '@/hooks/useModal'
import ReservationDateModalButton from './reservationDateModalButton'
import ReservationGuestModalButton from '@/components/reservation/reservationGuestmodalButton'

export default function ReservationForm() {
  const { Modal: DateModal, open: dateOpen, close: dateClose, isOpen: dateIsOpen } = useModal()
  const { Modal: GuestModal, open: guestOpen, close: guestClose, isOpen: guestIsOpen } = useModal()

  return (
    <form onSubmit={e => e.preventDefault()}>
      <div className='flex w-full flex-col gap-4 '>
        <div className='w-full rounded-md border-[1px] border-gray-300'>
          {/* date modal */}
          <ReservationDateModalButton
            dateIsOpen={dateIsOpen}
            dateClose={dateClose}
            dateOpen={dateOpen}
            guestIsOpen={guestIsOpen}
            guestClose={guestClose}
            DateModal={DateModal}
          />
          {/* guest modal */}
          <ReservationGuestModalButton
            GuestModal={GuestModal}
            guestOpen={guestOpen}
            guestClose={guestClose}
            guestIsOpen={guestIsOpen}
            dateIsOpen={dateIsOpen}
            dateClose={dateClose}
          />
        </div>

        <div className='flex items-center justify-center'>
          <button className='w-full rounded-xl bg-red-500 py-2 text-white'>
            예약 가능 여부 보기
          </button>
        </div>
      </div>
    </form>
  )
}
