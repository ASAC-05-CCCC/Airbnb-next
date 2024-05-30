'use client'

import { useState } from 'react'

import CategoryItem from '@/components/MainCategory/CategoryItem'
import FilterButton from '@/components/MainCategory/FilterButton'
import FilterComponent from '@/components/MainCategory/FilterComponent'
import ArrowButton from '@/components/common/ArrowButton'
import categoryData from '/public/categoryList.json'

function Category() {
  const categoryList = categoryData.categoryList

  const [isFilterModal, setIsFilterModal] = useState(false)
  const [isLeftArrow, setIsLeftArrow] = useState(true)
  const [isRightArrow, setIsRightArrow] = useState(false)
  const [transX, setTransX] = useState(0)

  const onClickLeftArrowButton = () => {
    console.log(transX)
    if (transX === -200) {
      setTransX(transX - 60)
      setIsLeftArrow(false)
    } else {
      setTransX(transX - 50)
      setIsRightArrow(true)
    }
  }

  const onClickRightArrowButton = () => {
    console.log(transX)
    if (transX === -60) {
      setTransX(transX + 60)
      setIsRightArrow(false)
    } else if (transX === -50) {
      setTransX(transX + 50)
      setIsRightArrow(false)
    } else {
      setTransX(transX + 50)
      setIsLeftArrow(true)
    }
  }

  return (
    <div className='w-full flex flex-row place-items-center place-content-center'>
      <div className='flex flex-row place-items-center place-content-center w-full gap-2'>
        {isRightArrow && (
          <div className='w-10 h-10 flex place-items-center place-content-center'>
            <ArrowButton onClickArrowButton={onClickRightArrowButton} direction={'right'} />
          </div>
        )}
        <div className='flex w-full p-5 overflow-hidden '>
          <div
            className='flex gap-3 transition-transform duration-700 ease-in-out space-x-2 w-full'
            style={{ transform: `translateX(${transX}rem)` }}
          >
            {categoryList.map((item, index) => {
              // if (index > 13) {
              //   return null
              // }
              return (
                <CategoryItem
                  key={index}
                  categoryIcon={item.categoryIcon}
                  categoryName={item.categoryName}
                />
              )
            })}
          </div>
        </div>
        <div className='w-10 h-10 flex place-items-center place-content-center'>
          {isLeftArrow && (
            <ArrowButton onClickArrowButton={onClickLeftArrowButton} direction={'left'} />
          )}
        </div>
        <FilterButton setIsFilterModal={setIsFilterModal} />
        {isFilterModal && <FilterComponent setIsFilterModal={setIsFilterModal} />}
      </div>
    </div>
  )
}

export default Category
