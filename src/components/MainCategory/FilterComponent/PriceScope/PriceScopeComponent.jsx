import { useSelector } from 'react-redux'

import FilterEachComponent from '@/components/MainCategory/FilterComponent/FilterEachComponent'
import PriceInputBox from '@/components/MainCategory/FilterComponent/PriceScope/PriceInputBox'

function PriceScopeComponent() {
  const minPrice = useSelector(states => states['filter'].minPrice)
  const maxPrice = useSelector(states => states['filter'].maxPrice)

  return (
    <>
      <FilterEachComponent title={'가격 범위'} description={'1박 요금(수수료 및 세금 포함)'}>
        <div className='mb-6 flex h-auto flex-row items-center justify-center'>
          <PriceInputBox type={'최저'} price={minPrice} />
          <div className='mx-6 text-4xl font-thin text-gray-400'>-</div>
          <PriceInputBox type={'최고'} price={maxPrice} />
        </div>
      </FilterEachComponent>
    </>
  )
}

export default PriceScopeComponent
