import Host from '@/components/Host/Host'
import Notification from '@/components/Notification/Notification'
import RoomFacilities from '@/components/RoomFacilities/RoomFacilities'
import RoomInfo from '@/components/RoomInfo/RoomInfo'
import RoomIntroduce from '@/components/RoomIntroduce/RoomIntroduce'
import RoomView from '@/components/RoomView/RoomView'
import SleepSpec from '@/components/SleepSpec/SleepSpec'
import Reservation from '@/components/reservation/Reservation'
import Comment from '@/components/comment/Comment'
import { FetchApi } from '@/lib/api'

export default async function RoomsHome({ params }) {
  const data = await (await FetchApi(`/rooms/${params.id}`)).data

  return (
    <div className='p-10 sm:px-8 lg:px-10 xl:px-20'>
      <RoomView roomData={data} />
      <section className='flex w-full gap-x-20 border-b-2'>
        <div className='flex w-full basis-2/3 flex-col'>
          <RoomInfo roomData={data} />
          <RoomIntroduce id={params.id} />
          <SleepSpec id={params.id} />
        </div>
        <div className='w-full basis-1/3'>{/* <Reservation id={params.id} /> */}</div>
      </section>

      <section className='flex w-full flex-col items-center'>
        <Comment id={params.id} roomData={data} />
        <section className='flex w-full flex-col items-center'>
          <RoomFacilities id={params.id} roomData={data} />
          {/* 달력 */}
        </section>
        <Host id={params.id} />
        <Notification />
      </section>
    </div>
  )
}
