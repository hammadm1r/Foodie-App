import React from "react";
import logo from "../assets/foodie_Logo_pos.png";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoReorderThree } from "react-icons/io5";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
function Navbar() {
    let [isMenuOpen,setIsMenuOpen] = useState(false);
    const toggleMenuFunction = () =>{
        setIsMenuOpen(!isMenuOpen);
    }
  return (
    <div className="container ">
      <div className="flex justify-between items-center pt-8 relative">
        <img src={logo} alt="Foodie" className="w-28" />
        <div className="relative w-full max-w-[500px] hidden lg:block ">
          <input
            type="text"
            placeholder="Search..."
            className="bg-slate-50 rounded-2xl px-6 py-3 text-lg w-full border border-grey-200 hover:border-gray-300"
          />
          <IoSearch className="top-0 right-0 absolute mt-3 mr-5" size={25} />
        </div>
        <div className="hidden lg:block">
          <div className="flex gap-4 ">
            <div className="Icon_Wrapper border border-grey-200 hover:border-gray-300 cursor-pointer ">
            <Link to="/profile"><FaUser size={20} /></Link>
            </div>
            <div className="Icon_Wrapper border border-grey-200 hover:border-gray-300 cursor-pointer">
              <Link to="/cart"><FaCartShopping size={20} /></Link>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <div>
            <div className="Icon_Wrapper border border-grey-200 hover:border-gray-300 cursor-pointer " onClick={toggleMenuFunction} >
              <IoReorderThree size={20} />
            </div>
          </div>
        </div>
        <div className="lg:hidden absolute inset-y-0 left-0 w-2/3 mt-20 z-50 ">
           {isMenuOpen? (<MobileNav />):null }
        </div>
      </div>
    </div>
  );
}

export default Navbar;
