import { useCartData } from '@/store/cart';
import React, { useEffect } from 'react'

const NoOfferProduct = ({price,title}) => {
    let CartInfo = useCartData();

    useEffect(()=>{
     CartInfo.SetProductName(title);
     CartInfo.SetProductPrice(price);
    },[])
  return (
    <div>
      <h3 className='mt-[15px] font-semibold text-2xl' >{`₹ ${price}`}</h3>
             <p className='text text-lightgray text-xs font-medium' >(MRP inclusive of taxes)</p>
    </div>
  )
}

export default NoOfferProduct
