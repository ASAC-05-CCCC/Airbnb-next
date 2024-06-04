import CountSelectButton from '@/components/MainCategory/FilterComponent/Bedroom/CountSelectButton'

function BedroomEachComponent({ type, onClick, present }) {
  return (
    <div>
      <div>{type}</div>
      <div className='my-5 flex flex-row'>
        <CountSelectButton count={'상관없음'} width={'110px'} onClick={onClick} present={present} />
        {['1', '2', '3', '4', '5', '6', '7', '8+'].map((each, idx) => (
          <CountSelectButton
            key={idx}
            count={each}
            width={'70px'}
            onClick={onClick}
            present={present}
          />
        ))}
      </div>
    </div>
  )
}

export default BedroomEachComponent
