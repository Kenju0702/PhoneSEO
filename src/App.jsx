import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import MenuSub from "./components/navigation/MenuSub"
import { FooterPage } from "./components/Footer"
import Home from "./pages/home/Home"
import Product from "./components/product/Product";
import { ProductPage } from "./pages/product/Product";
import ProductDetail from "./pages/product/productDetail";


function App() {

  return (
    <>
    <Router>
    <Header/>
    <MenuSub/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/product/:productId" element={<ProductDetail />} /> {/* Route động */}

        {/* Thêm các route khác tại đây */}
      </Routes> 
    <FooterPage/>
    </Router>
       </>
  )
}

export default App
