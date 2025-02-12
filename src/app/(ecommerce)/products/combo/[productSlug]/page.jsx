

"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import BEST_SKIN_SELLER from '@/app/Constants/skincare';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs,Autoplay, } from 'swiper/modules';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Icon } from '@iconify/react';

// testing purposes images

import product_img_1 from "/public/assets/Products/SkinCare/skincare_product1_carousel1.webp"
import product_img_2 from "/public/assets/Products/SkinCare/skincare_product1_carousel2.webp"
import ProductDescription from '@/app/Components/pages/ProductPages/ProductDescription';
import FAQ from '@/app/Components/pages/ProductPages/FAQ';
import OrderSummary from '@/app/Components/pages/ProductPages/OrderSummary';
import ProductOffer from '@/app/Components/Products/ProductOffer';
import ComplementaryOffer from '@/app/Components/Products/ComplementaryOffer';
import BEST_HAIR_SELLER from '@/app/Constants/haircare';
import COMBO from '@/app/Constants/combo';

export default function ProductPage() {

    const param = useParams();

    let FinalProducts

    if(param.productSlug.split("-")[0]==="skinprod"){
       FinalProducts = BEST_SKIN_SELLER;
    }
    else{
       if(param.productSlug.split("-")[0]==="hairprod"){
        FinalProducts = BEST_HAIR_SELLER;
       }
       else{
        FinalProducts = COMBO
       }
    }


  const [thumbsSwiper, setThumbsSwiper] = useState(null);
      const product = FinalProducts.find((item)=>{
      return item.key===param.productSlug
    });



    // handle Quantity
    const [quantity , setquantity] = useState(0);

  return (
    <>
       <div className="py-[60px]">
       <div className="container-xsm">
      <div className="grid grid-cols-12" >
         <div className="lg:col-span-6 px-20">
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={0}
        navigation={false}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >

        {product.carousel_images.map((item)=>{
          return(
            <SwiperSlide>
            <Image src={item} className='rounded-md' />
          </SwiperSlide>
          )
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper productSwiper mt-6"
      >
        {product.carousel_images.map((item)=>{
          return(
            <SwiperSlide>
            <Image src={item} className='rounded-md' />
          </SwiperSlide>
          )
        })}
      </Swiper>
         </div>
         <div className="lg:col-span-6 col-span-12">
          <h1 className='text-[32px] font-semibold text-black' >{product.title}</h1>
          <p className='text text-lightgray text-sm font-medium' >{product.desc}</p>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[1,2,3,4,5].map((item)=>{
                return <Icon key={item} icon="noto:star" className='text-lg shrink-0' />
              })}
            </div>
            <span className='text-lightgray text-xs self-center font-medium' >{product.rating}</span>
              <p className='text-lightgray text-xs font-medium' >{`(${product.reviews})`} <span className='text-[10px]' >reviews</span> </p>
          </div>
          {/* Offer Calculator */}
          {
            product.offer? product.offer.offerType==="pack"?<ProductOffer price={product.price} title={product.title} productType={product.productType} product_img_1={product.carousel_images[product.carousel_images.length-1]} images={product.carousel_images} offerProduct={product.offer.offerProduct} />:<ComplementaryOffer price={product.price} title={product.title} productType={product.productType} product_img_1={product.carousel_images[product.carousel_images.length-1]} size={product.size} images={product.carousel_images} offerProduct={product.offer.offerProduct} />:product.combo?<div>
           
            <div className='flex items-center gap-1.5'>
            <h3 className='mt-[15px] font-semibold text-2xl me-1' >{`₹ ${product.discountedprice}`}</h3>
            <div className="flex gap-3 items-center mt-[15px]">
              <h3 className=' font-medium text-faintgray line-through text-2xl' >{`₹ ${product.price}`}</h3>
              <p className='text-base italic text-gray mb-0 font-semibold' >{`You’ll save ₹ ${product.price - product.discountedprice}`}</p>
            </div>
            </div>
          
             <p className='text text-lightgray text-xs font-medium' >(MRP inclusive of taxes)</p>
            </div>:<>
            <h3 className='mt-[15px] font-semibold text-2xl' >{`₹ ${product.price}`}</h3>
             <p className='text text-lightgray text-xs font-medium' >(MRP inclusive of taxes)</p>
            </>
          }
          {/* Quantity calculator */}
           <p className='text-sm text-black font-medium mb-3 mt-14' >Quantity:</p>
           <div className="flex items-center gap-2">
            <button className="px-5 py-[10px] border border-primary group cursor-pointer border-opacity-70 hover-border-opacity-100" onClick={() => {
              if(quantity>0){
                setquantity(quantity - 1)
              }
            } } >
               <Icon icon="ic:baseline-minus" className='text-xl text-black group-hover:text-opacity-60' />
            </button>
            <h3 className='px-3 text-xl text-black font-semibold max-w-[40px]'>{quantity}</h3>
            <button className="px-5 py-[10px] border border-opacity-70 hover-border-opacity-100 border-primary group cursor-pointer" onClick={() => setquantity(quantity + 1) }>
               <Icon icon="ic:baseline-plus" className='text-xl text-black group-hover:text-opacity-60' />
            </button>
           </div>
           {/* Add to Cart Button */}
           <div className="flex w-full">
            <div className="lg:w-7/12 w-1">
            <button class="btn w-full mt-6 py-2.5 font-semibold text-lg rounded-[60px]" data-hs-overlay="#hs-overlay-example" >Add to cart</button>
            </div>
           </div>
           {/* Offer Zone */}
           <div className="flex w-full">
            <div className="lg:w-10/12 w-1">
            <div className="border-bordercolor border rounded-md mt-6">
            <h3 className='uppercase text-modestgray text-xl font-semibold py-[10px] px-[13px] border-b border-bordercolor' >Offer Zone</h3>
            <div className="flex justify-between py-[10px] px-[13px] bg-modestlight">
              <div className="flex gap-3 ">
                 <Icon icon='streamline:discount-percent-badge' className='mt-1 text-xl text-blue-500' />
                 <div className="div">
                  <h3 className='text-sm font-semibold'>Get 10% OFF</h3>
                  <p className='text-black font-medium text-[13px]' >Get <span className='text-sm font-medium' >10% OFF</span> on your first order. <span className='font-semibold text-base'><span className='text-sm'>Use Code:</span> DEYGA1010</span>
</p>
                 </div>
              </div>
              <Icon icon="gg:chevron-right" className='text-black text-xl' />
            </div>
           </div>
            </div>
           </div>
           {/* Product Description */}
           <div className="flex w-full mt-6">
            <div className="lg:w-10/12 w-1">
            <ProductDescription/>
            </div>
           </div>
         </div>
      </div>
     </div>
        {/* FAQ */}
      <FAQ/>
       </div>

       {/* Offcanvas - Order Summary */}
       <OrderSummary/>
    </>
  );
}
