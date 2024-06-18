import Image from 'next/image'

function OAuthLoginButton({ service }) {
  return (
    <button
      type='submit'
      className='w-full rounded-xl border-[1px] border-black bg-white px-4 py-3 transition-all duration-75 hover:bg-gray-200'
    >
      <div className='flex w-full items-center'>
        <div className='flex-initial'>
          <Image src={''} alt={`${service.image || '네이버'}이미지`} width={30} height={30} />
        </div>
        <div className='flex-1'>{`${service.name || '네이버'}로 로그인 하기`}</div>
        <div className='flex-initial'></div>
      </div>
    </button>
  )
}

export default OAuthLoginButton
