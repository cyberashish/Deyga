"use client"
import "../../../../node_modules/imagehover.css/scss/imagehover.scss"
import pillar1 from "/public/assets/Home/Pillars/pillar1.png"

const Product_Pillars = [
    {
        key:"Pillar1",
        title:"Handcrafted With Love",
        pathUrl:"/assets/Home/Pillars/pillar1.png",
        width:"120px",
        desc:"Made, mixed, and packed by hand, every single product of ours is crafted with love. Our products aren't about machine-made perfection, they celebrate the handmade grace of unique creations."
    },
    {
        key:"Pillar2",
        title:"100% pure",
        pathUrl:"/assets/Home/Pillars/pillar2.png",
        width:"150px",
        desc:"Purity is our identity. From start to finish with purest of ethically sourced organic matter."
    },
    {
        key:"Pillar3",
        title:"Traditional recepies",
        pathUrl:"/assets/Home/Pillars/pillar3.png",
        width:"150px",
        desc:"Traditional recipes Tradition is inherent. Each product has the humble touch of tradition infused with concern. From making till packing we endure to retain the classic tradition and celebrate the modern elegance"
    },
    {
        key:"Pillar4",
        title:"Cruelty free",
        pathUrl:"/assets/Home/Pillars/pillar4.png",
        width:"150px",
        desc:"Animals matter to us just as much as delivering the right care for you. We are strictly against animal testing and do not use animals in any way to test our products. In our mission to be a hundred percent natural, we’ve created a cruelty free production process."
    },
    {
        key:"Pillar5",
        title:"Deyga family",
        pathUrl:"/assets/Home/Pillars/pillar5.png",
        width:"150px",
        desc:"Every product we create resonates with the emotion of love. Our ever-growing family reciprocates and amplifies this emotion pushing us to the height we are at today. The Deyga family is a group of diverse individuals united by their love for natural and ethical personal care practices."
    },
    {
        key:"Pillar6",
        title:"Sustainable Products",
        pathUrl:"/assets/Home/Pillars/pillar6.png",
        width:"120px",
        desc:"Sustainability is at the heart of our formula crafting. None of our products come at the cost of the environment. Our processes, ingredients and ideas are an expression of love for Mother nature."
    },
]

const SixPillars = () => {
    
    return (
      <div className="py-[60px] border-bordercolor border-t">
        <h1 className="text-black text-[32px] text-center font-bold mb-16">
          The Six Pillars
        </h1>
        <div className="container-xs test">
          <div className="grid grid-cols-12 gap-6 gap-y-10">
            {Product_Pillars.map((item)=>{
                return (
                    <div className="lg:col-span-4 md:col-span-6 col-span-12" key={item.key} >
                    <figure className="imghvr-flip-vert bg-transparent image-effect w-full max-w-full">
                      <img
                        src={item.pathUrl}
                        className="block mx-auto"
                        width={item.width}
                      />
                      <h1 className="text-heading font-semibold text-lg mt-10 pb-14 text-center image-title">
                        {item.title}
                      </h1>
                      <figcaption>
                        <p className="text-sm">
                          {item.desc}
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                )
            })}
          </div>
        </div>
      </div>
    );
}

export default SixPillars