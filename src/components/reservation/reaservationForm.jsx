// @ts-nocheck
import ReservationGuestInput from '@/components/reservation/reservationGuestInput'
import useModal from '@/hooks/useModal'
import { useSelector } from 'react-redux'

export default function ReservationForm() {
  const { Modal: DateModal, open: dateOpen, close: dateClose, isOpen: dateIsOpen } = useModal()
  const { Modal: GuestModal, open: guestOpen, close: guestClose, isOpen: guestIsOpen } = useModal()

  const { guestCount } = useSelector(state => state.reservation)

  return (
    <form onSubmit={e => e.preventDefault()}>
      <div className='flex w-full flex-col gap-4 '>
        <div className='w-full'>
          {/* date modal */}
          <section className='relative'>
            <div
              onClick={e => {
                e.stopPropagation()

                dateIsOpen ? dateClose() : dateOpen()
                guestIsOpen && guestClose()
              }}
              className='datePickerBox  flex w-full cursor-pointer items-center justify-around rounded-md border-[1px] border-black hover:border-2'
            >
              <div className='flex w-full flex-col border-r-[1px] border-black p-3'>
                <span className='text-sm'>체크인</span>
                <input
                  className='w-full border-none outline-none'
                  type='text'
                  name=''
                  id=''
                  placeholder={'2024. 8. 22.'}
                />
              </div>
              <div className='flex w-full flex-col p-3'>
                <span className='text-sm'>체크아웃</span>
                <input
                  className='w-full border-none outline-none'
                  type='text'
                  name=''
                  id=''
                  placeholder={'2024. 8. 22.'}
                />
              </div>
            </div>
            <div className='absolute left-0 top-full z-10 w-full bg-white'>
              <DateModal>{/* {} */}</DateModal>
            </div>
          </section>

          {/* guest modal */}
          <section className='relative'>
            <div
              onClick={e => {
                e.stopPropagation()

                guestIsOpen ? guestClose() : guestOpen()
                dateIsOpen && dateClose()
              }}
              className='cursor-pointer rounded-md border-[1px] border-black px-2 py-3 hover:border-2'
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
            <div className='absolute left-0 top-full z-20  w-full bg-white'>
              <GuestModal>
                <ReservationGuestInput />
              </GuestModal>
            </div>
          </section>
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
