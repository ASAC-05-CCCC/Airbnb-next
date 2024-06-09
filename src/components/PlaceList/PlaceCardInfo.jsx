import React from 'react'
import Link from 'next/link'

// 카드 정보 {지역,별점,거리,날짜,가격}
const PlaceCardInfo = ({ id, location, rating, distance, dates, price }) => {
  // price 숫자 변환
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(price)

  // 날짜 변환  "dates": { "startDate": "2024-6-2", "endDate": "2024-6-7" },
  const formattedDate = dateString => {
    const date = new Date(dateString)
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${month}월 ${day}일`
  }

  const startDate = formattedDate(dates.startDate)
  const endDate = formattedDate(dates.endDate)

  return (
    <div className='card_info pt-2'>
      {/* 카드 누르면 디테일 페이지로 이동 */}
      <Link href={`/rooms/${id}`} target='_blank'>
        <div className='card_header flex items-center justify-between'>
          <div className='text-sm font-bold text-neutral-800'>{location}</div>
          <p className='text-sm font-normal text-neutral-800'>
            ★{rating !== 'undefined' ? rating : ''}
          </p>
        </div>
        <div>
          <p className='text-sm font-normal text-zinc-600 '>{distance} 거리</p>
          <p className='text-sm font-normal text-zinc-600'>
            {startDate}~{endDate}
          </p>
          <p className='pt-1 text-sm text-neutral-800'>
            <span className='font-semibold'>￦{formattedPrice}</span>
            <span className='font-medium'> /박</span>
          </p>
        </div>
      </Link>
    </div>
  )
}

export default PlaceCardInfo
