"use client"


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar } from 'swiper/modules';
import PRESS from '@/app/Constants/press';
import PressCard from './Cards/PressCard';

const PressFeatures = () => {

  return (
      <div className="py-[60px] border-t border-bordercolor" >
         <div className="container press_features">
         <h1 className="text-black text-[32px] text-center font-bold mb-8">
         Press Features
          </h1>
         <Swiper
        slidesPerView={6}
        spaceBetween={40}
        grabCursor={true}
        scrollbar={{
          hide: true,
        }}

        
        modules={[Scrollbar]}
        className="mySwiper"
      >
        
        {PRESS.map((item)=>{
            return (
             <SwiperSlide key={item.key} >
                <PressCard pressBrand_top={item.press_brand_top} pressBrand_bottom={item.press_brand_bottom} />
             </SwiperSlide>
            )
        })}
      </Swiper>
         </div>
      </div>
  )
}

export default PressFeatures
