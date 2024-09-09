import React from 'react'
import { IoLogIn } from "react-icons/io5";
import BgImage from "../assets/Login.jpg"
import logo from "../assets/foodie_logo_pos.png";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {axiosClient} from "../utils/axios"
import { setItem,KEY_ACCESS_TOKEN } from '../utils/localStorageManager';
import { useNavigate } from 'react-router-dom';
import { verify } from '../utils/verify';
import Swal from 'sweetalert2';
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const handleform = async(data) =>{
   try {
    const response = await axiosClient.post('/auth/login',data);
    console.log(response);
    if(response.data.status == 'error'){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: response.data.message,
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
    setItem(KEY_ACCESS_TOKEN,response.data.result.token);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "You'r Logged In",
      showConfirmButton: false,
      timer: 1500
    });
    if(verify){
    window.location.replace("/profile");
    }
   } catch (error) {
    console.log(error);
   }
  }
  return (
    <div className='container mt-16 bg-[url("https://www.behance.net/gallery/29090891/Food-Hero-free-download")]'>
      <div className='flex justify-center mb-8'><img src={logo} alt="logo" className='w-44 justify-center text-center align-middle'/></div>
    <div className='flex justify-center '>
        <div className="bg-slate-200 p-10 border rounded-2xl"> 
            <div className="text-2xl font-bold justify-center text-primery flex">
                <h3>LogIn</h3> <IoLogIn size={35} />
            </div>
            <form className="mt-10 text-left" onSubmit={handleSubmit(handleform)}>
                {/* <label for="Email" className='text-xl  text-primery'>Email:</label> */}
                <input type="email" placeholder='jhondoe@gmail.com' className='px-5 py-3 text-xl rounded-full mt-1 lg:ml-3' {...register('email', { required: true })}/>
                {errors.email && <p>Email is required</p>} {/* Error handling */}<br/>
                {/* <label for="Email" className='text-xl  text-primery'>Password:</label> */}
                <input type="password" placeholder='*******' className='px-5 py-3 text-xl rounded-full mt-4 lg:ml-3 ' {...register('password', { required: true })}/>
                {errors.password && <p>Password is required</p>} {/* Error handling */}
                <button className="flex bg-primery hover:bg-secondry px-5 py-3 mt-6 text-xl  text-white rounded-3xl w-full text-center text-bold justify-center" type="submit">Login</button>
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