import type { Metadata } from 'next'
import './globals.css'
import ReduxProvider from '@/components/common/reduxProvider'

export const metadata: Metadata = {
  title: 'Airbnb Clone',
  description: 'Airbnb Clone Coding',
  icons: {
    icon: 'https://a0.muscache.com/airbnb/static/logotype_favicon-21cc8e6c6a2cca43f061d2dcabdf6e58.ico',
  },
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
