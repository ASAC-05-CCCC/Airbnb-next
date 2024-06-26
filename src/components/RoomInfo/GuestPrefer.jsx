'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import ReviewModal from '@/components/ReviewModal/ReviewModal'

const GuestPrefer = ({
  roomData,
  reviewData,
  reviewMetaData,
  averageRating,
  reviewOverall,
  guestFavorite,
}) => {
  // const [roomData, setRoomData] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  // const pathname = usePathname()
  // const id = pathname.slice(7)

  // useEffect(() => {
  //   fetch(`/apis/rooms/${id}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       setRoomData(data)
  //     })
  //     .catch(error => console.error('Error fetching room data:', error))
  // }, [])

  if (!roomData) {
    return <></>
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
        <div className='flex flex-col items-center justify-between rounded-lg border bg-white p-4 shadow-md sm:flex-row'>
          <div className='flex items-center justify-start'>
            <div className='h-6 w-6'>
              <Image
                src='/images/LeftWing.svg'
                alt='Left Wing'
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className='grid place-items-center px-2'>
              <span className='text-lg font-bold'>게스트</span>
              <span className='text-lg font-bold'>선호</span>
            </div>
            <div className='h-6 w-6'>
              <Image
                src='/images/RightWing.svg'
                alt='Right Wing'
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className='grid pl-6'>
              <span className='font-bold'>에어비앤비 게스트에게 가장</span>
              <span className='font-bold'>사랑받는 숙소</span>
            </div>
          </div>
          <div className='flex items-center justify-end'>
            <div className='grid place-items-center gap-2 border-r pr-5'>
              <span className='text-xl font-bold'>{roomData.rating}</span>
              <div className='flex'>
                {[1, 2, 3, 4, 5].map((each, idx) => (
                  <div key={idx} className='h-3 w-3'>
                    <Image
                      src='/images/star.svg'
                      alt='Star'
                      width={0}
                      height={0}
                      sizes='100vw'
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className='grid place-items-center gap-2 px-5'>
              <span className='text-xl font-bold'>{roomData.reviewCount}개</span>
              <button className='border-b' onClick={openModal}>
                후기
              </button>
            </div>
          </div>
        </div>
      )}
      <ReviewModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        reviewData={reviewData}
        reviewMetaData={reviewMetaData}
        averageRating={averageRating}
        reviewOverall={reviewOverall}
        guestFavorite={guestFavorite}
      />
    </div>
  )
}
export default GuestPrefer
