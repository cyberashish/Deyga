import { useCartData } from "@/store/cart";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ProductOffer = ({product_img_1,offerProduct,price,productType,title,images}) => {

 const[activeOfferProduct,setActiveOfferProduct] = useState("normalProduct");
 const[finalName,setFinalName] = useState(title);
 const[fairprice,setFairPrice]  = useState(0);
 const[discountedprice,setDiscountedPrice]  = useState(price);

     // Handle Prices

    const handlePrice = (data,item) => {
          

          if(typeof (data+1) ==="number"){
            setActiveOfferProduct(`${data}product`);
            setFairPrice(item.offerPack*price);
            setDiscountedPrice(item.offerPrice);
            if(item){
              setFinalName(`Pack of ${item.offerPack} ${productType}s`);
            }
          }
          else{
            setActiveOfferProduct(`normalProduct`)
            setFinalName(title);
          }
     }

     let cartData = useCartData();

     useEffect(()=>{
      //  console.log(finalName);
      cartData.SetProductName(finalName);
      cartData.SetProductPrice(discountedprice);
     },[activeOfferProduct,finalName])
    
  return (
    <>
       {activeOfferProduct==="normalProduct"?<h3 className='mt-[15px] font-semibold text-2xl' >{`₹ ${price}`}</h3>:(
            <div className='flex items-center gap-1.5'>
            <h3 className='mt-[15px] font-semibold text-2xl me-1' >{`₹ ${discountedprice}.00`}</h3>
            <div className="flex gap-1 items-center mt-[15px]">
              <h3 className=' font-medium text-faintgray line-through text-2xl' >{`₹ ${fairprice}.00`}</h3>
              <p className='text-base italic text-gray mb-0 font-semibold' >{`You’ll save ₹ ${fairprice - discountedprice}`}</p>
            </div>
            </div>
          )}
          <p className='text text-lightgray text-xs font-medium' >(MRP inclusive of taxes)</p>
      <div className="grid grid-cols-12 gap-2 mt-3">
        <div
          className="md:col-span-3 col-span-12 relative flex cursor-pointer"
          onClick={handlePrice}
        >
          <div
            className={`border w-full ${
                activeOfferProduct === "normalProduct"
                ? "bg-quaternary border-primary"
                : "bg-transparent border-bordercolor"
            }  rounded-md p-2`}
          >
            <Image
              src={product_img_1}
              priority={true}
              className="rounded-md w-[46px] h-[46px]"
            />
            <p className="text-black text-sm font-semibold mt-2 mb-6 min-h-10">
              {title}
            </p>
            <h3 className="mt-[15px] font-semibold text-[22px]">{`₹ ${price}`}</h3>
          </div>

          <div
            className={`w-4 h-4 rounded-full bg-primary flex items-center justify-center ${
              activeOfferProduct === `normalProduct` ? "opacity-100" : "opacity-0"
            } absolute -top-1.5 -end-1.5 z-10`}
          >
            <Icon
              icon="mingcute:check-fill"
              className="text-white text-[10px] shrink-0"
            />
          </div>
        </div>
        {
            offerProduct.map((item,index)=>{
              let trigger = index+1;
              let offerImage
              if(trigger!==1){
                offerImage = images[images.length-(trigger+1)];
              }
              else{
                offerImage = images[images.length-(trigger+1)];
              }

                  
                return(
                    <div
                    className="md:col-span-3 col-span-12 relative cursor-pointer"
                    onClick={()=>{
                        handlePrice(index,item)
                    }}
                  >
                    <div
                      className={`border ${
                        activeOfferProduct === `${index}product`
                          ? "bg-quaternary border-primary"
                          : "bg-transparent border-bordercolor"
                      } rounded-md p-2`}
                    >
                      <div className="flex justify-between">
                        {offerImage?<Image
                          src={offerImage}
                          priority={true}
                          className="rounded-md w-[46px] h-[46px]"
                        />:<Image
                        src={images[images.length-1]}
                        priority={true}
                        className="rounded-md w-[46px] h-[46px]"
                      />}
                        <button className="btn px-1 self-start text-xs py-1 rounded-md font-semibold">
                          {`Save₹${price*item.offerPack - item.offerPrice}`}
                        </button>
                      </div>
                      <p className="text-black text-sm font-semibold mt-2 mb-6 min-h-8">
                        {`Pack of ${item.offerPack} ${productType}s`}
                      </p>
                      <h3 className="mt-[15px] font-semibold text-[22px]">{`₹ ${item.offerPrice}.00`}</h3>
                      <h3 className=" font-semibold text-base text-lightgray line-through">
                        {`₹ ${price*item.offerPack}.00`}
                      </h3>
                    </div>
          
                    <div
                      className={`w-4 h-4 rounded-full bg-primary flex items-center justify-center ${
                        activeOfferProduct === `${index}product` ? "opacity-100" : "opacity-0"
                      }  absolute -top-1.5 -end-1.5 z-10`}
                    >
                      <Icon
                        icon="mingcute:check-fill"
                        className="text-white text-[10px] shrink-0"
                      />
                    </div>
                  </div>
                )
            })
        }
      </div>
    </>
  );
};

export default ProductOffer;
