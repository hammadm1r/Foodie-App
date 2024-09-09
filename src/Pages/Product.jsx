import React from "react";
import ProductInfoCard from "../Components/ProductInfoCard";
import RecommendedProducts from "../Components/RecommendedProducts";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Store/Slices/productSlice";
import { useEffect } from "react";
import Swal from "sweetalert2";
function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();
  
  useEffect(() => {
    // Show loading alert
    Swal.fire({
      title: 'Loading...',
      text: 'Fetching product details',
      icon: 'info',
      showConfirmButton: false,
      allowOutsideClick: false,
      willOpen: () => {
        Swal.showLoading();
      }
    });
    
    // Dispatch action to fetch products
    dispatch(getProducts());

  }, [dispatch]);

  const products = useSelector((state) => state.productReducer.products);

  // Use SweetAlert2 to handle the end of loading
  useEffect(() => {
    if (products.length > 0) {
      Swal.close(); // Close the loading alert when products are loaded
    }
  }, [products]);

  const CurProduct = products.find((el) => el._id === id);
  console.log(CurProduct);
  if (!CurProduct) {
    return (
      <div className="container mt-16">
        <p>Product not found.</p>
      </div>
    );
  }
  return (
    <div className="container mt-16">
      <ProductInfoCard
        name={CurProduct.name}
        img={CurProduct.image}
        price={CurProduct.price}
        product_Id={CurProduct._id}
      />
      <div className="mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-left">Product Quality and Delivery Policies</h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2 text-left">Product Freshness</h3>
        <p className="text-gray-600 text-left">
          <span className="font-semibold">Quality Assurance:</span> We partner with trusted suppliers to ensure that all ingredients and products offered through Foodie meet the highest standards of freshness.
        </p>
        <p className="text-gray-600 mt-2 text-left">
          <span className="font-semibold">Freshness Guarantee:</span> If you receive any item that does not meet your expectations for freshness, please contact us immediately for a replacement or refund.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2 text-left">Product Originality</h3>
        <p className="text-gray-600 text-left">
          <span className="font-semibold">Authenticity:</span> All products available on Foodie are sourced from reputable vendors to ensure authenticity and originality.
        </p>
        <p className="text-gray-600 mt-2 text-left">
          <span className="font-semibold">Transparency:</span> We provide detailed information about the origins and quality of the products to help you make informed choices.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-700 mb-2 text-left">Delivery</h3>
        <p className="text-gray-600 text-left">
          <span className="font-semibold">Timely Delivery:</span> We work with reliable delivery partners to ensure that your orders arrive on time, preserving the quality and freshness of your items.
        </p>
        <p className="text-gray-600 mt-2 text-left">
          <span className="font-semibold">Safe Packaging:</span> All products are carefully packaged to maintain their integrity during transit, ensuring they arrive in perfect condition.
        </p>
      </section>

      <p className="text-gray-600 mt-6 text-left">
        Your satisfaction is our priority. If you encounter any issues with product quality or delivery, please reach out to our support team for assistance.
      </p>
    </div>
      <RecommendedProducts />
    </div>
  );
}

export default Product;
