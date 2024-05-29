import SearchModal from '../common/SearchModal'
import CountryPicker from './CountryPicker'
import KoreaLocationPicker from './KoreaLocationPicker'

const LocationInput = () => {
  return (
    <>
      {/* Country로 검색하기*/}
      <CountryPicker />
      {/* 추천 여행지*/}
      <KoreaLocationPicker />
      <>{/* 세계 지역 선택하기*/}</>
    </>
  )
}

export default LocationInput
