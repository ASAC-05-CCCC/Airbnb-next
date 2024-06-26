// @ts-nocheck
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { modalToggle } from '@/redux/searchSlice'
import { useRouter } from 'next/navigation'
import SearchBarLocation from '@/components/Header/SearchBar/searchBarLocation'
import SearchBarDatePicker from '@/components/Header/SearchBar/searchBarDatePicker'
import SearchBarGuest from '@/components/Header/SearchBar/searchBarGuest'
import SearchBarButton from '@/components/Header/SearchBar/searchBarButton'
import { useDispatch } from 'react-redux'

function FullSearchBar() {
  const {
    //
    location,
    guestCount,
    checkInDate,
    checkOutDate,
    isOpenModal,
  } = useSelector(state => state.search)

  const router = useRouter()
  const dispatch = useDispatch()

  const handleSearchSubmit = () => {
    //
    router.push(
      `/?location=${location}&startDate=${checkInDate}&endDate=${checkOutDate}&guest=${Object.values(
        guestCount,
      ).reduce((prev, current) => prev + current)}`,
    )
  }
  return (
    <>
      <section
        className={clsx(
          'flex w-full cursor-pointer items-center  overflow-hidden rounded-full border-[1px] border-gray-300  shadow-md transition-all duration-75',
          (isOpenModal.location ||
            isOpenModal.checkInDate ||
            isOpenModal.checkOutDate ||
            isOpenModal.guest) &&
            'bg-gray-200',
        )}
      >
        <SearchBarLocation
          modalToggle={modalToggle}
          isOpenModal={isOpenModal}
          location={location}
        />
        <SearchBarDatePicker
          modalToggle={modalToggle}
          isOpenModal={isOpenModal}
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
        />
        <div
          onClick={() => dispatch(modalToggle({ key: 'guest' }))}
          className={clsx(
            'flex basis-1/3 rounded-full px-2 py-4 transition-all hover:bg-gray-200',
            isOpenModal.guest && 'bg-white shadow-lg  hover:bg-white',
          )}
        >
          <SearchBarGuest //
            guestCount={guestCount}
          />
          <SearchBarButton
            isOpenGuestModal={isOpenModal.guest}
            handleSearchSubmit={handleSearchSubmit}
          />
        </div>
      </section>
    </>
  )
}

export default FullSearchBar
