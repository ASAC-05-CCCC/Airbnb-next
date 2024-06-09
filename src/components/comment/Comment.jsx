'use client'
import GuestFavorite from '@/components/GuestFavorite/GuestFavorite'
import ReviewMeta from '@/components/ReviewMeta/ReviewMeta'
import Review from '@/components/Review/Review'
import ReviewInform from '@/components/ReviewInform/ReviewInform'
import { useState, useEffect } from 'react'
import averageRatings from '@/utils/averageRatings'
import { usePathname } from 'next/navigation'
import calculateStarCounts from '@/utils/calculateStarCounts'

function ReviewData(data) {
  return data.map(data => {
    return {
      name: data.name,
      country: data.country,
      image: data.image,
      rating: data.rating,
      timestamp: data.timestamp,
      message: data.message,
    }
  })
}

function ReviewMetaData(data) {
  return data.Ratings
}

const Comment = () => {
  const [reviewData, setReviewData] = useState([])
  const [reviewMetaData, setReviewMetaData] = useState([])
  const [reviewOverall, setReviewOverall] = useState([])
  const [guestFavorite, setGuestFavorite] = useState(false)
  const [averageRating, setAverageRating] = useState(0)
  const pathname = usePathname()
  const id = pathname.slice(7)

  useEffect(() => {
    fetch(`/apis/host/${id}`)
      .then(response => response.json())
      .then(data => {
        setReviewMetaData(ReviewMetaData(data))
        setGuestFavorite(data.guestFavorite)
        setAverageRating(data.rating)
      })
      .catch(error => console.error('Error fetching ReviewData.json:', error))

    fetch(`/apis/review/${id}`)
      .then(response => response.json())
      .then(data => {
        setReviewData(ReviewData(data))
        // @ts-ignore
        setReviewOverall(calculateStarCounts(data))
      })
      .catch(error => console.error('Error fetching ReviewData.json:', error))
  }, [])

  return (
    <div className='flex w-full flex-col px-10'>
      {guestFavorite && <GuestFavorite data={averageRating} />}
      <ReviewMeta reviewMetaData={reviewMetaData} reviewOverall={reviewOverall} />
      <Review
        reviewData={reviewData}
        reviewMetaData={reviewMetaData}
        averageRating={averageRating}
      />
      {/* <ReviewInform /> */}
    </div>
  )
}

export default Comment
