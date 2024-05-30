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
        <div className='flex flex-col items-center transition-all lg:px-10 xl:px-20 sm:px-8 w-full'>
          <div className='flex justify-center item-center w-full'>
            <Header />
          </div>
          <div className='flex  justify-center items-center overflow-auto w-full'>
            <Category />
          </div>
          <section className='w-full'>{children}</section>
        </div>
        <Footer />
      </body>
    </html>
  )
}
