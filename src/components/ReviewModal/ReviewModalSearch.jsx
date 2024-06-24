import React, { useEffect, useState } from 'react'
const SearchIcon = '/images/Search.svg'
const BottomArrowIcon = '/images/BottomArrow.svg'
import Image from 'next/image'

const ReviewModalSearch = ({
  data,
  categories,
  selectedCategory,
  setSelectedCategory,
  keyword,
  setKeyword,
}) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState(keyword)

  const handleCategoryChange = categoryKey => {
    setSelectedCategory(categoryKey)
    setIsCategoryOpen(false)
  }

  const handleInputChange = e => {
    setInputValue(e.target.value)
  }

  const handleClear = () => {
    setInputValue('')
    setKeyword('')
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setKeyword(inputValue)
    }
  }

  useEffect(() => {
    const handleModalClose = e => {
      if (isFocused) {
        e.stopPropagation()
      }
    }
    document.addEventListener('click', handleModalClose)
    return () => {
      document.removeEventListener('click', handleModalClose)
    }
  }, [isFocused])

  return (
    <div className='border-b border-solid px-6 pb-8'>
      <div className='flex flex-row items-center justify-between text-2xl font-bold'>
        후기 {data}개
        <div className='relative'>
          <button
            className={`flex items-center rounded-full border border-gray-200 px-[12px] py-[4px] text-xl focus:outline-none`}
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          >
            {categories[selectedCategory]}
            <Image
              src={BottomArrowIcon}
              alt='Arrow Icon'
              className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                isCategoryOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
          {isCategoryOpen && (
            <ul
              className='absolute mt-1 w-full rounded border border-gray-200 bg-white py-1'
              role='listbox'
              id='reviews-sort-selector_options'
            >
              {Object.keys(categories).map(key => (
                <li
                  key={key}
                  role='option'
                  id={`${key}_option`}
                  aria-selected={selectedCategory === key}
                  className={`cursor-pointer px-4 py-2 text-sm hover:bg-gray-100 ${
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
        className={`mt-8 flex w-full items-center rounded-full border-2 border-solid bg-white p-[4px] px-[12px] transition-colors duration-300 ${isFocused ? 'border-black' : 'border-gray-400'}`}
      >
        <Image className='h-4 w-4' src={SearchIcon} alt='Search Icon' />
        <input
          className='ml-2 h-[20px] w-[462px] outline-none'
          type='text'
          placeholder='후기 검색'
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
        />
        {inputValue && (
          <button
            type='button'
            onClick={handleClear}
            className='flex h-full w-7 items-center justify-center rounded-full bg-gray-300'
          >
            <Image className='h-4 w-4' src={'/images/XIcon.svg'} alt='Clear Icon' />
          </button>
        )}
      </form>
    </div>
  )
}

export default ReviewModalSearch
