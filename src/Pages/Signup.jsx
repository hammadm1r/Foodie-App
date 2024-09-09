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
function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleform = async(data) =>{
    try {
     const response = await axiosClient.post('/auth/signup',data);
     console.log(response);
     if(response.data.status == 'error'){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: response.data.message,
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
     setItem(KEY_ACCESS_TOKEN,response.data.result.token)
     Swal.fire({
      position: "center",
      icon: "success",
      title: "You'r Signed Up",
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
    <div><div className='container mt-16 bg-[url("https://www.behance.net/gallery/29090891/Food-Hero-free-download")]'>
    <div className='flex justify-center mb-8'><img src={logo} alt="logo" className='w-44 justify-center text-center align-middle'/></div>
  <div className='flex justify-center '>
      <div className="bg-slate-200 p-10 border rounded-2xl"> 
          <div className="text-2xl font-bold justify-center text-primery flex">
              <h3>Sign up</h3> <IoLogIn size={35} />
          </div>
          <form className="mt-10 " onSubmit={handleSubmit(handleform)}>
          <div className='px-5 py-3 text-xl rounded-full w-full'><label className='px-2'>Profile Image</label><input type="file" accept="image/png, image/jpg, image/gif, image/jpeg"/> </div>
                <div className='text-left grid lg:grid-cols-2  p-6 w-full md:grid-cols-1 sm:grid-cols-1 gap-4'>
                <input type="text" placeholder='Name' className='px-5 py-3 text-xl rounded-full ' {...register('name', { required: true })}/>
                <input type="text" placeholder='Phone Number' className='px-5 py-3 text-xl rounded-full ' {...register('phone_number', { required: true })} />
              <input type="text" placeholder='Address' className='px-5 py-3 text-xl rounded-full ' {...register('address', { required: true })}/>
              <input type="email" placeholder='Email' className='px-5 py-3 text-xl rounded-full ' {...register('email', { required: true })}/>
              <input type="text" placeholder='Postal Code' className='px-5 py-3 text-xl rounded-full ' {...register('postal_code', { required: true })}/>
              <input type="password" placeholder='Password' className='px-5 py-3 text-xl rounded-full ' {...register('password', { required: true })}/>
              </div>
              <button className="flex bg-primery hover:bg-secondry px-5 py-3 mt-6 text-xl   text-white rounded-3xl w-full text-center text-bold justify-center" type="submit">Sign Up</button>
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