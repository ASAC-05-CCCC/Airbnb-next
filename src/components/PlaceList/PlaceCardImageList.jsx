'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import GuestPreference from '@/components/PlaceList/GuestPreference'
import './NavigationCustom.css'
const emptyHeart = '/images/like.svg' // 회색하트
const filledHeart = '/images/liked.svg' // 핑크하트
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
    <div className='group relative w-full'>
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
            <div className='aspect-square h-full w-full'>
              {/* 하트 모양 표시 */}
              <div className='absolute right-2 top-2 z-20 p-2'>
                <div className='h-7 w-7'></div>
                <Image
                  src={liked ? filledHeart : emptyHeart}
                  alt='Like'
                  width={0}
                  height={0}
                  sizes='100vw'
                  style={{ width: '100%', height: 'auto' }}
                  onClick={handleLikeClick}
                />
              </div>
              {/* guestFavorite이 true면 게스트 선호 표시 */}
              {guestFavorite && (
                <div className='absolute left-3 top-3 z-10 rounded-3xl bg-white px-3 py-1 font-semibold text-black'>
                  <GuestPreference />
                </div>
              )}
              {/* 사진 누르면 디테일 페이지로 이동 */}
              <Link href={`/rooms/${id}`} target='_blank'>
                <div className='relative h-full'>
                  <Image
                    src={photo}
                    alt={`Slide`}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='aspect-square h-full w-full rounded-xl bg-zinc-300 object-cover'
                    priority
                  />
                </div>
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
