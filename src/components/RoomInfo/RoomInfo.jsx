'use client'

import React from 'react'
import SimpleInfo from '@/components/RoomInfo/SimpleInfo.jsx'
import RoomHost from '@/components/RoomInfo/RoomHost.jsx'
import InfoDetail from '@/components/RoomInfo/InfoDetail.jsx'
import GenerateReviewMetaData from '@/utils/generateReviewMetaData'
import GuestPrefer from './GuestPrefer'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

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

const RoomInfo = () => {
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
      })
      .catch(error => console.error('Error fetching ReviewData.json:', error))
  }, [])

  return (
    <div>
      <SimpleInfo reviewData={reviewData}
        reviewMetaData={reviewMetaData}
        averageRating={averageRating} />
      <GuestPrefer reviewData={reviewData}
        reviewMetaData={reviewMetaData}
        averageRating={averageRating} />
      <InfoDetail />
      <RoomHost />
    </div>
  )
}

export default RoomInfo