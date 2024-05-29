const NotificationContents = ({ title, body, footer }) => {
  return (
    <div className=' px-2 max-w-80 max-h-40 text-base'>
      <div className=' mr-8'>
        <div className=' w-80 h-40'>
          <h3 className='font-bold '>{title}</h3>
          {body.map(({ content }) => {
            return (
              <div className='text-left mb-2'>
                <span>{content}</span>
              </div>
            )
          })}
          <div typeof='button' className='font-bold underline'>
            {footer}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationContents
