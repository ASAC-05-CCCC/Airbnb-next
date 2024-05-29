import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Airbnb Clone',
  description: 'Airbnb Clone Coding',
}

export default function RootLayout({ children }) {
  return (
    <html lang='ko'>
      <body>
        <div className='flex flex-col items-center'>
          <Header />
          <section className='w-full'>{children}</section>
          <Footer />
        </div>
      </body>
    </html>
  )
}
