import React from "react";
import CartProductCard from "../Components/CartProductCard";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "../Store/Slices/CartSlice";
function Cart() {
  const cart = useSelector((state) => state.cartReducer.cart);
  const totalPrice = useSelector(selectTotalPrice);
  // const prices = cart.map((el)=>{
  //   return el.price;
  // });
  // console.log(prices);
  // const totalPrice = prices.reduce((total,num)=>total+num ,0);
  // console.log(totalPrice);

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
      <div className="">
        <h3 className="text-right text-xl font-semibold bg-primery p-5 ">Total Price : ${totalPrice}</h3>
        <div className="flex text-right justify-end">
        <button className="flex bg-primery hover:bg-secondry px-5 py-3 mt-6 text-xl   text-white rounded-3xl text-center text-bold justify-center">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;