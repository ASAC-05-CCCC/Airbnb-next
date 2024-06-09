import laurelwreath1 from '/public/images/laurelwreath1.png'
import laurelwreath2 from '/public/images/laurelwreath2.png'
import Image from 'next/image'

const GuestFavoriteHeader = ({ data }) => {
  return (
    <div className='flex justify-center text-center font-bold '>
      <Image
        src={laurelwreath1}
        className='size-48 h-32 w-auto object-contain'
        alt='laurelwreath1'
      />
      <h2 className='inset-x-0 top-0 text-7xl'>{data}</h2>
      <Image
        src={laurelwreath2}
        className='size-48 h-32 w-auto object-contain'
        alt='laurelwreath2'
      />
    </div>
  )
}

export default GuestFavoriteHeader
