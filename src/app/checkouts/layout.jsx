"use client";
import skinProduct from "/public/assets/Products/SkinCare/skincare_product1_carousel1.webp";
import hairProduct from "/public/assets/Header/Hair_Category/brand_img1.png";
import CheckoutProduct from "@/app/Components/payments/CheckoutProduct";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const layout = ({children}) => {
  return (
    <>
      <div className="wrapper w-full h-64">
        <div className="container-sm">
          <div className="grid grid-cols-12 gap-6">
            {children}
            <div className="lg:col-span-5 col-span-12 border-s border-bordercolor bg-[#efefef] lg:min-w-[1200px] min-w-auto ps-[56px] pt-14">
              <div className="max-w-[415px]">
                <SimpleBar style={{ maxHeight: 500 }} className="py-3 mb-3">
                  <div className="prodct-wrapper flex flex-col gap-4">
                    <CheckoutProduct
                      prodImage={skinProduct}
                      title="Hair Care Combo"
                      price="1,499.00"
                      quantity="1"
                    />
                    <CheckoutProduct
                      prodImage={hairProduct}
                      title="Charcoal Face Wash"
                      price="990.00"
                      quantity="3"
                    />
                  </div>
                </SimpleBar>
                <div className="flex gap-4 py-5 border-bordercolor border-t border-b">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      id="hs-floating-input-passowrd"
                      className="peer p-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-secondary focus:ring-secondary
    focus:pt-5
    focus:pb-1
    [&:not(:placeholder-shown)]:pt-5
    [&:not(:placeholder-shown)]:pb-1
    autofill:pt-5
    autofill:pb-1"
                      placeholder="********"
                    />
                    <label
                      htmlFor="hs-floating-input-passowrd"
                      className="absolute top-0 start-0 text-gray-500 font-normal p-3 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90
peer-[:not(:placeholder-shown)]:translate-x-0.5
peer-[:not(:placeholder-shown)]:-translate-y-1.5
peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500"
                    >
                      Discount code or gift card 
                    </label>
                  </div>
                  <button className="px-6 bg-secondary hover:bg-secondaryemphasis text-sm text-white font-medium disabled:opacity-50 rounded-md" disabled  >Apply</button>
                </div>
                <div className="flex flex-col gap-3 py-5 border-b border-bordercolor">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-normal text-gray-600" >Subtotal</span>
                    <p className="text-sm text-dark font-semibold" >₹1,959.00</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-normal text-gray-600" >Shipping</span>
                    <span className="text-xs font-normal text-gray-600" >Calculated at next step</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-5">
                  <div className="flex flex-col gap-0">
                    <span className="font-normal text-gray-700 text-base" >Total</span>
                    <p className="text-xs text-gray-600 font-normal" >Including ₹161.75 in taxes</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-600 font-normal" >INR</span>
                    <h3 className="text-2xl font-semibold text-dark">₹1,959.00</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </>
  )
}

export default layout


