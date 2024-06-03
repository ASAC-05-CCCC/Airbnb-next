import Description from '@/components/MainCategory/FilterComponent/Description'
import Toggle from '@/components/MainCategory/FilterComponent/Reservation/Toggle'

export default function ReservationEachOption({ title, description }) {
  return (
    <div className='flex flex-row justify-between mb-5'>
      <div>
        <div className='text-[15px] mb-2'>{title}</div>
        <Description description={description} />
      </div>
      <Toggle />
    </div>
  )
}
