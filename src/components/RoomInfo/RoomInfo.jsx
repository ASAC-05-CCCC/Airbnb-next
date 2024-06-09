'use client'

import React from 'react'
import SimpleInfo from '@/components/RoomInfo/SimpleInfo.jsx'
import RoomHost from '@/components/RoomInfo/RoomHost.jsx'
import InfoDetail from '@/components/RoomInfo/InfoDetail.jsx'
import GenerateReviewMetaData from '@/utils/generateReviewMetaData'
import GuestPrefer from './GuestPrefer'
import { useEffect, useState } from 'react'

const RoomInfo = () => {
  const [reviewData, setReviewData] = useState([])
  const [reviewMetaData, setReviewMetaData] = useState([])

  useEffect(() => {
    fetch('/apis/review')
      .then(response => response.json())
      .then(data => {
        setReviewData(processReviewData(data))
        // @ts-ignore
        setReviewMetaData(GenerateReviewMetaData(data))
      })
      .catch(error => console.error('Error fetching ReviewData.json:', error))
  }, [])

  // ratings 평균 값을 내주는 함수
  const calculateAverageRating = ratings => {
    const totalScore = Object.values(ratings).reduce((acc, curr) => acc + curr, 0)
    const numberOfCategories = Object.keys(ratings).length
    return (totalScore / numberOfCategories).toFixed(1)
  }

  // rating 객체로 가공하는 함수.
  const processReviewData = data => {
    return data.map(item => {
      const averageRating = calculateAverageRating(item.Ratings)
      return {
        ...item.review,
        rating: parseFloat(averageRating), // 소수점 한 자리까지 표시
      }
    })
  }

  return (
    <div>
      <SimpleInfo reviewData={reviewData} reviewMetaData={reviewMetaData}/>
      <GuestPrefer reviewData={reviewData} reviewMetaData={reviewMetaData}/>
      <InfoDetail />
      <RoomHost />
    </div>
  )
}

export default RoomInfo