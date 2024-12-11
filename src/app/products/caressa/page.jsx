import Image from 'next/image';
import React from 'react'

const page = () => {
    let data = [
        {
            id:1,
            name:"High-Back Bench",
            price:"$9,99",
            img: "/Rectangle 41.png"
        },
        {
            id:2,
            name:"Albany Table",
            price:"$10,33",
            img: "/Frame 296.png"
        },
        {
            id:3,
            name:"Wooden Table",
            price:"$10,33",
            img: "/Rectangle 41 (1).png"
        },
        {
            id:4,
            name:"High-Back Bench",
            price:"$9,99",
            img: "/Rectangle 41 (2).png" 
        },
        {
            id:5,
            name:"Albany Table",
            price:"$10,33",
            img: "/Frame 296.png"
        },
        {
            id:6,
            name:"Wooden Table",
            price:"$10,33",
            img: "/Frame 299.png"
        },
        {
            id:7,
            name:"High-Back Bench",
            price:"$9,99",
            img: "/Frame 295.png"
        },
        {
            id:8,
            name:"Albany Table",
            price:"$10,33",
            img: "/Frame 300.png"
        },
        {
            id:9,
            name:"Wooden Table",
            price:"$10,33",
            img: "/Frame 306.png"
        },
      ];
      return <>
        <div className='flex flex-wrap bg-red justify-between '>
            {data.slice(0,4).map((el) => {
                return <>
                <Link href={`/products/${el.id}`}>

                    <div className='w-[310px] text-center mt-[20px] relative h-[300px] ' key={el.id}>
                      <div className='w-[100%] h-[200px] relative'>
                      <Image src={el.img} fill alt='' className='object-cover' />
                      </div>
                      <h1 className='my-[10px]'>{el.name}</h1>
                      <p>{el.price}</p>
                    </div>
                </Link>
                </>
            })}
        </div>
      </>
}

export default page