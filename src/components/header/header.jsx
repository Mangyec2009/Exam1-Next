"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
    const pathname = usePathname();
    console.log(pathname);
    return <>
        <header className={`${pathname == "/" ? "text-white fixed" : "text-black mb-[30px]"} w-[100%] bg-red`}>
            <div className='max-w-[1500px] mx-auto py-[15px] flex items-center justify-between'>
                <div className='flex gap-[50px] font-semibold text-[23px]'>
                    <Link href="/">Home</Link>
                    <Link href="/products">Products</Link>
                    <Link href="/about">About</Link>
                </div>
                <h1 className='font-semibold text-[40px]'>Comfy</h1>
                <Image src="/Frame 279.png" width={500} height={0} alt='' className='w-[60px]' />
            </div>
        </header>
    </>
}

export default Header