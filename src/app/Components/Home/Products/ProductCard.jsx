import Image from "next/image"
import testimage from "/public/assets/Home/Products/hair_product1.webp"
import testhiddenimage from "/public/assets/Home/Products/hair_product1_hidden.webp"
import { Icon } from "@iconify/react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useCartData } from "@/store/cart"
import BEST_SKIN_SELLER from "@/app/Constants/skincare"
import COMBO from "@/app/Constants/combo"
import BEST_HAIR_SELLER from "@/app/Constants/haircare"


const ProductCard = ({product_upper_image,product_lower_image,title,reviews,rating,desc,price,onClickCapture,helperText,prodUrl}) => {
    const [firstimgclass,setFirstImgclass] = useState("");
    const [secondimgclass,setSecondImgclass] = useState("product-img");
    let productName=''

    const handleImage = () => {
      setFirstImgclass("product-img");
      setSecondImgclass("")
    }
    const handleNewImage = () => {
      setFirstImgclass("");
      setSecondImgclass("product-img")
    }

    const urlvalue = prodUrl.split("/")[2];
    let FinalProducts = []
      
    if(urlvalue.split("-")[0]==="skinprod"){
      FinalProducts = BEST_SKIN_SELLER;
   }
   else{
     if(urlvalue.split("-")[0]==="combo"){
       FinalProducts = COMBO;
     }
     else{
       FinalProducts = BEST_HAIR_SELLER;
     }
   }

   const product = FinalProducts.find((item)=>{
    return item.key===urlvalue
  });
   
  if(!product?.combo){
    if(product?.offer){
      if(product.offer.offerType==="pack"){
        productName=product.title
      }
      else{
        productName=`${product.title} ${product.size}`
      }
    }
  }
  else{
    productName=product.title
  }



   const cartData = useCartData();

    const handleProduct = (productID) => {

      let selectedProduct = cartData.cartproducts.find((item)=>{
        return item.key===productID
      })

      if(!selectedProduct){
        let modifiedCartProduct = [...cartData.cartproducts , {...product,quantity:1,key:productID,prodDesc:productName,price:price}]
        cartData.SetCartProducts(modifiedCartProduct)
      }
      else{
       let quantDrivenProducts =  cartData.cartproducts.map((item)=>{
          if(item.key===productID){
            return {...item,quantity:item.quantity+1}
          }
          return item
        });
        cartData.SetCartProducts(quantDrivenProducts)
      }
      
    }

    const router = useRouter();

    return (
        <div className="wrapper relative max-h-[580px] group hover:shadow-sm rounded-lg overflow-hidden " onClick={onClickCapture} >
        <div className="p-2 pb-11"> 
          <div className="final-wrapper relative">
          <div className="image-wrapper cursor-pointer" onClick={()=>{
            router.push(prodUrl)
          }} onMouseOver={handleImage} onMouseOut={handleNewImage} >
          <Image src={product_upper_image} priority={true} className={`w-full max-w-full test-image rounded-lg ${firstimgclass}`} />
          <Image src={product_lower_image} priority={true} className={`w-full max-w-full test-image rounded-lg ${secondimgclass}`} />
          </div>
          <button data-hs-overlay="#hs-overlay-example" onClick={()=>{
            handleProduct(`${urlvalue}-${title.toLowerCase()}`)
          }} className="bg-primary opacity-0 group-hover:opacity-100 absolute bottom-2 end-1/2 translate-x-1/2 hover:bg-black transition-all duration-100 text-white lg:text-xl text-sm font-semibold lg:py-[15px] lg:px-5 py-2 px-3 flex items-center gap-2 rounded-3xl" >
          <Icon icon="gravity-ui:plus" className="lg:text-xl text-sm" />
          <span className="text-nowrap" >Add To Cart</span>
         </button>
         </div>
          <div className="flex justify-center gap-2 items-center mt-5">
            <Icon icon='noto:star' className="text-base" />
            <span className="text-darkgray text-sm font-bold" >{rating}</span>
            <span className="text-darkgray text-sm font-normal" >{`${reviews} reviews`}</span>
          </div>
          <h5 className="text-black my-1 text-lg font-bold text-center">{title}</h5>
             <p className="text-darkgray text-sm font-normal text-center" >{desc}</p>
             <h6 className="text-black flex justify-center items-center gap-0 text-xl font-semibold mt-2">
                <Icon icon='mdi:rupee' className="fs-5" />
                {price} </h6>
             {helperText?<p className="text-sm italic text-gray font-semibold text-center" >{helperText}</p>:null}
        </div>

        </div>
    )
}

export default ProductCard