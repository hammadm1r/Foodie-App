import React from "react";
import logo from "../assets/foodie_Logo_pos.png";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoReorderThree } from "react-icons/io5";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { userProfile } from "../Store/Slices/userProfileSlice";
import { verify } from "../utils/verify";
function Navbar() {
  const dispatch = useDispatch();
  const Profile = useSelector((state) => state.profileReducer.profile);
  if(verify){
  useEffect(() => {
    dispatch(userProfile());
  },[]);
}
    let [isMenuOpen,setIsMenuOpen] = useState(false);
    const toggleMenuFunction = () =>{
        setIsMenuOpen(!isMenuOpen);
    }
  return (
    <div className="container">
  <div className="flex justify-between items-center pt-8">
    
    {/* Logo on the left */}
    <img src={logo} alt="Foodie" className="w-28" />
    
    {/* Centered navigation links */}
    <div className="flex-1 justify-center hidden lg:flex">
      <div className="flex gap-7 text-center">
        <h2 className="text-primery hover:text-secondry text-xl font-semibold">
          <Link to="/">Home</Link>
        </h2>
        <h2 className="text-primery hover:text-secondry text-xl font-semibold">
          <Link to="/products">Products</Link>
        </h2>
        <h2 className="text-primery hover:text-secondry text-xl font-semibold"><Link to="/about">About</Link></h2>
      </div>
    </div>
    
    {/* User profile and cart icons on the right (visible on large screens) */}
    <div className="hidden lg:block">
      <div className="flex gap-4">
      <Link to="/profile">
        <div className="Icon_Wrapper border border-grey-200 hover:border-gray-300 cursor-pointer">
            <FaUser size={20} />
        </div>
        </Link>
        <Link to="/cart">
        <div className="Icon_Wrapper border border-grey-200 hover:border-gray-300 cursor-pointer">
            <FaCartShopping size={20} />
        </div>
        </Link>
      </div>
    </div>

    {/* Mobile menu toggle icon (visible on small screens) */}
    <div className="lg:hidden">
      <div className="Icon_Wrapper border border-grey-200 hover:border-gray-300 cursor-pointer" onClick={toggleMenuFunction}>
        <IoReorderThree size={20} />
      </div>
    </div>

    {/* Mobile navigation menu (conditionally rendered) */}
    <div className="lg:hidden absolute inset-y-0 left-0 w-2/3 mt-20 z-50">
      {isMenuOpen ? <MobileNav /> : null}
    </div>
    
  </div>
</div>

  );
}

export default Navbar;
