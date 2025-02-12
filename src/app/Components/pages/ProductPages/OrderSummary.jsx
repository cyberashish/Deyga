"use client"

import { Icon } from "@iconify/react"
import Image from "next/image"
import beetrootImage from "/public/assets/Products/SkinCare/skincare_product1_carousel1.webp"
import { useState } from "react"
import Link from "next/link"
import RecommendProduct from "./RecommendProduct"
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import upiImg from "/public/assets/upi-icons.svg"
import { useCartData } from "@/store/cart"
import { useRouter } from "next/navigation"

const OrderSummary = () => {
 

  let CartData = useCartData();
    const handleQuantty = (actionType,prodID) => {
      if(actionType==="decrement"){
        let targetedProduct = CartData.cartproducts.find((item)=>{
          return item.key===prodID
        });
        if(targetedProduct.quantity>0){
           let modifiedCartInfo = CartData.cartproducts.map((item)=>{
             if(item.key===prodID){
              return {...item,quantity:item.quantity-1}
             }
             return item
           });
           CartData.SetCartProducts(modifiedCartInfo);
        }
      }
      else{
        let modifiedCartInfo = CartData.cartproducts.map((item)=>{
          if(item.key===prodID){
           return {...item,quantity:item.quantity+1}
          }
          return item
        });
        CartData.SetCartProducts(modifiedCartInfo);
      }
    }
    const CartInfo = useCartData();
    // remove product
    const handleRemoveProduct = (productID) => {
        let filteredProduct = CartData.cartproducts.filter((item)=>{
          return item.key!==productID
        })
        CartInfo.SetCartProducts(filteredProduct);
    }

    const closeOffcanvas = () => {
      const offcanvas = document.getElementById("hs-overlay-example");
      
      if (offcanvas) {
        // Ensure Preline is initialized before using it
        if (window.HSOffcanvas) {
          window.HSOffcanvas.close(offcanvas);
        } else {
          offcanvas.classList.add("hidden");
        }
    
        setTimeout(() => {
          document.querySelectorAll(".hs-overlay-backdrop").forEach((backdrop) => {
            backdrop.remove();
          });
    
          document.body.classList.remove("overflow-hidden");
          document.body.removeAttribute("style");
        }, 300);
      }
    };

    const router = useRouter();

    const handleOffcanvas = () => {
      closeOffcanvas();
      router.push("/checkouts/user-info");
    }

    return (
        <>
   <div
    id="hs-overlay-example"
    className="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full sm:max-w-[400px] w-full z-[80] bg-white border-s dark:bg-neutral-800 dark:border-neutral-700"
    tabIndex={-1}
  >
        <div className="flex items-center justify-between p-3 px-7 bg-primary text-white">
      <Icon icon="solar:cart-5-line-duotone" className="text-2xl shrink-0" />
       <span className="text-sm font-medium" >HURRAY! You are eligible for Free Shipping</span>
    </div>
   <div className="flex justify-between items-center py-3 px-7 border-b dark:border-neutral-700">
     <h3 className="font-semibold text-xl text-gray-800 dark:text-white">
      Cart
     </h3>
     <button
       type="button"
       className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
       data-hs-overlay="#hs-overlay-example"
     >
       <span className="sr-only">Close modal</span>
        <Icon icon="mingcute:close-line" className="text-lg" />
     </button>
   </div>
    {
      CartInfo.cartproducts.length>0?
      <>
          <SimpleBar style={{ maxHeight: "calc(100vh - 300px)" }} >
    

   <div className="p-6 px-7">
     {
       CartInfo.cartproducts.map((item)=>{
         return(
           <div className="grid grid-cols-12 gap-6 mb-6">
           <div className="col-span-5">
               <Image src={item.product_upper_image} className="max-w-full rounded-md"  />
           </div>
            <div className="col-span-7 flex flex-col justify-between">
               <div>
               <h5 className="text-textclr text-base font-medium mb-3" >{item.title}</h5>
               <h6 className="text-graysubtle text-[13px] mb-3">{item.prodDesc}</h6>
               <h6 className="text-graysubtle text-[13px] mb-3">{`₹${item.price}`}</h6>
               <span className="inline-block text-xs text-graysubtle"></span>
               </div>
               <div className="flex justify-between items-center">
                   <div className="flex border border-bordercolor w-fit">
                       <button className="p-2.5 siblingTrigger order-1 cursor-pointer" onClick={()=>{
                           handleQuantty("decrement",item.key)
                       }} >
                       <Icon icon="ic:baseline-minus" className='text-lg text-graysubtle' />
                       </button>
                       <button className="p-2.5 siblingTrigger order-3 cursor-pointer" onClick={()=>{
                           handleQuantty("increment",item.key)
                       }} >
                       <Icon icon="ic:baseline-plus" className='text-lg text-graysubtle' />
                       </button>
                       <div className="w-7 flex items-center justify-center text-[13px] quantEffect font-medium order-2 max-w-10">
                         {item.quantity}
                       </div>
                   </div>
                   <button onClick={()=>{
                    handleRemoveProduct(item.key)
                   }} className="text-primary text-[10px] hover:underline underline-primary underline-offset-2 font-medium">Remove</button>
               </div>
            </div>
         </div>
         )
       })
     }
   </div>
   

   {/* Product Loved Together */}

   <h5 className="text-textclr text-base font-semibold my-4 mt-8 text-center" >Product loved together</h5>
   <div className="grid grid-cols-12 gap-4 px-6">
     <div className="md:col-span-6 col-span-12">
       <RecommendProduct/>       
     </div>
     <div className="md:col-span-6 col-span-12">
       <RecommendProduct/>       
     </div>
   </div>
   </SimpleBar>
   <div className="px-6 py-4 border-t border-bordercolor">
    <p className="text-[13px] text-textclr font-medium mb-2 text-start">Shipping & taxes calculated at checkout</p>
    <p className="italic text-black font-semibold text-sm mb-5 text-center" >You saved totally : ₹100.00</p>
    <p className="text-center"><Link href="/" className="underline underline-offset-2 block mx-auto text-[13px]  text-black font-semibold hover:text-primary hover:underine-primary" >Click here to use gift card</Link></p>
    {/* Checkout Button */}
    <div className="mt-0" >
     <div className="flex justify-between">
      <span className="text-[13px] text-black font-semibold" >Subtotal:</span>
      <span className="text-[13px] text-black font-semibold" >₹2,160.00</span>
     </div>
     <button onClick={handleOffcanvas} className="p-3 transition-all block bg-black hover:bg-primary w-full" data-hs-overlay="#hs-overlay-example">
       <div className="flex items-center justify-center">
         <p className="uppercase tracking-wide text-white me-2.5" >Checkout</p>
          <Image src={upiImg} alt="image" />
          <Icon icon="mi:chevron-right" className="text-2xl shrink-0 text-white ms-0.5" />
       </div>
     </button>
    </div>
   </div>
      </>:<h1 className="h-screen w-full justify-center flex items-center font-medium text-2xl">Your cart is empty</h1>
    }
  </div>
</>
    )
}

export default OrderSummary