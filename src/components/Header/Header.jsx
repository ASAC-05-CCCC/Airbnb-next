import Login from '@/components/Header/Login'
import Logo from '@/components/Header/Logo'
import NavbarWrapper from '@/components/Header/Navigation/NavbarWrapper'

const Header = () => {
  return (
    <>
      <div className='h-56 w-full border-b-[1px] sm:px-8 lg:h-40 lg:px-10 xl:px-20'>
        <header className='w-full'>
          <div className='relative flex h-full w-full items-center py-3'>
            <Logo />
            {/* nav bar */}
            <NavbarWrapper />
            <Login />
          </div>
        </header>
      </div>
    </>
  )
}

export default Header
