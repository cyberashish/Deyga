"use client"

import BEST_SKIN_SELLER from "@/app/Constants/skincare";
import CareSlider from "./CareSlider";
import SkinCareSlider from "./CareSlider";
import BEST_HAIR_SELLER from "@/app/Constants/haircare";
import { useRouter } from "next/navigation";
import COMBO from "@/app/Constants/combo";

const Combo = () => {
  const router = useRouter();
    return (
      <div className="py-[60px] border-bordercolor border-t">
        <div className="lg:px-20 px-6">
          <h1 className="text-black text-[32px] text-center font-bold mb-5">
            Combo
          </h1>
          <div className="mt-3">
           <CareSlider BEST_SELLER={COMBO} />
          </div>
          <button onClick={() => router.push("/products/combo") } className="btn-lg mt-6 block mx-auto">View all products</button>
        </div>
      </div>
    );
}

export default Combo