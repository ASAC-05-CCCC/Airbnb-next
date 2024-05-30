import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <>
      <div className='inline-flex items-center justify-center flex-'>
        <Link href='/'>
          <Image width={102} height={32} src='/images/Airbnb_Logo.png' alt='logo' />
        </Link>
      </div>
    </>
  )
}

export default Logo
