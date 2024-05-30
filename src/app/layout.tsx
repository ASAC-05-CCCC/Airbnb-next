import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Category from '@/components/MainCategory/Category'

export const metadata: Metadata = {
  title: 'Airbnb Clone',
  description: 'Airbnb Clone Coding',
}

export default function RootLayout({ children }) {
  return (
    <html lang='ko'>
      <body>
        <div className='flex flex-col items-center px-20'>
          <div className='flex w-full justify-center item-center'>
            <Header />
          </div>
          <div className='flex w-full justify-center items-center overflow-auto'>
            <Category />
          </div>
          <section className='w-full'>{children}</section>
        </div>
        <Footer />
      </body>
    </html>
  )
}
