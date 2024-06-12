'use client'

import useModal from '@/hooks/useModal'
import ReservationDateModalButton from './reservationDateModalButton'
import ReservationGuestModalButton from '@/components/reservation/reservationGuestmodalButton'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'

export default function ReservationForm() {
  const { Modal: DateModal, open: dateOpen, close: dateClose, isOpen: dateIsOpen } = useModal()
  const { Modal: GuestModal, open: guestOpen, close: guestClose, isOpen: guestIsOpen } = useModal()

  const { checkInDate, checkOutDate, guestCount } = useSelector(state => state.reservation)

  const router = useRouter()

  // 초기 url 값을 가져왔을 때, 해당 값을 읽어 예약 state에 업데이트 하는 초기 effect

  // 모달을 눌렀을 때, url을 변경하는 effect
  useEffect(() => {
    const params = new URLSearchParams()
    checkInDate && params.set('checkIn', checkInDate)
    checkOutDate && params.set('checkOut', checkOutDate)

    guestCount && params.set('guests', guestCount.adults)

    router.push(`?${params.toString()}`, { scroll: false })
  }, [checkInDate, checkOutDate, guestCount, router])

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
