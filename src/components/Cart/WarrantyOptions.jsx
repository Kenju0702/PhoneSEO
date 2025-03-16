import React from 'react';

function WarrantyOptions({ options }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <div className="font-semibold text-red-500 mb-2">Chọn gói bảo hành</div>
      {options.map((option, index) => (
        <div className="flex items-center mb-2" key={index}>
          <input type="radio" name={`warranty${index}`} className="mr-2" />
          <span>
            {option.name} + 
            <span className="text-red-500"> {option.price}</span>
            {option.originalPrice && (
              <span className="line-through text-gray-500"> {option.originalPrice}</span>
            )}
          </span>
        </div>
      ))}
    </div>
  );
}

export default WarrantyOptions;