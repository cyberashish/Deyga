import Image from "next/image"
import testimage from "/public/assets/Home/Products/hair_product1.webp"
import { Icon } from "@iconify/react"


const RecommendProduct = () => {

    return (
        <div className="wrapper relative group hover:shadow-sm rounded-lg overflow-hidden cursor-pointer" >
        <div className="p-2"> 
          <div className="final-wrapper relative">
          <Image src={testimage} priority={true} className="w-full max-w-full test-image rounded-lg" />
         </div>
          <div className="flex flex-wrap justify-center gap-2 items-center mt-5">
            <Icon icon='noto:star' className="text-base" />
            <span className="text-darkgray text-sm font-bold" >4.74</span>
            <span className="text-darkgray text-xs font-normal" >{`(275 reviews)`}</span>
          </div>
          <h5 className="text-black my-1 text-base font-semibold text-center">Clear Skin Combo</h5>
             <h6 className="text-black flex justify-center items-center gap-0 text-lg font-semibold mt-0">
                <Icon icon='mdi:rupee' className="text-base" />
                649.00 </h6>
             <h6 className="text-black flex justify-center items-center gap-0 text-sm leading-none line-through text-graysubtle font-semibold mt-0">
                <Icon icon='mdi:rupee' className="text-xl" />
                800.00 </h6>
            <button className="bg-primary opacity-100 mx-auto mt-6 hover:bg-black transition-all duration-100 text-white text-xs font-medium p-2 flex items-center gap-2 rounded-3xl" >
          <Icon icon="gravity-ui:plus" className="text-xs" />
          <span className="text-nowrap" >Add To Cart</span>
         </button>
        </div>

        </div>
    )
}

export default RecommendProduct