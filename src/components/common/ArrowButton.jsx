import Image from 'next/image'

const leftArrow = '/images/leftArrow.svg'
const rightArrow = '/images/rightArrow.svg'

function ArrowButton({
  onClickArrowButton,
  direction, //'left' or 'right'
}) {
  return (
    <button
      className='flex h-7 w-7 place-content-center place-items-center rounded-full border border-gray-300 bg-opacity-20 hover:h-8 hover:w-8 hover:shadow-xl'
      onClick={onClickArrowButton}
    >
      <div>
        <Image
          src={direction === 'left' ? leftArrow : rightArrow}
          width={28}
          height={28}
          alt='arrow'
        />
      </div>
    </button>
  )
}

export default ArrowButton
