import React from 'react'
import Image from 'next/image'

const SleepSpec = () => {
  return (
    <div className="w-full mb-8 border-b">
      <div className="">
        <h1 className="text-2xl font-bold py-4 mb-8">숙박 장소</h1>
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2">
            <div className="border p-4 rounded-lg flex flex-col items-left justify-center aspect-square">
              <div className='flex items-center mb-4'>
                <Image src="/images/singleBed.svg" alt="Queen Bed" width={24} height={24} className='mr-2' />
                <Image src="/images/queenBed.svg" alt="Queen Bed" width={24} height={24} />
              </div>
              <h3 className="text-xl font-semibold">침실 1</h3>
              <p>퀸사이즈 침대 2개</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-8">
            <div className="border p-4 rounded-lg flex flex-col items-left justify-center aspect-square">
              <div className='flex items-center mb-4'>
                <Image src="/images/singleBed.svg" alt="Queen Bed" width={24} height={24}className='mr-2' />
                <Image src="/images/queenBed.svg" alt="Queen Bed" width={24} height={24} />
              </div>
              <h3 className="text-xl font-semibold">침실 2</h3>
              <p>퀸사이즈 침대 1개,</p>
              <p>싱글 침대 1개</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SleepSpec
