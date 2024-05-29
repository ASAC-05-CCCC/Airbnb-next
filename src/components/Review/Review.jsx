import ReviewHeader from './ReviewHeader'
import ReviewContent from './ReviewContent'
import ReviewMoreButton from './ReviewMoreButton'
import ReviewModal from '../ReviewModal/ReviewModal.jsx'
import { useState } from 'react'

const Review = ({ reviewData, reviewMetaData }) => {
  if (!reviewMetaData || reviewMetaData.length === 0) {
    return <></>
  }

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
      <div className='grid grid-cols-1 lg:grid-cols-2 w-full '>
        {reviewData.map((comment, index) => {
          if (index > 5) return null
          return (
            <div key={index} className='bg-white p-4 px-2 mr-20'>
              <div className=' mb-10 text-base'>
                <ReviewHeader image={comment.image} name={comment.name} country={comment.country} />
                <ReviewContent
                  rating={comment.rating}
                  timeStamp={comment.timeStamp}
                  message={comment.message}
                />
              </div>
            </div>
          )
        })}
      </div>
      <div className='flex justify-between mt-4'>
        <ReviewMoreButton openModal={openModal} data={reviewData.length} />
      </div>
      <ReviewModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        reviewData={reviewData}
        reviewMetaData={reviewMetaData}
      />
    </div>
  )
}

export default Review
