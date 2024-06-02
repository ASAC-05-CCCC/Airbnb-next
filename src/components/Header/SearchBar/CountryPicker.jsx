import { useSearchContext } from '@/context/SearchContext'
import Image from 'next/image'

const countryData = [
  { id: 1, name: '유연한 검색', image_url: '' },
  { id: 2, name: '유렵', image_url: '' },
  { id: 3, name: '일본', image_url: '' },
  { id: 4, name: '동남 아시아', image_url: '' },
]

const CountryPicker = () => {
  const { updateLocation } = useSearchContext()

  return (
    <>
      <section className='px-6 py-5 overflow-auto'>
        <div className='flex flex-col gap-3'>
          <h2 className='px-2'>지역으로 검색하기</h2>
          <ul className='flex justify-between'>
            {countryData.map(each => {
              return (
                <li
                  onClick={() => updateLocation(each.name)}
                  key={each.id}
                  className='flex flex-col gap-1 p-2 transition-all rounded-lg cursor-pointer active:border active:border-black hover:bg-gray-200'
                >
                  <button className='w-full'>
                    <Image className='w-16 rounded-lg' src={each.image_url} alt='' />
                  </button>
                  <span className='text-xs'>{each.name}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}

export default CountryPicker
