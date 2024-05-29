import Language from '../../assets/Language.svg'
import Service from '../../assets/Service.svg'

const svgMap = {
  Language,
  Service,
}

const HostIntro = ({ category, text }) => {
  const SvgIcon = svgMap[category]
  return (
    <div className='flex gap-1'>
      {console.log(category)}
      <img src={SvgIcon} className='w-6 h-6' alt={category} />
      <p>{text}</p>
    </div>
  )
}

export default HostIntro
