'use client'
import React, { useEffect, useRef, useState } from 'react'
import PlaceCardInfo from '@/components/PlaceList/PlaceCardInfo'
import PlaceCardImageList from '@/components/PlaceList/PlaceCardImageList'
import useInfiniteScroll from '@/hooks/useInfiniteScroll'
import { useSearchParams } from 'next/navigation'
import useFetchAccommodations from '@/hooks/useFetchAccommodations'

// 전체 장소 리스트
const PlaceList = () => {
  const loader = useRef(null) // 무한스크롤 감지
  const isIntersecting = useInfiniteScroll(loader) //loader를 인자로 받아서 화면에 보이는지 감지. 보이면 true
  const [page, setPage] = useState(0)

  const searchParams = useSearchParams()
  const categoryId = searchParams.get('category')
  const location = searchParams.get('location')
  const startDate = searchParams.get('startDate')
  const endDate = searchParams.get('endDate')
  const guest = searchParams.get('guest')

  const accommodations = useFetchAccommodations(
    page,
    categoryId,
    location,
    startDate,
    endDate,
    guest,
  )

  useEffect(() => {
    if (isIntersecting) setPage(prev => prev + 1) //isInersecting이 true면 페이지 번호 증가 시킴. 스크롤 내려서 끝에 도착하면 다음 페이지
  }, [isIntersecting])

  return (
    <div className='place-list grid grid-cols-fluid justify-center gap-5 '>
      {accommodations.map((place, index) => (
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
      <div ref={loader}></div>
    </div>
  )
}
export default PlaceList
