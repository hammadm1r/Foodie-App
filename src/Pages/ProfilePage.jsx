import React from 'react'
import profileImg from "../assets/profileImage.avif"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { userProfile } from "../Store/Slices/userProfileSlice";
import { verify } from "../utils/verify";
import { KEY_ACCESS_TOKEN } from '../utils/localStorageManager';
import Swal from 'sweetalert2';
import { axiosClient } from '../utils/axios';
function ProfilePage() {
  const dispatch = useDispatch();
  const Profile = useSelector((state) => state.profileReducer.profile);
  const handleLogout =(e)=>{
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Logout",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem(KEY_ACCESS_TOKEN)
        Swal.fire({
          title: "Logout",
          text: "Your file has been deleted.",
          icon: "success"
        });
        window.location.replace('/');
      }
    });
  }
  return (
    <div className='container mt-16'>
       <div className="grid lg:grid-cols-2 gap-16 p-6 w-full md:grid-cols-2 sm:grid-cols-1 ">
        <div className=" w-fit justify-center items-center place-content: space-around ">
        <img src={`${axiosClient.defaults.baseURL}${Profile?.image}`} alt="profile picture" className='rounded-full lg:ml-16'/>
        </div>
        <div className='w-full'>
            <div className=''>
                <h1 className='text-3xl font-bold text-left text-primery'>{Profile?.name}</h1>
            </div>
            <div className="text-lg text-left text-gray-500">
                <p className=''>I am Happy</p>
                <p className='mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto reprehenderit voluptatum error odio consequuntur sunt pariatur, totam ipsa? Corrupti consequuntur fuga similique sapiente officia cupiditate nobis dolorem tempore, commodi ipsa!</p>
                <button className="flex bg-primery hover:bg-secondry lg:p-3 p-4 mt-10 text-lg lg:text-sm font-bold text-white rounded-3xl" onClick={handleLogout}>Logout</button>
            </div>
        </div>

       </div>
       <div className='text-lg  text-gray-500 grid lg:grid-cols-2 lg:gap-16 md:gap-8 gap-4  w-full md:grid-cols-2 sm:grid-cols-1 text-center'>
            <h3 className='border rounded-md p-4'>Email : {Profile?.email}</h3>
            <h3 className='border rounded-md p-4'>Phone : +92 {Profile.phone_number}</h3>
            <h3 className='border rounded-md p-4'>Address: {Profile.address}</h3>
            <h3 className='border rounded-md p-4'>Postal Code/Zip Code : {Profile.postal_code}</h3>
            </div>
    </div>
  )
}

export default ProfilePage