import Image from 'next/image'

function ReviewMetaContent({ category, value, icon }) {
  return (
    <div className=' w-1/4 border-l-2 border-l-gray-300 px-4 pb-1'>
      <div className='flex h-full flex-col justify-between bg-white text-sm font-semibold text-gray-700'>
        <div className=' gap-1'>
          <div>{category}</div>
          <div>{value}</div>
        </div>
        <div className='h-6 w-6'>
          <Image
            src={icon}
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: 'auto' }}
            alt={category}
          />
        </div>
      </div>
    </div>
  )
}

export default ReviewMetaContent
