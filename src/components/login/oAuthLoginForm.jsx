export default function OAuthLoginForm({ children }) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        alert('준비중입니다.')
      }}
      action=''
      className='w-full px-4'
    >
      <div className='flex w-full flex-col items-center justify-center gap-3'>{children}</div>
    </form>
  )
}
