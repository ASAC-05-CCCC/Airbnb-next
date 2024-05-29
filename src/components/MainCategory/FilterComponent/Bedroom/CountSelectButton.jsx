import clsx from 'clsx'

function CountSelectButton({ number, width, setCount, count }) {
  const onEventHandler = () => {
    setCount(number)
  }

  return (
    <div style={{ width: width, height: '50px' }}>
      <button
        onClick={onEventHandler}
        className={clsx(
          'border-[1px] border-gray-300 rounded-3xl mr-2 py-[10px] px-[24px] hover:border-black transition:active duration-200 active:py-[9px] active:px-[23px] ',
          number === count ? 'bg-slate-800 text-white' : 'bg-white text-gray-800',
        )}
      >
        <div className='text-xs'>{number}</div>
      </button>
    </div>
  )
}

export default CountSelectButton
