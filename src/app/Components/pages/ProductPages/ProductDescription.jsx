import Image from 'next/image';
import React from 'react'
import sheaButter from "/public/assets/Home/Products/Ingredients/shea-butter.webp"
import almond from "/public/assets/Home/Products/Ingredients/almond.webp"
import beeswax from "/public/assets/Home/Products/Ingredients/beeswax.webp"
import avocadoOil from "/public/assets/Home/Products/Ingredients/avocado-oil.webp"
import beetrootExtract from "/public/assets/Home/Products/Ingredients/beetroot-extract.webp"
import jojobaOil from "/public/assets/Home/Products/Ingredients/jojoba-oil.webp"

const ProductDescription = () => {
  return (
    <>
      <nav
        className="pb-1 flex space-x-1 overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        aria-label="Tabs"
        role="tablist"
      >
        <button
          type="button"
          className="hs-tab-active:font-semibold hs-tab-active:bg-primary hs-tab-active:text-white py-2.5 px-5 rounded-full inline-flex items-center gap-x-2 border-b-2 font-medium border-transparent text-[15px] whitespace-nowrap text-grayvariant active"
          id="horizontal-scroll-tab-item-1"
          data-hs-tab="#horizontal-scroll-tab-preview"
          aria-controls="horizontal-scroll-tab-preview"
          role="tab"
        >
          Description
        </button>
        <button
          type="button"
          className="hs-tab-active:font-semibold hs-tab-active:bg-primary hs-tab-active:text-white py-2.5 px-5 rounded-full inline-flex items-center gap-x-2 border-b-2 font-medium border-transparent text-[15px] whitespace-nowrap text-grayvariant hover:text-primary focus:outline-none"
          id="horizontal-scroll-tab-item-2"
          data-hs-tab="#horizontal-scroll-tab-2"
          aria-controls="horizontal-scroll-tab-2"
          role="tab"
        >
          Benefits
        </button>
        <button
          type="button"
          className="hs-tab-active:font-semibold font-medium hs-tab-active:bg-primary hs-tab-active:text-white py-2.5 px-5 rounded-full inline-flex items-center gap-x-2 border-b-2 border-transparent text-[15px] whitespace-nowrap text-grayvariant hover:text-primary focus:outline-none"
          id="horizontal-scroll-tab-item-3"
          data-hs-tab="#horizontal-scroll-tab-3"
          aria-controls="horizontal-scroll-tab-3"
          role="tab"
        >
          Key Ingredients
        </button>
        <button
          type="button"
          className="hs-tab-active:font-semibold font-medium hs-tab-active:bg-primary hs-tab-active:text-white py-2.5 px-5 rounded-full inline-flex items-center gap-x-2 border-b-2 border-transparent text-[15px] whitespace-nowrap text-grayvariant hover:text-primary focus:outline-none"
          id="horizontal-scroll-tab-item-4"
          data-hs-tab="#horizontal-scroll-tab-4"
          aria-controls="horizontal-scroll-tab-4"
          role="tab"
        >
          Ingredients
        </button>
        <button
          type="button"
          className="hs-tab-active:font-semibold font-medium hs-tab-active:bg-primary hs-tab-active:text-white py-2.5 px-5 rounded-full inline-flex items-center gap-x-2 border-b-2 border-transparent text-[15px] whitespace-nowrap text-grayvariant hover:text-primary focus:outline-none"
          id="horizontal-scroll-tab-item-5"
          data-hs-tab="#horizontal-scroll-tab-5"
          aria-controls="horizontal-scroll-tab-5"
          role="tab"
        >
          How to Use
        </button>
        <button
          type="button"
          className="hs-tab-active:font-semibold font-medium hs-tab-active:bg-primary hs-tab-active:text-white py-2.5 px-5 rounded-full inline-flex items-center gap-x-2 border-b-2 border-transparent text-[15px] whitespace-nowrap text-grayvariant hover:text-primary focus:outline-none"
          id="horizontal-scroll-tab-item-6"
          data-hs-tab="#horizontal-scroll-tab-6"
          aria-controls="horizontal-scroll-tab-6"
          role="tab"
        >
          Tips
        </button>
      </nav>
      <div className="mt-3 shadow-md">
        <div
          id="horizontal-scroll-tab-preview"
          role="tabpanel"
          aria-labelledby="horizontal-scroll-tab-item-1"
          className='p-2 px-3'
        >
          <p className="text-sm text-textclr font-medium mb-4">
            Get ready to fall in love with your lips all over again! Our
            beetroot lip balm stick is made with 100% pure and natural
            ingredients. It adds a subtle tint to your lips and provides intense
            hydration.
          </p>
          <p className="text-sm text-textclr font-medium mb-4">
            Net Quantity - 8G
          </p>
        </div>
        <div
          id="horizontal-scroll-tab-2"
          className="hidden px-5 py-2 pb-3"
          role="tabpanel"
          aria-labelledby="horizontal-scroll-tab-item-2"
        >
          <ul class="marker:text-textclr list-disc ps-5 space-y-2 text-sm font-medium text-textclr">
            <li>Repairs Dry, Cracked Lips</li>
            <li>Reduces Pigmentation</li>
            <li>Adds a Subtle Rosy Tint</li>
            <li>Convenient to Use</li>
            <li>Packed with Lip-Loving Nutrients</li>
          </ul>
        </div>
        <div
          id="horizontal-scroll-tab-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="horizontal-scroll-tab-item-3"
        >
        <div className="grid grid-cols-12 gap-6 px-14 py-4 pb-6">
           <div className="lg:col-span-6 text-center">
             <Image src={sheaButter} className='max-w-full mx-auto' />
             <p>Shea Butter</p>
           </div>
           <div className="lg:col-span-6 text-center">
             <Image src={almond} className='max-w-full mx-auto' />
             <p>Shea Butter</p>
           </div>
           <div className="lg:col-span-6 text-center">
             <Image src={beeswax} className='max-w-full mx-auto' />
             <p>Shea Butter</p>
           </div>
           <div className="lg:col-span-6 text-center">
             <Image src={avocadoOil} className='max-w-full mx-auto' />
             <p>Shea Butter</p>
           </div>
           <div className="lg:col-span-6 text-center">
             <Image src={beetrootExtract} className='max-w-full mx-auto' />
             <p>Shea Butter</p>
           </div>
           <div className="lg:col-span-6 text-center">
             <Image src={jojobaOil} className='max-w-full mx-auto' />
             <p>Shea Butter</p>
           </div>
        </div>
        </div>
        <div
          id="horizontal-scroll-tab-4"
          className="hidden"
          role="tabpanel"
          aria-labelledby="horizontal-scroll-tab-item-4"
        >
       <div className="grid grid-cols-12 gap-6 px-14 py-4 pb-6">
           <div className="lg:col-span-6 text-center">
             <Image src={sheaButter} className='max-w-full mx-auto' />
             <p>Shea Butter</p>
           </div>
           <div className="lg:col-span-6 text-center">
             <Image src={almond} className='max-w-full mx-auto' />
             <p>Shea Butter</p>
           </div>
           <div className="lg:col-span-6 text-center">
             <Image src={beeswax} className='max-w-full mx-auto' />
             <p>Shea Butter</p>
           </div>
           <div className="lg:col-span-6 text-center">
             <Image src={avocadoOil} className='max-w-full mx-auto' />
             <p>Shea Butter</p>
           </div>
           <div className="lg:col-span-6 text-center">
             <Image src={beetrootExtract} className='max-w-full mx-auto' />
             <p>Shea Butter</p>
           </div>
           <div className="lg:col-span-6 text-center">
             <Image src={jojobaOil} className='max-w-full mx-auto' />
             <p>Shea Butter</p>
           </div>
        </div>
        </div>
        <div
          id="horizontal-scroll-tab-5"
          className="hidden px-5 py-2 pb-3"
          role="tabpanel"
          aria-labelledby="horizontal-scroll-tab-item-5"
        >
          <ul class="marker:text-textclr list-disc ps-5 space-y-2 text-sm font-medium text-textclr">
            <li>Apply directly on the lips</li>
            <li>Use it as frequently as required</li>
            <li>You can also follow up with your favorite lipstick for smooth application</li>
          </ul>
        </div>
        <div
          id="horizontal-scroll-tab-6"
          className="hidden px-5 py-2 pb-3"
          role="tabpanel"
          aria-labelledby="horizontal-scroll-tab-item-5"
        >
        <h5 className='text-textclr font-semibold mb-5' >Prep Before Lipstick</h5>
        <p className='mb-5'>Apply our lip balm before your favorite lipstick to keep your lips from drying out. It creates a smooth canvas for your lip color, ensuring a flawless and lasting look.</p>
        <h5 className='text-textclr font-semibold mb-5' >Cheek Highlighter</h5>
        <p className='mb-5'>Get creative with our lip balm! Dab a little onto your cheeks as a subtle blush, adding a touch of radiant glow to your makeup.</p>
        <h5 className='text-textclr font-semibold mb-5' >Hydration on Demand</h5>
        <p className='mb-5'>Use our lip balm as often as you like throughout the day to keep your lips beautifully hydrated.</p>
        <p></p>
        </div>
      </div>
    </>
  );
}

export default ProductDescription
