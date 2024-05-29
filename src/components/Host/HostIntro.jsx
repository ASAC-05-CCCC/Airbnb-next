import Language from '/public/images/Language.svg'
import Service from '/public/images/Service.svg'
import Image from 'next/image'

const svgMap = {
  Language,
  Service,
}

const HostIntro = ({ category, text }) => {
  const SvgIcon = svgMap[category]
  return (
    <div className='flex gap-1'>
      <Image src={SvgIcon} className='w-6 h-6' alt='icon' />
      <p>{text}</p>
    </div>
  )
}

export default HostIntro
