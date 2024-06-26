'use client'
import useFetch from '@/hooks/useFetch'
import { setCurrentPrice } from '@/redux/reservationSlice'
import { useParams } from 'next/navigation'

function ReservationPrice() {
  const param = useParams()

  const { data, error, isLoading } = useFetch(`/reservation/price/${param.id}`)

  if (error) {
    return <div>에러 발생</div>
  }

  return (
    <h3 className='text-2xl'>
      <span>{isLoading ? 'loading...' : `₩${data.price}`}</span>
      <span className='text-base text-gray-500'>/박</span>
    </h3>
  )
}

export default ReservationPrice
