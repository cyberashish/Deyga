"use client";
import Image from "next/image";
import logo from "/public/assets/logo.png";
import Link from "next/link";
import { Icon } from "@iconify/react";
import "simplebar-react/dist/simplebar.min.css";
import { useRouter } from "next/navigation";

export default function Shipping() {
  const router = useRouter();
  return (
    <>
      <div className="lg:col-span-7 col-span-12 lg:pe-[56px] pt-14 !px-4">
        <Link href={"/"} ><Image src={logo} className="max-w-full mx-auto" /></Link>
        <h5 className="text-base font-bold text-secondary text-center mt-1 mb-14">
          1 million loving customers
        </h5>
        <div className="py-3 px-4 border border-bordercolor rounded-md">
          <div className="flex justify-between gap-6 items-center pb-3 border-b border-bordercolor">
            <div className="flex gap-10">
              <span className="text-gray-600 text-sm">Contact</span>
              <p className="text-dark text-sm font-medium">
                cyberrakkt@gmail.com
              </p>
            </div>
            <Link href="/" className="text-lightbrown hover:text-secondary font-medium text-xs">
              Change
            </Link>
          </div>
          <div className="flex justify-between gap-6 items-center pt-3">
            <div className="flex gap-10">
              <span className="text-gray-600 text-sm text-nowrap">Ship to</span>
              <p className="text-dark text-sm font-medium">
                jahaanuuum, 301, soham residency jahanuum, 815301 giridih JH,
                India
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
            <li className="inline-flex items-center gap-x-2 p-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">
             <div className="flex justify-between items-center w-full">
              <div className="relative flex items-start w-full">
                <div className="flex items-center h-5">
                  <input
                    id="hs-list-group-item-radio-1"
                    name="hs-list-group-item-radio"
                    type="radio"
                    className="border-gray-200 w-[18px] h-[18px] rounded-full disabled:opacity-50 focus:ring-lightbrown ring-lightbrown text-lightbrown checked:bg-lightbrown checked:border-lightbrown "
                    defaultChecked=""
                  />
                </div>
                <label
                  htmlFor="hs-list-group-item-radio-1"
                  className="ms-3 block w-full font-normal text-sm text-dark"
                >
                  Free Shipping (Pay Online)
                </label>
              </div>
              <span className="text-sm font-semibold text-dark" >Free</span>
             </div>
            </li>
            <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">
             <div className="flex justify-between items-center w-full">
             <div className="relative flex items-start w-full">
                <div className="flex items-center h-5">
                  <input
                    id="hs-list-group-item-radio-3"
                    name="hs-list-group-item-radio"
                    type="radio"
                    className="border-gray-200 w-[18px] h-[18px] rounded-full disabled:opacity-50 focus:ring-lightbrown ring-lightbrown text-lightbrown checked:bg-lightbrown checked:border-lightbrown"
                  />
                </div>
                <label
                  htmlFor="hs-list-group-item-radio-3"
                  className="ms-3 gap-0 w-full flex flex-col text-sm text-gray-600 dark:text-neutral-500"
                >
                  <span>Cash on Delivery</span>
                   <p className="text-xs text-gray-600 font-normal" >Save upto Rs.90 on Prepaid orders</p>
                </label>
              </div>
              <span className="text-sm font-semibold text-dark" >₹60.00</span>
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
                  <button onClick={() => router.push("/")} className="bg-secondary hover:bg-secondaryemphasis text-[15px] font-semibold py-5 px-7 rounded-md text-white">
                    Complete Purchase
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
