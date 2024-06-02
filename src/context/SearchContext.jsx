import { createContext, useContext, useState } from 'react'

const SearchContext = createContext(() => {})

// 검색할 데이터를 선택한 내용을 관리하는 상태
/**
 * ? state를 한번에 관리하는 것이 좋을까? 아니면 나눠서 관리하는 것이 좋을까?
 * ? 1. 한번에 관리
 * * - 전체 상태 한눈에 파악 가능, 리셋, 검색할 때 좋음
 * ! 불필요한 렌더링 발생, 일부 객체 변경하 때 코드가 길어짐
 *
 * ? 2. 나눠서 관리
 * * - 특정 상태만 업데이트할 때 불필요한 렌더링 없음
 * ! 상태를 다루는 코드 반복 & submit 요청 시 합치는 로직이 필요
 *
 * * 나는 2번을 선택해보자!
 */

function SearchContextProvider({ children }) {
  // 모달 열림/닫힘 상태
  const [openModal, setOpenModal] = useState({
    location: false,
    datepicker: false,
    guest: false,
  })

  const [location, setLocation] = useState('')
  const [datepicker, setDatepicker] = useState({
    startDate: null,
    endDate: null,
  })
  const [guest, setGuest] = useState({
    adults: 0,
    kids: 0,
    babies: 0,
    pets: 0,
  })

  //모달 오픈 정보
  const toggle = type => {
    openModal[type] === true //
      ? setOpenModal({ [type]: false })
      : setOpenModal({ [type]: true })
  }

  //선택한 location data를 저장
  const updateLocation = name => {
    setLocation(name)
  }

  //선택한 datepicker data를 저장
  const updateDatepicker = (start, end) => {
    console.log(start, end)
    console.log({ startDate: start, endDate: end })
    // setDatepicker({ startDate: start, endDate: end })
  }

  // Click하는 대상의 count를 증가 시킴
  const increaseGuest = e => {
    const target = e.target.name

    target !== 'adults' &&
      guest.adults === 0 &&
      setGuest(prev => ({ ...prev, adults: (prev['adults'] += 1) }))

    if (target === 'kids' && guest[target] >= 15) {
      return null
    }
    if (target === 'babies' && guest[target] >= 5) {
      return null
    }
    if (target === 'pets' && guest[target] >= 5) {
      return null
    }

    setGuest(prev => ({ ...prev, [target]: prev[target] + 1 }))
  }

  const decreaseGuest = e => {
    const target = e.target.name

    if (guest[target] < 1) {
      return
    }
    setGuest(prev => ({ ...prev, [target]: prev[target] - 1 }))
  }

  // 검색 버튼을 눌렀을 때 API 요청하는 함수
  const handleSearchSubmit = async () => {
    const searchData = { location, datepicker, guest }

    console.log(searchData)
  }

  return (
    <SearchContext.Provider
      value={{
        toggle,
        openModal,
        setOpenModal,
        location,
        datepicker,
        guest,
        updateLocation,
        updateDatepicker,
        increaseGuest,
        decreaseGuest,
        handleSearchSubmit,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

const useSearchContext = () => useContext(SearchContext)

export { SearchContextProvider, useSearchContext }
