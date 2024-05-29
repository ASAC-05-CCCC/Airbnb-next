import React from 'react'
import Onda from '../../assets/RoomInfoImg/ONDA.png'

const RoomHost = () => {
  return (
    <div className="w-full grid gap-2 border-b">
      <div className="border-t border-gray-300 pt-4">
        <div className="flex items-center space-x-3">
          <button className='mb-4'>
            <img src={Onda} className='w-10 h-10' />
          </button>
          <div>
            <p className="font-bold">호스트: Onda 님</p>
            <p className="text-gray-600 mb-4">호스팅 경력 1년</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomHost