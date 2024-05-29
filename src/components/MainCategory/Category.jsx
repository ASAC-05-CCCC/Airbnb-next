import { useState } from 'react'

import CategoryItem from './CategoryItem'
import FilterButton from './FilterButton'

import categoryData from '../../../public/json/categoryList.json'
import FilterComponent from './FilterComponent'
import ArrowButton from '../common/ArrowButton'

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
    <div className='flex flex-row place-items-center place-content-center'>
      <div className='flex flex-row place-items-center place-content-center w-[95%]'>
        <div className='w-10 h-10 flex place-items-center place-content-center'>
          {isRightArrow && (
            <ArrowButton onClickArrowButton={onClickRightArrowButton} direction={'right'} />
          )}
        </div>
        <div className='flex p-5 overflow-hidden w-9/12'>
          <div
            className='flex transition-transform duration-700 ease-in-out space-x-2'
            style={{ transform: `translateX(${transX}rem)` }}
          >
            {categoryList.map((item, index) => {
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
