import Image from 'next/image'
import clsx from 'clsx'

export default function StructureTypeEachComponent({
  structureIcon,
  structureName,
  isSelect,
  setIsSelect,
}) {
  return (
    <button
      onClick={setIsSelect}
      className={clsx(
        'h-[80%] rounded-xl px-[10px] py-[20px] duration-200 active:scale-90 active:border-black',
        isSelect ? 'border-2 border-black bg-gray-100' : 'border-[1px] border-gray-300',
      )}
    >
      <div className='h-[38px] w-[38px]'>
        <Image src={structureIcon} width={38} height={38} alt='preference' />
      </div>

      <div className='ml-1 mt-2 whitespace-nowrap text-left text-[15px]'>
        {structureName === '주택' ? '단독 또는 다세대' : <div className='h-[1rem]'></div>}
      </div>
      <div className='ml-1 whitespace-nowrap text-left text-[15px]'>{structureName}</div>
    </button>
  )
}
