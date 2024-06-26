// 'use client'

// import { useEffect, useState } from 'react'
// import { usePathname } from 'next/navigation'
import Image from 'next/image'

const RoomHost = ({ roomData }) => {
  // const [roomData, setRoomData] = useState(null);
  // const pathname = usePathname();
  // const id = pathname.slice(7);

  // useEffect(() => {
  //   fetch(`/apis/rooms/${id}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     setRoomData(data)
  //     console.log(data)
  //   })
  //   .catch(error => console.error('Error fetching room data:', error));
  // }, []);

  if (!roomData) {
    return <></>
  }

  return (
    <div className='grid w-full gap-2 border-b'>
      <div className='border-t border-gray-300 pt-4'>
        <div className='flex items-center space-x-3'>
          <button className='mb-4'>
            <Image src='/images/ONDA.png' alt='' width={40} height={40} className='h-auto w-auto' />
          </button>
          <div>
            <p className='font-bold'>호스트: {roomData.hostName} 님</p>
            <p className='pb-4 text-gray-500'>호스팅 경력 {2024 - roomData.hostSince}년</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomHost
