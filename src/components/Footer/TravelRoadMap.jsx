import React from 'react'

const TravelRoadMap = () => {
  const paths = ['A', 'B', 'C', 'D']

  return (
    <section className='bg-gray-100  text-gray-700 py-0 px-2 sm:px-6 lg:px-8  '>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* <div className='mx-auto px-4 sm:px-6 lg:px-8'> */}
        <div className='flex items-center space-x-2 text-gray-600 py-8 text-sm font-light'>
          {paths.map((path, index) => (
            <React.Fragment key={index}>
              <button className='text-gray-600 hover:text-blue-600 focus:outline-none hover:underline'>
                {path}
              </button>
              {index < paths.length - 1 && <span className='mx-1'>{'>'}</span>}
            </React.Fragment>
          ))}
        </div>
        <hr className='border-gray-300 mb-0 mt-0 w-screen relative left-1/2 transform -translate-x-1/2 border-t-3' />
      </div>

      {/* </div> */}
    </section>
  )
}

export default TravelRoadMap
