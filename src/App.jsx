import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Components/Cart";
import Product from "./Pages/Product";
import ProfilePage from "./Pages/ProfilePage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <><BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/products" element={<Products/>}/>
          <Route path ="/cart" element={<Cart/>}/>
          <Route path ="/product" element={<Product/>}/>
          <Route path ="/profile" element={<ProfilePage/>}/>
          <Route path ="/login" element={<Login/>}/>
          <Route path ="/signup" element={<Signup/>}/>
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
