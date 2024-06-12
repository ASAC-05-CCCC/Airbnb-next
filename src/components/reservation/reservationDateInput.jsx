import { setCheckInDate, setCheckOutDate } from '@/app/redux/reservationSlice'
import DatePickerWrapper from '@/components/common/datePickerWrapper'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

function ReservationDateInput() {
  const dispatch = useDispatch()
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const onChange = dates => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)

    if (start && !end) {
      dispatch(setCheckInDate(start))
    } else if (start && end) {
      dispatch(setCheckOutDate(end))
    }
  }
  return (
    <div>
      <div className='flex w-full flex-col gap-5 bg-white p-4'>
        <DatePickerWrapper //
          startDate={startDate}
          onChange={onChange}
          endDate={endDate}
          shown={2}
        />
      </div>
    </div>
  )
}

export default ReservationDateInput
