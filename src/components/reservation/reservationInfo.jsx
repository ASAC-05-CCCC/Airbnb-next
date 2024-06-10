function ReservationInfo() {
  return (
    <div className='flex flex-col gap-3 text-sm'>
      <p className='text-gray-400'>예약 확정 전에는 요금이 청구되지 않습니다.</p>
      <div className='border-b-[1px] border-gray-200 pb-3'>
        <div className='flex items-center justify-between'>
          <span className='underline underline-offset-1'>{`₩${'1,320,000'} x 1박`}</span>
          <span>{`₩${'1,320,000'}`}</span>
        </div>
        <div className='flex items-center justify-between'>
          <span className='underline underline-offset-1'>에어비앤비 서비스 수수료</span>
          <span>{`₩${'204,989'}`}</span>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <span>총 합계</span>
        <span>{`₩${'1,524,989'}`}</span>
      </div>
    </div>
  )
}

export default ReservationInfo
