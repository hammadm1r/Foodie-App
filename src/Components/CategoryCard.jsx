import React from 'react'


function CategoryCard({img,title,count}) {
  return (
    <div className='border border-grey-200 hover:border-gray-300 hover:scale-105 transition-transform rounder-lg'>
        <div className='flex justify-between items-center p-6'>
            <div className="space-y-4">
                <h3 className="font-medium text-xl">{title}</h3>
                <p className="text-gray-500">{count}</p>
            </div>
            <img className="w-[100px]" src={img} alt={title}/>
        </div>
    </div>
  )
}

export default CategoryCard