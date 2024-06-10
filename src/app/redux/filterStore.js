import { configureStore } from '@reduxjs/toolkit'
import FilterReducer from '@/app/redux/filterSlice'
import LocationReducer from '@/app/redux/locationSlice'
import GuestReducer from '@/app/redux/guestSlice'
import SearchReducer from '@/app/redux/searchSlice'
import DatePickerReducer from '@/app/redux/datepickerSlice'

export default configureStore({
  reducer: {
    filter: FilterReducer,
    location: LocationReducer,
    guest: GuestReducer,
    search: SearchReducer,
    datePicker: DatePickerReducer,
  },
})
