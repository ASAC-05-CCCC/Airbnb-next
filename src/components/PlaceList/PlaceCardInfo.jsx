import React from 'react'
import Link from 'next/link'

// 카드 정보 {지역,별점,거리,날짜,가격}
const PlaceCardInfo = ({ id, location, rating, distance, dates, price }) => {
  // price 숫자 변환
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(price)

  return (
    <div className='card_info pt-2'>
      {/* 카드 누르면 디테일 페이지로 이동 */}
      <Link href={`/rooms/${id}`}>
        <div className='card_header flex justify-between items-center'>
          <div className='text-neutral-800 text-sm font-bold'>{location}</div>
          <p className='text-neutral-800 text-sm font-normal'>★{rating}</p>
        </div>
        <div>
          <p className='text-zinc-600 text-sm font-normal '>{distance} 거리</p>
          <p className='text-zinc-600 text-sm font-normal'>{dates}</p>
          <p className='text-neutral-800 text-sm pt-1'>
            <span className='font-semibold'>\{formattedPrice}</span>
            <span className='font-medium'> /박</span>
          </p>
        </div>
      </Link>
    </div>
  )
}

export default PlaceCardInfo
