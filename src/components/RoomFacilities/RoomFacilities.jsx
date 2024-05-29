import React from 'react';
import beachNear from '../../assets/RoomFacilitiesSvg/beachNear.svg';
import freeWifi from '../../assets/RoomFacilitiesSvg/freeWifi.svg';
import swimming from '../../assets/RoomFacilitiesSvg/swimming.svg';

const RoomFacilities = () => {
  return (
    <div className="w-full">
      <div className='mt-4 mb-4'>
        <div className='border-b'>
          <h1 className="text-2xl font-bold mb-8 mt-8">숙소 편의시설</h1>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 px-2 mb-4">
              <div className="flex items-center space-x-2">
                <img src={beachNear} alt="Beach Near" className="w-6 h-6" />
                <span>해변과 인접 - 해변</span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 px-2 mb-4">
              <div className="flex items-center space-x-2">
                <img src={freeWifi} alt="Free Wifi" className="w-6 h-6" />
                <span>무선 인터넷</span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 px-2 mb-4">
              <div className="flex items-center space-x-2">
                <img src={swimming} alt="Swimming Pool" className="w-6 h-6" />
                <span>수영장</span>
              </div>
            </div>
            {/* 추가적인 편의시설 항목들 */}
          </div>
          <div className="mt-4">
            <button className="border py-2 px-4 rounded-lg hover:bg-gray-100 transition mb-8">
              편의시설 25개 모두 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomFacilities;
