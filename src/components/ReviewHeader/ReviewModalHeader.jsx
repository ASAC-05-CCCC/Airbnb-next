const star = '/images/star.svg'
import Image from 'next/image'

const ReviewModalHeader = ({ data }) => {
  return (
    <div className='mb-12 w-full'>
      <div className='flex gap-3 text-start text-3xl font-bold'>
        <Image
          src={star}
          alt={'star'}
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: 'auto' }}
        />
        <span>{data}</span>
      </div>
    </div>
  )
}

export default ReviewModalHeader
