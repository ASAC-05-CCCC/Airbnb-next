import clsx from 'clsx'

function PlaceSelectButton({ name, setType, type, setDescription }) {
  const onEventHandler = () => {
    setType(name)
    setDescription(prev => {
      if (name === '모든 유형') {
        return '방, 집 전체 등 원하는 숙소 유형을 검색해 보세요.'
      } else if (name === '방') {
        return '단독으로 사용하는 방이 있고, 공용 공간도 있는 형태입니다.'
      } else {
        return '집 전체를 단독으로 사용합니다.'
      }
    })
  }

  return (
    <>
      <button
        onClick={onEventHandler}
        className={clsx(
          'w-full h-[100%] border-[0.5px] border-gray-300 border-l-white first:rounded-l-xl first:border-l-gray-300 last:rounded-r-xl hover:border-black hover:border-[1.2px] active:bg-gray-100',
          type === name ? 'bg-slate-800 text-white' : 'bg-white',
        )}
      >
        <div className='text-sm font-medium'>{name}</div>
      </button>
    </>
  )
}

export default PlaceSelectButton
