import React from 'react'
import profileImg from "../assets/profileImage.avif"
function ProfilePage() {
  return (
    <div className='container mt-16'>
       <div className="grid lg:grid-cols-2 gap-16 p-6 w-full md:grid-cols-2 sm:grid-cols-1 ">
        <div className=" w-fit justify-center items-center place-content: space-around ">
        <img src={profileImg} alt="profile picture" className='rounded-full lg:ml-16'/>
        </div>
        <div className='w-full'>
            <div className=''>
                <h1 className='text-3xl font-bold text-left text-primery'>John Doe</h1>
            </div>
            <div className="text-lg text-left text-gray-500">
                <p className=''>Software Engineer</p>
                <p className='mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto reprehenderit voluptatum error odio consequuntur sunt pariatur, totam ipsa? Corrupti consequuntur fuga similique sapiente officia cupiditate nobis dolorem tempore, commodi ipsa!</p>
                <button className="flex bg-primery hover:bg-secondry lg:p-3 p-4 mt-10 text-lg lg:text-sm font-semibold text-white rounded-3xl">Edit Profile</button>
            </div>
        </div>

       </div>
       <div className='text-lg  text-gray-500 grid lg:grid-cols-2 lg:gap-16 md:gap-8 gap-4  w-full md:grid-cols-2 sm:grid-cols-1 text-center'>
            <h3 className='border rounded-md p-4'>Email : hammad24197@gmail.com</h3>
            <h3 className='border rounded-md p-4'>Phone : 03096154169</h3>
            <h3 className='border rounded-md p-4'>Address: Kotli Loharan west Sialkot Punjab,Pakistan</h3>
            <h3 className='border rounded-md p-4'>Postal Code/Zip Code : 51220</h3>
            </div>
    </div>
  )
}

export default ProfilePage