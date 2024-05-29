import SuperHost from '../../assets/SuperHost.svg'

const Label = ({ label, value }) => {
  const valueData = () => {
    if (label === '호스팅 경력' && value > 12) {
      return Math.floor(value / 12)
    } else if (value === 0) {
      return 1
    } else {
      return value
    }
  }
  return (
    <div className='flex flex-col items-start gap-1 w-[96px] '>
      <span className='text-xs font-bold'>{label}</span>
      <span className='text-xl flex items-baseline'>
        {valueData()}
        <span className='text-base ml-1'>
          {label === '후기' ? '개' : label === '평점' ? '★' : value > 12 ? '년' : '개월'}
        </span>
      </span>
    </div>
  )
}

const HostProfile = ({ name, superHost, review, rating, career }) => {
  return (
    <section className='flex bg-white rounded-3xl py-8 px-6 bg-wite justify-between shadow-md w-[341px]'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <button className='rounded-full overflow-hidden focus:outline-none'>
          <img src='asb' alt='User profile' className='h-24 w-24 rounded-full bg-gray-300' />
        </button>
        <h2 className='text-center text-3xl font-bold w-[150px]'>{name}</h2>
        {superHost && (
          <span className='flex items-center text-sm mt-2'>
            <img src={SuperHost} className='w-6 h-6' />
            <span className=' text-sm ml-1'>슈퍼호스트</span>
          </span>
        )}
      </div>
      <div className='flex flex-col'>
        <Label label='후기' value={review} />
        <hr className='block mt-2 mb-2 mx-auto border border-inset w-full'></hr>
        <Label label='평점' value={rating} />
        <hr className='block mt-2 mb-2 mx-auto border border-inset w-full'></hr>
        <Label label='호스팅 경력' value={career} />
      </div>
    </section>
  )
}

export default HostProfile
