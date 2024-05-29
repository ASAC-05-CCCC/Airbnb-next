import laurelwreath1 from '/public/images/laurelwreath1.png'
import laurelwreath2 from '/public/images/laurelwreath2.png'
import Image from 'next/image'

const GuestFavoriteHeader = () => {
  return (
    <div className='text-center font-bold flex justify-center '>
      <Image
        src={laurelwreath1}
        className='size-48 object-contain w-auto h-32'
        alt='laurelwreath1'
      />
      <h2 className='text-7xl inset-x-0 top-0'>5.0</h2>
      <Image
        src={laurelwreath2}
        className='size-48 object-contain w-auto h-32'
        alt='laurelwreath2'
      />
    </div>
  )
}

export default GuestFavoriteHeader
