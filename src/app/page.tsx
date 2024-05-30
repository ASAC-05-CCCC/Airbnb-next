'use client'

import Header from '@/components/Header/Header'
import Category from '@/components/MainCategory/Category'
import PlaceList from '@/components/PlaceList/PlaceList'

//searchParam을 받아서 list 업데이트
export default function Home() {
  return (
    <>
      <div className='flex justify-center item-center w-full'>
        <Header />
      </div>
      <div className='flex  justify-center items-center overflow-auto w-full'>
        <Category />
      </div>
      <section className='w-full'>
        <PlaceList />
      </section>
    </>
  )
}
