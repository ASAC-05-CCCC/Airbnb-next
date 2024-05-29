// import GuestItem from './GuestItem'
import GuestItem from './GuestItem'

const GuestList = () => {
  const list = [
    { name: 'adults', title: '성인', desc: '13세 이상' },
    { name: 'kids', title: '어린이', desc: '2~12세' },
    { name: 'babies', title: '유아', desc: '2세 미만' },
    { name: 'pets', title: '반려동물', desc: '보조동물을 동반하시나요?' },
  ]
  return (
    <ul className='flex flex-col w-full gap-5 p-4'>
      {list.map((each, idx) => {
        return <GuestItem key={idx} name={each.name} desc={each.desc} title={each.title} />
      })}
    </ul>
  )
}

export default GuestList
