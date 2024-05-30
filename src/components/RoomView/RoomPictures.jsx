import React from 'react'
import Image from 'next/image'

const RoomPictures = () => {
  return (
    <div className='w-full'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
        <div className="col-span-1">
          <Image 
            src="/images/RoomImage1.png" 
            alt="Large view"  
            width={800}
            height={600}
            className="rounded-lg rounded-tl-lg" 
          />
        </div>
        <div className="col-span-1 grid grid-cols-2 gap-2">
          <div className="col-span-1">
            <Image 
              src="/images/RoomImage2.png" 
              alt="View 1"
              width={400}
              height={300}
              className="rounded-lg" 
            />
          </div>
          <div className="col-span-1">
            <Image 
                src="/images/RoomImage3.png" 
                alt="View 1"
                width={400}
                height={300}
                className="rounded-lg" 
              />
          </div>
          <div className="col-span-1">
            <Image 
                src="/images/RoomImage4.png" 
                alt="View 1"
                width={400}
                height={300}
                className="rounded-lg" 
              />
          </div>
          <div className="col-span-1 relative">
            <Image 
                src="/images/RoomImage5.png" 
                alt="View 1"
                width={400}
                height={300}
                className="rounded-lg" 
              />
            <button className="absolute bottom-5 right-5 flex items-center justify-center bg-white text-lg rounded-lg border border-black px-4 py-0.5">
              <Image 
                src="/images/RoomList.svg" 
                alt="RoomList" 
                width={12} 
                height={12} 
                margin-right={4}
              />
              사진 모두 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomPictures;
