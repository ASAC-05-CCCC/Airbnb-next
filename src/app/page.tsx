'use client'

import { Provider } from 'react-redux'

import Header from '@/components/Header/Header'
import Category from '@/components/MainCategory/Category'
import PlaceList from '@/components/PlaceList/PlaceList'
import filterStore from '@/app/redux/filterStore'

//searchParam을 받아서 list 업데이트
export default function Home({ searchParams }) {
  const categoryId = searchParams.category

  return (
    <>
      <Provider store={filterStore}>
        <div className='item-center flex w-full justify-center'>
          <Header />
        </div>
        <div className='flex  w-full items-center justify-center overflow-auto'>
          <Category />
        </div>
        <section className='w-full'>
          <PlaceList categoryId={categoryId} />
        </section>
      </Provider>
    </>
  )
}
