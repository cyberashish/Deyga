"use client"

import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const LocationCard = ({img,location,address,phone}) => {
    const router = useRouter();
  return (
     <div onClick={() => router.push("/") } className="big-wrapper relative cursor-pointer rounded-lg overflow-hidden hover:shadow-sm transition-all duration-200">
    <div>
       <Image src={img} className='max-w-full w-full' />
        <div className="info-wrapper bg-white p-5">
            <h3 className='text-xl font-bold mb-5' >{location}</h3>
            <div className="flex items-center gap-2 mb-2">
                <Icon icon="ion:location-outline" className='text-2xl shrink-0' />
                <p className='text-sm text-black' >{address}</p>
            </div>
            <div className="flex items-center gap-2">
                <Icon icon="ph:phone" className='text-2xl shrink-0' />
                <p className='text-[15px] text-black' >{phone}</p>
            </div>
        </div>
    </div>
      <Link href="/" className='py-2 px-3 bg-white flex items-center gap-1 rounded-lg absolute top-4 end-4' >
      <Icon icon="mdi:location" className='text-xl shrink-0 text-black' />
       <span className='text-xs font-semibold text-black' >Get Direction</span>
      </Link>
     </div>

  )
}

export default LocationCard
