
import Image from 'next/image';
import React from 'react'
import NavbarDropdowns from './NavbarDropdowns';
import NavDrawer from './NavDrawer';
import LoginLogoutProvider from './LoginLogoutProvider';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='w-full h-[85px] flex justify-between items-center sticky top-0 left-0 z-50 bg-black px-12'>
      <div className='w-[180px] h-[40px] bg-black flex justify-center items-center cursor-pointer'>
        <Image src={'/nomadic_matt_logo.webp'} alt='logo' width={150} height={30} />
      </div>

      <div className='justify-center items-center gap-2 hidden lg:flex'>
        <NavbarDropdowns />
        <LoginLogoutProvider />
      </div>

      <div className='flex lg:hidden'>
        <NavDrawer />
      </div>

    </div>
  )
}

export default Navbar;