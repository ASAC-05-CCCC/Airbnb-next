import { createSlice } from '@reduxjs/toolkit'

const locationSlice = createSlice({
  name: 'locationInput',
  initialState: '',
  reducers: {
    setLocation: (prev, action) => {
      prev = action.payload
    },
  },
})

export const {} = locationSlice.actions
export default locationSlice.reducer
