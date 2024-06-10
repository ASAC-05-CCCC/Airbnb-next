const ReviewOverall = ({ ratings }) => {
  if (!ratings || ratings.length === 0) {
    return <></>
  }
  return (
    <div className='mr-8 items-center'>
      <h3 className='w-32 text-sm font-semibold'>전체 평점</h3>
      <ol className='list-none justify-between'>
        {ratings.map((rating, index) => (
          <li key={index} className='mb-0 flex items-center gap-2 first-letter:gap-2'>
            <div className='flex items-center '>
              <span>{rating.stars}</span>
            </div>
            <div className='h-1 w-full rounded bg-gray-200'>
              <div
                className='h-full rounded bg-black'
                style={{ width: `${rating.percentage.toFixed(1)}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ReviewOverall
