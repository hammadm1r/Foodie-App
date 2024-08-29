import React from 'react'
import feature__1 from "../assets/feature__1.webp"
import ProductCard from './ProductCard'
import Product__1 from '../assets/product__1.webp'
import Product__2 from '../assets/product__2.webp'
import Product__3 from '../assets/product__3.webp'
import Product__4 from '../assets/product__4.webp'
function FeaturesSectionFruits() {

    const product = [
        {
            id:0,
            name: "Fresh Kiwi",
            price: 9,
            image: Product__1,
        },
        {
            id:1,
            name: "Dried Mango",
            price: 55,
            image: Product__2,
        },
        {
            id:2,
            name: "Banana + Cinamon myesli",
            price: 35,
            image: Product__3,
        },
        {
            id:3,
            name: "Red Dates",
            price: 28,
            image: Product__4,
        },
    ]
  return (
    <div className="container pt-16">
        <div className='lg:flex justify-between items-center'>
            <div>
                <h3 className='font-medium text-2xl text-left'>Fruits & Vegetable</h3>
                <p className='text-grey-600 mt-2 text-left'>
                    Buy farm fresh fruits and vegetables onlie at the best prices
                </p>
            </div>
            <div className="space-x-4 mt-8 lg:mt-0">
                <button className="feature_btn">Fruits</button>
                <button className="text-primery hover:text-secondry" >Vegetables</button>
                <button className="text-primery hover:text-secondry ">Bread & Bakery </button>
            </div>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2'>
            <div>
                <img src={feature__1} alt="Fruits" className='w-full h-full object-cover' />
            </div>
                {product.map(el => (<ProductCard key={el.id} name={el.name} price={el.price} img={el.image} />))}
        </div>
    </div>
  )
}

export default FeaturesSectionFruits