import { useCartData } from "@/store/cart";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ComplementaryOffer = ({product_img_1,offerProduct,price,productType,title,images,size,prodId}) => {

 const[activeOfferProduct,setActiveOfferProduct] = useState("normalProduct");
 const[fairprice,setFairPrice]  = useState(0);
 const[discountedprice,setDiscountedPrice]  = useState(price);


     // Handle Prices

     let productTitle =`${productType} ${size} `;
     let productSize = `${size}`;

     const[finalName,setFinalName]  = useState(productTitle);

    const handlePrice = (data,item) => {
          if(typeof (data+1) ==="number"){
            setActiveOfferProduct(`${data}product`);
            setFairPrice(item.ActualPrice);
            setDiscountedPrice(item.discountedPrice);
            setFinalName(item.currentitle);
          }
          else{
            setActiveOfferProduct(`normalProduct`);
            setFinalName(`${productType} ${size} `)
          }
     }



     let cartData = useCartData();

     useEffect(()=>{
       cartData.SetProductName(finalName);
       cartData.SetProductPrice(discountedprice);
     },[activeOfferProduct,finalName,discountedprice]);
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
            <p className="text-black text-sm font-semibold mt-2 mb-6 min-h-20">
              {productTitle}
            </p>
            <p className=" text-[13px] font-medium text-gray-500 mb-2 min-h-8 max-h-8">
                        {productSize.toUpperCase()}
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
                //   Carousel Image Logic
                  let trigger = index+1;
                  let offerImage
                  if(trigger!==1){
                    offerImage = images[images.length-(trigger+1)];
                  }
                  else{
                    offerImage = images[images.length-(trigger+1)];
                  }
                //  Title Login
                 let Titles = [];
                 Titles.push({productIndex:index,discountType:item.discountType});
                 Titles.forEach((title)=>{
                       if(title.discountType==="product"){
                        productTitle = productTitle + `+ ${item.productTitle} ${item.size} `;
                       productSize = productSize + ` + ${item.size} `
                       }
                })

                let modifiedItem = {...item,currentitle:productTitle};
                  
                return(
                    <div key={index}
                    className={`md:col-span-3 col-span-12 relative cursor-pointer ${item.offeredProduct?'block':"hidden"}`}
                    onClick={()=>{
                        handlePrice(index,modifiedItem);
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
                        <Image
                          src={offerImage}
                          priority={true}
                          className="rounded-md w-[46px] h-[46px]"
                        />
                        <button className="btn px-1 self-start text-xs py-1 rounded-md font-semibold">
                          {`Save₹${item.ActualPrice - item.discountedPrice}`}
                        </button>
                      </div>
                      <p className="text-black text-sm font-semibold mt-2 mb-6 min-h-20">
                        {
                          item.discountType==="product"?productTitle:`${item.productTitle} ${item.size}`
                        }
                        
                      </p>
                      <p className=" text-[13px] font-medium text-gray-500 mb-2 min-h-8 max-h-8">
                        {}
                        {
                          item.discountType==="product"?productSize.toUpperCase():`${item.size.toUpperCase()}`
                        }
                      </p>
                      <h3 className="mt-[15px] font-semibold text-[22px]">{`₹ ${item.discountedPrice}.00`}</h3>
                      <h3 className=" font-semibold text-base text-lightgray line-through">
                        {`₹ ${item.ActualPrice}.00`}
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

export default ComplementaryOffer;
