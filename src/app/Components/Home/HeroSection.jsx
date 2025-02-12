"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import images
import sliderimg1 from "/public/assets/Home/slider_img1.webp"
import sliderimg2 from "/public/assets/Home/slider_img2.webp"
import sliderimg3 from "/public/assets/Home/slider_img3.webp"
import sliderimg4 from "/public/assets/Home/slider_img4.webp"
import sliderimg5 from "/public/assets/Home/slider_img5.webp"

const SliderImages = [
    {
      key:"slider1",
      img:sliderimg1,
    },
    {
      key:"slider2",
      img:sliderimg2,
    },
    {
      key:"slider3",
      img:sliderimg3,
    },
    {
      key:"slider4",
      img:sliderimg4,
    },
    {
      key:"slider5",
      img:sliderimg5,
    },
]


// import required modules
import { EffectFade, Navigation, Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        style={{
          "--swiper-pagination-color": "#507d3c",
          "--swiper-pagination-bullet-inactive-color": "#ffffff0",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "6px"
        }}
        effect={'fade'}
        navigation={false}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade,Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        {
          SliderImages.map((item)=>{
            return (
              <SwiperSlide key={item.key}>
              <Image src={item.img} />
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}
