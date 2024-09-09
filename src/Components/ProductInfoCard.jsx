import React from "react";
import product__1 from "../assets/product__1.webp";
import { FaCartShopping } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { addToCart } from '../Store/Slices/CartSlice';
import {addItem} from "../Store/Slices/CartSlice"
import { useDispatch } from 'react-redux';
function ProductInfoCard({img,name,price,product_Id}) {
  const dispatch = useDispatch(); 
  const additem = (e) =>{
    e.preventDefault();
    console.log(name);
    console.log(product_Id);
    const quantity=1;

    dispatch(addItem({name:name,price:price,quantity:quantity,image:img,product_id:product_Id}));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Added To Your Cart",
      showConfirmButton: false,
      timer: 1500
    });
    // if(verify == true){
    // dispatch(addToCart({quantity:quantity,product_id:product_Id}));
    // }
  }
  return (
    <div className="grid lg:grid-cols-2 gap-16 p-6 w-full md:grid-cols-1 sm:grid-cols-1 ">
      <div>
        <img src={img} alt="Name" className="aspect-ratio: 1 / 1 w-full" />
      </div>
      <div className="lg:p-16 sm:p-2 text-left ">
      <h3 className="text-primery text-6xl font-semibold">${price}</h3>
        <h2 className="text-primery text-xl font-bold pt-6">{name}</h2>
        <p className=":pt-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          dolor animi suscipit quaerat unde dolorum quasi totam, inventore
          obcaecati saepe, commodi, eaque id fugit temporibus iure in nam
          dignissimos itaque.
        </p>
        <div className="flex mt-4 ">
          <h3 className="text-xl font-medium pr-2 text-center justify-center ">Quantity:</h3>
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="1"
            min="1"
            max="10"
            className="border rounded-md p-1 w-16 text-center"
          />
          </div>
          
          <div className="flex  justify-center">
          <button onClick={additem} className="flex bg-primery hover:bg-secondry lg:p-3 p-4 mt-10 text-lg lg:text-sm font-semibold text-white rounded-3xl">Add To Cart</button>
          </div>
      </div>
    </div>
  );
}

export default ProductInfoCard;
