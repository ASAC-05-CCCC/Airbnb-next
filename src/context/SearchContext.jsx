import { createContext, useContext, useState } from 'react'

const SearchContext = createContext({
  toggle: () => {},
  openModal: '',
  setOpenModal: () => {},
})

function SearchContextProvider({ children }) {
  // const [openModal, setOpenModal] = useState('')

  // search form 을 입력할 모달이 열려 있는지 상태

  // 열려있는 모달이 어떤 모달인지 결정하는 상태
  const [openModal, setOpenModal] = useState({
    location: false,
    datepicker: false,
    guest: false,
  })
  /**
   * location
   * datepicker
   * guest
   */

  const toggle = type => {
    openModal[type] === true //
      ? setOpenModal({ [type]: false })
      : setOpenModal({ [type]: true })
  }

  //

  return (
    <SearchContext.Provider
      value={{
        toggle,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

const useSearchContext = () => useContext(SearchContext)

export { SearchContextProvider, useSearchContext }
