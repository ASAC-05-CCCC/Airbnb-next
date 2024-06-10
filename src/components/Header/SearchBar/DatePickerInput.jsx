import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './DatePicker.css'
import { ko } from 'date-fns/locale'
import { useDispatch } from 'react-redux'
import { setCheckInDate, setCheckOutDate } from '@/app/redux/searchSlice'
// import './App.css' // 추가적인 Tailwind CSS 스타일링을 위한 CSS 파일

const DatePickerInput = () => {
  const dispatch = useDispatch()
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const onChange = dates => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)

    if (start && !end) {
      const formattingStart = `${start.getFullYear()}-${start.getMonth()}-${start.getDay()}`
      dispatch(setCheckInDate(formattingStart))
    } else if (start && end) {
      const formattingEnd = `${end.getFullYear()}-${end.getMonth()}-${end.getDay()}`
      dispatch(setCheckOutDate(formattingEnd))
    }
  }

  return (
    <>
      <section className='flex flex-col gap-5 rounded-lg bg-white'>
        <div className='flex w-full items-center justify-center'>
          <div className='flex w-1/2 justify-between gap-1 rounded-full bg-zinc-200 p-1'>
            <button className='w-full rounded-full bg-zinc-200 px-3 py-2 hover:bg-zinc-300'>
              날짜 지정
            </button>
            <button className='w-full rounded-full bg-zinc-200 px-3 py-2 hover:bg-zinc-300'>
              월 단위
            </button>
            <button className='w-full rounded-full bg-zinc-200 px-3 py-2 hover:bg-zinc-300'>
              유연한 일정
            </button>
          </div>
        </div>

        <div className='flex justify-center gap-10'>
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            monthsShown={2}
            locale={ko}
          />
        </div>
        <div className='flex justify-start gap-4'>
          <button className='w-18 focus:border-3 rounded-full border border-gray-200 px-3 py-1 text-sm transition-all hover:border-gray-500'>
            정확한 날짜
          </button>
          <button className='w-18 focus:border-3 rounded-full border border-gray-200 px-3 py-1 text-sm transition-all hover:border-gray-500'>
            + 1일
          </button>
          <button className='w-18 focus:border-3 rounded-full border border-gray-200 px-3 py-1 text-sm transition-all hover:border-gray-500'>
            + 2일
          </button>
          <button className='w-18 focus:border-3 rounded-full border border-gray-200 px-3 py-1 text-sm transition-all hover:border-gray-500'>
            + 3일
          </button>
          <button className='w-18 focus:border-3 rounded-full border border-gray-200 px-3 py-1 text-sm transition-all hover:border-gray-500'>
            + 7일
          </button>
          <button className='w-18 focus:border-3 rounded-full border border-gray-200 px-3 py-1 text-sm transition-all hover:border-gray-500'>
            + 14일
          </button>
        </div>
      </section>
    </>
  )
}

export default DatePickerInput
