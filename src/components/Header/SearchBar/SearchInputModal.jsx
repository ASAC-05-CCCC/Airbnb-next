import DatePickerInput from '@/components/Header/SearchBar/DatePickerInput'
import GuestInput from '@/components/Header/SearchBar/GuestInput'
import LocationInput from '@/components/Header/SearchBar/LocationInput'
import SearchModal from '@/components/common/SearchModal'
import { useSearchContext } from '@/context/SearchContext'
import clsx from 'clsx'

function SearchInputModal() {
  const { openModal } = useSearchContext()

  return (
    <div
      className={clsx(
        'absolute top-16 z-30',
        openModal.location && ' w-2/3 left-0',
        openModal.datepicker && 'w-full',
        openModal.guest && 'w-2/3 right-0',
      )}
    >
      {openModal.location || openModal.datepicker || openModal.guest ? (
        <SearchModal>
          {openModal.location && <LocationInput />}
          {openModal.datepicker && <DatePickerInput />}
          {openModal.guest && <GuestInput />}
        </SearchModal>
      ) : null}
    </div>
  )
}

export default SearchInputModal
