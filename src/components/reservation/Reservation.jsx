import ReservationForm from '@/components/reservation/reaservationForm'
import ReservationInfo from '@/components/reservation/reservationInfo'
import ReservationPrice from '@/components/reservation/reservationPrice'
import React from 'react'

const Reservation = ({ id }) => {
  return (
    <section className='w-full '>
      <div className='w-full rounded-xl border-[1px] px-6 py-7 shadow-xl shadow-gray-200'>
        <div className='flex flex-col gap-4 '>
          {/* 가격 */}
          <ReservationPrice />
          {/* 예약에 들어가는 정보 입력 Form */}
          <ReservationForm />
          {/* 예약 가격에 대한 정보 */}
          <ReservationInfo />
        </div>
      </div>
      <div>
        <div className='flex items-end justify-center py-5'>
          <a href='/'>
            <span className='underline underline-offset-1'>숙소 신고하기</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Reservation
