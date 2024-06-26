import { useEffect, useState } from 'react'
import ReviewContent from '../Review/ReviewContent'
import ReviewHeader from '../Review/ReviewHeader'
import ReviewModalSearch from '@/components/ReviewModal/ReviewModalSearch'
import { sortByHighRatings, sortByLowRatings } from '@/utils/sortByRating'
import formatTimestamp from '@/utils/formatTimestamp'
import filterByKeyword from '@/utils/filterByKeyword'
import sortByTimestamp from '@/utils/sortByTimestamp'

const categories = {
  mostRecent: '최신순',
  highestRated: '높은 평점순',
  lowestRated: '낮은 평점순',
}

const ReviewModalCategory = ({ reviewData }) => {
  const originalData = reviewData
  const [ReviewData, setReviewData] = useState(reviewData)
  const [selectedCategory, setSelectedCategory] = useState('mostRecent')
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    let data = originalData

    if (keyword.trim()) {
      data = filterByKeyword(originalData, keyword)
    }

    if (selectedCategory === 'mostRecent') {
      data = sortByTimestamp(data)
    } else if (selectedCategory === 'highestRated') {
      data = sortByHighRatings(data)
    } else {
      data = sortByLowRatings(data)
    }

    setReviewData(data)
  }, [selectedCategory, keyword, originalData])

  const formatData = formatTimestamp(ReviewData)

  return (
    <div>
      <div className='!important sticky top-0 z-10 bg-white'>
        <ReviewModalSearch
          data={reviewData.length}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          keyword={keyword}
          setKeyword={setKeyword}
        />
      </div>
      <div className='flex flex-col'>
        {formatData ? (
          formatData.map((comment, index) => (
            <div key={index} className='mb-8'>
              <ReviewHeader image={comment.image} name={comment.name} country={comment.country} />
              <ReviewContent
                rating={comment.rating}
                timeStamp={comment.timestamp}
                message={comment.message}
                keyword={keyword}
              />
            </div>
          ))
        ) : (
          <div>{keyword} + 에 대한 값이 없습니다.</div>
        )}
      </div>
    </div>
  )
}

export default ReviewModalCategory
