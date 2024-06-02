import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import GuestPreference from '@/components/PlaceList/GuestPreference'
import './NavigationCustom.css'
import emptyHeart from '/public/images/like.svg' // 회색하트
import filledHeart from '/public/images/liked.svg' // 핑크하트
import ArrowButton from '@/components/common/ArrowButton'
import Image from 'next/image'
import Link from 'next/link'

// 장소 이미지 슬라이더 리스트 (사진 넘기는거)
const PlaceCardImageList = ({ id, photos, guestFavorite }) => {
  const [liked, setLiked] = useState(false)

  const handleLikeClick = () => {
    setLiked(!liked)
  }

  return (
    <div className='relative w-full group'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <div className='relative w-full h-full aspect-square'>
              {/* 하트 모양 표시 */}
              <div className='absolute top-2 right-2 z-20 p-2'>
                <Image
                  src={liked ? filledHeart : emptyHeart}
                  alt='Like'
                  width={28}
                  height={28}
                  onClick={handleLikeClick}
                />
              </div>
              {/* guestFavorite이 true면 게스트 선호 표시 */}
              {guestFavorite && (
                <div className='absolute top-3 left-3 z-10 px-3 py-1 text-black bg-white rounded-3xl font-semibold'>
                  <GuestPreference />
                </div>
              )}
              {/* 사진 누르면 디테일 페이지로 이동 */}
              <Link href={`/rooms/${id}`}>
                <Image
                  src={photo}
                  alt={`Slide`}
                  fill
                  className='w-full h-full object-cover aspect-square bg-zinc-300 rounded-xl'
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
        <div className='swiper-button-next custom-arrow-btn'>
          <ArrowButton direction='left' onClickArrowButton={() => {}} />
        </div>
        <div className='swiper-button-prev custom-arrow-btn'>
          <ArrowButton direction='right' onClickArrowButton={() => {}} />
        </div>
      </Swiper>
    </div>
  )
}
export default PlaceCardImageList
