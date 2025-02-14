import Banner from "./components/banner/Banner"
import Header from "./components/Header"
import MenuSub from "./components/navigation/MenuSub"
import { PhoneProduct } from "./components/PhoneProduct/PhoneProduct"
import Product from "./components/product/Product"
import Promotion from "./components/promotion/Promotion"


function App() {

  return (
    <>
      <Header/>
      <MenuSub/>
      <Banner/>
      <Product/>
      <PhoneProduct/>
      <Promotion/>
       </>
  )
}

export default App
