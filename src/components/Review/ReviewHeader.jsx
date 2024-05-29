'use clinet'
import { useState } from 'react'
import DefaultProfileImage from '/public/images/DefaultProfileImage.svg'
import Image from 'next/image'

const ReviewHeader = ({ image, name, country }) => {
  const [imageExists, setImageExists] = useState(true)
  const handleImageError = () => {
    setImageExists(false)
  }

  return (
    <div className='flex items-center'>
      {imageExists ? (
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className='w-10 h-10 bg-neutral-200 rounded-full mr-4'
          onError={handleImageError}
        />
      ) : (
        <Image
          src={DefaultProfileImage}
          alt='Default Profile'
          width={40}
          height={40}
          className='w-10 h-10 bg-neutral-200 rounded-full mr-4'
        />
      )}
      <div>
        <p className='font-bold'>{name}</p>
        <p className='text-sm font-normal text-neutral-800'>{country}</p>
      </div>
    </div>
  )
}

export default ReviewHeader
