'use client'

import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

type Props = {}

const SearchComponent = (props: Props) => {
    return (
        <div className='w-[96%] m-auto md:w-full min-h-[180px] flex flex-col gap-3 items-center py-4 mt-8'>
            <h1 className='text-md md:text-lg lg:text-xl font-medium '>Can't find what you are looking for? Use the search form below to search the site!</h1>
            <div className='w-full md:w-[600px] flex gap-2 h-[38px] md:h-[45px]'>
                <Input className='h-full' placeholder='Type here....' type='text' />
                <Button className='h-full px-6' variant={'default'}>Search</Button>
            </div>
        </div>
    )
}

export default SearchComponent