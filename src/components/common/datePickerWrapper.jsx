import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '@/components/common/DatePicker.css'
import { ko } from 'date-fns/locale'

export default function DatePickerWrapper({ startDate, endDate, onChange, shown }) {
  return (
    <div className='flex w-full justify-center gap-10'>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        monthsShown={shown}
        locale={ko}
      />
    </div>
  )
}
