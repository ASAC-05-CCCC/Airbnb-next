import React from 'react'
import SafePayment from '../../assets/SafePayment.svg'

const HostFooter = () => {
  return (
    <div>
      {/* <hr className='block mt-2 mb-2 mx-auto border border-inset w-full'></hr> */}
      <div className='flex gap-3 pt-6 border-t border-gray-300 w-full'>
        <img src={SafePayment} className='w-5 h-5'></img>
        <div className=' text-xs font-normal'>
          안전한 결제를 위해 에어비앤비 웹 사이트나 앱 외부에서 송금하거나 대화를 나누지 마세요.
        </div>
      </div>
    </div>
  )
}

export default HostFooter
