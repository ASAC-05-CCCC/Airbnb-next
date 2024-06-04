import clsx from 'clsx'

function CountSelectButton({ count, width, onClick, present }) {
  return (
    <div style={{ width: width, height: '50px' }}>
      <button
        onClick={() => onClick(count)}
        className={clsx(
          'mr-2 rounded-3xl border-[1px] border-gray-300 px-[24px] py-[10px] duration-200 hover:border-black active:scale-90',
          present === count ? 'bg-slate-800 text-white' : 'bg-white text-gray-800',
        )}
      >
        <div className='white whitespace-nowrap text-xs'>{count}</div>
      </button>
    </div>
  )
}

export default CountSelectButton
