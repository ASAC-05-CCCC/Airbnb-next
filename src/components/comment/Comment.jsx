'use client'
import GuestFavorite from '@/components/GuestFavorite/GuestFavorite'
import ReviewMeta from '@/components/ReviewMeta/ReviewMeta'
import Review from '@/components/Review/Review'
import ReviewInform from '@/components/ReviewInform/ReviewInform'
// import { useState, useEffect } from 'react'
// import { usePathname } from 'next/navigation'
import calculateStarCounts from '@/utils/calculateStarCounts'
import ReviewHeader from '@/components/ReviewHeader/ReviewHeader'
import ReviewEmpty from '@/components/ReviewHeader/ReviewEmpty'
import useFetch from '@/hooks/useFetch'
import { useEffect, useState } from 'react'

// function ReviewData(data) {
//   return data.map(data => {
//     return {
//       name: data.name,
//       country: data.country,
//       image: data.image,
//       rating: data.rating,
//       timestamp: data.timestamp,
//       message: data.message,
//     }
//   })
// }

// function ReviewMetaData(data) {
//   return data.Ratings
// }

const Comment = ({ roomData, id }) => {
  // const [reviewMetaData, setReviewMetaData] = useState([])
  // const [reviewOverall, setReviewOverall] = useState([])
  // const [guestFavorite, setGuestFavorite] = useState(false)
  // const [averageRating, setAverageRating] = useState(0)
  // const pathname = usePathname()
  // const id = pathname.slice(7)
  const [reviewData, setReviewData] = useState([])
  const { data } = useFetch(`/review/${id}`)

  const reviewOverall = reviewData && calculateStarCounts(reviewData)

  useEffect(() => {
    data &&
      setReviewData(prev => {
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
      })
  }, [data])

  const reviewMetaDataDto = roomData.Ratings

  // useEffect(() => {
  //   fetch(`/apis/host/${id}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       setReviewMetaData(ReviewMetaData(data))
  //       setGuestFavorite(data.guestFavorite)
  //       setAverageRating(data.rating)
  //     })
  //     .catch(error => console.error('Error fetching host.json:', error))

  //   fetch(`/apis/review/${id}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       setReviewData(ReviewData(data))
  //       // @ts-ignore
  //       setReviewOverall(calculateStarCounts(data))
  //     })
  //     .catch(error => console.error('Error fetching review.json:', error))
  // }, [])

  // const reviewDataDto =
  //   reviewData &&
  //   reviewData.map(data => {
  //     return {
  //       name: data.name,
  //       country: data.country,
  //       image: data.image,
  //       rating: data.rating,
  //       timestamp: data.timestamp,
  //       message: data.message,
  //     }
  //   })

  return (
    <>
      {reviewData.length === 0 ? (
        <ReviewEmpty />
      ) : (
        <div className='flex w-full flex-col px-10'>
          {roomData.guestFavorite ? (
            <GuestFavorite data={roomData.averageRating} />
          ) : (
            <ReviewHeader data={roomData.averageRating} reviewCount={reviewData.length} />
          )}
          <ReviewMeta reviewMetaData={reviewMetaDataDto} reviewOverall={reviewOverall} />
          <Review
            reviewData={reviewData}
            reviewMetaData={reviewMetaDataDto}
            averageRating={roomData.averageRating}
            reviewOverall={reviewOverall}
            guestFavorite={roomData.guestFavorite}
          />
          <ReviewInform />
        </div>
      )}
    </>
  )
}

export default Comment
