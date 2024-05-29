import Image from 'next/image'
import campingIcon from '/public/images/campingIcon.svg'

function CategoryItem({ categoryIcon, categoryName }) {
  return (
    <>
      <button className='group flex flex-col items-center justify-center p-2 w-20'>
        <div className='w-[30px] h-[30px]'>
          {/* <Image src={'/public/images/campingIcon.svg'} width={30} height={30} />
          <Image src={campingIcon} /> */}
          <Image src={categoryIcon} width={30} height={30} alt='category' />
        </div>
        <div className='whitespace-nowrap text-xs w-full justify-center'>{categoryName}</div>
        <div className='w-10/12 h-0.5 bg-white mt-2 transition-color duration-300 group-hover:bg-gray-300'></div>
      </button>
    </>
  )
}

export default CategoryItem
