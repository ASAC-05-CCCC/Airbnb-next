function PriceInputBox({ type }) {
  return (
    <>
      <div className='flex flex-col border-[1px] border-gray-400 rounded-lg w-[270px]'>
        <div className='text-xs text-gray-600 ml-3 mt-2'>{type}</div>
        <div className='flex flex-row ml-3 mb-2'>
          <div className='pr-2'>
            <div className='text-sm'>₩</div>
          </div>
          <input type='number' className='focus:outline-none mr-3 text-sm text-gray-700'></input>
        </div>
      </div>
    </>
  )
}

export default PriceInputBox
