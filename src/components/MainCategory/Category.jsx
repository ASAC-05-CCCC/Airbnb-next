'use client'

import { useState } from 'react'
import Link from 'next/link'

import CategoryItem from '@/components/MainCategory/CategoryItem'
import FilterButton from '@/components/MainCategory/FilterButton'
import FilterComponent from '@/components/MainCategory/FilterComponent'
import ArrowButton from '@/components/common/ArrowButton'
import categoryData from '../../../public/categoryList.json'

function Category() {
  const categoryList = categoryData.categoryList

  const [isFilterModal, setIsFilterModal] = useState(false)
  const [isLeftArrow, setIsLeftArrow] = useState(true)
  const [isRightArrow, setIsRightArrow] = useState(false)
  const [transX, setTransX] = useState(0)

  const onClickLeftArrowButton = () => {
    if (transX === -200) {
      setTransX(transX - 60)
      setIsLeftArrow(false)
    } else {
      setTransX(transX - 50)
      setIsRightArrow(true)
    }
  }

  const onClickRightArrowButton = () => {
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
    <div className='flex w-full flex-row place-content-center place-items-center'>
      <div className='flex w-full flex-row place-content-center place-items-center gap-2'>
        {isRightArrow && (
          <div className='flex h-10 w-10 place-content-center place-items-center'>
            <ArrowButton onClickArrowButton={onClickRightArrowButton} direction={'right'} />
          </div>
        )}
        <div className='flex w-full overflow-hidden p-5 '>
          <div
            className='flex w-full gap-3 space-x-2 transition-transform duration-700 ease-in-out'
            style={{ transform: `translateX(${transX}rem)` }}
          >
            {categoryList.map((item, index) => {
              return (
                <Link key={index} href={`/?category=${index}`}>
                  <CategoryItem categoryIcon={item.categoryIcon} categoryName={item.categoryName} />
                </Link>
              )
            })}
          </div>
        </div>
        <div className='flex h-10 w-10 place-content-center place-items-center'>
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
