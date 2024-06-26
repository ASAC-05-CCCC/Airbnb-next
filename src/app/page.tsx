import Footer from '@/components/Footer/Footer'

import Header from '@/components/Header/Header'
import Category from '@/components/MainCategory/Category'
import PlaceList from '@/components/PlaceList/PlaceList'
import NewPlaceList from '@/components/PlaceList/newPlaceList'

//searchParam을 받아서 list 업데이트
export default function Home() {
  return (
    <div className='flex w-full flex-col items-center transition-all'>
      <div className='sticky top-0 z-10 flex w-full flex-col bg-white'>
        <div className='item-center flex w-full justify-center'>
          <Header />
        </div>
        <div className='flex w-full items-center justify-center  overflow-auto transition-all sm:px-8 lg:px-10 xl:px-10'>
          <Category />
        </div>
      </div>
      <section className='w-full sm:px-8 lg:px-10  xl:px-20'>
        {/* <PlaceList /> */}
        <NewPlaceList />
      </section>
      <Footer />
    </div>
  )
}
