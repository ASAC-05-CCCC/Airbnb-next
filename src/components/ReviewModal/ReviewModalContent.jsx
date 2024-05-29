function ReviewModalContent({ category, value, icon }) {
  const valueFloat = value.toFixed(1)
  return (
    <div className=' border-t-gray-300 border-t py-3 w-[280px]'>
      <div className='flex justify-between font-semibold bg-white text-gray-700 text-sm '>
        <div className='flex gap-4'>
          <img src={icon} className=' w-6 h-6' alt={category} />
          <div>{category}</div>
        </div>
        <div>{valueFloat}</div>
      </div>
    </div>
  )
}

export default ReviewModalContent
