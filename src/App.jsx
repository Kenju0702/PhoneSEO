import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "./components/Header"
import MenuSub from "./components/navigation/MenuSub"
import { FooterPage } from "./components/Footer"
import Home from "./pages/home/Home"
import Product from "./components/product/Product";
import { ProductPage } from "./pages/product/Product";
import ProductDetail from "./pages/product/productDetail";
import LoginForm from "./components/Login/Login";
import RegisterForm from "./Register/Register";
import React from 'react';
import Cart from "./components/Cart/Cart";
function App() {

  return (
    <>
    <Router>
    <Header/>
    <MenuSub/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/product/:productId" element={<ProductDetail />} /> Route động
        <Route path="/Login" element={<LoginForm />} /> {/* Trang Login */}
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/cart" element={<Cart/>} />

        {/* Thêm các route khác tại đây */}
      </Routes> 
    <FooterPage/>
    </Router>
       </>
  )
}

export default App
