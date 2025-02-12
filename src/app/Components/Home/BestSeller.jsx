"use client"

import BEST_SKIN_SELLER from "@/app/Constants/skincare";
import CareSlider from "./CareSlider";
import SkinCareSlider from "./CareSlider";
import BEST_HAIR_SELLER from "@/app/Constants/haircare";
import { useRouter } from "next/navigation";

const BestSeller = () => {
  const router = useRouter();
    return (
      <div className="py-[60px]">
        <div className="lg:px-20 px-6">
          <h1 className="text-black text-[32px] text-center font-bold mb-5">
            Best Sellers
          </h1>
          <div className=" border-gray-200 dark:border-neutral-700">
            <nav
              className="-mb-0.5 flex justify-center space-x-6"
              aria-label="Tabs"
              role="tablist"
            >
              <button
                type="button"
                className="hs-tab-active:border-black font-medium text-black py-1 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-[22px] focus:outline-none active"
                id="horizontal-alignment-item-1"
                data-hs-tab="#horizontal-alignment-1"
                aria-controls="horizontal-alignment-1"
                role="tab"
              >
                Skin Care
              </button>
              <button
                type="button"
                className="hs-tab-active:border-black font-medium text-black py-1 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-[22px]  focus:outline-none "
                id="horizontal-alignment-item-2"
                data-hs-tab="#horizontal-alignment-2"
                aria-controls="horizontal-alignment-2"
                role="tab"
              >
                Hair Care
              </button>
            </nav>
          </div>

          <div className="mt-3">
            <div
              id="horizontal-alignment-1"
              role="tabpanel"
              aria-labelledby="horizontal-alignment-item-1"
            >
              <CareSlider BEST_SELLER={BEST_SKIN_SELLER} />
              <button onClick={() => router.push("/products/skin-care-best-picks") } className="btn-lg mt-4 block mx-auto">View all products</button>
            </div>
            <div
              id="horizontal-alignment-2"
              className="hidden"
              role="tabpanel"
              aria-labelledby="horizontal-alignment-item-2"
            >
             <CareSlider BEST_SELLER={BEST_HAIR_SELLER} />
             <button onClick={() => router.push("/products/hair-care-best-picks") } className="btn-lg mt-4 block mx-auto">View all products</button>
            </div>
          </div>

        </div>
      </div>
    );
}

export default BestSeller