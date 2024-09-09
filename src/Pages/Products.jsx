import React from "react";
import ProductCard from "../Components/ProductCard";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../Store/Slices/productSlice";
import { useEffect } from "react";
function Products() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="container mt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        {product.map((el) => (
          <ProductCard
            key={el._id}
            product_Id = {el._id}
            name={el.name}
            price={el.price}
            img={el.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
