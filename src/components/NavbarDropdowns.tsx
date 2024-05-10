'use client'

import React from 'react'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  import Link from 'next/link';

type Props = {}

const NavbarDropdowns = (props: Props) => {
    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem className='bg-transparent text-white hover:bg-transparent'>
                        <NavigationMenuTrigger className='bg-transparent text-white hover:bg-transparent text-[16px]'>Categories</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className='w-[400px] h-[300px] bg-white'>

                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem className='bg-transparent text-white hover:bg-transparent'>
                        <NavigationMenuTrigger className='bg-transparent text-white hover:bg-transparent text-[16px]'>About Us</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className='min-w-[150px] h-fit py-4 px-2 bg-white flex flex-col'>
                                <Link href={'/privacy-policy'}>
                                    <p className='w-full py-2 rounded-md text-center hover:bg-gray-200'>About Us</p>
                                </Link>
                                <Link href={'/privacy-policy'}>
                                    <p className='w-full py-2 rounded-md text-center hover:bg-gray-200'>Privacy Policy</p>
                                </Link>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    )
}

export default NavbarDropdowns