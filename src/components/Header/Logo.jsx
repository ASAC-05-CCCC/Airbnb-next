import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <>
      <div className='justify flex basis-1/4 justify-start'>
        <Link href='/'>
          <div className='w-28'>
            <Image
              src='/images/Airbnb_Logo.png'
              alt='logo'
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </Link>
      </div>
    </>
  )
}

export default Logo
