import React from 'react'
import { IoLogIn } from "react-icons/io5";
import BgImage from "../assets/Login.jpg"
import logo from "../assets/foodie_logo_pos.png";
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className='container mt-16 bg-[url("https://www.behance.net/gallery/29090891/Food-Hero-free-download")]'>
      <div className='flex justify-center mb-8'><img src={logo} alt="logo" className='w-44 justify-center text-center align-middle'/></div>
    <div className='flex justify-center '>
        <div className="bg-slate-200 p-10 border rounded-2xl"> 
            <div className="text-2xl font-bold justify-center text-primery flex">
                <h3>LogIn</h3> <IoLogIn size={35} />
            </div>
            <form className="mt-10 text-left">
                {/* <label for="Email" className='text-xl  text-primery'>Email:</label> */}
                <input type="email" placeholder='jhondoe@gmail.com' className='px-5 py-3 text-xl rounded-full mt-1 lg:ml-3'/><br/>
                {/* <label for="Email" className='text-xl  text-primery'>Password:</label> */}
                <input type="password" placeholder='*******' className='px-5 py-3 text-xl rounded-full mt-4 lg:ml-3 '/>
                <button className="flex bg-primery hover:bg-secondry px-5 py-3 mt-6 text-xl  text-white rounded-3xl w-full text-center text-bold justify-center">Login</button>
            </form>
            
            <div className="text-sm font-semibold justify-center text-White mt-5">
                <h3>Not Registered ? <Link to="/signup"><span className='text-primery hover:text-secondry'>Sign up </span></Link></h3>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login