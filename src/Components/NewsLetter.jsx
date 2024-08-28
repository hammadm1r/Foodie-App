import React from 'react'
import { IoMdMailOpen } from "react-icons/io";
function NewsLetter() {
  return (
    <div className='bg-primery mt-16'>
        <div className='container py-8 flex flex-col md:flex-row justify-between item-center gap-4 text-white'>
            <div className='flex flex-shrink-0 item-center gap-4'>
                <IoMdMailOpen className="text-[60px]" /> 
                <div>
                    <h3 className='text-xl sm:text-2xl font-semibold'>
                        Sign up To Our Newsletters
                    </h3>
                    <p>...and recive 20$ coupon for first shopping</p>
                </div>
            </div>
            <div className='w-full max-w-[500px] relative'>
                <input className="py-5 px-6 w-full rounded-full text-primery text-lg" type="text" placeholder='Your Email Adress...'/>
                <button className='bg-primery absolute top-[50%] right-2 translate-y-[-50%] py-2 px-4 rounded-full hover:bg-secondry'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter