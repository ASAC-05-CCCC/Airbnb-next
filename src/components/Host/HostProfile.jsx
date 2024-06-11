import SuperHost from '/public/images/SuperHost.svg'
import DefaultProfileImage from '/public/images/DefaultProfileImage.svg'
import Image from 'next/image'

const Label = ({ label, value }) => {
  const valueData = () => {
    if (label === '호스팅 경력') {
      return Math.floor(2024 - value)
    } else if (value === 0) {
      return 1
    } else {
      return value
    }
  }
  return (
    <div className='flex w-[96px] flex-col items-start gap-1 '>
      <span className='text-xs font-bold'>{label}</span>
      <span className='flex items-baseline text-xl'>
        {valueData()}
        <span className='ml-1 text-base'>
          {label === '후기' ? '개' : label === '평점' ? '★' : '년'}
        </span>
      </span>
    </div>
  )
}

const HostProfile = ({ name, superHost, review, rating, career }) => {
  return (
    <section className='bg-wite flex w-[341px] justify-between rounded-3xl bg-white px-6 py-8 shadow-md'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <button className='overflow-hidden rounded-full focus:outline-none'>
          <Image
            src={DefaultProfileImage}
            alt='User profile'
            className='h-24 w-24 rounded-full bg-gray-300'
          />
        </button>
        <h2 className='w-[150px] text-center text-lg font-bold'>{name}</h2>
        {superHost ? (
          <span className='mt-2 flex items-center text-sm'>
            <Image src={SuperHost} width={24} height={24} alt='superHost' />
            <span className=' ml-1 '>슈퍼호스트</span>
          </span>
        ) : (
          <span className='mt-2 flex items-center text-lg font-bold'>
            <span className=' ml-1 '>호스트</span>
          </span>
        )}
      </div>
      <div className='flex flex-col'>
        <Label label='후기' value={review} />
        <hr className='border-inset mx-auto mb-2 mt-2 block w-full border'></hr>
        <Label label='평점' value={rating} />
        <hr className='border-inset mx-auto mb-2 mt-2 block w-full border'></hr>
        <Label label='호스팅 경력' value={career} />
      </div>
    </section>
  )
}

export default HostProfile
