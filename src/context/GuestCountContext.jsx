/**
 * Search 기능에서 guest의 정보를 전역적으로 관리하기 위한 context
 *
 *
 */

import { createContext, useContext, useState } from 'react'

const GuestCountContext = createContext()

const GuestContextProvider = ({ children }) => {
  const [guest, setGuest] = useState({
    adults: 0,
    kids: 0,
    babies: 0,
    pets: 0,
  })

  // Click하는 대상의 count를 증가 시킴
  const increase = e => {
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
  const decrease = e => {
    const target = e.target.name

    if (guest[target] < 1) {
      return
    }
    setGuest(prev => ({ ...prev, [target]: prev[target] - 1 }))
  }

  return (
    //
    <GuestCountContext.Provider value={{ increase, decrease, guest }}>
      {/*  */}
      {children}
    </GuestCountContext.Provider>
  )
}

const useGuestContext = () => useContext(GuestCountContext)

export { GuestContextProvider, useGuestContext }
