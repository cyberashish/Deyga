"use client";
import Image from "next/image";
import logo from "/public/assets/logo.png";
import Link from "next/link";
import { Icon } from "@iconify/react";
import "simplebar-react/dist/simplebar.min.css";
import { useRouter } from "next/navigation";

export default function UserInfo() {
  const router = useRouter();
  return (
    <>
      <div className="lg:col-span-7 col-span-12 lg:pe-[56px] !px-4 pt-14">
              <Link href="/" ><Image src={logo} className="max-w-full mx-auto" /></Link>
              <h5 className="text-base font-bold text-secondary text-center mt-1">
                1 million loving customers
              </h5>
              <div className="flex justify-between mt-14 mb-3.5">
                <h3 className="text-base text-textclr font-medium">Contact</h3>
                <p className="text-secondary text-sm">
                  Have an account?{" "}
                  <span className="ms-2 text-lightbrown hover:text-secondary">
                    <Link href="/payments/user-info">Log in</Link>
                  </span>{" "}
                </p>
              </div>
              <div class="w-full">
                <input
                  type="text"
                  class="py-3 px-4 block w-full border-bordercolor rounded-lg border focus:border  text-sm focus:border-lightbrown focus:ring-secondary placeholder:text-secondary"
                  placeholder="Email"
                />
                <div class="flex mt-3">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-bordercolor rounded text-lightbrown focus:outline-none checked:bg-lightbrown focus:ring-0 focus:ring-offset-0"
                    id="hs-default-checkbox"
                  />
                  <label
                    for="hs-default-checkbox"
                    class="text-sm text-textclr ms-3 select-none cursor-pointer"
                  >
                    Email me with news and offers
                  </label>
                </div>
                <h4 className="text-textclr text-[17px] font-medium my-8 mb-5">
                  Shipping address
                </h4>
                <div className="grid grid-cols-12 gap-6">
                  <div className="lg:col-span-6 col-span-12">
                    <input
                      type="text"
                      class="py-3 px-4 block w-full border-bordercolor rounded-lg border focus:border  text-sm focus:border-lightbrown focus:ring-secondary placeholder:text-gray-600"
                      placeholder="First name (Optional)"
                    />
                  </div>
                  <div className="lg:col-span-6 col-span-12">
                    <input
                      type="text"
                      class="py-3 px-4 block w-full border-bordercolor rounded-lg border focus:border  text-sm focus:border-lightbrown focus:ring-secondary placeholder:text-gray-600"
                      placeholder="Last name"
                    />
                  </div>
                  <div className="col-span-12">
                    <input
                      type="text"
                      class="py-3 px-4 block w-full border-bordercolor rounded-lg border focus:border  text-sm focus:border-lightbrown focus:ring-secondary placeholder:text-gray-600"
                      placeholder="Address"
                    />
                  </div>
                  <div className="col-span-12">
                    <input
                      type="text"
                      class="py-3 px-4 block w-full border-bordercolor rounded-lg border focus:border  text-sm focus:border-lightbrown focus:ring-secondary placeholder:text-gray-600"
                      placeholder="Apartment, suite, etc (optional)"
                    />
                  </div>
                  <div className="col-span-12">
                    <select class="py-3 px-4 block w-full border-bordercolor rounded-lg border focus:border  text-sm focus:border-lightbrown focus:ring-secondary placeholder:text-gray-600">
                      <option selected="">Country/region</option>
                      <option>Bharat</option>
                      <option>USA</option>
                      <option>Russia</option>
                      <option>China</option>
                    </select>
                  </div>
                  <div className="lg:col-span-6 col-span-12">
                    <input
                      type="number"
                      class="py-3 px-4 block w-full border-bordercolor rounded-lg border focus:border  text-sm focus:border-lightbrown focus:ring-secondary placeholder:text-gray-600"
                      placeholder="Pincode"
                    />
                  </div>
                  <div className="lg:col-span-6 col-span-12">
                    <input
                      type="text"
                      class="py-3 px-4 block w-full border-bordercolor rounded-lg border focus:border  text-sm focus:border-lightbrown focus:ring-secondary placeholder:text-gray-600"
                      placeholder="City"
                    />
                  </div>
                  <div className="col-span-12">
                    <div>
                      <div class="flex rounded-lg ">
                        <span class="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-bordercolor bg-gray-200/70 text-sm text-gray-500 dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">
                          <Icon icon="f7:phone" className="text-xl" />
                        </span>
                        <input
                          type="text"
                          class="py-3 px-4 block w-full border-bordercolor rounded-e-lg border focus:border  text-sm focus:border-lightbrown focus:ring-secondary placeholder:text-gray-600"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex mt-3">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-bordercolor rounded text-lightbrown focus:outline-none checked:bg-lightbrown focus:ring-0 focus:ring-offset-0"
                    id="hs-default-checkbox2"
                  />
                  <label
                    for="hs-default-checkbox2"
                    class="text-sm text-textclr ms-3 select-none cursor-pointer"
                  >
                    Save this information for next time
                  </label>
                </div>
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
                <div className="py-3 border-t mt-12 border-bordercolor">
                  <p className="text-xs text-gray-600 hover:text-lightbrown">
                    <Link href="/">Subscription policy</Link>
                  </p>
                </div>
              </div>
            </div> 
    </>
  );
}
