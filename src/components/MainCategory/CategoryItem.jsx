import Image from 'next/image'

function CategoryItem({ categoryIcon, categoryName }) {
  return (
    <button className='group flex w-20 flex-col items-center justify-center p-2'>
      <div className='h-[30px] w-[30px]'>
        <Image src={categoryIcon} width={30} height={30} alt='category' />
      </div>
      <div className='w-full justify-center whitespace-nowrap text-xs'>{categoryName}</div>
      <div className='transition-color mt-2 h-0.5 w-10/12 bg-white duration-300 group-hover:bg-gray-300'></div>
    </button>
  )
}

export default CategoryItem
