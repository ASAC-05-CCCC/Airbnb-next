import CountryPicker from '@/components/Header/SearchBar/CountryPicker'
import KoreaLocationPicker from '@/components/Header/SearchBar/KoreaLocationPicker'

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
