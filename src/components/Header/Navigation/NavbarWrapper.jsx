import NavigationBar from '@/components/Header/Navigation/NavigationBar'
import DatePickerInput from '@/components/Header/SearchBar/DatePickerInput'
import GuestInput from '@/components/Header/SearchBar/GuestInput'
import LocationInput from '@/components/Header/SearchBar/LocationInput'
import SearchBar from '@/components/Header/SearchBar/SearchBar'
import useModal from '@/hooks/useModal'
import useOnClickOutside from '@/hooks/useOnClickOutside'
import { useRef, useState } from 'react'

const NavbarWrapper = () => {
  const { Modal, isOpen, open, close } = useModal()
  const [openModal, setOpenModal] = useState('')
  const modalRef = useRef()

  useOnClickOutside(modalRef, () => close())

  return (
    <div className='flex-auto text'>
      <div className='left-0 w-full transition-all origin-center sm:absolute sm:top-20 lg:top-6'>
        <form onSubmit={e => e.preventDefault()} className='w-full' action='/'>
          <div className='flex flex-col items-center justify-center w-full gap-10'>
            <NavigationBar />
            <SearchBar
              openModal={openModal}
              open={open}
              isOpen={isOpen}
              close={close}
              setOpenModal={setOpenModal}
            >
              <div
                ref={modalRef}
                className={`absolute
                ${openModal === 'location' && ' w-2/3 left-0'}
                ${openModal === 'datePicker' && 'w-full'}
                ${openModal === 'guest' && 'w-2/3 right-0'}
                 top-16`}
              >
                <Modal>
                  {isOpen &&
                    ((openModal === 'location' && <LocationInput />) ||
                      (openModal === 'datePicker' && <DatePickerInput />) ||
                      (openModal === 'guest' && <GuestInput />))}
                </Modal>
              </div>
            </SearchBar>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NavbarWrapper
