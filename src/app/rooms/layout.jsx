import FooterRooms from '@/components/Footer/FooterRooms'
import Header from '@/components/Header/Header'

export default function RoomsLayout({ children }) {
  return (
    <div className='flex w-full flex-col'>
      <div className='item-center flex w-full justify-center'>
        <Header />
      </div>
      <div className='flex w-full flex-col items-center gap-10 transition-all sm:px-8 lg:px-10 xl:px-20'>
        {children}
      </div>
      <FooterRooms />
    </div>
  )
}
