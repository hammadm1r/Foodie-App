import React from 'react'
import { IoLogIn } from "react-icons/io5";
import BgImage from "../assets/Login.jpg"
import logo from "../assets/foodie_logo_pos.png";
import { Link } from 'react-router-dom';
function Signup() {
  return (
    <div><div className='container mt-16 bg-[url("https://www.behance.net/gallery/29090891/Food-Hero-free-download")]'>
    <div className='flex justify-center mb-8'><img src={logo} alt="logo" className='w-44 justify-center text-center align-middle'/></div>
  <div className='flex justify-center '>
      <div className="bg-slate-200 p-10 border rounded-2xl"> 
          <div className="text-2xl font-bold justify-center text-primery flex">
              <h3>Sign up</h3> <IoLogIn size={35} />
          </div>
          <form className="mt-10 ">
                <div className='text-left grid lg:grid-cols-2  p-6 w-full md:grid-cols-1 sm:grid-cols-1 gap-4'>
                <input type="text" placeholder='Name' className='px-5 py-3 text-xl rounded-full '/>
                <input type="text" placeholder='Phone Number' className='px-5 py-3 text-xl rounded-full '/>
              <input type="text" placeholder='Address' className='px-5 py-3 text-xl rounded-full '/>
              <input type="email" placeholder='Email' className='px-5 py-3 text-xl rounded-full '/>
              <input type="password" placeholder='Password' className='px-5 py-3 text-xl rounded-full '/>
              <input type="password" placeholder='Confirm Password' className='px-5 py-3 text-xl rounded-full '/>
              </div>
              <button className="flex bg-primery hover:bg-secondry px-5 py-3 mt-6 text-xl   text-white rounded-3xl w-full text-center text-bold justify-center">Login</button>
          </form>
          
          <div className="text-sm font-semibold justify-center text-White mt-5 lg:text-lg">
              <h3>Registered ? <Link to="/login"><span className='text-primery hover:text-secondry'>Log in </span></Link></h3>
          </div>
      </div>
  </div>
  </div></div>
  )
}

export default Signup