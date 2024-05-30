import Image from 'next/image'
import clsx from 'clsx'

export default function StructureTypeEachComponent({
  structureIcon,
  structureName,
  isSelect,
  setIsSelect,
}) {
  const onClickEventHandler = () => {
    setIsSelect(!isSelect)
  }

  return (
    <button
      onClick={onClickEventHandler}
      className={clsx(
        'h-[80%] rounded-xl py-[20px] px-[10px] duration-200 active:scale-90 active:border-black',
        isSelect ? 'bg-gray-100 border-2 border-black' : 'border-[1px] border-gray-300',
      )}
    >
      <div className='w-[38px] h-[38px]'>
        <Image src={structureIcon} width={38} height={38} alt='preference' />
      </div>

      <div className='text-left text-[15px] mt-2 ml-1 whitespace-nowrap'>
        {structureName === '주택' ? '단독 또는 다세대' : <div className='h-[1rem]'></div>}
      </div>
      <div className='text-left text-[15px] ml-1 whitespace-nowrap'>{structureName}</div>
    </button>
  )
}
