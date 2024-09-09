import React from "react";
import CartProductCard from "../Components/CartProductCard";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../Store/Slices/CartSlice";
import { selectTotalPrice } from "../Store/Slices/CartSlice";
import { verify } from "../utils/verify";
import { axiosClient } from "../utils/axios";
import {loadStripe} from '@stripe/stripe-js';
import Swal from "sweetalert2";
function Cart() {
  const cart = useSelector((state) => state.cartReducer.cart);
  console.log(cart);
  
  const totalPrice = useSelector(selectTotalPrice);
  if (verify == true) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getCart());
    }, [dispatch]);
  }

  const makePayment = async() =>{
    if (!cart || cart.length === 0) {
      Swal.fire({
          icon: 'error',
          title: 'Cart Empty',
          text: 'Your cart is empty. Please add items to your cart before proceeding.',
          confirmButtonText: 'Go to Shop'
      }).then((result) => {
          if (result.isConfirmed) {
              window.location.href = '/products'; // Redirect to the shop page
          }
      });
      return;
  }
    let timerInterval;
Swal.fire({
  title: "Checkout",
  html: "Wait Checkout Processing",
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (!cart || cart.length === 0) {
    console.log("Wait for Checkout");
  }
});
    const stripe = await loadStripe("pk_test_51PwtMYKEO6ZlnIFbLpQgxSNnbptu5TyKnk2hWbive0gL9J1R9voOni7HhGgd4p37GIBCdQvJ7g8zEmG6Uw7u9slS00hcxwvLfG")
    const body = {products:cart}
    console.log(body);
    // const headers = {
      
    //   "Content-Type":"application/json"
    // }
    console.log('request Sended')
    try {
      const response = await axiosClient.post("/api/create-checkout-session", body); // Pass body directly here

      const session = response.data; // Access response data correctly
      const result = await stripe.redirectToCheckout({
          sessionId: session.id
      });

      if (result.error) {
          console.log(result.error.message);
      }
  } catch (error) {
      console.error("Error during checkout:", error);
  }
  }
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
            key={el.product?._id || el._id}
            product_id={el.product?.product_id}
            name={el.product?.name || el.name}
            price={el.product?.price || el.price}
            img={el.product?.image || el.image}
            quantity={el.quantity}
          />
        ))}
      </div>
      <div className="">
        <h3 className="text-right text-xl font-semibold bg-primery p-5 ">
          Total Price : ${totalPrice}
        </h3>
        <div className="flex text-right justify-end">
          <button onClick={makePayment} className="flex bg-primery hover:bg-secondry px-5 py-3 mt-6 text-xl   text-white rounded-3xl text-center text-bold justify-center">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
