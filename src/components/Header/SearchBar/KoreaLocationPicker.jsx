// @ts-nocheck
import { useSearchContext } from '@/context/SearchContext'

const location = ['서울', '부산', '속초', '강릉', '전주', '대구', '경주', '여수']

const KoreaLocationPicker = () => {
  const { updateLocation } = useSearchContext()

  return (
    <>
      <section className='overflow-auto px-6 py-5'>
        <div className='flex flex-col gap-3'>
          <h2 className='px-2'>추천 여행지</h2>
          <ul className='grid grid-cols-4 gap-3'>
            {location.map((each, idx) => {
              return (
                <li key={idx} className='' onClick={() => updateLocation(each)}>
                  <button className='w-18 rounded-full border border-gray-200 px-7 py-2 text-sm transition-all hover:border-gray-500'>
                    <span>{each}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}

export default KoreaLocationPicker
