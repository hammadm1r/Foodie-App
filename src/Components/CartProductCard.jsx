import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart, removeItem, updateQuantity } from "../Store/Slices/CartSlice"
import { verify } from "../utils/verify";
function CartProductCard({product_id, name, price, img }) {
  const [totalPrice, setTotalPrice] = useState(price);
  const dispatch = useDispatch();
const setPrice = (e) => {
  const quantity = parseInt(e.target.value, 10); // Convert the input value to an integer
  if (quantity >= 1) {
    setTotalPrice(price * quantity); // Update the total price based on the quantity

    console.log(price);
    }
    dispatch(updateQuantity({name:name,quantity:quantity}));
  }
  const handleDelete = (e) => {
    e.preventDefault();
    if(verify==false){
    dispatch(removeItem({name:name}))
    }
    if(verify==true){
      useEffect(()=>{
        console.log(product_id);
        removeFromCart({product_id})
      })
    }
  }
  return (
    <div className="border border-gray-200 p-4">
      <div className="flex items-center space-x-4">
          <MdDelete  className="text-2xl hover:text-red-600" onClick={handleDelete}/>
        <div className="w-2/12 lg:w-1/12">
          <img src={img} alt={name} className="w-full h-auto object-cover" />
        </div>
        <div className="flex-1 text-primary font-medium text-lg sm:text-xl">
          <h3 className="text-justify">{name}</h3>
        </div>
        <div className="flex items-center space-x-2 text-primary font-medium text-lg sm:text-xl lg:gap-16 md:gap-8 ">
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="1"
            min="1"
            max="10"
            className="border rounded-md p-2 w-16 text-center"
            onClick={setPrice}
          />
          <h3>${totalPrice}</h3>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
