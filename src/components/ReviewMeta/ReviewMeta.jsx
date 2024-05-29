import ReviewMetaContent from '@/components/ReviewMeta/ReviewMetaContent'
import ReviewOverall from '@/components/ReviewMeta/ReviewOverall'
import CleanlinessIcon from '/public/images/Cleanliness.svg'
import AccuracyIcon from '/public/images/Accuracy.svg'
import CheckInIcon from '/public/images/CheckIn.svg'
import CommunicationIcon from '/public/images/Communication.svg'
import LocationIcon from '/public/images/Location.svg'
import ValueIcon from '/public/images/Value.svg'

const ReviewMeta = ({ reviewMetaData }) => {
  if (!reviewMetaData || reviewMetaData.length === 0) {
    return <div>Loading...</div>
  }

  const ReviewMeta = [
    { category: '청결도', icon: CleanlinessIcon, value: 5.0 },
    { category: '정확도', icon: AccuracyIcon, value: 5.0 },
    { category: '체크인', icon: CheckInIcon, value: 5.0 },
    { category: '의사소통', icon: CommunicationIcon, value: 5.0 },
    { category: '위치', icon: LocationIcon, value: 5.0 },
    { category: '가격 대비 만족도', icon: ValueIcon, value: 5.0 },
  ]

  const mergeData = ReviewMeta.map(({ category, icon }, index) => {
    return {
      category: category,
      icon: icon,
      value: reviewMetaData?.MetaData[index]?.value ?? 0,
    }
  })

  return (
    <div className='flex pb-4 mb-4'>
      <ReviewOverall ratings={[...reviewMetaData.ratings].reverse()} />
      {mergeData.map(({ category, value, icon }, index) => (
        <ReviewMetaContent key={index} category={category} value={value} icon={icon} />
      ))}
    </div>
  )
}

export default ReviewMeta
