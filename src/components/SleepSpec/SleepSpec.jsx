'use client'

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const SleepSpec = () => {
  const [roomData, setRoomData] = useState(null);
  const pathname = usePathname();
  const id = pathname.slice(7);

  useEffect(() => {
    fetch(`/apis/rooms/${id}`)
    .then(response => response.json())
    .then(data => {
      setRoomData(data)
    })
    .catch(error => console.error('Error fetching room data:', error));
  }, []);

  if (!roomData) {
    return (
      <></>
    );
  }

  return (
    <div className="w-full mb-8">
      <div className="">
        <h1 className="text-2xl font-bold py-4 mb-8">숙박 장소</h1>
        <div className="flex flex-wrap">
        {roomData.roomInfo.map((room) => (
            <div key={room.roomId} className="w-full sm:w-1/2 lg:w-1/4 px-2 pb-8">
              <div className="h-full w-full border p-4 py-4 rounded-lg flex flex-col items-left justify-start aspect-square">
                <div className='flex items-center pb-4'>
                  {/* 이미지와 텍스트를 동적으로 생성 */}
                  {room.beds.map((bed, index) => (
                    <>
                      <Image 
                        src={bed.bedType === '싱글 침대' ? '/images/singleBed.svg' : '/images/queenBed.svg'} 
                        alt={bed.bedType} 
                        width={24} 
                        height={24} 
                        className="pr-1"
                      />
                      {index !== room.beds.length - 1 && <span>,&nbsp;</span>}
                    </>
                  ))}
                </div>
                <h3 className="text-xl font-semibold">침실 {room.roomId}</h3>
                {/* 침대 정보 표시 */}
                {room.beds.map((bed, index) => (
                  <p key={index}>{bed.bedType} {bed.count}개</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SleepSpec
