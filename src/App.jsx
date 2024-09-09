import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import ProfilePage from "./Pages/ProfilePage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import RequireUser from "./Components/RequireUser";
import About from "./Components/About";
import PaymentCancelled from "./Components/PaymentCancelled";
import PaymentSuccess from "./Components/PaymentSuccess";
function App() {
  return (
    <><BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/products" element={<Products/>}/>
          <Route path ="/about" element={<About/>}/>
          <Route path ="/cart" element={<Cart/>}/>
          <Route path ="/product/:id" element={<Product/>}/>
          <Route element={<RequireUser/>}>
          <Route path ="/profile" element={<ProfilePage/>}/>
          </Route>
          <Route path ="/login" element={<Login/>}/>
          <Route path ="/signup" element={<Signup/>}/>
          <Route path="/cancel" element={<PaymentCancelled />} />
          <Route path="/success" element={<PaymentSuccess />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
