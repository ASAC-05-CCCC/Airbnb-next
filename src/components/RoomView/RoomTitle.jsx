'use client'

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';



const RoomTitle = () => {
  const [roomData, setRoomData] = useState(null);
  const pathname = usePathname();
  const id = pathname.slice(7);

  useEffect(() => {
    fetch(`/apis/rooms/${id}`)
    .then(response => response.json())
    .then(data => {
      setRoomData(data)
      console.log(data)
    })
    .catch(error => console.error('Error fetching room data:', error));
  }, []);

  if (!roomData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full mb-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-end">
        <h1 className="text-3xl font-bold leading-snug flex-1">
          {roomData.accommodationName}
        </h1>
        <div className="flex items-center gap-4 justify-end flex-shrink-0 sm:flex-1">
          <button className="flex items-center underline">
            <Image src="/images/share.svg" alt="Share" width={12} height={12} />
            공유하기
          </button>
          <button className="flex items-center underline">
            <Image src="/images/store.svg" alt="Save" width={12} height={12} />
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomTitle;
