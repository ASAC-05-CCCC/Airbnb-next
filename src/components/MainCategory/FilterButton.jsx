import Image from 'next/image'

const filterIcon = '/images/filterIcon.svg'

function FilterButton({ setIsFilterModal }) {
  return (
    <button
      className='relative flex h-12 w-20 flex-row 
    place-content-center place-items-center rounded-xl border border-gray-300 transition-all hover:border-black hover:bg-gray-100'
      onClick={() => {
        setIsFilterModal(prev => !prev)
      }}
    >
      <div className='flex h-full w-full items-center justify-around'>
        <div className='flex h-full w-full items-center justify-center p-1'>
          <Image
            src={filterIcon}
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '80%', height: 'auto' }}
            alt='filter'
          />
        </div>
        <div className='whitespace-nowrap p-1'>
          <div className='text-xs'>필터</div>
        </div>
      </div>
    </button>
  )
}

export default FilterButton
