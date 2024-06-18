import { configureStore } from '@reduxjs/toolkit'
import FilterReducer from '@/app/redux/filterSlice'
import SearchReducer from '@/app/redux/searchSlice'
import ReservationReducer from '@/app/redux/reservationSlice'

export default configureStore({
  reducer: {
    filter: FilterReducer,
    search: SearchReducer,
    reservation: ReservationReducer,
  },
})
