// @ts-nocheck
'use client'
import PlaceCardInfo from '@/components/PlaceList/PlaceCardInfo'
import PlaceCardImageList from '@/components/PlaceList/PlaceCardImageList'

import useFetch from '@/hooks/useFetch'

import { useEffect, useMemo, useState, useRef } from 'react'

// 전체 장소 리스트
const NewPlaceList = ({ searchParams }) => {
  const [params, setParams] = useState({})
  const { data, error, isLoading } = useFetch('/rooms')


  // searchParam이 있으면 상태로 가져온다.
  useEffect(() => {
    if (searchParams) {
      setParams(prev => ({ ...prev, searchParams }))
    }
  }, [searchParams])

  // searchParam에 따라서 list filter 하는 함수
  const filterList = useMemo(() => {
    // 일반적인 경우 -> Param이 아무것도 없을 때
    let isEmpty = JSON.stringify(params) === '{}'
    if (isEmpty) {
      return data
    } else {
      // category가 있을 때

      // 검색했을 때
      const newList =
        data &&
        data.filter(prevList => {
          // // const location = prevList.locationName === params.location
          // const startDate = prevList.dates.startDate === params.startDate
          // const endDate = prevList.dates.endDate === params.startDate
          // // const guest = prevList.guest === params.guest
          // return location || startDate || endDate
          return prevList.accommodationId < 5
        })
      return newList
    }
  }, [data, params])

  if (error) {
    return <div>error</div>
  }

  if (isLoading) {
    return <div>Loading..</div>
  }

  return (
    <div className='place-list grid grid-cols-fluid justify-center gap-5 '>
      {filterList.map((place, index) => (
        <div key={index} className='mb-6'>
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
      {/* 스크롤 감지 포인트 */}
      {/* <div ref={loader}></div> */}
    </div>
  )
}
export default NewPlaceList
