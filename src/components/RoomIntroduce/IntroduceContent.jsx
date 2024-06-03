'use client'

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const IntroduceContent = () => {
  const [roomData, setRoomData] = useState(null);
  const [shortDesc, setShortDesc] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const id = pathname.slice(7);

  const maxLength = 300;

  useEffect(() => {
    fetch(`/apis/rooms/${id}`)
    .then(response => response.json())
    .then(data => {
      setRoomData(data)
      console.log(data)
      if (data.desc.length > maxLength) {
        setShortDesc(data.desc.substring(0, maxLength) + '...');
      } else {
        setShortDesc(data.desc);
      }
    })
    .catch(error => console.error('Error fetching room data:', error));
  }, []);

  if (!roomData) {
    return <div>Loading...</div>;
  }
  
  const handleSeeMore = () => {
    setIsExpanded(true);
  };

  return (
    <div className="w-full border-gray-300 grid gap-2 border-b">
      <div className='pt-8 pb-8'>
        {isExpanded ? roomData.desc : shortDesc}
      </div>
      {!isExpanded && roomData.desc.length > maxLength && (
        <button onClick={handleSeeMore} className='underline flex items-center pb-8'>
          <div className='font-bold'>더 보기</div>
          <Image src= "/images/seeMore.svg" width={12} height={12} alt='seeMore'/>
        </button>
      )}
    </div>
  )
}

export default IntroduceContent
