// @ts-nocheck
import { clearDate } from '@/redux/reservationSlice'
import ReservationDateInput from '@/components/reservation/reservationDateInput'
import clsx from 'clsx'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'

function ReservationDateModalButton({
  dateIsOpen,
  dateClose,
  dateOpen,
  guestIsOpen,
  guestClose,
  DateModal,
}) {
  const { checkInDate, checkOutDate } = useSelector(state => state.reservation)
  const dispatch = useDispatch()

  return (
    <section className='relative'>
      <div
        onClick={e => {
          e.stopPropagation()

          !dateIsOpen && dateOpen()
          guestIsOpen && guestClose()
        }}
        className={clsx(
          'datePickerBox  relative z-30 flex w-full items-center justify-around border-b-[1px] border-gray-300',
          dateIsOpen && 'rounded-md border-[1px] border-black',
        )}
      >
        <div className='flex w-full items-center border-r-[1px] border-gray-300 p-3'>
          <div className='flex flex-col'>
            <span className='text-sm'>체크인</span>
            <input
              className='w-full border-none text-sm text-gray-400 outline-none '
              type='text'
              name=''
              id=''
              placeholder={dateIsOpen ? 'YYYY.MM.DD.' : '날짜 추가'}
              value={checkInDate === null ? '' : checkInDate}
            />
          </div>
          {checkInDate && (
            <button
              onClick={() => dispatch(clearDate())}
              className='relative h-5 w-5 hover:rounded-full hover:bg-gray-200'
            >
              <Image src={'/images/exit_icon.svg'} fill alt={'exit'} />
            </button>
          )}
        </div>
        <div className='flex w-full items-center p-3'>
          <div className='flex flex-col'>
            <span className='text-sm'>체크아웃</span>
            <input
              className='w-full border-none text-sm text-gray-400 outline-none'
              type='text'
              name=''
              id=''
              placeholder={dateIsOpen ? 'YYYY.MM.DD.' : '날짜 추가'}
              value={checkOutDate === null ? '' : checkOutDate}
            />
          </div>
          {checkOutDate && (
            <button
              onClick={() => dispatch(clearDate())}
              className='relative h-5 w-5 hover:rounded-full hover:bg-gray-200'
            >
              <Image src={'/images/exit_icon.svg'} fill alt={'exit'} />
            </button>
          )}
        </div>
      </div>
      <div className='absolute -right-4 -top-5 z-10 bg-white'>
        <DateModal>
          <div className='flex flex-col gap-4 p-5'>
            <div className='flex flex-col items-start justify-start'>
              <span className='text-lg'>{'5박' || '날짜선택'}</span>
              <div>
                <span>
                  {`${'2024년 6월 16일'} ~ ${'2024년 6월 16일'}` ||
                    '여행 날짜를 입력하여 정확한 요금을 확인하세요.'}
                </span>
              </div>
            </div>
            <ReservationDateInput />
            <div className='flex items-center justify-between'>
              <div>
                <button className='p-2 hover:rounded-full hover:bg-gray-200'>
                  <Image src={'/images/keyboard_icon.svg'} width={30} height={30} alt={'키보드'} />
                </button>
              </div>
              <div className='flex cursor-pointer items-center justify-center gap-2'>
                <button
                  onClick={() => dispatch(clearDate())}
                  className='rounded-md px-3 py-2 hover:bg-gray-200'
                >
                  날짜 지우기
                </button>
                <button
                  className='rounded-md bg-black px-3 py-2 text-white'
                  onClick={() => dateClose()}
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </DateModal>
      </div>
    </section>
  )
}

export default ReservationDateModalButton
