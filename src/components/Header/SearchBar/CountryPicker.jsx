const CountryPicker = () => {
  return (
    <>
      <section className='px-6 py-5 overflow-auto'>
        <div className='flex flex-col gap-3'>
          <h2 className='px-2'>지역으로 검색하기</h2>
          <ul className='flex justify-between'>
            <li className='flex flex-col gap-1 p-2 transition-all rounded-lg hover:bg-gray-200'>
              <button className=''>
                <img className='w-16 rounded-lg' src='/src/assets/map.png' alt='' />
              </button>
              <span className='text-xs'>유연한 검색</span>
            </li>

            {/*  */}
            <li className='flex flex-col gap-1 p-2 transition-all rounded-lg hover:bg-gray-200'>
              <button className=''>
                <img className='w-16 rounded-lg' src='/src/assets/map.png' alt='' />
              </button>
              <span className='text-xs'>유럽</span>
            </li>
            <li className='flex flex-col gap-1 p-2 transition-all rounded-lg hover:bg-gray-200'>
              <button className=''>
                <img className='w-16 rounded-lg' src='/src/assets/map.png' alt='' />
              </button>
              <span className='text-xs'>일본</span>
            </li>
            <li className='flex flex-col gap-1 p-2 transition-all rounded-lg hover:bg-gray-200'>
              <button className=''>
                <img className='w-16 rounded-lg' src='/src/assets/map.png' alt='' />
              </button>
              <span className='text-xs'>동남 아시아</span>
            </li>
            {/*  */}
          </ul>
        </div>
      </section>
    </>
  )
}

export default CountryPicker
