'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const IntroduceContent = ({ roomData }) => {
  const [shortDesc, setShortDesc] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)

  const maxLength = 300

  useEffect(() => {
    if (roomData && roomData.desc.length > maxLength) {
      setShortDesc(roomData.desc.substring(0, maxLength) + '...')
    } else {
      roomData && setShortDesc(roomData.desc)
    }
  }, [roomData])

  const handleSeeMore = () => {
    setIsExpanded(true)
  }

  return (
    roomData && (
      <div className='grid w-full gap-2 border-b border-gray-300'>
        <div className='pb-8 pt-8'>{isExpanded ? roomData.desc : shortDesc}</div>
        {!isExpanded && roomData.desc.length > maxLength && (
          <button onClick={handleSeeMore} className='flex items-center pb-8 underline'>
            <div className='font-bold'>더 보기</div>
            <Image src='/images/seeMore.svg' width={12} height={12} alt='seeMore' />
          </button>
        )}
      </div>
    )
  )
}

export default IntroduceContent
