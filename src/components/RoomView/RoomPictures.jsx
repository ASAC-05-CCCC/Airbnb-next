import React from 'react'
import RoomListIcon from '../../assets/RoomViewSvg/RoomList.svg'
import RoomImage1 from '../../assets/RoomViewImg/RoomImage1.png'
import RoomImage2 from '../../assets/RoomViewImg/RoomImage2.png'
import RoomImage3 from '../../assets/RoomViewImg/RoomImage3.png'
import RoomImage4 from '../../assets/RoomViewImg/RoomImage4.png'
import RoomImage5 from '../../assets/RoomViewImg/RoomImage5.png'

const RoomPictures = () => {
  return (
    <div className='w-full'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
        <div className="col-span-1">
          <img src={RoomImage1} alt="Large view" className="w-full h-auto rounded-lg rounded-tl-lg" />
        </div>
        <div className="col-span-1 grid grid-cols-2 gap-2">
          <div className="col-span-1">
            <img src={RoomImage2} alt="View 1" className="w-full h-auto rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src={RoomImage3} alt="View 2" className="w-full h-auto rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src={RoomImage4} alt="View 3" className="w-full h-auto rounded-lg" />
          </div>
          <div className="col-span-1 relative">
            <img src={RoomImage5} alt="View 4" className="w-full h-auto rounded-lg" />
            <button className="absolute bottom-5 right-5 flex items-center justify-center bg-white text-lg rounded-lg border border-black px-4 py-0.5">
              <img src={RoomListIcon} alt="RoomList" className="w-3 h-3 mr-2" />
              사진 모두 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomPictures;
