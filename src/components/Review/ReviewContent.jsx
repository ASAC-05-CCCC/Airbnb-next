const ReviewContent = ({ rating, timeStamp, message, keyword }) => {
  const totalStars = 5

  const highlightKeyword = (text, keyword) => {
    if (!keyword.trim()) {
      return text
    }
    const parts = text.split(new RegExp(`(${keyword})`, 'gi'))
    return parts.map((part, index) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <span key={index} className='bg-orange-300'>
          {part}
        </span>
      ) : (
        part
      ),
    )
  }

  return (
    <div className='mt-2'>
      <div className='flex items-center'>
        <div className='flex'>
          {[...Array(totalStars)].map((_, index) => (
            <span
              key={index}
              className={index < Math.round(rating) ? 'text-black' : 'text-gray-400'}
            >
              ★
            </span>
          ))}
        </div>
        <span className='ml-2 text-gray-600 text-sm'>{timeStamp}</span>
      </div>
      <p className='mt-2 text-gray-800'>{highlightKeyword(message, keyword)}</p>
    </div>
  )
}
export default ReviewContent
