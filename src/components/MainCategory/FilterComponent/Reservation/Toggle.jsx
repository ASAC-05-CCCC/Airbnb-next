export default function Toggle() {
  return (
    <label className='inline-flex cursor-pointer items-center'>
      <input type='checkbox' className='peer sr-only' />
      <div
        className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] 
       after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-black peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full dark:border-gray-600"
      ></div>
      <div className=''></div>
    </label>
  )
}
