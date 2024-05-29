import React, { useState } from 'react'

const ReviewModalSearch = ({ data }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className='border-b border-solid px-6 pb-8'>
      <div className='flex flex-row justify-between'>
        <div className='font-bold text-2xl'>후기 {data}개</div>
        <div>최신순</div>
      </div>
      <form
        className={`flex mt-8 p-2 w-full bg-white border-2 border-solid rounded-full transition-colors duration-300 ${
          isFocused ? 'border-black' : 'border-gray-400'
        }`}
      >
        <img className='w-4 h-4' src='./d' alt='Search Icon' />
        <input
          className='w-[462px] h-[20px] ml-2 outline-none'
          type='text'
          placeholder='후기 검색'
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </form>
    </div>
  )
}

export default ReviewModalSearch
