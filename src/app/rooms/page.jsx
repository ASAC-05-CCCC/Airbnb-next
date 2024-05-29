import Host from '@/components/Host/Host'
import Notification from '@/components/Notification/Notification'
import RoomFacilities from '@/components/RoomFacilities/RoomFacilities'
import RoomInfo from '@/components/RoomInfo/RoomInfo'
import RoomIntroduce from '@/components/RoomIntroduce/RoomIntroduce'
import RoomView from '@/components/RoomView/RoomView'
import SleepSpec from '@/components/SleepSpec/SleepSpec'
import Reservation from '@/components/reservation/Reservation'

export default function RoomsHome() {
  return (
    <>
      <RoomView />
      <section className='flex w-full border-b-2'>
        <div className='flex flex-col w-full basis-2/3'>
          <RoomInfo />
          <RoomIntroduce />
          <SleepSpec />
        </div>
        <div className='w-full basis-1/3'>
          <Reservation />
        </div>
      </section>

      <section className='flex flex-col items-center w-full'>
        {/* <Comment /> */}
        <section className='flex flex-col items-center w-full'>
          <RoomFacilities />
          {/* 달력 */}
        </section>
        {/* <GuestFavorite /> */}
        <Host />
        <Notification />
      </section>
    </>
  )
}
