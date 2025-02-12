"use client"
import React, { useCallback, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./Products/ProductCard";
import { useRouter } from "next/navigation";


function CareSlider({BEST_SELLER}) {
 const [dragging , setDragging] = useState(false);
 const router = useRouter();

 const handleBeforeChange = useCallback(()=>{
      console.log("HandleBeforeChange");
      setDragging(true);
 },[setDragging]);

 const handleAfterChange = useCallback(()=>{
        console.log("HandleAfterChange");
        setDragging(false);
 },[setDragging])

 const handleOnItemClick = useCallback((event)=>{
      
       if(dragging){
        event.stopPropagation();
       }
 },[dragging])

  const settings = {
    dots: false,
    infinite: true,
    draggable:true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };
  return (
    <div className="slider-container product-slider">
      <Slider
          beforeChange={handleBeforeChange}
          afterChange={handleAfterChange}
       {...settings}>

       {BEST_SELLER.map((item)=>{
        let url = `/products/${item.key}`;
        return (
          <div className="pb-2"  key={item.key} >
          <ProductCard product_upper_image={item.product_upper_image} prodUrl={url} helperText={item.helperText} product_lower_image={item.product_lower_image} title={item.title} desc={item.desc} price={item.price} reviews={item.reviews} rating={item.rating} onClickCapture={(event)=>{
            handleOnItemClick(event)
          }}  />
         </div>
        )
       })}
      </Slider>
    </div>
  );
}

export default CareSlider;
