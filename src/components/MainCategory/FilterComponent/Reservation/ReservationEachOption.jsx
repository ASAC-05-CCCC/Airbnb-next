import Description from '@/components/MainCategory/FilterComponent/Description'
import Toggle from '@/components/MainCategory/FilterComponent/Reservation/Toggle'

export default function ReservationEachOption({ title, description, setIsCheck, isCheck }) {
  return (
    <div className='mb-5 flex flex-row justify-between'>
      <div>
        <div className='mb-2 text-[15px]'>{title}</div>
        <Description description={description} />
      </div>
      <Toggle isCheck={isCheck} setIsCheck={setIsCheck} />
    </div>
  )
}
