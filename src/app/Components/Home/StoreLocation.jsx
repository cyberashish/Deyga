import React from 'react'
import LocationCard from './Cards/LocationCard'
import STORE_LOCATION from '@/app/Constants/location'

const StoreLocation = () => {
  return (
    <div className='py-[60px] bg-lightsubtle'>
        <div className="container-md ">
        <h1 className='text-3xl font-semibold mb-10 text-center' >Store Locations</h1>
         <div className="grid grid-cols-12 gap-10">
           {STORE_LOCATION.map((item)=>{
            return (
                <div className="lg:col-span-4 lg:col-span-6 col-span-12" key={item.key}>
                <LocationCard img={item.img} location={item.location} address={item.address} phone={item.phone} />
            </div>
            )
           })}
         </div>
        </div>
    </div>
  )
}

export default StoreLocation
