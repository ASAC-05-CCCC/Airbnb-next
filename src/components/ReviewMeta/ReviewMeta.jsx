import ReviewMetaContent from './ReviewMetaContent'
import ReviewOverall from './ReviewOverall'
import CleanlinessIcon from '../../assets/Cleanliness.svg'
import AccuracyIcon from '../../assets/Accuracy.svg'
import CheckInIcon from '../../assets/CheckIn.svg'
import CommunicationIcon from '../../assets/Communication.svg'
import LocationIcon from '../../assets/Location.svg'
import ValueIcon from '../../assets/Value.svg'
import React, { useState, useEffect } from 'react'

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
