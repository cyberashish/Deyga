import React from 'react'
import recog_brand1 from "/public/assets/Home/Awards/40_under_40.webp"
import recog_brand2 from "/public/assets/Home/Awards/economic_times.webp"
import recog_brand3 from "/public/assets/Home/Awards/times.webp"
import Image from 'next/image'

const Awards = () => {
  return (
    <div className='py-[60px] border-t border-bordercolor'>
       <div className="container">
       <h1 className="text-black text-[32px] text-center font-bold mb-8">
         Awards
          </h1>
            <div className="grid grid-cols-12 gap-8">
                <div className="lg:col-span-4 col-span-12">
                    <Image src={recog_brand1} />
                </div>
                <div className="lg:col-span-4 col-span-12">
                    <Image src={recog_brand2} />
                </div>
                <div className="lg:col-span-4 col-span-12">
                    <Image src={recog_brand3} />
                </div>
            </div>
       </div>
    </div>
  )
}

export default Awards
