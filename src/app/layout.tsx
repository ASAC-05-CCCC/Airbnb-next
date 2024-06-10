import type { Metadata } from 'next'
import './globals.css'
import ReduxProvider from '@/components/common/\breduxProvider'

export const metadata: Metadata = {
  title: 'Airbnb Clone',
  description: 'Airbnb Clone Coding',
}

export default function RootLayout({ children }) {
  return (
    <html lang='ko'>
      <body>
        <div className='flex w-full flex-col items-center transition-all'>
          <ReduxProvider>{children}</ReduxProvider>
        </div>
      </body>
    </html>
  )
}
