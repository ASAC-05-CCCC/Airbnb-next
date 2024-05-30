import React from 'react'
import PlaceCardInfo from '@/components/PlaceList/PlaceCardInfo'
import PlaceCardImageList from '@/components/PlaceList/PlaceCardImageList'

import placeData from '/public/json/Data.json' // 임시데이터

// 전체 장소 리스트
const PlaceList = () => {
  const accommodations = placeData.accommodationInfo

  return (
    <div className='place-list grid grid-cols-fluid justify-center gap-5 '>
      {accommodations.map(place => (
        <div key={place.accommodationId} className='mb-6'>
          <PlaceCardImageList
            id={place.accommodationId}
            photos={place.imageUrl}
            guestFavorite={place.guestFavorite}
          />
          <PlaceCardInfo
            id={place.accommodationId}
            location={place.countryLocationName}
            rating={place.rating}
            distance={place.distance}
            dates={place.dates}
            price={place.pricePerDay}
          />
        </div>
      ))}
    </div>
  )
}
export default PlaceList
