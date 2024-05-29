function FilterClearButton({ setIsFilterModal }) {
  return (
    <button
      className='flex place-items-center place-content-center hover:bg-gray-100 w-[5rem] h-[2rem] bg-white rounded-lg'
      onClick={() => {
        setIsFilterModal(prev => !prev)
      }}
    >
      <div className='whitespace-nowrap p-3'>
        <div className='text-[14px] font-medium'>전체 해제</div>
      </div>
    </button>
  )
}

export default FilterClearButton
