import React from 'react'

function FeatureCard({title,icon}) {
  return (
    <div className='flex items-center gap-4'>
        <div className='bg-primery w-[50px] h-[50px] text-white text-[24px] grid place-items-center rounded-full'>{icon}</div>
        <div>
            <h3 className="text-primery font-medium text-xl">{title}</h3>
            <p className='text-gray-500 text-[14px]'>Lorem ipsum dolor sit amet consectetur</p>
        </div>
    </div>
  )
}

export default FeatureCard