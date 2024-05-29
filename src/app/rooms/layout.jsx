import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

export default function RoomsLayout({ children }) {
  return (
    <html lang='ko'>
      <body>
        <div className='container'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
