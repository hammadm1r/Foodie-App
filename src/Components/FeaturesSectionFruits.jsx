import React, { useState } from 'react'
import feature__1 from "../assets/feature__1.webp"
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../Store/Slices/productSlice";
import { useEffect } from "react";
function FeaturesSectionFruits() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productReducer.products);
    useEffect(() => {
        dispatch(getProducts());
      }, [dispatch]);
    const [filteredProducts, setFilteredProducts] = useState(products);

    const [activeCategory, setActiveCategory] = useState('Fruits');
    useEffect(() => {
        const defaultCategoryProducts = products.filter((el) => el.category === activeCategory);
        setFilteredProducts(defaultCategoryProducts);
    }, [products, activeCategory]);
    const Category = (cat_Name) =>{
      const cat_products = products.filter((el) => el.category === cat_Name);
      return cat_products.length > 0 ? cat_products : [];
    }
  
    const FilterCategory = (cat_Name) => {
      const cat_products = Category(cat_Name);
          setFilteredProducts(cat_products);
          setActiveCategory(cat_Name);
    }
    
  return (
    <div className="container pt-16">
        <div className='lg:flex justify-between items-center'>
            <div>
                <h3 className='font-medium text-2xl text-left'>Fruits & Vegetable</h3>
                <p className='text-grey-600 mt-2 text-left'>
                    Buy farm fresh fruits and vegetables online at the best prices
                </p>
            </div>
            <div className="space-x-4 mt-8 lg:mt-0">
                <button className={`text-primery hover:text-secondry ${activeCategory ==='Fruits' ? 'text-gray-500' : ''}`}  onClick={() => FilterCategory('Fruits')}>Fruits</button>
                <button className={`text-primery hover:text-secondry ${activeCategory === 'Vegetables' ? 'text-gray-500' : ''}`}  onClick={() => FilterCategory('Vegetables')} >Vegetables</button>
                <button className={`text-primery hover:text-secondry ${activeCategory === 'Bread & Bakery' ? 'text-gray-500' : ''}`}  onClick={() => FilterCategory('Bread & Bakery')}>Bread & Bakery </button>
            </div>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2'>
            <div>
                <img src={feature__1} alt="Fruits" className='w-full h-full object-cover' />
            </div>
                {filteredProducts.map(el => (<ProductCard key={el._id}  product_Id = {el._id} name={el.name} price={el.price} img={el.image} />))}
        </div>
    </div>
  )
}

export default FeaturesSectionFruits