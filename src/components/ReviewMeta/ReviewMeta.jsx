import ReviewMetaContent from '@/components/ReviewMeta/ReviewMetaContent'
import ReviewOverall from '@/components/ReviewMeta/ReviewOverall'
import CleanlinessIcon from '/public/images/Cleanliness.svg'
import AccuracyIcon from '/public/images/Accuracy.svg'
import CheckInIcon from '/public/images/CheckIn.svg'
import CommunicationIcon from '/public/images/Communication.svg'
import LocationIcon from '/public/images/Location.svg'
import ValueIcon from '/public/images/Value.svg'

const ReviewMeta = ({ reviewMetaData, reviewOverall }) => {
  if (!reviewMetaData || reviewMetaData.length === 0) {
    return <></>
  }
  if (!reviewOverall || reviewOverall.length === 0) {
    return <></>
  }

  const ReviewMeta = [
    { category: '청결도', icon: CleanlinessIcon, value: reviewMetaData.Cleanliness },
    { category: '정확도', icon: AccuracyIcon, value: reviewMetaData.Accuracy },
    { category: '체크인', icon: CheckInIcon, value: reviewMetaData.CheckIn },
    { category: '의사소통', icon: CommunicationIcon, value: reviewMetaData.Communication },
    { category: '위치', icon: LocationIcon, value: reviewMetaData.Location },
    { category: '가격 대비 만족도', icon: ValueIcon, value: reviewMetaData.Value },
  ]

  return (
    <div className='mb-4 flex pb-4'>
      <ReviewOverall ratings={reviewOverall} />
      {ReviewMeta.map(({ category, value, icon }, index) => (
        <ReviewMetaContent key={index} category={category} value={value} icon={icon} />
      ))}
    </div>
  )
}

export default ReviewMeta
