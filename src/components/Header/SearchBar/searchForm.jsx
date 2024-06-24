'use client'

function SearchForm({ children }) {
  return (
    <form onSubmit={e => e.preventDefault()} className='w-full max-w-[850px]' action='/'>
      <div className='pointer-events-auto relative flex w-full flex-col items-center justify-center gap-10'>
        {children}
      </div>
    </form>
  )
}

export default SearchForm
