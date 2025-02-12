"use client";
import Image from "next/image";
import logo from "/public/assets/logo.png";
import Link from "next/link";
import { Icon } from "@iconify/react";
import "simplebar-react/dist/simplebar.min.css";
import { useEffect, useState } from "react";
import payment from "/public/assets/payments/payment.png"
import upi from "/public/assets/payments/upi.svg"
import visa from "/public/assets/payments/logos--visa.svg"
import mastercard from "/public/assets/payments/logos--mastercard.svg"
import rupay from "/public/assets/payments/128px-Rupay-Logo.png"
import { useRouter } from "next/navigation";

export default function Payment() {
    const [paymentVal , setPaymentVal] = useState("");
  useEffect(()=>{
   console.log(paymentVal);
  },[paymentVal]);

  const router = useRouter();


  return (
    <>
      <div className="lg:col-span-7 col-span-12 lg:pe-[56px] pt-14 !px-4">
       <Link href="/" > <Image src={logo} className="max-w-full mx-auto" /></Link>
        <h5 className="text-base font-bold text-secondary text-center mt-1 mb-14">
          1 million loving customers
        </h5>
        <div className="py-3 px-4 border border-bordercolor rounded-md">
          <div className="flex justify-between gap-6 items-center pb-3 border-b border-bordercolor">
            <div className="flex gap-10">
              <span className="text-gray-600 text-sm min-w-16">Contact</span>
              <p className="text-dark text-sm font-medium">
                cyberrakkt@gmail.com
              </p>
            </div>
            <Link href="/" className="text-lightbrown hover:text-secondary font-medium text-xs">
              Change
            </Link>
          </div>
          <div className="flex justify-between gap-6 items-center py-3 border-b border-bordercolor">
            <div className="flex gap-10">
              <span className="text-gray-600 text-sm text-nowrap min-w-16">Ship to</span>
              <p className="text-dark text-sm font-medium">
                jahaanuuum, 301, soham residency jahanuum, 815301 giridih JH,
                India
              </p>
            </div>
            <Link href="/" className="text-lightbrown hover:text-secondary font-medium text-xs">
              Change
            </Link>
          </div>
          <div className="flex justify-between gap-6 items-center pt-3">
            <div className="flex gap-10">
              <span className="text-gray-600 text-sm max-w-16">Shipping method</span>
              <p className="text-dark text-sm font-medium">
              Free Shipping (Pay Online) · <span className="text-dark font-semibold" >Free</span>
              </p>
            </div>
            <Link href="/" className="text-lightbrown hover:text-secondary font-medium text-xs">
              Change
            </Link>
          </div>
        </div>
        <div className="pt-11">
          <h3 className="text-lg text-dark font-medium mb-6">
            Shipping method
          </h3>
          <ul className="w-full flex flex-col">
            <li className="inline-flex items-center gap-x-2 p-4 text-sm font-medium bg-white border border-bordercolor text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-white">
             <div className="flex justify-between items-center w-full">
              <div className="relative w-full justify-between flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="hs-list-group-item-radio-1"
                    name="hs-list-group-item-radio"
                    type="radio"
                    value="firstPaymentOption"
                    onChange={(e)=>{
                        console.log(e.target.value);
                        setPaymentVal(e.target.value);
                    }}
                    className="border-gray-200 w-[18px] h-[18px] rounded-full disabled:opacity-50 focus:ring-lightbrown ring-lightbrown text-lightbrown checked:bg-lightbrown checked:border-lightbrown "
                    defaultChecked=""
                  />
                </div>
                <label
                  htmlFor="hs-list-group-item-radio-1"
                  className="ms-3 block w-full font-semibold text-sm text-dark"
                >
                  Cashfree Payment
                  <p className="font-semibold" >(UPI,Cards,Wallets,NetBanking)</p>
                </label>
                <div className="flex ml-auto items-center self-center gap-1">
                    <Image src={upi} alt='upi' width={45} className="shrink-0 inline-block" />
                    <Image src={visa} alt='upi' width={30} className="shrink-0 inline-block" />
                    <Image src={mastercard} alt='upi' width={20} className="shrink-0 inline-block" />
                    <Image src={rupay} alt='upi' width={45} className="shrink-0 inline-block" />
                    <span className="text-xs font-normal text-gray-600" >and more...</span>
                </div>
              </div>
             </div>
            </li>
            <div className="wrapper py-6 w-full bg-[#fafafa] flex justify-center items-center border-s border-e border-bordercolor">
               <div>
               <Image src={payment} alt="image" className="w-fit block mx-auto" />
               <p className="text-sm font-normal text-dark px-28 text-center" >After clicking “Complete order”, you will be redirected to Cashfree Payment (UPI,Cards,Wallets,NetBanking) to complete your purchase securely.</p>
               </div>
               
            </div>
            <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg border-bordercolor">
             <div className="flex justify-between items-center w-full">
             <div className="relative flex items-start w-full">
                <div className="flex items-center h-5">
                  <input
                    id="hs-list-group-item-radio-3"
                    name="hs-list-group-item-radio"
                    type="radio"
                    value="secondPaymentOption"
                    onChange={(e)=>{
                        console.log(e.target.value);
                        setPaymentVal(e.target.value);
                    }}
                    className="border-gray-200 w-[18px] h-[18px] rounded-full disabled:opacity-50 focus:ring-lightbrown ring-lightbrown text-lightbrown checked:bg-lightbrown checked:border-lightbrown"
                  />
                </div>
                <label
                  htmlFor="hs-list-group-item-radio-3"
                  className="ms-3 block w-full font-semibold text-sm text-dark max-w-[250px]"
                >
                 	Razorpay Secure (UPI, Cards, Wallets, NetBanking)
                </label>
                <div className="flex ml-auto items-center self-center gap-1">
                    <Image src={upi} alt='upi' width={45} className="shrink-0 inline-block" />
                    <Image src={visa} alt='upi' width={30} className="shrink-0 inline-block" />
                    <Image src={mastercard} alt='upi' width={20} className="shrink-0 inline-block" />
                    <Image src={rupay} alt='upi' width={45} className="shrink-0 inline-block" />
                    <span className="text-xs font-normal text-gray-600" >and more...</span>
                </div>
              </div>
             </div>
            </li>
          </ul>
          <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center">
                    <Icon
                      icon="prime:chevron-left"
                      className="text-lightbrown text-xl shrink-0"
                    />
                    <p className="text-lightbrown">Return to cart</p>
                  </div>
                  <button onClick={() => router.push("/checkouts/shipping")} className="bg-secondary hover:bg-secondaryemphasis text-[15px] font-semibold py-5 px-7 rounded-md text-white">
                    Continue to shipping
                  </button>
                </div>
                <div className="py-3 pb-10 border-t mt-14 border-bordercolor">
                  <p className="text-xs text-gray-600 hover:text-lightbrown">
                    <Link href="/">Subscription policy</Link>
                  </p>
                </div>
        </div>
      </div>
    </>
  );
}
