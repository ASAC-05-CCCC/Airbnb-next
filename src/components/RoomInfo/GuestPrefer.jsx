'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import ReviewModal from '@/components/ReviewModal/ReviewModal';

const GuestPrefer = ({ reviewData, reviewMetaData }) => {
  const [roomData, setRoomData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false)
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

  if (!reviewMetaData || reviewMetaData.length === 0) {
    return <></>
  }

  const openModal = () => {
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }
  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <div>
      {roomData.guestFavorite && (
        <div className="flex flex-col sm:flex-row items-center justify-between border rounded-lg p-4 bg-white shadow-md">
          <div className="flex items-center justify-start">
            <Image src="/images/LeftWing.svg" alt="Left Wing" width={24} height={24} />
            <div className='grid place-items-center px-2'>
              <span className="text-lg font-bold">게스트</span>
              <span className="text-lg font-bold">선호</span>
            </div>
            <Image src="/images/RightWing.svg" alt="Right Wing" width={24} height={24} />
            <div className="grid pl-6">
              <span className="font-bold">에어비앤비 게스트에게 가장</span>
              <span className="font-bold">사랑받는 숙소</span>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <div className='grid pr-5 border-r gap-2 place-items-center'>
              <span className="text-xl font-bold">{roomData.rating}</span>
              <div className="flex">
                <Image src="/images/star.svg" alt="Star" width={12} height={12} />
                <Image src="/images/star.svg" alt="Star" width={12} height={12} />
                <Image src="/images/star.svg" alt="Star" width={12} height={12} />
                <Image src="/images/star.svg" alt="Star" width={12} height={12} />
                <Image src="/images/star.svg" alt="Star" width={12} height={12} />  
              </div>
            </div>
            <div className='grid px-5 gap-2 place-items-center'>
              <span className="text-xl font-bold">{roomData.reviewCount}개</span>
              <button className='border-b' onClick={openModal}>후기</button>
            </div>
          </div>
        </div>
      )}
      <ReviewModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        reviewData={reviewData}
        reviewMetaData={reviewMetaData}
      />
    </div>
  )
}
export default GuestPrefer
