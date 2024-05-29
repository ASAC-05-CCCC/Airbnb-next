function FilterDoneButton({ setIsFilterModal, countPlace }) {
  return (
    <button
      className='flex place-items-center place-content-center hover:bg-black w-[8rem] h-12 bg-slate-800 border rounded-lg m-2'
      onClick={() => {
        setIsFilterModal(prev => !prev)
      }}
    >
      <div className='whitespace-nowrap p-1'>
        <div className='text-sm text-white'>숙소 {countPlace}개 보기</div>
      </div>
    </button>
  )
}

export default FilterDoneButton
