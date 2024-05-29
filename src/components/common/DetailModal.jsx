function DetailModal({ children }) {
  return (
    <div className='fixed top-0 left-0 flex justify-center items-center z-50 w-full h-full bg-black bg-opacity-20'>
      {children}
    </div>
  )
}

export default DetailModal
