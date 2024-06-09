'use client'

import Host from '@/components/Host/Host'
import Notification from '@/components/Notification/Notification'
import RoomFacilities from '@/components/RoomFacilities/RoomFacilities'
import RoomInfo from '@/components/RoomInfo/RoomInfo'
import RoomIntroduce from '@/components/RoomIntroduce/RoomIntroduce'
import RoomView from '@/components/RoomView/RoomView'
import SleepSpec from '@/components/SleepSpec/SleepSpec'
import Reservation from '@/components/reservation/Reservation'
import Comment from '@/components/comment/Comment'

export default function RoomsHome() {
  return (
    <div className='p-10'>
      <RoomView />
      <section className='flex w-full border-b-2'>
        <div className='flex w-full basis-2/3 flex-col'>
          <RoomInfo />
          <RoomIntroduce />
          <SleepSpec />
        </div>
        {/* <div className='w-full basis-1/3'>
          <Reservation />
        </div> */}
      </section>

      <section className='flex w-full flex-col items-center'>
        <Comment />
        <section className='flex w-full flex-col items-center'>
          <RoomFacilities />
          {/* 달력 */}
        </section>
        {/* <GuestFavorite /> */}
        <Host />
        {/*<Notification /> */}
      </section>
    </div>
  )
}
