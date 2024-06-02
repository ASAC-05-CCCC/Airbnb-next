import { useEffect, useState } from 'react'
import ReviewContent from '../Review/ReviewContent'
import ReviewHeader from '../Review/ReviewHeader'
import ReviewModalSearch from '@/components/ReviewModal/ReviewModalSearch'
import sortortByTimestamp from '@/utils/sortByTimestamp'
import { sortByHighRatings, sortByLowRatings } from '@/utils/sortByRating'

const categories = {
  mostRecent: '최신순',
  highestRated: '높은 평점순',
  lowestRated: '낮은 평점순',
}

const ReviewModalCategory = ({ reviewData }) => {
  const [fomatData, setFomatData] = useState(reviewData)
  const [selectedCategory, setSelectedCategory] = useState('mostRecent')

  useEffect(() => {
    if (selectedCategory === 'mostRecent') {
      setFomatData(prve => sortortByTimestamp(prve))
    } else if (selectedCategory === 'highestRated') {
      setFomatData(prve => sortByHighRatings(prve))
    } else {
      setFomatData(prve => sortByLowRatings(prve))
    }
  }, [selectedCategory])

  return (
    <div>
      <div className='top-0 bg-white sticky z-10 !important'>
        <ReviewModalSearch
          data={reviewData.length}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className='flex flex-col'>
        {fomatData.map((comment, index) => (
          <div key={index} className='mb-8'>
            <ReviewHeader image={comment.image} name={comment.name} country={comment.country} />
            <ReviewContent
              rating={comment.rating}
              timeStamp={comment.timestamp}
              message={comment.message}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewModalCategory
