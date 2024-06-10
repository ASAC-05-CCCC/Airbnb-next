import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    //
    isOpenModal: { location: false, checkInDate: false, checkOutDate: false, guest: false },
    //
    location: '',
    //
    checkInDate: null,
    checkOutDate: null,
    //
    guestCount: {
      adults: 0,
      kids: 0,
      babies: 0,
      pets: 0,
    },
  },
  reducers: {
    updateLocation: (state, action) => {
      state.location = action.payload
    },
    //
    modalToggle: (state, action) => {
      const { key } = action.payload

      Object.keys(state.isOpenModal).map(each => {
        each === key //
          ? state.isOpenModal[key] //
            ? (state.isOpenModal[key] = false)
            : (state.isOpenModal[key] = true)
          : (state.isOpenModal[each] = false)
      })
    },

    //
    setCheckInDate: (state, action) => {
      state.checkInDate = action.payload
    },
    setCheckOutDate: (state, action) => {
      state.checkOutDate = action.payload
    },

    //
    increaseGuest: (state, action) => {
      const { key } = action.payload

      if (key !== 'adults' && state.guestCount['adults'] === 0) {
        state.guestCount['adults'] += 1
        state.guestCount[key] += 1
      } else {
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
      }
    },
    decreaseGuest: (state, action) => {
      const { key } = action.payload
      state.guestCount[key] === 0 ? null : (state.guestCount[key] -= 1)
    },
  },
})

export const {
  //
  updateLocation,
  modalToggle,
  increaseGuest,
  decreaseGuest,
  setCheckInDate,
  setCheckOutDate,
} = searchSlice.actions
export default searchSlice.reducer
