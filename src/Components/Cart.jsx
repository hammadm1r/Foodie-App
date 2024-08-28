import React from "react";
import CartProductCard from "./CartProductCard";
import Product__1 from "../assets/Product__1.webp";
import Product__2 from "../assets/product__2.webp";
import Product__3 from "../assets/product__3.webp";
import Product__4 from "../assets/product__4.webp";
function Cart() {
  const product = [
    {
      id: 0,
      name: "Fresh Kiwi",
      price: 9,
      image: Product__1,
    },
    {
      id: 1,
      name: "Dried Mango",
      price: 55,
      image: Product__2,
    },
    {
      id: 2,
      name: "Banana + Cinamon myesli",
      price: 35,
      image: Product__3,
    },
    {
      id: 3,
      name: "Red Dates",
      price: 28,
      image: Product__4,
    },
  ];

  return (
    <div className="container mt-16 p-4">
      <div className="">
        <div className="grid grid-cols-2 bg-primary gap-16 p-6 w-full">
          <div className="text-left">
            <h3>Products</h3>
          </div>
          <div className="flex justify-end text-right  lg:gap-16 md:gap-8">
            <h3>Quantity</h3>
            <h3>Subtotal</h3>
          </div>
        </div>
        {product.map((el) => (
          <CartProductCard
            key={el.id}
            name={el.name}
            price={el.price}
            img={el.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;
