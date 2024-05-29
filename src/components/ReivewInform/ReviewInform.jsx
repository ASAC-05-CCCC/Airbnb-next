import React, { useState } from 'react'
import StarRating from './StarRating'

const rating = {
  Cleanliness: 0,
  Accuracy: 0,
  CheckIn: 0,
  Communication: 0,
  Location: 0,
  Value: 0,
}

const ratingKR = {
  Cleanliness: '청결도',
  Accuracy: '정확도',
  CheckIn: '체크인',
  Communication: '커뮤니케이션',
  Location: '위치',
  Value: '가격 대비 만족도',
}

const ReviewInform = () => {
  const [showForm, setShowForm] = useState(false)
  const [ratings, setRatings] = useState(rating)
  const [reviewText, setReviewText] = useState('')

  const handleRatingChange = e => {
    const { name, value } = e.target
    setRatings(prevRatings => ({
      ...prevRatings,
      [name]: parseInt(value, 10),
    }))
  }

  const handleReviewTextChange = e => {
    setReviewText(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    // server에 보내는 객체 및 임시적인 콘솔형태 만들기.
    const reviewData = {
      ratings,
      reviewText,
    }
    console.log('Submitted Review:', reviewData)
    setShowForm(!showForm)
    setRatings(rating)
    setReviewText('')
  }

  return (
    <div className='py-4'>
      <button
        className='border border-black rounded font-semibold text-center px-4 py-2'
        onClick={() => setShowForm(!showForm)}
      >
        후기 등록
      </button>
      {showForm && (
        <form onSubmit={handleSubmit} className='mt-4 space-y-4'>
          {Object.keys(ratings).map(category => (
            <div key={category} className='flex items-center gap-2'>
              <label className='w-32 font-bold'>{ratingKR[category]}</label>
              <StarRating name={category} value={ratings[category]} onChange={handleRatingChange} />
            </div>
          ))}
          <div className='flex flex-col'>
            <label className='font-bold'>공개 후기 작성</label>
            <textarea
              value={reviewText}
              onChange={handleReviewTextChange}
              className='mt-2 p-2 border rounded'
              rows='4'
              placeholder='Write your review here...'
            />
          </div>
          <button
            type='submit'
            className='border border-black rounded font-semibold text-center mt-10 px-4 py-2'
          >
            등록
          </button>
        </form>
      )}
    </div>
  )
}

export default ReviewInform
