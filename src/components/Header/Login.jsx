import useModal from '../../hooks/useModal'
import AccountModal from './AccountModal'

const Login = () => {
  const { Modal, isOpen, open, close } = useModal()
  return (
    <>
      <div className='relative flex items-center justify-center h-full gap-4'>
        {/* MakeHost*/}
        <div className='flex items-center justify-center'>
          <a
            href='#'
            className="px-4 py-2 transition-all duration-100 ease-in cursor-pointer hover:bg-gray-200 rounded-2xl text-neutral-800 text-sm font-['SF Pro']"
          >
            당신의 공간을 에어비엔비하세요
          </a>

          {/* LanguageBtn*/}
          <div className='px-3 py-2 transition-all duration-100 ease-in cursor-pointer hover:bg-gray-200 rounded-2xl'>
            <a href='#'>
              <img src='/src/assets/globe.svg' alt='globe' />
            </a>
          </div>
        </div>

        <>
          {/* AccountBtn */}
          <button
            onClick={() => (isOpen ? close() : open())}
            className='flex items-center justify-center gap-2 px-4 py-1 transition-all duration-200 ease-in border border-gray-300 rounded-3xl hover:shadow-md'
          >
            <div className='flex items-center justify-center w-10'>
              <img className='w-2/3' src='/src/assets/menu.svg' alt='menu' />
              <img src='/src/assets/myAccountImg.svg' alt='account' />
            </div>
            <div className='relative'>
              <div className={`absolute right-0 top-10 opacity-100`}>
                <Modal>
                  <AccountModal />
                </Modal>
              </div>
              {/* 모달이 들어갈 곳 */}
            </div>
          </button>
        </>
      </div>
    </>
  )
}

export default Login
