import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

function ProductList() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('cartProducts');
    return savedProducts ? JSON.parse(savedProducts) : [
      {
        image: "https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/2024_5_10_638509366374021665_ipad-pro-11-inch-m4-2024-bac.jpg",
        name: "iPad Pro 11 inch M4 2024 Wifi 256GB Bạc MVV93ZA/A",
        color: "Bạc",
        price: "27.790.000 đ",
        originalPrice: "28.990.000 đ",
        warrantyOptions: [
          { name: "Đặc quyền Bảo hành thêm 1 năm iPad (BT)", price: "600.000 đ", originalPrice: "1.200.000 đ" },
          { name: "Đặc quyền Bảo hành trọn đời", price: "1.200.000 đ", originalPrice: "2.400.000 đ" },
          { name: "Dịch vụ F.Studio Premium Care iPad", price: "1.300.000 đ" }
        ],
        isSelected: false
      },
      {
        image: "https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/iphone_16_pink_23227ae794.png",
        name: "iPhone 16 128GB Trắng MYE93VN/A",
        color: "Trắng",
        price: "19.690.000 đ",
        originalPrice: "22.990.000 đ",
        warrantyOptions: [
          { name: "Đặc quyền Bảo hành trọn đời", price: "1.500.000 đ", originalPrice: "2.900.000 đ" },
          { name: "Đặc quyền Bảo hành 2 năm", price: "900.000 đ", originalPrice: "1.800.000 đ" },
          { name: "Dịch vụ F.Studio Premium Care iPhone", price: "1.300.000 đ" }
        ],
        comboOption: { 
          name: "Gói Phụ kiện Chuẩn", 
          price: "999.000 đ", 
          originalPrice: "1.800.000 đ",
          image: "https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/op_lung_magsafe_iphone_16_nhua_cung_chong_soc_esr_02743a8eb2.jpg"
        },
        isSelected: false
      }
    ];
  });

  const [selectAll, setSelectAll] = useState(() => {
    return JSON.parse(localStorage.getItem('selectAll')) || false;
  });

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(products));
    localStorage.setItem('selectAll', JSON.stringify(selectAll));
  }, [products, selectAll]);

  const handleDeleteSelected = () => {
    setProducts(products.filter(product => !product.isSelected));
    setSelectAll(false);
  };

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    setSelectAll(isChecked);
    setProducts(products.map(product => ({ ...product, isSelected: isChecked })));
  };

  const handleDelete = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <div className="flex-1">
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input 
              type="checkbox" 
              className="mr-2" 
              checked={selectAll}
              onChange={handleSelectAll}
            />
            <span>Chọn tất cả ({products.length})</span>
          </div>
          <button 
            onClick={handleDeleteSelected}
            className="text-gray-500 hover:text-red-500"
            disabled={products.length === 0 || !products.some(p => p.isSelected)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
        <div className="space-y-4">
          {products.length > 0 ? (
            products.map((product, index) => (
              <ProductItem 
                key={index} 
                {...product} 
                onDelete={() => handleDelete(index)}
                onToggleSelect={(isChecked) => {
                  const newProducts = [...products];
                  newProducts[index].isSelected = isChecked;
                  setProducts(newProducts);
                  setSelectAll(newProducts.every(p => p.isSelected));
                }}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center">Giỏ hàng trống</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
