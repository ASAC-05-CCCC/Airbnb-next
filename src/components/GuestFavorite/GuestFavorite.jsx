import GuestFavoriteHeader from '@/components/GuestFavorite/GuestFavoriteHeader'
import GuestFavoriteContent from '@/components/GuestFavorite/GuestFavoriteContent'

const GuestFavorite = ({ data }) => {
  return (
    <div className='flex-row'>
      <GuestFavoriteHeader data={data} />
      <GuestFavoriteContent />
    </div>
  )
}

export default GuestFavorite
