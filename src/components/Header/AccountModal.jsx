const AccountModal = () => {
  return (
    <>
      {/* list */}
      <ul className='right-0 flex flex-col gap-2 text-sm text-gray-500 w-60'>
        <div className='flex flex-col border-b-2'>
          <li className='w-full transition-all duration-100 cursor-pointer hover:bg-gray-100'>
            <button className='w-full h-full px-3 py-2 text-left '>회원가입</button>
          </li>
          <li className='transition-all duration-100 cursor-pointer hover:bg-gray-100 '>
            <button className='w-full h-full px-3 py-2 text-left'>로그인</button>
          </li>
        </div>
        <div className='flex flex-col'>
          <li className='flex transition-all duration-100 cursor-pointer hover:bg-gray-100'>
            <a href='/' className='w-full h-full px-3 py-2 text-left'>
              당신의 공간을 에어비엔비하세요
            </a>
          </li>
          <li className='flex transition-all duration-100 cursor-pointer hover:bg-gray-100'>
            <a href='/' className='w-full h-full px-3 py-2 text-left'>
              도움말 센터
            </a>
          </li>
        </div>
      </ul>
    </>
  )
}

export default AccountModal
