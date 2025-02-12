import Image from 'next/image'
import React from 'react'

const PressCard = ({pressBrand_top,pressBrand_bottom}) => {
  return (
    <div>
    <Image src={pressBrand_top} className='mb-6' />
    <Image src={pressBrand_bottom} />
    </div>
  )
}

export default PressCard
