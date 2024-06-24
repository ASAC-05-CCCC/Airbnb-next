const star = '/images/star.svg'
import Image from 'next/image'

const ReviewHeader = ({ data, reviewCount }) => {
  return (
    <div className='my-10 w-full'>
      <div className='flex items-center text-start text-3xl font-bold'>
        <div className='h-6 w-6 '>
          <Image
            src={star}
            alt={'star'}
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <span>
          {data} · 후기 {reviewCount}개
        </span>
      </div>
    </div>
  )
}

export default ReviewHeader
