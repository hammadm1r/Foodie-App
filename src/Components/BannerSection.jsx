import React from 'react'
import banner__1 from "../assets/banner__1.webp"
import banner__2 from "../assets/banner__2.webp"
function BannerSection() {
  return (
    <div className="container pt-16">
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
            <div className='overflow-hidden rounded-lg'>
                <img className='hover:scale-105 transition-transform' src={banner__1} alt='banner__1'/>
            </div>
            <div className='overflow-hidden rounded-lg'>
                <img className='hover:scale-105 transition-transform' src={banner__2} alt='banner__1'/>
            </div>
        </div>
    </div>
  )
}

export default BannerSection