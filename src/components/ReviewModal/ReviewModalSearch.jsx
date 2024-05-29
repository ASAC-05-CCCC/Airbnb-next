import React, { useState } from 'react'
import SearchIcon from '/public/images/Search.svg'
import BottomArrowIcon from '/public/images/BottomArrow.svg'
import Image from 'next/image'

const categories = {
  mostRecent: '최신순',
  highestRated: '높은 평점순',
  lowestRated: '낮은 평점순',
}

const ReviewModalSearch = ({ data }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('mostRecent')
  const [isFocused, setIsFocused] = useState(false)

  const handleCategoryChange = categoryKey => {
    setSelectedCategory(categoryKey)
    setIsCategoryOpen(false)
  }

  return (
    <div className='border-b border-solid px-6 pb-8'>
      <div className='flex flex-row justify-between items-center font-bold text-2xl'>
        후기 {data}개
        <div className='relative'>
          <button
            className={`flex items-center focus:outline-none border rounded-full py-[4px] px-[12px] border-gray-200 text-xl`}
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          >
            {categories[selectedCategory]}
            <Image
              src={BottomArrowIcon}
              alt='Arrow Icon'
              className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                isCategoryOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
          {isCategoryOpen && (
            <ul
              className='absolute bg-white border border-gray-200 rounded mt-1 py-1 w-full'
              role='listbox'
              id='reviews-sort-selector_options'
            >
              {Object.keys(categories).map(key => (
                <li
                  key={key}
                  role='option'
                  id={`${key}_option`}
                  aria-selected={selectedCategory === key}
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm ${
                    selectedCategory === key ? 'bg-gray-200' : ''
                  }`}
                  onClick={() => handleCategoryChange(key)}
                >
                  <div className='flex items-center'>
                    <span className='block w-full text-left'>{categories[key]}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <form
        className={`flex mt-8 p-[4px] px-[12px] w-full bg-white border-2 border-solid rounded-full transition-colors duration-300 ${isFocused ? 'border-black' : 'border-gray-400'}`}
      >
        <Image className='w-4 h-4' src={SearchIcon} alt='Search Icon' />
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
