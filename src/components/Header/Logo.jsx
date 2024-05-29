const Logo = () => {
  const LOGO_URL = '/images/Airbnb_Logo.png'

  return (
    <>
      <div className='inline-flex items-center justify-center flex-'>
        <a href='#'>
          <img className='w-[102px] h-8' src={LOGO_URL} />
        </a>
      </div>
    </>
  )
}

export default Logo
