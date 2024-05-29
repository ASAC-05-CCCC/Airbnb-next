import React from 'react'

const HostContent = ({ title, body }) => {
  return (
    <div className='flex flex-col gap-4' key={title}>
      <h3 className='text-left font-bold'>{title}</h3>
      <p className='font-normal whitespace-pre-line'>{body}</p>
    </div>
  )
}

export default HostContent
