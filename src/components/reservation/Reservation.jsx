import React from 'react'

const Reservation = () => {
  return (
    <section className='w-[300px] '>
      <div className='w-full py-7 px-6 border-[1px] shadow-xl rounded-xl shadow-gray-200'>
        <div className='flex flex-col gap-4 '>
          {/* 가격 */}
          <h3 className='text-2xl'>
            <span>{`₩${'1,320,000'}`}</span>
            <span className='text-base text-gray-500'>/박</span>
          </h3>
          {/* 예약에 들어가는 정보 입력 Form */}
          <form onSubmit={e => e.preventDefault()}>
            <div className='flex flex-col w-full gap-4 '>
              <div className='w-full border-[1px] border-black rounded-xl'>
                <div className='flex items-center justify-around w-full datePickBox border-b-[1px] border-black'>
                  <div className='flex flex-col w-full border-r-[1px] border-black p-3'>
                    <span className='text-sm'>체크인</span>
                    <input
                      className='w-full border-none outline-none'
                      type='text'
                      name=''
                      id=''
                      placeholder={'2024. 8. 22.'}
                    />
                  </div>
                  <div className='flex flex-col w-full p-3'>
                    <span className='text-sm'>체크아웃</span>
                    <input
                      className='w-full border-none outline-none'
                      type='text'
                      name=''
                      id=''
                      placeholder={'2024. 8. 22.'}
                    />
                  </div>
                </div>

                <div className='p-5'>
                  <div className='flex flex-col'>
                    <span className='text-sm'>인원</span>
                    <div>게스트 {`1`}명</div>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-center'>
                <button className='w-full py-2 text-white bg-red-500 rounded-xl'>
                  예약 가능 여부 보기
                </button>
              </div>
            </div>
          </form>
          {/* 예약 가격에 대한 정보 */}
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
        </div>
      </div>
      <div>
        <div className='flex items-end justify-center py-5'>
          <a href='/'>
            <span className='underline underline-offset-1'>숙소 신고하기</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Reservation
