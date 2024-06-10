import { createSlice } from '@reduxjs/toolkit'

const guestSlice = createSlice({
  name: 'guestInput',
  initialState: {
    adults: 0,
    kids: 0,
    babies: 0,
    pets: 0,
  },
  reducers: {
    increase: (state, action) => {
      const { key } = action.payload

      if (key !== 'adults' && state['adults'] === 0) {
        state['adults'] += 1
      } else {
        if (key === 'kids' && state[key] >= 15) {
          return
        }
        if (key === 'babies' && state[key] >= 5) {
          return
        }
        if (key === 'pets' && state[key] >= 5) {
          return
        }
        state[key] += 1
      }
    },
    decrease: (state, action) => {
      const { key } = action.payload
      state[key] === 0 ? null : (state[key] -= 1)
    },
  },
})

export const { increase, decrease } = guestSlice.actions
export default guestSlice.reducer
