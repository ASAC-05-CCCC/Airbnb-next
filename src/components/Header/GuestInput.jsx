import { GuestContextProvider } from '../../context/GuestCountContext'
import SearchModal from '../common/SearchModal'
import GuestList from './GuestList'

const GuestInput = () => {
  return (
    <GuestContextProvider>
      <GuestList />
    </GuestContextProvider>
  )
}

export default GuestInput
