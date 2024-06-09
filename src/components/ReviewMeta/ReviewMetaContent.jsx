import Image from 'next/image'

function ReviewMetaContent({ category, value, icon }) {
  return (
    <div className=' w-1/4 border-l-2 border-l-gray-300 px-4 pb-1'>
      <div className='flex h-full flex-col justify-between bg-white text-sm font-semibold text-gray-700'>
        <div className=' gap-1'>
          <div>{category}</div>
          <div>{value}</div>
        </div>
        <Image src={icon} className='h-6 w-6' alt={category} />
      </div>
    </div>
  )
}

export default ReviewMetaContent
