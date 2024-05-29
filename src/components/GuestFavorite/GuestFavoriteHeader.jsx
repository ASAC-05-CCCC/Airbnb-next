import laurelwreath1 from '../../image/laurelwreath1.png'
import laurelwreath2 from '../../image/laurelwreath2.png'

const GuestFavoriteHeader = () => {
  return (
    <div className='text-center font-bold flex justify-center '>
      <img className='size-48 object-contain w-auto h-32' src={laurelwreath1}></img>
      <h2 className='text-7xl inset-x-0 top-0'>5.0</h2>
      <img className='size-48 object-contain w-auto h-32' src={laurelwreath2}></img>
    </div>
  )
}

export default GuestFavoriteHeader
