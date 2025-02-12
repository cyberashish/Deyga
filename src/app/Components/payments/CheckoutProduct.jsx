import React from 'react'
import Image from 'next/image';

const CheckoutProduct = ({prodImage,title,price,quantity}) => {
  return (
    <div className="flex justify-between items-center">
    <div className="flex gap-4 items-center">
      <div className="img-wrapper w-16 h-16 bg-white rounded-md  relative">
        <Image src={prodImage} className="max-w-full w-full h-full rounded-md" />
        <div className="absolute -top-2.5 -end-2 w-5 h-5 flex justify-center items-center rounded-full bg-gray-500 text-white text-xs font-medium">
          {quantity}
        </div>
      </div>
       <h3 className="text-grayemphasis text-sm font-semibold" >{title}</h3>
    </div>
    <h3 className="text-grayemphasis text-sm font-semibold" >{`₹${price}`}</h3>
  </div>
  )
}

export default CheckoutProduct
