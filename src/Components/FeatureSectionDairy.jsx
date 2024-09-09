import React from 'react'
import feature__2 from "../assets/feature__2.webp"
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../Store/Slices/productSlice";
import { useEffect } from "react";

function FeatureSectionDairy() {
    const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer.products);
 
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
                {product.map(el => (<ProductCard key={el._id}  product_Id = {el._id} name={el.name} price={el.price} img={el.image} />))}
        </div>
    </div>
  )
}

export default FeatureSectionDairy