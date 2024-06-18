import Language from '/public/images/Language.svg'
import Service from '/public/images/Service.svg'
import MyWork from '/public/images/MyWork.svg'
import ISpendTooMuchTime from '/public/images/ISpendTooMuchTime.svg'
import WhereIWentToSchool from '/public/images/WhereIWentToSchool.svg'
import LivesIn from '/public/images/LivesIn.svg'
import FunFact from '/public/images/FunFact.svg'
import BornInThe from '/public/images/BornInThe.svg'
import FavoriteSongInHighSchool from '/public/images/FavoriteSongInHighSchool.svg'
import HappyToSpendTimeWithGuests from '/public/images/HappyToSpendTimeWithGuests.svg'
import Image from 'next/image'

const svgMap = {
  Language,
  Service,
  MyWork,
  ISpendTooMuchTime,
  WhereIWentToSchool,
  LivesIn,
  FunFact,
  BornInThe,
  FavoriteSongInHighSchool,
  HappyToSpendTimeWithGuests,
}

const HostIntro = ({ category, text }) => {
  const SvgIcon = svgMap[category]
  return (
    <div className='flex gap-1'>
      <Image src={SvgIcon} className='h-6 w-6' alt='icon' />
      <p>{text}</p>
    </div>
  )
}

export default HostIntro
