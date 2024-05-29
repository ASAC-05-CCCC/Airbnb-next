import Login from '@/components/Header/Login'
import Logo from '@/components/Header/Logo'
import NavbarWrapper from '@/components/Header/Navigation/NavbarWrapper'

const Header = () => {
  return (
    <>
      <div className='w-full h-56 px-10 border-b-[1px] lg:h-40'>
        <header className='w-full'>
          <div className='relative flex items-center w-full h-full py-3'>
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
