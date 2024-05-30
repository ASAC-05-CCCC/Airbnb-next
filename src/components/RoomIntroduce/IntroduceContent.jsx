import React from 'react'
import Image from 'next/image'

const IntroduceContent = () => {
  return (
    <div className="w-full border-gray-300 grid gap-2 border-b">
      <div>
      안녕하세요. 저희는 다양한 휴식 공간을 연구하고 제공하는 ONDA입니다. 이 곳에서 머무르실 모든 분들께서 편안하고 행복한 시간을 보내기를 바랍니다.

      [숙소 소개]
      반려견 동반이 가능하며 프라이빗한 나만의 공간에서 다양한 부대시설을 즐기실 수 있습니다.....
      </div>
      <button className='underline flex items-center mt-4 mb-8'>
        <div className='font-bold'>더 보기</div>
        <Image src= "/images/seeMore.svg" width={12} height={12} alt='seeMore'/>
      </button>
    </div>
  )
}

export default IntroduceContent
