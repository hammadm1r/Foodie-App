import React from 'react'
import ProductInfoCard from '../Components/ProductInfoCard'
import RecommendedProducts from '../Components/RecommendedProducts'

function Product({name,img,price}) {
  return (
    <div className="container mt-16">
        <ProductInfoCard name={name} img={img} price={price} />
        <RecommendedProducts />
    </div>
  )
}

export default Product