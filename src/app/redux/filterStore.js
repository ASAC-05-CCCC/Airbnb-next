import { configureStore } from '@reduxjs/toolkit'
import FilterReducer from '@/app/redux/filterSlice'

export default configureStore({
  reducer: {
    filter: FilterReducer,
  },
})
