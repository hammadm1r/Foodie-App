import React from "react";
import CartProductCard from "./CartProductCard";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);

  return (
    <div className="container mt-16 p-4">
      <div className="">
        <div className="grid grid-cols-2 bg-primery gap-16 p-6 w-full">
          <div className="text-left">
            <h3>Products</h3>
          </div>
          <div className="flex justify-end text-right  lg:gap-16 md:gap-8 sm:gap-2">
            <h3>Quantity</h3>
            <h3>Subtotal</h3>
          </div>
        </div>
        {cart.map((el) => (
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
