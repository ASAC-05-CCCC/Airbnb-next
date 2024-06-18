import AccountModalWrapper from '@/components/Header/accountModalWrapper'
import useModal from '@/hooks/useModal'
import Image from 'next/image'

function AccountButton() {
  const { Modal, isOpen, open, close } = useModal()

  return (
    <button
      onClick={() => (isOpen ? close() : open())}
      className='flex items-center justify-center gap-2 rounded-3xl border border-gray-300 px-4 py-1 transition-all duration-200 ease-in hover:shadow-md'
    >
      <div className='flex w-10 items-center justify-center gap-1 px-1'>
        <Image src='/images/burger_menu.svg' width={30} height={30} alt='burger_men' />
        <Image src='/images/myAccountImg.svg' width={40} height={40} alt='account' />
      </div>
      <AccountModalWrapper Modal={Modal} />
    </button>
  )
}

export default AccountButton
