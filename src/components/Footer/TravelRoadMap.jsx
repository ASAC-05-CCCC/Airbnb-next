'use client'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function TravelRoadMap() {
  const [paths, setPath] = useState([])
  const pathname = usePathname() //URL path를 가져옴 ex) /rooms/5
  const id = pathname.slice(7) // slice(7) -> 문자열 7번쨰부터

  useEffect(() => {
    fetch(`/apis/footer/${id}`)
      .then(response => response.json())
      .then(data => {
        setPath(['에어비앤비', data.region_name_1, data.region_name_2, data.city])
      })
      .catch(error => console.error('Error fetching host.json:', error))
  }, [])

  return (
    <section className='bg-gray-100  px-2 py-0 text-gray-700 sm:px-6 lg:px-8  '>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        {/* <div className='mx-auto px-4 sm:px-6 lg:px-8'> */}
        <div className='flex items-center space-x-2 py-8 text-sm font-light text-gray-600'>
          {paths.map((path, index) => (
            <React.Fragment key={index}>
              <button className='text-gray-600 hover:text-blue-600 hover:underline focus:outline-none'>
                {path}
              </button>
              {index < paths.length - 1 && <span className='mx-1'>{'>'}</span>}
            </React.Fragment>
          ))}
        </div>
        <hr className='border-t-3 relative left-1/2 mb-0 mt-0 w-screen -translate-x-1/2 transform border-gray-300' />
      </div>

      {/* </div> */}
    </section>
  )
}

export default TravelRoadMap
