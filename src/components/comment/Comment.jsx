'use client'
import GuestFavorite from '@/components/GuestFavorite/GuestFavorite'
import ReviewMeta from '@/components/ReviewMeta/ReviewMeta'
import Review from '@/components/Review/Review'
import ReviewInform from '@/components/ReviewInform/ReviewInform'
import GenerateReviewMetaData from '@/utils/generateReviewMetaData'
import { useState, useEffect } from 'react'

const Comment = () => {
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
    <div className='flex flex-col px-10'>
      <GuestFavorite />
      <ReviewMeta reviewMetaData={reviewMetaData} />
      <Review reviewData={reviewData} reviewMetaData={reviewMetaData} />
      <ReviewInform />
    </div>
  )
}

export default Comment
