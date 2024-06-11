const NavigationBar = () => {
  return (
    <div className='flex w-full items-center justify-center'>
      <nav>
        <ul className='flex gap-4 text-gray-400 '>
          <li className='change_dropdown flex gap-3'>
            <div className=''>
              <button>
                <span className='hover:text-black'>숙소</span>
              </button>
            </div>
            <div className=''>
              <button className='hover:text-black'>
                <span>체험</span>
              </button>
            </div>
          </li>
          <li className='online hover:text-black'>
            <a href='#'>온라인 체험</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavigationBar
