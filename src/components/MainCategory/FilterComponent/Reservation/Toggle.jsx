import clsx from 'clsx'

export default function Toggle({ setIsCheck, isCheck }) {
  return (
    <label className='inline-flex cursor-pointer items-center'>
      <input type='checkbox' className='sr-only' />
      <div
        onClick={setIsCheck}
        className={clsx(
          'relative h-6 w-11 rounded-full after:absolute  after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all hover:bg-black',
          isCheck ? 'bg-black after:start-[22px]' : 'bg-gray-200  after:start-[2px]',
        )}
      ></div>
      <div className=''></div>
    </label>
  )
}
