import DefaultProfileImage from '../../assets/DefaultProfileImage.svg'

const ReviewHeader = ({ image, name, country }) => (
  <div className='flex items-center'>
    <img
      src={image}
      alt={name}
      className='w-10 h-10 bg-neutral-200 rounded-full mr-4'
      onError={e => {
        e.target.onError = null
        e.target.src = DefaultProfileImage
      }}
    />
    <div>
      <p className='font-bold'>{name}</p>
      <p className='text-sm font-normal text-neutral-800'>{country}</p>
    </div>
  </div>
)

export default ReviewHeader
