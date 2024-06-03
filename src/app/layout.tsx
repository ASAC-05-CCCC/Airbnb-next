import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Airbnb Clone',
  description: 'Airbnb Clone Coding',
}

export default function RootLayout({ children }) {
  return (
    <html lang='ko'>
      <body>
        <div className='flex w-full flex-col items-center transition-all'>{children}</div>
      </body>
    </html>
  )
}
