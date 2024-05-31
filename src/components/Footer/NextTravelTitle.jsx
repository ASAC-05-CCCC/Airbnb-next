'use client'
import { useState } from 'react'
// @ts-ignore
import destination from '/public/json/hello.json'

const NextTravelTitle = () => {
  const categories = ['인기', '예술 및 문화', '야외', '산맥', '해변', '카테고리', '즐길 거리']
  const destinations = destination

  const [selectedCategory, setSelectedCategory] = useState('인기')
  const [showAllDestinations, setShowAllDestinations] = useState(false)

  return (
    <section className='bg-gray-100 text-gray-700 py-8 px-2 sm:px-6 lg:px-8'>
      <div className='max-w-8xl mx-auto'>
        <div className='pl-10 mx-auto  sm:px-6 lg:px-8 '>
          <h2 className='text-2xl font-bold mb-6'>다음 여행을 위한 추천 여행지</h2>

          <div className='flex space-x-4 '>
            {categories.map(category => (
              <button
                key={category}
                className={`text-gray-700 hover:text-gray-900 ${
                  selectedCategory === category ? ' pb-4 border-b-2 border-black relative' : 'pb-4'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <hr className='border-gray-300 mb-6 pb-4  ' />
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-9 text-left'>
            {/* 변경된 부분 */}
            {destinations[selectedCategory]
              .slice(0, showAllDestinations ? destinations[selectedCategory].length : 17)
              .map((destination, index) => (
                <button
                  key={index}
                  className='font-semibold text-left text-sm'
                  onClick={() => console.log(`${destination.city} - ${destination.type}`)}
                >
                  <div>
                    <h3 className='font-semibold'>{destination.city}</h3>
                    <p className='text-gray-500 font-normal'>{destination.type}</p>
                  </div>
                </button>
              ))}
            {!showAllDestinations && (
              <div className='mt-4'>
                <button
                  className='text-gray-700 hover:text-gray-900'
                  onClick={() => setShowAllDestinations(true)}
                >
                  더 보기 ▼
                </button>
              </div>
            )}
          </div>
          {/* 변경된 부분 */}
        </div>
      </div>
      <hr className='border-gray-300 mb-2 mt-12 w-screen relative left-1/2 transform -translate-x-1/2 border-t-3' />
    </section>
  )
}

export default NextTravelTitle
