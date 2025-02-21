// Home.js
import React from 'react';
import Banner from '../../components/banner/Banner';
import Product from '../../components/product/Product';
import { PhoneProduct } from '../../components/PhoneProduct/PhoneProduct';
import Promotion from '../../components/promotion/Promotion';


const Home = () => {
  return (
    <>
      <Banner/>
      <Product/>
      <PhoneProduct/>
      <Promotion/>    
      </>
  );
};

export default Home;