const KoreaLocationPicker = () => {
  const location = ['서울', '부산', '속초', '강릉', '전주', '대구', '경주', '여수']
  return (
    <>
      <section className='px-6 py-5 overflow-auto'>
        <div className='flex flex-col gap-3'>
          <h2 className='px-2'>추천 여행지</h2>
          <ul className='grid grid-cols-4 gap-3'>
            {location.map((location, idx) => {
              return (
                <li key={idx} className=''>
                  <button className='py-2 text-sm transition-all border border-gray-200 rounded-full hover:border-gray-500 px-7 w-18'>
                    <span>{location}</span>
                  </button>
                </li>
              )
            })}

            {/*  */}
          </ul>
        </div>
      </section>
    </>
  )
}

export default KoreaLocationPicker
