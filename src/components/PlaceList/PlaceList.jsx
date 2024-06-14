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
  const category = searchParams.get('category')

  // 검색
  const location = searchParams.get('location')
  const startDate = searchParams.get('startDate')
  const endDate = searchParams.get('endDate')
  const guest = searchParams.get('guest')

  // 필터
  const type = searchParams.get('type')
  const description = searchParams.get('description')
  const minPrice = searchParams.get('minPrice')
  const maxPrice = searchParams.get('maxPrice')
  const bedroomCount = searchParams.get('bedroomCount')
  const bedCount = searchParams.get('bedCount')
  const bathroomCount = searchParams.get('bathroomCount')
  const isPreference = searchParams.get('isPreference')
  const isHouse = searchParams.get('isHouse')
  const isApartment = searchParams.get('isApartment')
  const isOutbuilding = searchParams.get('isOutbuilding')
  const isHotel = searchParams.get('isHotel')
  const accessibilityOption = searchParams.get('accessibilityOption')
  const facilitiesOption = searchParams.get('facilitiesOption')
  const languageOption = searchParams.get('languageOption')
  const isInstantBook = searchParams.get('isInstantBook')
  const isSelfCheckIn = searchParams.get('isSelfCheckIn')
  const isAllowPet = searchParams.get('isAllowPet')

  const filters = {
    category,
    location,
    startDate,
    endDate,
    guest,
    type,
    description,
    minPrice,
    maxPrice,
    bedroomCount,
    bedCount,
    bathroomCount,
    isPreference,
    isHouse,
    isApartment,
    isOutbuilding,
    isHotel,
    accessibilityOption,
    facilitiesOption,
    languageOption,
    isInstantBook,
    isSelfCheckIn,
    isAllowPet,
  }

  const accommodations = useFetchAccommodations(page, filters)

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
