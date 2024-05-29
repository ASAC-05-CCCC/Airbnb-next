import GuestList from '@/components/Header/SearchBar/GuestList'
import { GuestContextProvider } from '@/context/GuestCountContext'

const GuestInput = () => {
  return (
    <GuestContextProvider>
      <GuestList />
    </GuestContextProvider>
  )
}

export default GuestInput
