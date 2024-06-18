'use client'
import ReviewHeader from '@/components/Review/ReviewHeader'
import ReviewContent from '@/components/Review/ReviewContent'
import ReviewMoreButton from '@/components/Review/ReviewMoreButton'
import ReviewModal from '@/components/ReviewModal/ReviewModal'
import { useState } from 'react'

import SortByTimestamp from '@/utils/sortByTimestamp'
import FormatTimestamp from '@/utils/formatTimestamp'

const Review = ({ reviewData, reviewMetaData, averageRating, reviewOverall, guestFavorite }) => {
  if (!reviewMetaData || reviewMetaData.length === 0) {
    return <></>
  }

  const sortReviewData = FormatTimestamp(SortByTimestamp(reviewData))
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isModalOpen, setIsModalOpen] = useState(false)
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
      <hr className='my-4 border-gray-300' />
      <div className='grid w-full grid-cols-1 lg:grid-cols-2 '>
        {sortReviewData.map((comment, index) => {
          if (index > 5) return null
          return (
            <div key={index} className='mr-20 bg-white p-4 px-2'>
              <div className=' mb-10 text-base'>
                <ReviewHeader image={comment.image} name={comment.name} country={comment.country} />
                <ReviewContent
                  rating={comment.rating}
                  timeStamp={comment.timestamp}
                  message={comment.message}
                  keyword={''}
                />
              </div>
            </div>
          )
        })}
      </div>
      <div className='mt-4 flex justify-between'>
        <ReviewMoreButton openModal={openModal} data={reviewData.length} />
      </div>
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

export default Review
