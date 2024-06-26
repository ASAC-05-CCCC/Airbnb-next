import Image from 'next/image'

const RoomTitle = ({ roomData }) => {
  return (
    <div className='mb-4 w-full'>
      <div className='flex flex-col items-start sm:flex-row sm:items-end'>
        <h1 className='flex-1 text-3xl font-bold leading-snug'>
          {roomData ? roomData.accommodationName : '뿌잉'}
        </h1>
        <div className='flex flex-shrink-0 items-center justify-end gap-4 sm:flex-1'>
          <button className='flex items-center underline'>
            <Image src='/images/share.svg' alt='Share' width={12} height={12} />
            공유하기
          </button>
          <button className='flex items-center underline'>
            <Image src='/images/store.svg' alt='Save' width={12} height={12} />
            저장
          </button>
        </div>
      </div>
    </div>
  )
}

export default RoomTitle
