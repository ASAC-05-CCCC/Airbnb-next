function AccountModalItem({ text }) {
  return (
    <li className='cursor-pointer transition-all duration-100 hover:bg-gray-100 '>
      <button className='h-full w-full px-3 py-2 text-left'>{text}</button>
    </li>
  )
}

export default AccountModalItem
