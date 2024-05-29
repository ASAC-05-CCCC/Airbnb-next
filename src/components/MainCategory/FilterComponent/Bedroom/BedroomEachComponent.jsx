import CountSelectButton from './CountSelectButton'

function BedroomEachComponent({ type, setCount, count }) {
   return (
    <div>
      <div>{type}</div>
      <div className='flex flex-row my-5'>
        <CountSelectButton number={'상관없음'} width={'110px'} setCount={setCount} count={count} />
        {['1', '2', '3', '4', '5', '6', '7', '8+'].map((each, idx) => (
          <CountSelectButton
            key={idx}
            number={each}
            width={'70px'}
            setCount={setCount}
            count={count}
          />
        ))}
      </div>
    </div>
  )
}

export default BedroomEachComponent
