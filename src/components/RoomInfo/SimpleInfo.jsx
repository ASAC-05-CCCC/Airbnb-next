'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import ReviewModal from '@/components/ReviewModal/ReviewModal'

const SimpleInfo = ({
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

  const briefInfo = roomData.briefRoomInfo.map(
    (item, index) => `${item} ${index !== roomData.briefRoomInfo.length - 1 ? '· ' : ''}`,
  )

  return (
    <div className='grid w-full gap-2 pb-5'>
      <h1 className='text-2xl font-bold'>{roomData.locationName}</h1>
      <p className='text-gray-700'>{briefInfo}</p>
      {!roomData.guestFavorite && (
        <div className='flex items-center gap-1'>
          <div className='h-3 w-3'>
            <Image
              src='/images/star.svg'
              alt=''
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <span className='font-bold text-gray-700'>{roomData.rating}</span>
          <span className='mx-2 text-gray-500'>·</span>
          <a href='#' className='text-gray-700 underline' onClick={openModal}>
            후기 {roomData.reviewCount}개
          </a>
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
export default SimpleInfo
