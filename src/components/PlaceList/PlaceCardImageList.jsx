import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import GuestPreference from './GuestPreference'
import './NavigationCustom.css'
import like from '../../assets/like.svg'
import ArrowButton from '../common/ArrowButton'

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
            <div className='relative w-full h-full'>
              {/* 하트 모양 표시 */}
              <div className='absolute top-2 right-2 z-20 p-2'>
                <img src={like} alt='Like' className='w-7 h-7' />
              </div>
              {/* guestFavorite이 true면 게스트 선호 표시 */}
              {guestFavorite && (
                <div className='absolute top-3 left-3 z-10 px-3 py-1 text-black bg-white rounded-3xl font-semibold'>
                  <GuestPreference />
                </div>
              )}
              <img
                src={photo}
                alt={`Slide`}
                className='w-full h-full object-cover aspect-square bg-zinc-400 rounded-xl'
              />
            </div>
          </SwiperSlide>
        ))}
        <div className='swiper-button-next custom-arrow-btn'>
          <ArrowButton direction='left' />
        </div>
        <div className='swiper-button-prev custom-arrow-btn'>
          <ArrowButton direction='right' />
        </div>
      </Swiper>
    </div>
  )
}
export default PlaceCardImageList
