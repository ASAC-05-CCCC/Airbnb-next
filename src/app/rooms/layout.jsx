import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

export default function RoomsLayout({ children }) {
  return (
    <div className='container'>
      <div className='flex justify-center item-center w-full'>
        <Header />
      </div>
      {children}
    </div>
  )
}
