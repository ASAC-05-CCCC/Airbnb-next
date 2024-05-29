import leftArrow from '../../assets/leftArrow.svg'
import rightArrow from '../../assets/rightArrow.svg'

function ArrowButton({
  onClickArrowButton,
  direction, //'left' or 'right'
}) {
  return (
    <button
      className='flex place-items-center place-content-center w-7 h-7 border-gray-300 border rounded-full bg-opacity-20 hover:w-8 hover:h-8 hover:shadow-xl'
      onClick={onClickArrowButton}
    >
      <div>
        <img src={direction === 'left' ? leftArrow : rightArrow} />
      </div>
    </button>
  )
}

export default ArrowButton
