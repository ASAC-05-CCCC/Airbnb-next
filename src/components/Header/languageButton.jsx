import Image from 'next/image'

function LanguageButton() {
  return (
    <div className='cursor-pointer rounded-2xl px-3 py-2 transition-all duration-100 ease-in hover:bg-gray-200'>
      <a href='#'>
        <Image src='/images/globe.svg' width={30} height={30} alt='globe' />
      </a>
    </div>
  )
}

export default LanguageButton
