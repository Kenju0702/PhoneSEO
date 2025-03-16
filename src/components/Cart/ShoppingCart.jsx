import React from 'react';
import ProductList from './ProductList';
import OrderSummary from './OrderSummary';

function ShoppingCart() {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <ProductList />
      <OrderSummary />
    </div>
  );
}

export default ShoppingCart;