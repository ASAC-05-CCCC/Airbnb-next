import DetailModal from '@/components/ReviewModal/DetailModal.jsx'
import ReviewModalContent from '@/components/ReviewModal/ReviewModalContent.jsx'
import ReviewModalSearch from '@/components/ReviewModal/ReviewModalSearch.jsx'
import GuestFavorite from '@/components/GuestFavorite/GuestFavorite.jsx'
import ReviewOverall from '@/components/ReviewMeta/ReviewOverall.jsx'
import ReviewHeader from '@/components/Review/ReviewHeader.jsx'
import ReviewContent from '@/components/Review/ReviewContent.jsx'

import CleanlinessIcon from '/public/images/Cleanliness.svg'
import AccuracyIcon from '/public/images/Accuracy.svg'
import CheckInIcon from '/public/images/CheckIn.svg'
import CommunicationIcon from '/public/images/Communication.svg'
import LocationIcon from '/public/images/Location.svg'
import ValueIcon from '/public/images/Value.svg'
import XIcon from '/public/images/XIcon.svg'

import Image from 'next/image'
import SortByTimestamp from '@/utils/sortByTimestamp'
import FormatTimestamp from '@/utils/formatTimestamp'
import { useState } from 'react'

const ReviewMeta = [
  { category: '청결도', icon: CleanlinessIcon },
  { category: '정확도', icon: AccuracyIcon },
  { category: '체크인', icon: CheckInIcon },
  { category: '의사소통', icon: CommunicationIcon },
  { category: '위치', icon: LocationIcon },
  { category: '가격 대비 만족도', icon: ValueIcon },
]

const ReviewModal = ({ reviewMetaData, reviewData, isOpen, closeModal }) => {
  const [sortReviewData, setSortReviewData] = useState(FormatTimestamp(SortByTimestamp(reviewData)))

  const mergeData = ReviewMeta.map(({ category, icon }, index) => {
    return {
      category: category,
      icon: icon,
      value: reviewMetaData?.MetaData[index]?.value ?? 0,
    }
  })

  if (!isOpen) return null

  return (
    <DetailModal>
      <div className='flex flex-col rounded-3xl justify-center text-sm bg-white w-[72vw] h-full px-auto overflow-hidden'>
        <div className='flex justify-between px-5 py-8'>
          <button onClick={closeModal} className=' hover:bg-gray-200 rounded-full'>
            <Image src={XIcon} className='h-8 w-8 text-black p-2' alt='XIcon' />
          </button>
        </div>
        <div className='flex px-16 gap-8 h-full overflow-y-auto flex-grow'>
          <div className=' grid grid-cols-1 gap-8 lg:grid-cols-2'>
            <div>
              <div className='flex flex-col sticky top-0 z-10 bg-white'>
                {true && <GuestFavorite />}
                <ReviewOverall ratings={[...reviewMetaData.ratings].reverse()} />
                {mergeData.map(({ category, value, icon }, index) => (
                  <ReviewModalContent key={index} category={category} value={value} icon={icon} />
                ))}
              </div>
            </div>
            <div>
              <div className='top-0 bg-white sticky z-10 !important'>
                <ReviewModalSearch data={reviewData.length} />
              </div>
              <div className='flex flex-col'>
                {sortReviewData.map((comment, index) => (
                  <div key={index} className=' mb-8'>
                    <ReviewHeader
                      image={comment.image}
                      name={comment.name}
                      country={comment.country}
                    />
                    <ReviewContent
                      rating={comment.ratings}
                      timeStamp={comment.timestamp}
                      message={comment.message}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DetailModal>
  )
}

export default ReviewModal
