import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import googlePlay from "/public/assets/Home/Footer/google_play.png"
import applestore from "/public/assets/Home/Footer/app_store.png"

const Footer = () => {
  return (
    <>
      <footer className='bg-primary py-6' >
        <div className="container">
            <h3 className='text-3xl text-white font-semibold text-center'> We ❤️ Being Friends</h3>
             <div className="flex gap-12 items-center justify-center my-8">
             <div className="icon-wrapper">
                <Link href="/" ><Icon icon="logos:facebook" className='text-4xl' /></Link>
             </div>
             <Icon icon="fa6-brands:square-x-twitter" className='text-4xl'/>
             <div className="icon-wrapper">
                <Link href="/" ><Icon icon="skill-icons:instagram" className='text-4xl' /></Link>
             </div>
             <Link href="/" ><Icon icon="logos:pinterest" className='text-4xl'/></Link>
             <Link href="/" ><Icon icon="logos:youtube-icon" className='text-3xl'/></Link>
             </div>
             <p className='text-xl mb-6 font-medium text-white text-center'>Choose Pure! Choose Deyga!</p>
             <div className="container-sm">
              <div className="grid grid-cols-12 lg:gap-y-20 lg:gap-x-20 gap-x-0 lg:px-0 px-6">
                 <div className="lg:col-span-3 col-span-12">
                     <h1 className='text-base font-bold text-white mb-6' >Contact</h1>
                      <ul className='flex flex-col gap-4'>
                        <li className='text-[13px] text-white font-semibold group'>
                          <Link href="/" className='group-hover:ps-3 transition-all' >+91 9159305599</Link>
                        </li>
                        <li className='text-[13px] text-white font-semibold group'>
                          <Link href="/" className='group-hover:ps-3 transition-all' >enquiry@deyga.in</Link>
                        </li>
                        <li className='text-[13px] text-white font-semibold group'>
                          <Link href="/" className='group-hover:ps-3 transition-all' >Contact us</Link>
                        </li>
                        <li className='text-base text-white font-semibold uppercase group'>
                          <Link href="/" className='group-hover:ps-3 transition-all' >For Corporate Orders:</Link>
                        </li>
                        <li className='text-[13px] text-white font-semibold group'>
                          <Link href="/" className='group-hover:ps-3 transition-all' >business@deyga.in</Link>
                        </li>
                      </ul>
                 </div>
                 <div className="lg:col-span-3 col-span-12">
                     <h1 className='text-base font-bold text-white mb-6' >Support</h1>
                      <ul className='flex flex-col gap-4'>
                        <li className='text-[13px] text-white font-semibold group'>
                          <Link href="/" className='group-hover:ps-3 transition-all' >About us</Link>
                        </li>
                        <li className='text-[13px] text-white font-semibold group'>
                          <Link href="/" className='group-hover:ps-3 transition-all' >FAQs</Link>
                        </li>
                        <li className='text-[13px] text-white font-semibold group'>
                          <Link href="/" className='group-hover:ps-3 transition-all' >Privacy policy</Link>
                        </li>
                        <li className='text-[13px] text-white font-semibold group'>
                          <Link href="/" className='group-hover:ps-3 transition-all' >Terms and Conditions</Link>
                        </li>
                        <li className='text-[13px] text-white font-semibold group'>
                          <Link href="/" className='group-hover:ps-3 transition-all' >Shipping & Returns</Link>
                        </li>
                      </ul>
                 </div>
                 <div className="lg:col-span-3 col-span-12">
                  <Image src={googlePlay} className='mb-4' width="100%" />
                  <Image src={applestore} />
                 </div>
                 <div className="lg:col-span-3 col-span-12">
                     <h1 className='text-base font-bold text-white mb-6' >Sign-up to get closer</h1>
                      <ul className='flex flex-col gap-4'>
                        <li className='text-[13px] text-white font-normal group'>
                          <Link href="/" >Subscribe to receive updates, access to exclusive deals, and more.</Link>
                        </li>
                      </ul>
                      <div class="relative">
    <input type="email" class="peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-white text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600" placeholder="Enter your email address"/>
    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none"/>
    <Icon icon="oui:email" className='absolute start-0 top-4 text-white' />
    </div>
             <Link href="/" className='mt-6 block text-center' >
               <div className="bg-black text-white py-2 px-3 text-lg hover:bg-primaryemphasis " >
                Subscribe
               </div>
             </Link>
                 </div>
              </div>
             </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
