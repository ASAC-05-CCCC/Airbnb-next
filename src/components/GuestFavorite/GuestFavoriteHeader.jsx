const laurelwreath1 = '/images/laurelwreath1.png'
const laurelwreath2 = '/images/laurelwreath2.png'
import Image from 'next/image'

const GuestFavoriteHeader = ({ data }) => {
  return (
    <div className='flex justify-center text-center font-bold '>
      <div className='size-48'>
        <Image
          src={laurelwreath1}
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: 'auto' }}
          alt='laurelwreath1'
        />
      </div>

      <h2 className='inset-x-0 top-0 text-7xl'>{data}</h2>
      <div className='size-48'>
        <Image
          src={laurelwreath2}
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: 'auto' }}
          alt='laurelwreath2'
        />
      </div>
    </div>
  )
}

export default GuestFavoriteHeader
