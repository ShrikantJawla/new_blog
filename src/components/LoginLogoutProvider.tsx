'use client'

import Image from 'next/image'
import React from 'react'

type Props = {}

const LoginLogoutProvider = (props: Props) => {
    return (
        <button className={`flex text-white bg-black justify-center items-center gap-1 border py-1 px-3 rounded-md`} >
            <Image src={'/images/logout-svgrepo-com.svg'} width={17} height={17} alt='login-logout-svg' />
            Login
        </button >
    )
}

export default LoginLogoutProvider