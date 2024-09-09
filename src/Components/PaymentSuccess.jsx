import React from 'react'
import { Link } from 'react-router-dom';
function PaymentSuccess() {
  return (
    <div className='container mt-8'>
    <div className="flex items-center justify-center min-h-screen">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-2xl font-bold text-green-600 mb-4">Checkout Successful</h1>
      <p className="text-gray-700 mb-6">
        Thank you for your purchase! Your order has been processed successfully. A confirmation email has been sent to you.
      </p>
      <h2
          className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
      <Link to="/">
        Continue Shopping
        </Link> 
        </h2>
    </div>
  </div>
  </div>
  )
}

export default PaymentSuccess