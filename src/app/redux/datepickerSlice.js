import { createSlice } from '@reduxjs/toolkit'

const datepickerSlice = createSlice({
  name: 'datepicker',
  initialState: {
    checkInDate: null,
    checkOutDate: null,
  },
  reducers: {
    setCheckInDate: (state, action) => {
      state.checkInDate = action.payload
    },
    setCheckOutDate: (state, action) => {
      state.checkOutDate = action.payload
    },
  },
})

export const { setCheckInDate, setCheckOutDate } = datepickerSlice.actions
export default datepickerSlice.reducer
