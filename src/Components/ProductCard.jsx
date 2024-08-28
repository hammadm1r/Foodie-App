import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
function ProductCard({img,name,price}) {
  return (
    <div className="border border-grey-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative">
        <img src={img} alt={name}/>
        <div className='relative space-y-2 p-4'>
            <div className="text-yellow-400 flex gap-[2px] text-[20px]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <CiStar />
            </div>
            <h3 className='font-medium text-left'>{name}</h3>
            <h3 className="text-2xl font-medium text-red-600 text-left">{price}</h3>
            <div className='absolute -top-4 right-2 bg-primery text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer'>
            <FaCartPlus />
            </div>
        </div>
    </div>
  )
}

export default ProductCard