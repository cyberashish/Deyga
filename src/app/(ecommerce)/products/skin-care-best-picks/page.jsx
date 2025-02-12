"use client"

import ProductCard from '@/app/Components/Home/Products/ProductCard'
import BEST_SKIN_SELLER from '@/app/Constants/skincare'
import React from 'react'

const page = () => {
  return (
    <div>
      <h3 className='text-[32px] font-medium py-5 pt-8 border-b border-t border-bordercolor text-center' >Skin Care Best Sellers</h3>
     <div className="container">
        <div className="grid grid-cols-12 gap-6 py-10">
        {BEST_SKIN_SELLER.map((item)=>{
          let url = `/products/skin-care-best-picks/${item.key}`;
        return (
          <div className="pb-2 lg:col-span-3 col-span-12"  key={item.key} >
          <ProductCard product_upper_image={item.product_upper_image} helperText={item.helperText} product_lower_image={item.product_lower_image} title={item.title} desc={item.desc} price={item.price} prodUrl = {url} reviews={item.reviews} rating={item.rating}  />
         </div>
        )
       })}
        </div>
     </div>
    </div>
  )
}

export default page
