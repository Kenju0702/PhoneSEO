import React, { useState, useEffect } from 'react';
import WarrantyOptions from './WarrantyOptions';

function ProductItem({
  id,
  image,
  name,
  color,
  price,
  originalPrice,
  warrantyOptions,
  comboOption,
  onDelete,
  onToggleSelect,
  isSelected
}) {
  // Lấy dữ liệu từ localStorage khi tải trang
  const initialQuantity = JSON.parse(localStorage.getItem(`quantity-${id}`)) || 1;
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    localStorage.setItem(`quantity-${id}`, JSON.stringify(quantity));
  }, [quantity, id]);

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          className="mr-2"
          checked={isSelected}
          onChange={(e) => onToggleSelect && onToggleSelect(e.target.checked)}
        />
        <img src={image} alt={name} className="w-16 h-16 object-cover mr-4" />
        <div className="flex-1">
          <div className="font-semibold">{name}</div>
          <div className="text-gray-500">Màu: {color}</div>
        </div>
        <div className="text-red-500 font-semibold">{price}</div>
        <div className="text-gray-500 line-through ml-2">{originalPrice}</div>

        {/* Phần tăng/giảm số lượng */}
        <div className="flex items-center ml-4">
          <button 
            onClick={handleDecrease}
            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l hover:bg-gray-100 focus:outline-none"
          >
            <span className="text-xl font-bold">-</span>
          </button>
          <input 
            type="text" 
            value={quantity} 
            readOnly
            className="w-12 text-center border-t border-b border-gray-300 bg-gray-50"
          />
          <button 
            onClick={handleIncrease}
            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r hover:bg-gray-100 focus:outline-none"
          >
            <span className="text-xl font-bold">+</span>
          </button>
        </div>

        {/* Icon thùng rác */}
        <button
          onClick={onDelete}
          className="ml-4 text-gray-500 hover:text-red-500 transition-colors duration-200 focus:outline-none"
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
      
      <WarrantyOptions options={warrantyOptions} />

      {comboOption && (
        <div className="bg-gray-100 p-4 rounded-lg mt-4">
          <div className="font-semibold text-red-500 mb-2">Combo ưu đãi</div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <img 
              src={comboOption.image} 
              alt={comboOption.name} 
              className="w-16 h-16 object-cover mr-4" 
            />
            <span>
              {comboOption.name} + 
              <span className="text-red-500"> {comboOption.price}</span> 
              <span className="line-through text-gray-500"> {comboOption.originalPrice}</span>
            </span>
            <a href="#" className="text-blue-500 ml-auto">Chi tiết</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductItem;
