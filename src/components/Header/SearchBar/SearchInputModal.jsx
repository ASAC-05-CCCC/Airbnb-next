// @ts-nocheck
import DatePickerInput from '@/components/Header/SearchBar/DatePickerInput'
import LocationInput from '@/components/Header/SearchBar/LocationInput'
import GuestInput from '@/components/common/GuestInput'
import SearchModal from '@/components/common/SearchModal'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'

function SearchInputModal() {
  const dispatch = useDispatch()
  const { isOpenModal } = useSelector(state => state.search)

  return (
    <div
      className={clsx(
        'absolute top-16 z-10',
        isOpenModal.location && ' left-0 w-2/3',
        isOpenModal.datepicker && 'w-full',
        isOpenModal.guest && 'right-0 w-2/3',
      )}
    >
      {isOpenModal.location ||
      isOpenModal.checkInDate ||
      isOpenModal.checkOutDate ||
      isOpenModal.guest ? (
        <SearchModal>
          {isOpenModal.location && <LocationInput />}
          {(isOpenModal.checkInDate || isOpenModal.checkOutDate) && <DatePickerInput />}
          {isOpenModal.guest && <GuestInput />}
        </SearchModal>
      ) : null}
    </div>
  )
}

export default SearchInputModal
