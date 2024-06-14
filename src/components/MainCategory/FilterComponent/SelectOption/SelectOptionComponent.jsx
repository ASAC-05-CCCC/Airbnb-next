// @ts-nocheck
import Image from 'next/image'

import FilterEachComponent from '@/components/MainCategory/FilterComponent/FilterEachComponent'
import checkIcon from '/public/images/checkIcon.svg'

function SelectOptionComponent({ title, options, checkItem, setCheckItem }) {
  return (
    <FilterEachComponent
      title={title}
      description={undefined}
      // eslint-disable-next-line react/no-children-prop
      children={undefined}
    >
      {options.map((option, optionIdx) => (
        <div key={optionIdx} className='mb-6 last:mb-1'>
          {option.title && <div className='mb-6 text-[15px]'>{option.title}</div>}
          <div className='grid grid-cols-2'>
            {option.contents.map((content, contentIdx) => (
              <div
                onClick={() => setCheckItem(optionIdx, contentIdx)}
                key={contentIdx}
                className='mb-6 flex cursor-pointer flex-row'
              >
                <div
                  className='h-[23px] w-[23px] rounded border-[1px] border-gray-400 p-[3px]'
                  style={{
                    backgroundColor: checkItem[optionIdx].includes(contentIdx) ? 'black' : 'white',
                  }}
                >
                  <Image src={checkIcon} width={15} height={15} alt='checkIcon' />
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
