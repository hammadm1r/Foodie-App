import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { FaCartPlus } from "react-icons/fa";
import {addItem} from "../Store/Slices/CartSlice"
import Product from "../Pages/Product";
import { addToCart } from '../Store/Slices/CartSlice';
import RequireUser from './RequireUser';
import { verify } from '../utils/verify';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function ProductCard({product_Id,img,name,price}) {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const additem = (e) =>{
    e.preventDefault();
    e.stopPropagation()
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
    if(verify == true){
    dispatch(addToCart({quantity:quantity,product_id:product_Id}));
    }
    console.log("Added To Cart")
  }
  const openProduct = (e) =>{
    e.preventDefault();
    navigate(`/product/${product_Id}`, { replace: true });

  }
  return (
    <div className="border border-grey-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative" onClick={openProduct}>
        <img src={img} alt={name}/>
        <div className='relative space-y-2 p-4'>
            <div className="text-yellow-400 flex gap-[2px] text-[20px]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <CiStar />
            </div>
            <h3 className='font-medium text-left'>{name}</h3>
            <h3 className="text-2xl font-medium text-red-600 text-left">${price}</h3>
            <div className='absolute -top-4 right-2 bg-primery text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer' onClick={additem}>
            <FaCartPlus />
            </div>
        </div>
    </div>
  )
}

export default ProductCard