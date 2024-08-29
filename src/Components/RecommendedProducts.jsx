import React from 'react'
import Product__1 from '../assets/product__1.webp'
import Product__2 from '../assets/product__2.webp'
import Product__3 from '../assets/product__3.webp'
import Product__4 from '../assets/product__4.webp'
import ProductCard from './ProductCard'
function RecommendedProducts() {
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
        },]
  return (
    <div className="pt-16">
        <div className='text-2xl font-bold'>
            <h3>Recommmended Products</h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
            {product.map(el => (<ProductCard key={el.id} name={el.name} price={el.price} img={el.image} />))}
        </div>

    </div>
  )
}

export default RecommendedProducts
