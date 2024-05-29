import NavigationBar from './NavigationBar'
import SearchBar from './SearchBar'

const NavbarWrapper = () => {
  return (
    <div className='flex-auto text'>
      <div className='left-0 w-full transition-all origin-center sm:absolute sm:top-20 lg:top-6'>
        <form onSubmit={e => e.preventDefault()} className='w-full' action='/'>
          <div className='flex flex-col items-center justify-center w-full gap-10'>
            <NavigationBar />
            <SearchBar>{/* <LocationInput /> */}</SearchBar>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NavbarWrapper
