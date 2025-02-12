import combo_product1_upper from "/public/assets/Home/Products/Combo/combo_upper_product1.webp"
import combo_product1_lower from "/public/assets/Home/Products/Combo/combo_lower_product1.webp"
import combo_product2_upper from "/public/assets/Home/Products/Combo/combo_upper_product2.webp"
import combo_product2_lower from "/public/assets/Home/Products/Combo/combo_lower_product2.webp"
import combo_product3_upper from "/public/assets/Home/Products/Combo/combo_upper_product3.webp"
import combo_product3_lower from "/public/assets/Home/Products/Combo/combo_lower_product3.webp"
import combo_product4_upper from "/public/assets/Home/Products/Combo/combo_upper_product4.webp"
import combo_product4_lower from "/public/assets/Home/Products/Combo/combo_lower_product4.webp"
import combo_product5_upper from "/public/assets/Home/Products/Combo/combo_upper_product5.webp"
import combo_product5_lower from "/public/assets/Home/Products/Combo/combo_lower_product5.webp"
import combo_product6_upper from "/public/assets/Home/Products/Combo/combo_upper_product6.webp"
import combo_product6_lower from "/public/assets/Home/Products/Combo/combo_lower_product6.webp"
import combo_product7_upper from "/public/assets/Home/Products/Combo/combo_upper_product7.webp"
import combo_product7_lower from "/public/assets/Home/Products/Combo/combo_lower_product7.webp"
import combo_product8_upper from "/public/assets/Home/Products/Combo/combo_upper_product8.webp"
import combo_product8_lower from "/public/assets/Home/Products/Combo/combo_lower_product8.webp"

// Carousel Images

// Combo Product1
import hair_product1_carousel1 from "/public/assets/Products/HairCare/haircare_product1_carousel1.webp"
import hair_product1_carousel2 from "/public/assets/Products/HairCare/haircare_product1_carousel2.webp"
import hair_product1_carousel3 from "/public/assets/Products/HairCare/haircare_product1_carousel3.webp"
import hair_product1_carousel4 from "/public/assets/Products/HairCare/haircare_product1_carousel4.webp"
import hair_product1_carousel5 from "/public/assets/Products/HairCare/haircare_product1_carousel5.webp"
// Combo Product2
import combo_product2_carousel1 from "/public/assets/Products/combo/combo_product2_carousel1.webp"
import combo_product2_carousel2 from "/public/assets/Products/combo/combo_product2_carousel2.webp"
// Combo Product3
import hair_product4_carousel1 from "/public/assets/Products/HairCare/haircare_product4_carousel1.webp"
import hair_product4_carousel2 from "/public/assets/Products/HairCare/haircare_product4_carousel2.webp"
import hair_product4_carousel3 from "/public/assets/Products/HairCare/haircare_product4_carousel3.webp"
import hair_product4_carousel4 from "/public/assets/Products/HairCare/haircare_product4_carousel4.webp"
import hair_product4_carousel5 from "/public/assets/Products/HairCare/haircare_product4_carousel5.webp"
// Combo Product4
import combo_product4_carousel1 from "/public/assets/Products/combo/combo_product4_carousel1.webp"
import combo_product4_carousel2 from "/public/assets/Products/combo/combo_product4_carousel2.webp"
// Combo Product5
import hair_product2_carousel1 from "/public/assets/Products/HairCare/haircare_product2_carousel1.webp"
import hair_product2_carousel2 from "/public/assets/Products/HairCare/haircare_product2_carousel2.webp"
import hair_product2_carousel3 from "/public/assets/Products/HairCare/haircare_product2_carousel3.webp"
import hair_product2_carousel4 from "/public/assets/Products/HairCare/haircare_product2_carousel4.webp"
import hair_product2_carousel5 from "/public/assets/Products/HairCare/haircare_product2_carousel5.webp"
// Combo Product6
import combo_product6_carousel1 from "/public/assets/Products/combo/combo_product6_carousel1.webp"
import combo_product6_carousel2 from "/public/assets/Products/combo/combo_product6_carousel2.webp"
import combo_product6_carousel3 from "/public/assets/Products/combo/combo_product6_carousel3.webp"
import combo_product6_carousel4 from "/public/assets/Products/combo/combo_product6_carousel4.webp"
import combo_product6_carousel5 from "/public/assets/Products/combo/combo_product6_carousel5.webp"
// Combo Product7
import combo_product7_carousel1 from "/public/assets/Products/combo/combo_product7_carousel1.webp"
import combo_product7_carousel2 from "/public/assets/Products/combo/combo_product7_carousel2.webp"
import combo_product7_carousel3 from "/public/assets/Products/combo/combo_product7_carousel3.webp"
import combo_product7_carousel4 from "/public/assets/Products/combo/combo_product7_carousel4.webp"
import combo_product7_carousel5 from "/public/assets/Products/combo/combo_product7_carousel5.webp"
// Combo Product8
import combo_product8_carousel1 from "/public/assets/Products/combo/combo_product8_carousel1.webp"
import combo_product8_carousel2 from "/public/assets/Products/combo/combo_product8_carousel2.webp"

const COMBO = [
    {
        key:"combo-hair-strengthening-combo",
        product_upper_image:combo_product1_upper,
        product_lower_image:combo_product1_lower,
        rating:"4.68",
        reviews:"34",
        title:"Hair Strengthening Combo",
        desc:"Strengthens Roots | Conditions Hair",
        price:'1330.00',
        discountedprice:"1199.00",
        helperText:"You’ll save ₹ 131.00",
        href:"/products/combo-hair-strengthening-combo",
        combo:true,
        carousel_images:[
            hair_product1_carousel1,hair_product1_carousel2,hair_product1_carousel3,hair_product1_carousel4,hair_product1_carousel5
        ]
    },
    {
        key:"combo-healthy-glow-combo",
        product_upper_image:combo_product2_upper,
        product_lower_image:combo_product2_lower,
        rating:"4.79",
        reviews:"29",
        title:"Healthy Glow Combo",
        desc:"Hydrates | Brightens | Refreshes",
        price:'1040.00',
        discountedprice:"980.00",
        helperText:"You’ll save ₹ 60.00",
        href:"/products/combo-healthy-glow-combo",
        combo:true,
        carousel_images:[
            combo_product2_carousel1,combo_product2_carousel2
        ]
    },
    {
        key:"combo-hair-care-combo",
        product_upper_image:combo_product3_upper,
        product_lower_image:combo_product3_lower,
        rating:"4.66",
        reviews:"215",
        title:"Hair Care Combo",
        desc:"Strengthens Hair | Improves Scalp Health | Tames Frizz",
        price:'1900.00',
        discountedprice:"1499.00",
        helperText:"You’ll save ₹ 401.00",
        href:"/products/combo-hair-care-combo",
        combo:true,
        carousel_images:[
            hair_product4_carousel1,hair_product4_carousel2,hair_product4_carousel3,hair_product4_carousel4,hair_product4_carousel5
        ]
    },
    {
        key:"combo-anti-pigmentation-combo",
        product_upper_image:combo_product4_upper,
        product_lower_image:combo_product4_lower,
        rating:"4.71",
        reviews:"136",
        title:"De-Tan & Anti-Pigmentation Combo",
        desc:"Controls Pigmentation | Reduces Tan",
        price:'860.00',
        discountedprice:"749.00",
        helperText:"You’ll save ₹ 111.00",
        href:"/products/combo-anti-pigmentation-combo",
        combo:true,
        carousel_images:[
            combo_product4_carousel1,combo_product4_carousel2
        ]
    },
    {
        key:"combo-daily-use-healthy-hair-combo",
        product_upper_image:combo_product5_upper,
        product_lower_image:combo_product5_lower,
        rating:"4.63",
        reviews:"832",
        title:"Daily Use Healthy Hair Combo",
        desc:"Controls Frizz & Breakage | Promotes Hair Growth",
        price:'1300.00',
        discountedprice:"1099.00",
        helperText:"You’ll save ₹ 201.00",
        href:"/products/combo-daily-use-healthy-hair-combo",
        combo:true,
        carousel_images:[
            hair_product2_carousel1,hair_product2_carousel2,hair_product2_carousel3,hair_product2_carousel4,hair_product2_carousel5
        ]
    },
    {
        key:"combo-nourished-lips-combo",
        product_upper_image:combo_product6_upper,
        product_lower_image:combo_product6_lower,
        rating:"4.58",
        reviews:"140",
        title:"Nourished Lips Combo",
        desc:"Exfoliates | Reduces Lip Pigmentation",
        price:'580.00',
        discountedprice:"479.00",
        helperText:"You’ll save ₹ 101.00",
        href:"/products/combo-nourished-lips-combo",
        combo:true,
        carousel_images:[
            combo_product6_carousel1,combo_product6_carousel2,combo_product6_carousel3,combo_product6_carousel4,combo_product6_carousel5
        ]
    },
    {
        key:"combo-clear-skin-combo",
        product_upper_image:combo_product7_upper,
        product_lower_image:combo_product7_lower,
        rating:"4.74",
        reviews:"353",
        title:"Clear Skin Combo",
        desc:"Hydrates Skin | Controls Acne & Pigmentation",
        price:'800.00',
        discountedprice:"649.00",
        helperText:"You’ll save ₹ 151.00",
        href:"/products/combo-clear-skin-combo",
        combo:true,
        carousel_images:[
            combo_product7_carousel1,combo_product7_carousel2,combo_product7_carousel3,combo_product7_carousel4,combo_product7_carousel5
        ]
    },
    {
        key:"combo-acne-relief-combo",
        product_upper_image:combo_product8_upper,
        product_lower_image:combo_product8_lower,
        rating:"4.74",
        reviews:"258",
        title:"Acne Relief Combo",
        desc:"Fights Acne | Lightens Blemishes",
        price:'1040.00',
        discountedprice:"980.00",
        helperText:"You’ll save ₹ 60.00",
        href:"/products/combo-acne-relief-combo",
        combo:true,
        carousel_images:[
            combo_product8_carousel1,combo_product8_carousel2
        ]
    },
]

export default COMBO