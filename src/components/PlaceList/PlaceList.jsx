import React from 'react'
import PlaceCardInfo from './PlaceCardInfo'
import PlaceCardImageList from './PlaceCardImageList'

import placeData from '/public/json/data.json' // 임시데이터

// 전체 장소 리스트
const PlaceList = () => {
  const accommodations = placeData.accommodationInfo

  return (
    <div className='place-list mx-8 mt-4 mb-16 grid grid-cols-fluid justify-center gap-5 px-8 '>
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
