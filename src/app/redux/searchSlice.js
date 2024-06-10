import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    isOpenModal: {
      location: false,
      checkInDate: false,
      checkOutDate: false,
      guest: false,
    },
  },
  reducers: {
    modalToggle: (state, action) => {
      const { key } = action.payload
      state.isOpenModal[key] //
        ? (state.isOpenModal[key] = false)
        : (state.isOpenModal[key] = true)
    },
  },
})

export const { modalToggle } = searchSlice.actions
export default searchSlice.reducer
