'use client'
import { useState } from 'react'
import other from '../../../public/json/other.json'

const ExploreOtherOptionsTitle = () => {
  const [selectedCategory] = useState('nearby')
  const [showAllDestinations] = useState(false)

  return (
    <div className='bg-gray-100 p-8'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h1 className='mb-8 text-2xl font-medium'>{other.title}</h1>

        <div className='mb-16 grid grid-cols-2 gap-4 text-left md:grid-cols-3 lg:grid-cols-3'>
          {other.nearby.map((other, index) => (
            <button key={index} className='text-left'>
              <h2 className='mb-1 font-medium'>{other.city}</h2>
              <p className='font-light text-gray-500'>{other.type}</p>
            </button>
          ))}
        </div>

        <h2 className='mb-8 text-2xl font-medium'>다른 유형의 에어비앤비 숙소</h2>

        <div className='grid grid-cols-2 gap-4 text-left md:grid-cols-3 lg:grid-cols-3'>
          {other.otherTypes
            .slice(0, showAllDestinations ? other.otherTypes.length : 9)
            .map((other, index) => (
              <button
                key={index}
                className='text-left text-sm font-semibold'
                onClick={() => console.log(`${other.city} - ${other.type}`)}
              >
                <div className='text-left'>
                  <h3 className='mb-2 font-medium'>{other.city}</h3>
                  <p className='font-normal text-gray-500'>{other.type}</p>
                </div>
              </button>
            ))}
        </div>
      </div>

      <hr className='border-t-3 relative left-1/2 mb-2 mt-12 w-screen -translate-x-1/2 transform border-gray-300' />
    </div>
  )
}

export default ExploreOtherOptionsTitle
