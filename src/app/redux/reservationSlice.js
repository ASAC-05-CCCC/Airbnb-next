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
  },
  reducers: {
    //
    setCheckInDate: (state, action) => {
      const formattingDate = `${action.payload.getFullYear()}-${action.payload.getMonth()}-${action.payload.getDay()}`
      state.checkInDate = formattingDate
    },
    setCheckOutDate: (state, action) => {
      const formattingDate = `${action.payload.getFullYear()}-${action.payload.getMonth()}-${action.payload.getDay()}`
      state.checkOutDate = formattingDate
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
    },
    decreaseGuest: (state, action) => {
      const { key } = action.payload
      state.guestCount[key] === 0 ? null : (state.guestCount[key] -= 1)
    },
  },
})

export const { setCheckInDate, setCheckOutDate, increaseGuest, decreaseGuest } =
  reservationSlice.actions
export default reservationSlice.reducer
