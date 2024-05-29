import { useGuestContext } from '../../context/GuestCountContext'

const GuestItem = ({ name, desc, title }) => {
  const { increase, decrease, guest } = useGuestContext()

  return (
    <li
      className={`flex items-center justify-between   ${
        name === 'pets' ? 'border-none pb-0 ' : 'border-b-2 pb-4'
      }`}
    >
      <div className='flex flex-col'>
        <p className=''>{title}</p>
        <span className='text-gray-400'>{desc}</span>
      </div>

      <div className='flex-1'></div>

      <div className='flex gap-4'>
        <button
          name={name}
          onClick={e => decrease(e)}
          className='px-2 transition-all border border-gray-200 rounded-full hover:border-gray-600'
        >
          -
        </button>
        <span>{guest[name]}</span>
        <button
          name={name}
          onClick={e => increase(e)}
          className='px-2 transition-all border border-gray-200 rounded-full hover:border-gray-600'
        >
          +
        </button>
      </div>
    </li>
  )
}

export default GuestItem
