import React, { useEffect, useRef, useState } from 'react'
import PlaceCardInfo from '@/components/PlaceList/PlaceCardInfo'
import PlaceCardImageList from '@/components/PlaceList/PlaceCardImageList'
import useInfiniteScroll from '@/hooks/useInfiniteScroll'

// 전체 장소 리스트
const PlaceList = ({ categoryId }) => {
  const [accommodations, setAccommodations] = useState([])

  const loader = useRef(null) // 무한스크롤 감지
  const isIntersecting = useInfiniteScroll(loader) //loader를 인자로 받아서 화면에 보이는지 감지. 보이면 true
  const [page, setPage] = useState(0)

  useEffect(() => {
    fetch(`http://localhost:3000/apis/rooms/?category=${categoryId}&page=${page}`).then(response =>
      response.json().then(data => {
        setAccommodations(prev => [...prev, ...data.data.accommodationInfo])
      }),
    )
  }, [categoryId, page])

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
