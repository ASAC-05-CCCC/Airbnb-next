function LoginWrapper({ children }) {
  return (
    <>
      <section className='h-5/6 w-4/6 max-w-[550px] shadow-md'>
        <div className='relative flex h-full w-full flex-col items-center overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md'>
          {children}
        </div>
      </section>
    </>
  )
}

export default LoginWrapper
