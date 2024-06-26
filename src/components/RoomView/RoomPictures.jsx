import Image from 'next/image'

const RoomPictures = ({ roomData }) => {
  return (
    roomData && (
      <div className='w-full transition-all'>
        <div className='grid w-full grid-cols-1 gap-2 pb-4 transition-all lg:grid-cols-4'>
          <div className='relative col-span-1 row-span-1 h-[410px] transition-all lg:col-span-2 lg:row-span-2 lg:aspect-auto'>
            <Image
              src={roomData.imageUrl[0]}
              alt='Large view'
              fill
              sizes='(max-width: 1024px) 100vw, 50vw'
              priority
              className='rounded-lg rounded-tl-lg transition-all'
            />
          </div>
          <div className='relative col-span-1 row-span-1 transition-all lg:aspect-auto'>
            <Image
              src={roomData.imageUrl[1]}
              alt='View 1'
              fill
              sizes='(max-width: 1024px) 100vw, 25vw'
              className='rounded-lg transition-all'
            />
          </div>
          <div className='relative col-span-1 row-span-1 transition-all lg:aspect-auto'>
            <Image
              src={roomData.imageUrl[2]}
              alt='View 2'
              fill
              sizes='(max-width: 1024px) 100vw, 25vw'
              className='rounded-lg transition-all'
            />
          </div>
          <div className='relative col-span-1 row-span-1 transition-all lg:aspect-auto'>
            <Image
              src={roomData.imageUrl[3]}
              alt='View 3'
              fill
              sizes='(max-width: 1024px) 100vw, 25vw'
              className='rounded-lg transition-all'
            />
          </div>
          <div className='relative col-span-1 row-span-1 transition-all lg:aspect-auto'>
            <Image
              src={roomData.imageUrl[4]}
              alt='View 4'
              fill
              sizes='(max-width: 1024px) 100vw, 25vw'
              className='rounded-lg transition-all'
            />
            <button className='absolute bottom-5 right-5 flex items-center justify-center rounded-lg border border-black bg-white px-4 py-0.5 text-lg transition-all'>
              <Image
                src='/images/RoomList.svg'
                alt='RoomList'
                width={12}
                height={12}
                className='mr-1 transition-all'
              />
              사진 모두 보기
            </button>
          </div>
        </div>
      </div>
    )
  )
}

export default RoomPictures
