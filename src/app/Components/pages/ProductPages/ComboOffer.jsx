import { useCartData } from "@/store/cart";
import React, { useEffect } from "react";

const ComboOffer = ({discountedPrice,price,title}) => {

   let CartInfo = useCartData();

   useEffect(()=>{
    CartInfo.SetProductName(title);
    CartInfo.SetProductPrice(discountedPrice);
   },[])

  return (
    <div>
      <div className="flex items-center gap-1.5">
        <h3 className="mt-[15px] font-semibold text-2xl me-1">{`₹ ${discountedPrice}`}</h3>
        <div className="flex gap-3 items-center mt-[15px]">
          <h3 className=" font-medium text-faintgray line-through text-2xl">{`₹ ${price}`}</h3>
          <p className="text-base italic text-gray mb-0 font-semibold">{`You’ll save ₹ ${
            price - discountedPrice
          }`}</p>
        </div>
      </div>

      <p className="text text-lightgray text-xs font-medium">
        (MRP inclusive of taxes)
      </p>
    </div>
  );
};

export default ComboOffer;
