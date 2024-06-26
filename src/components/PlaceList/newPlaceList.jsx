// @ts-nocheck
'use client'
import PlaceCardInfo from '@/components/PlaceList/PlaceCardInfo'
import PlaceCardImageList from '@/components/PlaceList/PlaceCardImageList'

import useFetch from '@/hooks/useFetch'

import { useMemo } from 'react'

// 전체 장소 리스트
const NewPlaceList = ({ searchParams }) => {
  const { data, error, isLoading } = useFetch('/rooms')

  // searchParam에 따라서 list filter 하는 함수
  const filterList = useMemo(() => {
    // 일반적인 경우 -> Param이 아무것도 없을 때
    let isEmpty = JSON.stringify(searchParams) === '{}'
    if (isEmpty) {
      console.log('searchParam 없음')
      return data
    } else {
      // category가 있을 때
      console.log('searchParam 있음')

      // 검색했을 때
      const newList =
        data &&
        data.filter(prevList => {
          // 필터링 내용 주석 처리했습니다~
          // const location = prevList.locationName === searchParams.location
          // const startDate = prevList.dates.startDate === searchParams.startDate
          // const endDate = prevList.dates.endDate === searchParams.startDate
          // const guest = prevList.guest === searchParams.guest
          // return location || startDate || endDate

          // 임시 filter 된 것 처럼 보이기
          return prevList.accommodationId < 5
        })
      return newList
    }
  }, [data, searchParams])

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
