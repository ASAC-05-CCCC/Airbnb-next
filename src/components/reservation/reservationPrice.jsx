import { setCurrentPrice } from '@/redux/reservationSlice'
import { getFetcher } from '@/utils/getFetcher'
import { useParams } from 'next/navigation'
import useSWR from 'swr'

function ReservationPrice() {
  const param = useParams()

  const fetchURL = `http://localhost:3000/apis/reservation/price/${param.id}`

  const { data, error, isLoading } = useSWR(fetchURL, getFetcher)

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
