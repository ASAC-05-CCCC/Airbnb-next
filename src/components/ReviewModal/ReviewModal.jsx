import DetailModal from '@/components/ReviewModal/DetailModal.jsx'
import ReviewModalContent from '@/components/ReviewModal/ReviewModalContent.jsx'
import GuestFavorite from '@/components/GuestFavorite/GuestFavorite.jsx'
import ReviewOverall from '@/components/ReviewMeta/ReviewOverall.jsx'
import ReviewModalCategory from '@/components/ReviewModal/ReviewModalCategory'

import CleanlinessIcon from '/public/images/Cleanliness.svg'
import AccuracyIcon from '/public/images/Accuracy.svg'
import CheckInIcon from '/public/images/CheckIn.svg'
import CommunicationIcon from '/public/images/Communication.svg'
import LocationIcon from '/public/images/Location.svg'
import ValueIcon from '/public/images/Value.svg'
import XIcon from '/public/images/XIcon.svg'

import Image from 'next/image'
import averageRatings from '@/utils/averageRatings'

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
    <DetailModal>
      <div className='px-auto flex h-full w-[72vw] flex-col justify-center overflow-hidden rounded-3xl bg-white text-sm'>
        <div className='flex justify-between px-5 py-8'>
          <button onClick={closeModal} className=' rounded-full hover:bg-gray-200'>
            <Image src={XIcon} className='h-8 w-8 p-2 text-black' alt='XIcon' />
          </button>
        </div>
        <div className='flex h-full flex-grow gap-8 overflow-y-auto px-16'>
          <div className=' grid grid-cols-1 gap-8 lg:grid-cols-2'>
            <div>
              <div className='sticky top-0 z-10 flex flex-col bg-white'>
                {true && <GuestFavorite data={averageRatings(reviewData)} />}
                <ReviewOverall ratings={[...reviewMetaData.ratings].reverse()} />
                {mergeData.map(({ category, value, icon }, index) => (
                  <ReviewModalContent key={index} category={category} value={value} icon={icon} />
                ))}
              </div>
            </div>
            <ReviewModalCategory reviewData={reviewData} />
          </div>
        </div>
      </div>
    </DetailModal>
  )
}

export default ReviewModal
