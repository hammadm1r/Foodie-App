import React from 'react'
import feature__2 from "../assets/feature__2.webp"
import ProductCard from './ProductCard'
import Product__2 from '../assets/product__2.webp'
import Product__3 from '../assets/product__3.webp'
import Product__4 from '../assets/product__4.webp'
import Product__5 from '../assets/product__5.webp'

function FeatureSectionDairy() {
    const product = [
        {
            id:1,
            name: "Dried Mango",
            price: "$55",
            image: Product__2,
        },
        {
            id:2,
            name: "Banana + Cinamon myesli",
            price: "$35",
            image: Product__3,
        },
        {
            id:3,
            name: "Red Dates",
            price: "$28",
            image: Product__4,
        },
        {
            id:4,
            name: "Freash Tamato",
            price: "$9",
            image: Product__5,
        }
    ]
  return (
    <div className="container pt-16">
        <div className='lg:flex justify-between items-center'>
            <div>
                <h3 className='font-medium text-2xl text-left'>Breakfast & Dairy</h3>
                <p className='text-grey-600 mt-2 text-left'>
                    Buy best quality breakfast online from big-basket stop near you
                </p>
            </div>
            <div className="space-x-4 mt-8 lg:mt-0">
                <button className="feature_btn">Eggs & Dairy</button>
                <button className="text-primery hover:text-secondry ">Pizza </button>
                <button className="text-primery hover:text-secondry ">Bread & Bakery </button>
            </div>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2'>
            <div>
                <img src={feature__2} alt="Fruits" className='w-full h-full object-cover' />
            </div>
                {product.map(el => (<ProductCard key={el.id} name={el.name} price={el.price} img={el.image} />))}
        </div>
    </div>
  )
}

export default FeatureSectionDairy