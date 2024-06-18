function LoginForm() {
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        alert('준비중입니당~')
      }}
      className='w-full'
    >
      <div className='flex w-full flex-col gap-2 px-6 py-4'>
        <div className='w-full overflow-hidden rounded-lg border-[1px] border-gray-300'>
          <div className='border-b-[1px] border-gray-300'>
            <input
              className='w-full px-4 py-3 outline-black'
              type='text'
              name=''
              id=''
              placeholder='국가/지역'
            />
          </div>
          <div>
            <input
              className='w-full px-4 py-3 outline-black'
              type='number'
              name=''
              id=''
              placeholder='전화번호'
            />
          </div>
        </div>

        <div>
          <p>
            전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및 데이터 요금이
            부과됩니다. 개인정보 처리방침
          </p>
        </div>

        <div>
          <button className='flex w-full items-center justify-center rounded-lg bg-[#ff307d] py-3'>
            <span className='text-white'>계속</span>
          </button>
        </div>
      </div>
    </form>
  )
}

export default LoginForm
