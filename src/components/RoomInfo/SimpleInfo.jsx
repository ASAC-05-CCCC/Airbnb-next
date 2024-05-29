import React from 'react'
import star from '../../assets/RoomInfoSvg/star.svg'

const SimpleInfo = () => {
  return (
    <div className="w-full grid gap-2">
      <h1 className="text-2xl font-bold">Taean-gun, 한국의 펜션</h1>
      <p className="text-gray-700">최대 인원 8명 · 침실 2개 · 침대 4개 · 욕실 2개</p>
      <div className="flex items-center gap-1 mb-4">
        <img src={star} className='w-3 h-3' />
        <span className="text-gray-700 font-bold">5.0</span>
        <span className="text-gray-500 mx-2">·</span>
        <a href="#" className="text-gray-700 underline">후기 4개</a>
      </div>
    </div>
  )
}

export default SimpleInfo
