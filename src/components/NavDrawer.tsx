'use client'

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link';
import React from 'react'
import { Button } from "./ui/button"
import Image from "next/image"
import LoginLogoutProvider from "./LoginLogoutProvider";

type Props = {}

const NavDrawer = (props: Props) => {
    return (
        <Drawer direction="right">
            <DrawerTrigger>
                <div className='justify-center items-center gap-2 '>
                    <Image src={'/images/burger-menu-svgrepo-com.svg'} alt='menu icon' width={25} height={25} />
                </div>
            </DrawerTrigger>
            <DrawerContent className="h-[100vh]">
                <DrawerHeader>
                    <div className="w-full flex justify-end items-center">
                        <DrawerClose>
                            <Button variant="ghost">
                                <Image alt="clons-icon" src={'/images/close-square-svgrepo-com.svg'} width={30} height={30} />
                            </Button>
                        </DrawerClose>
                    </div>
                </DrawerHeader>

                <div className="w-full flex flex-col items-center px-3">
                    <Accordion className="w-full" type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>About Us</AccordionTrigger>
                            <AccordionContent>
                                <div className='w-full h-fit py-4 px-2 bg-white flex flex-col'>
                                    <Link href={'/privacy-policy'}>
                                        <p className='w-full py-2 rounded-md text-center hover:bg-gray-200'>About Us</p>
                                    </Link>
                                    <Link href={'/privacy-policy'}>
                                        <p className='w-full py-2 rounded-md text-center hover:bg-gray-200'>Privacy Policy</p>
                                    </Link>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <Accordion className="w-full" type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Categories</AccordionTrigger>
                            <AccordionContent>
                                <div className='w-full h-fit py-4 px-2 bg-white flex flex-col'>
                                    <Link href={'/privacy-policy'}>
                                        <p className='w-full py-2 rounded-md text-center hover:bg-gray-200'>About Us</p>
                                    </Link>
                                    <Link href={'/privacy-policy'}>
                                        <p className='w-full py-2 rounded-md text-center hover:bg-gray-200'>Privacy Policy</p>
                                    </Link>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="w-full mt-3 flex items-center">
                        <LoginLogoutProvider />
                    </div>
                </div>
                <DrawerFooter>

                </DrawerFooter>
            </DrawerContent>
        </Drawer>

    )
}

export default NavDrawer