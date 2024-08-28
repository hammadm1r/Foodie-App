import React from "react";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
function MobileNav() {
  return (
    <div className="mobile-nav bg-white ">
    <div className="grid grid-rows-4 bg-inherit h-4/6  relative ">
      <div>
        <div className="feature_btn pt-4">
          <h2><Link to='/' >Home</Link></h2>
        </div>
        <div className="text-primery hover:text-secondry pt-4">
          <h1><Link to='/product' >Products</Link></h1>
        </div>
        <div className="text-primery hover:text-secondry pt-4">
          <h1>About</h1>
        </div>
      </div>
      <div className="flex gap-4  place-content-center absolute inset-x-0 bottom-0 pb-16">
        <div className="Icon_Wrapper border border-grey-200 hover:border-gray-300 cursor-pointer ">
          <FaUser size={20} />
        </div>
        <div className="Icon_Wrapper border border-grey-200 hover:border-gray-300 cursor-pointer">
          <Link to="/cart"><FaCartShopping size={20} /></Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default MobileNav;
