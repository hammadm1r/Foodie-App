import React from 'react'

function About() {
  return (
      <div className="container mx-auto text-center pt-16 md:pt-8">
        <h2 className="text-3xl font-bold text-primery mb-6">About Foodie</h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          Welcome to Foodie, your go-to online marketplace for all things delicious! We are dedicated to bringing you the finest ingredients, gourmet products, and culinary delights from around the world. Whether you're a home cook, a professional chef, or simply someone who loves food, we've got something special for you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-200 p-6 rounded-lg shadow-2xl">
            <h3 className="text-xl font-semibold text-primery mb-3">Our Mission</h3>
            <p className="text-gray-500">
              At Foodie, our mission is to make high-quality food accessible to everyone. We believe that great food brings people together, and we are passionate about sharing the joys of cooking and eating with the world.
            </p>
          </div>
          <div className="bg-slate-200 p-6 rounded-lg shadow-2xl">
            <h3 className="text-xl font-semibold text-primery mb-3">Our Products</h3>
            <p className="text-gray-500">
              We offer a wide range of products, from fresh produce and artisanal ingredients to kitchen essentials and gourmet treats. All of our products are carefully curated to ensure the highest quality and flavor.
            </p>
          </div>
          <div className="bg-slate-200 p-6 rounded-lg shadow-2xl">
            <h3 className="text-xl font-semibold text-primery mb-3">Our Commitment</h3>
            <p className="text-gray-500">
              We are committed to sustainability and ethical sourcing. We work closely with our suppliers to ensure that all of our products are sourced responsibly and that our business practices contribute positively to the environment and communities we serve.
            </p>
          </div>
        </div>
      </div>
  )
}

export default About