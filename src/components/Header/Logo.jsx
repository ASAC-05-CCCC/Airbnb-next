import Image from 'next/image'

const Logo = () => {
  return (
    <>
      <div className='inline-flex items-center justify-center flex-'>
        <a href='#'>
          <Image width={102} height={32} src='/images/Airbnb_Logo.png' alt='logo' />
        </a>
      </div>
    </>
  )
}

export default Logo
