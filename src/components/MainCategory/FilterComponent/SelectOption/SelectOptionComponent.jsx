import Image from 'next/image'

import FilterEachComponent from '@/components/MainCategory/FilterComponent/FilterEachComponent'
import checkIcon from '/public/images/checkIcon.svg'

function SelectOptionComponent({ title, options, checkItem, setCheckItem }) {
  const checkItemHandler = (optionIdx, contentIdx) => {
    setCheckItem(prev => {
      const newSet = new Set(prev[optionIdx])
      if (newSet.has(contentIdx)) {
        newSet.delete(contentIdx)
      } else {
        newSet.add(contentIdx)
      }

      return [...prev.slice(0, optionIdx), newSet, ...prev.slice(optionIdx + 1)]
    })
  }

  return (
    <FilterEachComponent title={title}>
      {options.map((option, optionIdx) => (
        <div key={optionIdx} className='mb-6 last:mb-1'>
          {option.title && <div className='mb-6 text-[15px]'>{option.title}</div>}
          <div className='grid grid-cols-2'>
            {option.contents.map((content, contentIdx) => (
              <div
                onClick={() => checkItemHandler(optionIdx, contentIdx)}
                key={contentIdx}
                className='flex flex-row mb-6 cursor-pointer'
              >
                <div
                  className='p-[3px] w-[23px] h-[23px] border-[1px] border-gray-400 rounded'
                  style={{
                    backgroundColor: checkItem[optionIdx].has(contentIdx) ? 'black' : 'white',
                  }}
                >
                  <Image src={checkIcon} width={15} height={15} />
                </div>
                <div className='ml-4 text-[15px] font-normal text-gray-600'>{content}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </FilterEachComponent>
  )
}

export default SelectOptionComponent
