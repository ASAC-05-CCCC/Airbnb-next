const Language = '/images/Language.svg'
const Service = '/images/Service.svg'
const MyWork = '/images/MyWork.svg'
const ISpendTooMuchTime = '/images/ISpendTooMuchTime.svg'
const WhereIWentToSchool = '/images/WhereIWentToSchool.svg'
const LivesIn = '/images/LivesIn.svg'
const FunFact = '/images/FunFact.svg'
const BornInThe = '/images/BornInThe.svg'
const FavoriteSongInHighSchool = '/images/FavoriteSongInHighSchool.svg'
const HappyToSpendTimeWithGuests = '/images/HappyToSpendTimeWithGuests.svg'
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
      <div className='h-6 w-6 '>
        <Image
          src={SvgIcon}
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: 'auto' }}
          alt='icon'
        />
      </div>
      <p>{text}</p>
    </div>
  )
}

export default HostIntro
