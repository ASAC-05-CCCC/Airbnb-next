import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import GuestPreference from '@/components/PlaceList/GuestPreference'
import './NavigationCustom.css'
import like from '/public/images/like.svg'
import ArrowButton from '@/components/common/ArrowButton'
import Image from 'next/image'

// 장소 이미지 슬라이더 리스트 (사진 넘기는거)
const PlaceCardImageList = ({ photos, guestFavorite }) => {
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
                <Image src={like} alt='Like' width={28} height={28} />
              </div>
              {/* guestFavorite이 true면 게스트 선호 표시 */}
              {guestFavorite && (
                <div className='absolute top-3 left-3 z-10 px-3 py-1 text-black bg-white rounded-3xl font-semibold'>
                  <GuestPreference />
                </div>
              )}
              <Image
                src={photo}
                alt={`Slide`}
                fill
                className='w-full h-full object-cover aspect-square bg-zinc-300 rounded-xl'
              />
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
