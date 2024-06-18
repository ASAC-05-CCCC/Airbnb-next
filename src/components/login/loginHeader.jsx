function LoginHeader({ closeLoginModal }) {
  return (
    <div className='w-full border-b-[1px] border-gray-200'>
      <header className='flex items-center p-4'>
        <div className='basis-1/6 text-center'>
          <button
            onClick={() => closeLoginModal()}
            className='rounded-full px-2 py-1 hover:bg-gray-100'
          >
            <span>X</span>
          </button>
        </div>
        <div className='flex-1 text-center'>
          <span className='font-bold'>로그인 또는 회원가입</span>
        </div>
        <div className='basis-1/6'></div>
      </header>
    </div>
  )
}

export default LoginHeader
