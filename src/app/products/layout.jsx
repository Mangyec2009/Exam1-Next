"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Layout = ({children}) => {
    let pathname = usePathname();
  return <>
    {pathname == "/products" || pathname == "/products/ikea" || pathname == "/products/marcos" || pathname == "/products/liddy" || pathname == "/products/caressa" ?
    <div>

    <div className='w-[100%] h-[280px] bg-[#d5eafa]  '>
        <div className='max-w-[1500px] mx-auto h-full flex text-[47px] font-semibold items-center bg text-[gray]'>
        Home / Products
        </div>
    </div>

    <section className='max-w-[1500px] h-[480px] bg-red mt-[100px] flex justify-between mx-auto '>
        <div className='w-[200px]'>
            <input type="text" className="bg-[#F1F5F8] p-[10px]" placeholder='Search...' id="" />
            <div className='flex flex-col gap-[15px] mt-[40px]'>
                <h1 className='text-[20px] font-semibold'>Company</h1>
                <Link className='text-blue-500' href="/products">All</Link>
                <Link className='text-blue-500' href="/products/ikea">Ikea</Link>
                <Link className='text-blue-500' href="/products/marcos">Marcos</Link>
                <Link className='text-blue-500' href="/products/caressa">Caressa</Link>
                <Link className='text-blue-500' href="/products/liddy">Liddy</Link>
                <input type="range" name="" id="" />
                <p>Value : $80</p>
            </div>
        </div>
        <div className='w-[80%] h-full bg-red'>
            {children}
        </div>
    </section>
    </div>
    : (
        <div>
            {children}
        </div>
    )
    }
  </>
}

export default Layout