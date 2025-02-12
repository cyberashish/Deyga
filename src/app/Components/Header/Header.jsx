import { Icon } from "@iconify/react";
import Image from "next/image";
import logo from "/public/assets/logo.png";
import Link from "next/link";
import MegaMenu from "./MegaMenu";
import { BABY_PRODUCTS, BEST_SELLER, CHOOSE_MEGAMENU, COSMETICS, FACE_MEGAMENU, HAIR_MEGAMENU, MEN_PRODUCTS, SOAP_MEGAMENU } from "@/app/Constants/header";
import facebrand_img1 from "/public/assets/Header/face_category/brand-img1.webp"
import facebrand_img3 from "/public/assets/Header/face_category/brand-img3.webp"
import hairbrand_img1 from "/public/assets/Header/Hair_Category/brand_img1.png"
import hairbrand_img2 from "/public/assets/Header/Hair_Category/brand-img2.webp"
import soapbrand_img1 from "/public/assets/Header/Soap_Category/brand-img1.webp"
import soapbrand_img2 from "/public/assets/Header/Soap_Category/brand-img3.webp"
import Menu from "./Menu";
import MultipleDD from "./MutipleDD";
import ModestMenu from "./ModestMenu";
import OrderSummary from "../pages/ProductPages/OrderSummary";
import { useCartData } from "@/store/cart";

const Header = () => {
  const cartInfo = useCartData();
  let totalProducts = cartInfo.cartproducts.length;
  return (
    <>
      <div className="px-6 flex justify-between items-center py-1">
        <div className="flex justify-between items-center gap-9">
          <div className="flex gap-4">
            <Icon icon="mage:playstore" className="text-3xl text-black" />
            <Icon icon="ic:baseline-apple" className="text-3xl text-black" />
          </div>
          <Link
            href="/"
            className="hover:text-primary text-secondary"
            title="Blog"
          >
            <span className="text-sm font-medium lg:block hidden">Blogs</span>
          </Link>
          <Link
            href="/"
            className="hover:text-primary text-secondary"
            title="Ingredients"
          >
            <span className="text-sm font-medium lg:block hidden">Ingredients</span>
          </Link>
        </div>
        <Link href="/" ><Image src={logo} className="scale-[0.8]" /></Link>
        <div className="flex gap-9 items-center">
          <div className="flex items-center gap-2">
            <div className="search relative md:block hidden">
              <input
                type="search"
                className="py-[6px] ps-9 px-4 block w-[250px] border  border-primary rounded-lg text-sm focus:border-primary focus:ring-primary  dark:bg-neutral-900 placeholder:text-secondary placeholder:opacity-100 font-medium dark:border-neutral-700 placeholder:text-base dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Search...."
              />
              <Icon
                icon="ei:search"
                className="text-[26px] absolute start-2 top-1/2 -translate-y-1/2  opacity-85"
              />
            </div>
            <span className="text-sm text-secondary lg:block hidden">Account</span>
          </div>
          <div className="shopping relative cursor-pointer hover:text-primary" data-hs-overlay="#hs-overlay-example">
            <Icon icon="bytesize:cart" className="text-2xl" />
            <span className="px-[6px] py-[1px] -top-2 -end-2 rounded-full text-xs font-medium text-white bg-primary absolute en-0">
              {totalProducts}
            </span>
          </div>
        </div>
      </div>
      <div className="lg:flex hidden gap-6 justify-center item-center my-1 mb-2">
          <Link href="/" className="p-[6px] bg-primary text-white text-sm self-center rounded-md font-semibold hover:bg-primaryemphasis" >New Launch</Link>
          {/* Face Mega Menu */}
         <MegaMenu title="Face" category_arr={FACE_MEGAMENU.face_category} best_seller_arr={FACE_MEGAMENU.face_best_sellers} brand_img1={facebrand_img1} brand_img2={facebrand_img3} id="face_mega_dropdown" />
         {/* Hair Mega Menu */}
         <MegaMenu title="Hair" category_arr={HAIR_MEGAMENU.hair_category} best_seller_arr={HAIR_MEGAMENU.hair_best_sellers} brand_img1={hairbrand_img1} brand_img2={hairbrand_img2} id="hair_mega_dropdown" />
         {/* Soap Mega Menu */}
         <MegaMenu title="Soap" category_arr={SOAP_MEGAMENU.soap_category} best_seller_arr={SOAP_MEGAMENU.soap_best_sellers} brand_img1={soapbrand_img1} brand_img2={soapbrand_img2} id="soap_mega_dropdown" />
         {/* Best Seller */}
         <Menu title="Best Sellers" menu_arr={BEST_SELLER} id="best_seller_dropdown"  />
         {/* Combo Menu */}
         <MultipleDD/>
         <Link href="/" className="p-[6px] bg-primary text-white self-center text-sm rounded-md font-semibold hover:bg-primaryemphasis" >Travel Minis</Link>
         {/* Choose Menu */}
         <ModestMenu title="Help me choose" face_cat={CHOOSE_MEGAMENU.face_category} hair_cat={CHOOSE_MEGAMENU.hair_category} body_cat={CHOOSE_MEGAMENU.body_category}  id="choose_mega_dropdown"/>
         {/* Men */}
         <Menu title="Men" menu_arr={MEN_PRODUCTS} id="men_product_dropdown"  />
         {/* Baby */}
         <Menu title="Baby" menu_arr={BABY_PRODUCTS} id="baby_product_dropdown"  />
         {/* Cosmetic */}
         <Menu title="Cosmetic" menu_arr={COSMETICS} id="cosmetic_product_dropdown"  />
      </div>
             {/* Offcanvas - Order Summary */}
             <OrderSummary/>
    </>

    
  );
};

export default Header;
