import clsx from 'clsx'

export default function SearchBarButton({ handleSearchSubmit, isOpenGuestModal }) {
  return (
    <button
      onClick={() => isOpenGuestModal && handleSearchSubmit()}
      className={clsx(
        'flex items-center justify-around rounded-full bg-red-500 p-3 px-3 text-white',
        isOpenGuestModal ? 'basis-32 transition' : ' basis-1/5 transition ',
      )}
    >
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='h-6 w-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </div>
      {isOpenGuestModal && <span>검색</span>}
    </button>
  )
}
