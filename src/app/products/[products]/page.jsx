import Image from 'next/image';
import React from 'react'

const Productsid = async({params}) => {
    let data = [
        {
            id:1,
            desc: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic  chillwave  trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge ",
            name:"High-Back Bench",
            price:"$9,99",
            img: "/Rectangle 41.png"
        },
        {
            id:2,
            desc: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic  chillwave  trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge ",
            name:"Albany Table",
            price:"$10,33",
            img: "/Frame 296.png"
        },
        {
            id:3,
            desc: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic  chillwave  trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge ",
            name:"Wooden Table",
            price:"$10,33",
            img: "/Rectangle 41 (1).png"
        },
        {
            id:4,
            desc: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic  chillwave  trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge ",
            name:"High-Back Bench",
            price:"$9,99",
            img: "/Rectangle 41 (2).png" 
        },
        {
            id:5,
            desc: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic  chillwave  trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge ",
            name:"Albany Table",
            price:"$10,33",
            img: "/Frame 296.png"
        },
        {
            id:6,
            desc: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic  chillwave  trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge ",
            name:"Wooden Table",
            price:"$10,33",
            img: "/Frame 299.png"
        },
        {
            id:7,
            desc: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic  chillwave  trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge ",
            name:"High-Back Bench",
            price:"$9,99",
            img: "/Frame 295.png"
        },
        {
            id:8,
            desc: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic  chillwave  trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge ",
            name:"Albany Table",
            price:"$10,33",
            img: "/Frame 300.png"
        },
        {
            id:9,
            desc: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic  chillwave  trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge ",
            name:"Wooden Table",
            price:"$10,33",
            img: "/Frame 306.png"
        },
      ];
    let {products} = await params;
    let el = data[products+1];
  return <>
    <div className='max-w-[1500px] mx-auto h-screen flex justify-between items-center'>
        <Image src={el.img} width={500} alt='' height={0} className='w-[50%]' />
        <div className='w-[40%]'>
            <h1 className='text-[40px] font-bold'>{el.name}</h1>
            <p className='text-[18px] my-[25px] font-medium'>{el.price}</p>
            <p className='text-[20px] font-semibold text-[gray]'>{el.desc}</p>
            <button className='bg-[#BA5D2C] px-[20px] py-[10px] text-[18px] font-medium text-white mt-[30px]'>Add to Cart</button>
        </div>
    </div>
  </>
}

export default Productsid