import { createSlice } from '@reduxjs/toolkit'

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    //
    checkInDate: null,
    checkOutDate: null,
    //
    guestCount: {
      adults: 1,
      kids: 0,
      babies: 0,
      pets: 0,
    },

    guestsTotal: 1,

    currentPrice: null,
  },
  reducers: {
    //
    setCheckInDate: (state, action) => {
      const formattingDate = `${action.payload.getFullYear()}-${action.payload.getMonth() + 1}-${action.payload.getDate()}`
      state.checkInDate = formattingDate
    },
    setCheckOutDate: (state, action) => {
      const formattingDate = `${action.payload.getFullYear()}-${action.payload.getMonth() + 1}-${action.payload.getDate()}`
      state.checkOutDate = formattingDate
    },

    clearDate: (state, _) => {
      state.checkInDate = null
      state.checkOutDate = null
    },

    //
    increaseGuest: (state, action) => {
      const { key } = action.payload

      if (key === 'kids' && state.guestCount[key] >= 15) {
        return
      }
      if (key === 'babies' && state.guestCount[key] >= 5) {
        return
      }
      if (key === 'pets' && state.guestCount[key] >= 5) {
        return
      }
      state.guestCount[key] += 1
      state.guestsTotal += 1
    },
    decreaseGuest: (state, action) => {
      const { key } = action.payload
      state.guestCount[key] === 0 ? null : (state.guestCount[key] -= 1)
      state.guestsTotal -= 1
    },

    //
    setCurrentPrice: (state, action) => {
      state.currentPrice = action.payload
    },
  },
})

export const {
  setCheckInDate,
  setCheckOutDate,
  clearDate,
  increaseGuest,
  decreaseGuest,
  setCurrentPrice,
} = reservationSlice.actions
export default reservationSlice.reducer
