import React from 'react'
import { Link } from 'react-router-dom';
function PaymentCancelled() {
  return (
    <div className='container mt-8'>
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Checkout Cancelled</h1>
        <p className="text-gray-700 mb-6">
          Your checkout process was cancelled. If you have any questions or need assistance, please feel free to contact our support team.
        </p>
        <h2
          className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
            <Link to="/">
            Return to Shop
        </Link> 
          
        </h2>
      </div>
    </div>
    </div>
  )
}

export default PaymentCancelled