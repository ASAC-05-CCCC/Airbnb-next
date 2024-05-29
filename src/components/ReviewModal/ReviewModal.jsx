import DetailModal from './DetailModal.jsx'
import GuestFavorite from '../GuestFavorite/GuestFavorite.jsx'
import ReviewModalSearch from './ReviewModalSearch.jsx'
import ReviewOverall from '../ReviewMeta/ReviewOverall.jsx'
import ReviewModalContent from './ReviewModalContent.jsx'
import ReviewHeader from '../Review/ReviewHeader.jsx'
import ReviewContent from '../Review/ReviewContent.jsx'

import CleanlinessIcon from '../../assets/Cleanliness.svg'
import AccuracyIcon from '../../assets/Accuracy.svg'
import CheckInIcon from '../../assets/CheckIn.svg'
import CommunicationIcon from '../../assets/Communication.svg'
import LocationIcon from '../../assets/Location.svg'
import ValueIcon from '../../assets/Value.svg'

const ReviewMeta = [
  { category: '청결도', icon: CleanlinessIcon },
  { category: '정확도', icon: AccuracyIcon },
  { category: '체크인', icon: CheckInIcon },
  { category: '의사소통', icon: CommunicationIcon },
  { category: '위치', icon: LocationIcon },
  { category: '가격 대비 만족도', icon: ValueIcon },
]

const ReviewModal = ({ reviewMetaData, reviewData, isOpen, closeModal }) => {
  const mergeData = ReviewMeta.map(({ category, icon }, index) => {
    return {
      category: category,
      icon: icon,
      value: reviewMetaData?.MetaData[index]?.value ?? 0,
    }
  })

  if (!isOpen) return null

  return (
    <DetailModal className=''>
      <div className='flex flex-col rounded-3xl justify-center text-sm bg-white w-[72vw] h-full px-auto overflow-hidden'>
        <div className='flex justify-between px-5 py-8'>
          <button onClick={closeModal}>
            <img className='h-6 w-6 text-gray-500' />
          </button>
        </div>
        <div className='flex px-16 gap-8 h-full overflow-y-auto flex-grow'>
          <div className='h-[280vh] flex gap-8'>
            <div>
              <div className='flex flex-col pr-8 sticky top-0 z-10 bg-white'>
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
              <div className='flex flex-col '>
                {reviewData.map((comment, index) => (
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
