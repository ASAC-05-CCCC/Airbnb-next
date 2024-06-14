function SearchBarGuest({ guestCount }) {
  return (
    <div className='flex w-full items-center'>
      <div className=''>
        <span className='block text-xs font-semibold '>여행자</span>
        <button className='text-gray-500'>
          {`게스트
        ${Object.values(guestCount) //
          .reduce((prev, current) => prev + current)}` || //
            '게스트 추가'}
        </button>
      </div>
    </div>
  )
}

export default SearchBarGuest
