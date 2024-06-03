'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';

const RoomPictures = () => {
  const [roomData, setRoomData] = useState(null);

  useEffect(() => {
    fetch('/json/Data.json')
      .then((response) => response.json())
      .then((data) => {
        const room = data.accommodationInfo.find(room => room.accommodationId === 25);
        setRoomData(room);
      })
      .catch((error) => console.error('Error fetching room data:', error));
  }, []);

  if (!roomData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full transition-all">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 pb-4 w-full transition-all">
        <div className="relative col-span-1 lg:col-span-2 row-span-1 lg:row-span-2  lg:aspect-auto transition-all h-[410px]" >
          <Image 
            src={roomData.imageUrl[0]} 
            alt="Large view"  
            layout="fill"
            objectFit="cover"
            className="rounded-lg rounded-tl-lg transition-all" 
          />
        </div>
        <div className="relative col-span-1 row-span-1 lg:aspect-auto transition-all">
          <Image 
            src={roomData.imageUrl[1]} 
            alt="View 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg transition-all" 
          />
        </div>
        <div className="relative col-span-1 row-span-1 lg:aspect-auto transition-all">
          <Image 
            src={roomData.imageUrl[2]} 
            alt="View 2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg transition-all" 
          />
        </div>
        <div className="relative col-span-1 row-span-1 lg:aspect-auto transition-all" >
          <Image 
            src={roomData.imageUrl[3]} 
            alt="View 3"
            layout="fill"
            objectFit="cover"
            className="rounded-lg transition-all" 
          />
        </div>
        <div className="relative col-span-1 row-span-1 lg:aspect-auto transition-all">
          <Image 
            src={roomData.imageUrl[4]} 
            alt="View 4"
            layout="fill"
            objectFit="cover"
            className="rounded-lg transition-all" 
          />
          <button className="absolute bottom-5 right-5 flex items-center justify-center bg-white text-lg rounded-lg border border-black px-4 py-0.5 transition-all">
            <Image 
              src="/images/RoomList.svg" 
              alt="RoomList" 
              width={12} 
              height={12} 
              className="mr-1 transition-all"
            />
            사진 모두 보기
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoomPictures;
