import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './DatePicker.css'
// import './App.css' // 추가적인 Tailwind CSS 스타일링을 위한 CSS 파일

const DatePickerInput = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(new Date())
  const [selectedEndDate, setSelectedEndDate] = useState(null)

  return (
    <>
      <section className='flex flex-col gap-5 bg-white rounded-lg'>
        <div className='flex items-center justify-center w-full'>
          <div className='flex justify-between w-1/2 gap-1 p-1 rounded-full bg-zinc-200'>
            <button className='w-full px-3 py-2 rounded-full bg-zinc-200 hover:bg-zinc-300'>
              날짜 지정
            </button>
            <button className='w-full px-3 py-2 rounded-full bg-zinc-200 hover:bg-zinc-300'>
              월 단위
            </button>
            <button className='w-full px-3 py-2 rounded-full bg-zinc-200 hover:bg-zinc-300'>
              유연한 일정
            </button>
          </div>
        </div>

        <div className='flex justify-center gap-10'>
          <DatePicker
            selected={selectedStartDate}
            onChange={date => setSelectedStartDate(date)}
            selectsStart
            startDate={selectedStartDate}
            endDate={selectedEndDate}
            inline
          />
          <DatePicker
            selected={selectedEndDate}
            onChange={date => setSelectedEndDate(date)}
            selectsEnd
            startDate={selectedStartDate}
            endDate={selectedEndDate}
            minDate={selectedStartDate}
            inline
          />
        </div>
        <div className='flex justify-start gap-4'>
          <button className='px-3 py-1 text-sm transition-all border border-gray-200 rounded-full hover:border-gray-500 w-18 focus:border-3'>
            정확한 날짜
          </button>
          <button className='px-3 py-1 text-sm transition-all border border-gray-200 rounded-full hover:border-gray-500 w-18 focus:border-3'>
            + 1일
          </button>
          <button className='px-3 py-1 text-sm transition-all border border-gray-200 rounded-full hover:border-gray-500 w-18 focus:border-3'>
            + 2일
          </button>
          <button className='px-3 py-1 text-sm transition-all border border-gray-200 rounded-full hover:border-gray-500 w-18 focus:border-3'>
            + 3일
          </button>
          <button className='px-3 py-1 text-sm transition-all border border-gray-200 rounded-full hover:border-gray-500 w-18 focus:border-3'>
            + 7일
          </button>
          <button className='px-3 py-1 text-sm transition-all border border-gray-200 rounded-full hover:border-gray-500 w-18 focus:border-3'>
            + 14일
          </button>
        </div>
      </section>
    </>
  )
}

export default DatePickerInput
