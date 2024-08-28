import React from 'react'
import FeatureCard from './FeatureCard';
import { FaShippingFast } from "react-icons/fa";
import { BiSolidGift } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
import { IoIosPricetag } from "react-icons/io";
function FeatureSection() {
    const data =[
        {
            title : "Free Shipping",
            icon : <FaShippingFast />
        },
        {
            title : "Best Price",
            icon : <IoIosPricetag />
        },
        {
            title : "Free Curbside Pickup",
            icon : <BiSolidGift />
        },
        {
            title : "Support 24/7",
            icon : <BiSupport />
        },
    ];
  return (
    <div className="container pt-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {data.map(el => (<FeatureCard key={el.title} title={el.title} icon={el.icon}/>))}
        </div>
    </div>
  )
}

export default FeatureSection