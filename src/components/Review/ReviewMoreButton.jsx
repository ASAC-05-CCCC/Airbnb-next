const ReviewMoreButton = ({ openModal, data }) => {
  return (
    <button
      onClick={openModal}
      className='border border-black rounded-lg font-semibold text-center px-4 py-2'
    >
      후기 {data}개 모두 보기
    </button>
  )
}

export default ReviewMoreButton
