import { configureStore } from '@reduxjs/toolkit'
import FilterReducer from '@/redux/filterSlice'
import SearchReducer from '@/redux/searchSlice'
import ReservationReducer from '@/redux/reservationSlice'

export default configureStore({
  reducer: {
    filter: FilterReducer,
    search: SearchReducer,
    reservation: ReservationReducer,
  },
})
