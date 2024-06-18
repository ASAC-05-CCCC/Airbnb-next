import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { updateLocation } from '@/app/redux/searchSlice'

const countryData = [
  {
    id: 1,
    name: '유연한 검색',
    image_url: '/images/CountryBtn.png',
  },
  { id: 2, name: '유렵', image_url: '/images/CountryBtn.png' },
  { id: 3, name: '일본', image_url: '/images/CountryBtn.png' },
  { id: 4, name: '동남 아시아', image_url: '/images/CountryBtn.png' },
]

const CountryPicker = () => {
  const dispatch = useDispatch()

  return (
    <>
      <section className='overflow-auto px-6 py-5'>
        <div className='flex flex-col gap-3'>
          <h2 className='px-2'>지역으로 검색하기</h2>
          <ul className='flex justify-between'>
            {countryData.map(each => {
              return (
                <li
                  onClick={() => dispatch(updateLocation(each.name))}
                  key={each.id}
                  className='flex cursor-pointer flex-col gap-1 rounded-lg p-2 transition-all hover:bg-gray-200 active:border active:border-black'
                >
                  <button className='relative h-[85px] w-[85px]'>
                    {/*  Image is missing required "src" property 방지 위해 */}
                    {each.image_url && (
                      <Image fill className='w-16 rounded-lg' src={each.image_url} alt='' />
                    )}
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
