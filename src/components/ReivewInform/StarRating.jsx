import React from 'react'

const StarRating = ({ name, value, onChange }) => {
  const handleClick = newRating => {
    onChange({ target: { name, value: newRating } })
  }

  return (
    <div className='flex items-center'>
      {[1, 2, 3, 4, 5].map(star => (
        <button
          key={star}
          type='button'
          onClick={() => handleClick(star)}
          className={`${
            star <= value ? 'text-gray-600' : 'text-gray-300'
          } text-2xl focus:outline-none`}
        >
          ★
        </button>
      ))}
    </div>
  )
}

export default StarRating
