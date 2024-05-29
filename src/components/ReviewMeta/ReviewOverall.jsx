const ReviewOverall = ({ ratings }) => {
  return (
    <div className='items-center mr-8'>
      <h3 className='font-semibold text-sm w-32'>전체 평점</h3>
      <ol className='list-none justify-between'>
        {ratings.map((rating, index) => (
          <li key={index} className='flex items-center first-letter:gap-2 mb-0 gap-2'>
            <div className='flex items-center '>
              <span>{rating.stars}</span>
            </div>
            <div className='bg-gray-200 h-1 w-full rounded'>
              <div
                className='h-full bg-black rounded'
                style={{ width: `${rating.percentage}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ReviewOverall
