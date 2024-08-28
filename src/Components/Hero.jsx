import React from 'react'
import heroImg from '../assets/hero__1.webp';
import heroImg2 from '../assets/hero__2.webp';
import heroImg3 from '../assets/hero__3.webp';
import { FaArrowAltCircleRight } from "react-icons/fa";
function Hero() {
  return (
    <div className='container pt-8'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-2 gap-8 '>
            <div className='relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]'>
                <img src={heroImg} alt="Hero Image" className='w-full h-full object-cover' />
                <div className="absolute max-w-[470] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4 text-left">
                    <p className="text-2xl hidden sm:block">100% Original Dy Fruits</p>
                    <h2 className='text 2xl sm:text-4xl md:text-6xl font-bold'>Dried Fruit Best Quality</h2>
                    <p className='text-gray-500 text-xl pt-4 sm:pt-8'>Starting At </p>
                    <div className='font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4'>$18.36</div>
                    <div className='bg-primery hover:bg-secondry text-white rounded-full w-fit item-center gap-4 px-4 py-2 text-[14px] sm:px6 sm:py-3 cursor-pointer flex bold font-bold'>Shop Now<FaArrowAltCircleRight size={25}/></div>
                </div>
            </div>
            <div className='relative xl:col-span-1 xl:row-start-1 xl:row-end-1'>
                <img src={heroImg2} alt="Hero Image" className='w-full h-full object-cover' />
                <div className="absolute max-w-[470] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4 text-left">
                    <h2 className='text 2xl sm:text-3xl font-bold'>Best Yummy Pizza</h2>
                    <p className='text-gray-500 text-xl pt-2'>Starting At </p>
                    <div className='font-medium text-red-600 text-2xl sm:text-4xl pb-4'>$25</div>
                    <div className='bg-primery hover:bg-secondry text-white rounded-full w-fit  item-center gap-4 px-4 py-2 text-[14px] cursor-pointer flex bold font-bold'>Shop Now<FaArrowAltCircleRight size={25}/></div>
                </div>
            </div>
            <div className='relative'>
                <img src={heroImg3} alt="Hero Image" className='w-full h-full object-cover' />
                <div className="absolute max-w-[470] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4 text-left">
                    <h2 className='text 2xl sm:text-3xl font-bold'>Best Yummy Chips</h2>
                    <p className='text-gray-500 text-xl pt-2'>Starting At </p>
                    <div className='font-medium text-red-600 text-2xl sm:text-4xl pb-4'>$5</div>
                    <div className='bg-primery hover:bg-secondry text-white rounded-full w-fit  item-center gap-4 px-4 py-2 text-[14px] cursor-pointer flex bold font-bold'>Shop Now<FaArrowAltCircleRight size={25}/></div>
                </div>
            </div>
            {/* <div className='relative xl:col-span-2 xl:row-start-2 xl:row-end-2'>
                <img src={pizzaHero} alt="Hero Image" className='w-full h-full object-cover' />
            </div> */}
        </div>
    </div>
  )
}

export default Hero