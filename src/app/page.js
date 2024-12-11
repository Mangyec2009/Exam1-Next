import Image from "next/image";

export default function Home() {
    return <>
        <section className="w-[100%] flex items-center h-screen bg-cover bg-center"
            style={{
              backgroundImage: "url('/Rectangle 37.png')"
            }}
        >
          <div className="max-w-[1500px] mx-auto h-[full] flex flex-col items-start ml-[200px]">
              <h1 className="text-[70px] text-white font-bold">Rest, Relax, Unwind</h1>
              <p className="text-[28px] text-white font-medium">Embrace your choices - we do</p>
              <button className="border-[2px] rounded border-white p-[15px] mt-[15px] text-white">SHOW NOW</button>
          </div>

        </section>

        <section className="max-w-[1500px] mx-auto  flex flex-col items-center py-[300px]">
            <h1 className="text-[41px] font-semibold">/ Featured</h1>
            <div className="w-[100%] mt-[50px] flex justify-between flex-wrap">
                <div className="w-[30%] text-center">
                    <Image src="/Rectangle 41.png" width={700} className="w-[100%]" height={0} alt="" />
                    <h1 className="text-[20px] font-medium my-[10px]">High-Back Bench</h1>
                    <p>$9,99</p>
                </div>

                <div className="w-[30%] text-center">
                    <Image src="/Rectangle 41 (2).png" width={700} className="w-[100%]" height={0} alt="" />
                    <h1 className="text-[20px] font-medium my-[10px]">High-Back Bench</h1>
                    <p>$9,99</p>
                </div>

                <div className="w-[30%] text-center">
                    <Image src="/Rectangle 41 (1).png" width={700} className="w-[100%]" height={0} alt="" />
                    <h1 className="text-[20px] font-medium my-[10px]">High-Back Bench</h1>
                    <p>$9,99</p>
                </div>
            </div>
            <button className="px-[20px] mt-[50px] text-[20px] font-medium rounded py-[10px] bg-[#BA5D2C] text-white">ALL PRODUCTS</button>
        </section>
    </>
}

{/* <Image src={} width={} height={} alt="" />
                    <Image src={} width={} height={} alt="" />
                    <Image src={} width={} height={} alt="" />
                    <Image src={} width={} height={} alt="" />
                    <Image src={} width={} height={} alt="" /> */}

