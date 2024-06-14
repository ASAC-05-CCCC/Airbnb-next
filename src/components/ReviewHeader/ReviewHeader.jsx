import star from '/public/images/star.svg'
import Image from 'next/image'

const ReviewHeader = ({ data, reviewCount }) => {
  return (
    <div className='my-10 w-full'>
      <div className='flex text-start text-3xl font-bold'>
        <Image src={star} alt={'star'} />
        <span>
          {data} · 후기 {reviewCount}개
        </span>
      </div>
    </div>
  )
}

export default ReviewHeader
