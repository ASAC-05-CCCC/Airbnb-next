import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <>
      <div className='justify flex basis-1/5 justify-start'>
        <Link href='/'>
          <Image width={102} height={32} src='/images/Airbnb_Logo.png' alt='logo' />
        </Link>
      </div>
    </>
  )
}

export default Logo
