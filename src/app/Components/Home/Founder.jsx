import Image from "next/image";
import Pureimg from "/public/assets/Home/About/pure.jpg"
import Qualityimg from "/public/assets/Home/About/quality.jpg"

const Founder = () => {
  return (
    <>
      <div className="py-[60px] border-bordercolor border-t">
        <nav
          className="-mb-0.5 flex justify-center space-x-6"
          aria-label="Tabs"
          role="tablist"
        >
          <button
            type="button"
            className="hs-tab-active:font-medium hs-tab-active:border-black hs-tab-active:text-black py-0 px-1 inline-flex items-center gap-x-2 border-b-4 border-transparent hs-tab-active:text-base text-xs whitespace-nowrap text-gray-subtle transition-all active"
            id="founder-alignment-item-1"
            data-hs-tab="#founder-alignment-1"
            aria-controls="founder-alignment-1"
            role="tab"
          >
            About
          </button>
          <button
            type="button"
            className="hs-tab-active:font-medium hs-tab-active:border-black hs-tab-active:text-base  hs-tab-active:text-black py-2 px-1 inline-flex items-center gap-x-2 border-b-4 border-transparent text-xs whitespace-nowrap text-graysubtle transition-all"
            id="founder-alignment-item-2"
            data-hs-tab="#founder-alignment-2"
            aria-controls="founder-alignment-2"
            role="tab"
          >
            100% Pure
          </button>
          <button
            type="button"
            className="hs-tab-active:font-medium hs-tab-active:border-black hs-tab-active:text-base hs-tab-active:border-b-3 hs-tab-active:text-black py-2 px-1 inline-flex items-center gap-x-2 border-b-4 border-transparent text-xs whitespace-nowrap text-graysubtle transition-all"
            id="founder-alignment-item-3"
            data-hs-tab="#founder-alignment-3"
            aria-controls="founder-alignment-3"
            role="tab"
          >
            Quality Promise
          </button>
        </nav>
        <div className="mt-3">
          <div
            id="founder-alignment-1"
            role="tabpanel"
            aria-labelledby="founder-alignment-item-1"
          >
            <div className="container-sm">
              <div className="w-full flex gap-14">
                <div className="lg:w-5/12 flex px-8 w-full">
                  <iframe
                    src="https://player.vimeo.com/video/751214317?h=476a1e896d"
                    width="100%"
                    height="620px"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="lg:w-6/12 w-full self-center">
                     <h5 className="text-3xl font-semibold text-black mb-3" >Founder's Corner</h5>
                     <p className="text-[13px] font-normal text-black mb-4">Arthi Raguram, the founder of Deyga, is a new-age entrepreneur whose passion for creating nature-inspired, self care products has been a driving force of the brand. Her skincare journey began very early as she was an athletic student who spend most of her time out in the sun. Natural ingredients helped her skin stay protected and healthy.</p>
                     <p className="text-[13px] font-normal text-black mb-4">Growing up with sensitive skin, Arthi decided to steer clear away from products loaded with harsh chemicals. She maintains this resolve with every Deyga creation as well. Arthi made sure every ingredient was handpicked and every product was responsibly crafted. Deyga has now made waves and broke barriers as a community of Eco-conscious customers.</p>
                </div>
              </div>
            </div>
          </div>
          <div
            id="founder-alignment-2"
            className="hidden"
            role="tabpanel"
            aria-labelledby="founder-alignment-item-2"
          >
            <div className="container-sm mt-6">
              <div className="w-full  flex gap-16">
                <div className="lg:w-6/12 w-full h-[515px] max-h-[515px]">
                  <Image src={Pureimg} alt="deyga-img" className="w-full max-w-full h-full "  />
                </div>
                <div className="lg:w-6/12 w-full self-center">
                     <h5 className="text-3xl font-semibold text-black mb-3" >Pure and Natural</h5>
                     <p className="text-[13px] font-normal text-black mb-4">100% Pure. We aim to create the world's most pure, <strong>organic</strong> and all-<strong>natural</strong> line of <strong>cosmetics</strong>, <strong>beauty products</strong> and skincare. Our <strong>cosmetics</strong> are formulated with high-performing antioxidants, naturally occurring vitamins and essential oils to give your skin maximum benefits.</p>
                </div>
              </div>
            </div>
          </div>
          <div
            id="founder-alignment-3"
            className="hidden"
            role="tabpanel"
            aria-labelledby="founder-alignment-item-3"
          >
             <div className="container-sm mt-6">
              <div className="w-full  flex gap-16">
                <div className="lg:w-6/12 w-full h-[515px] max-h-[515px]">
                  <Image src={Qualityimg} alt="deyga-img" className="w-full max-w-full h-full "  />
                </div>
                <div className="lg:w-6/12 w-full self-center">
                     <h5 className="text-3xl font-semibold text-black mb-4" >No Compromise</h5>
                     <p className="text-[13px] font-normal text-black mb-3">Quality is our priority. Every ingredient is sourced from the best of farms across india. The products reflect a fresh feel and fragrance.</p>
                     <p className="text-[13px] font-normal text-black mb-3">MOST IMPORTANTLY - </p>
                     <p className="text-[13px] font-normal text-black ">OUR PRODUCTS DO NOT CONTAIN SLS, SLES, Parabens, MEA, DEA, TEA, Petrolatum, Phthalates, Ethoxylates and Silicones.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Founder;
