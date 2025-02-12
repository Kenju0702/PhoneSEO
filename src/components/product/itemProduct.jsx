import React from "react";

export default function ItemProduct({img, text, price, discount}) {
  return (
    <div className="border-4 border-red-600 p-4 rounded shadow">
      <div className=" p-4">
        <img src={img} alt={text} className="w-full h-auto" />
        <span className="block mt-2 text-center font-semibold">{text}</span>
      </div>
      <div className="flex items-center">
        <div className="flex flex-wrap">
          <span className="text-red-500 font-bold mr-2">{discount}</span>
          <span className="line-through text-gray-500">{price}</span>
        </div>

        <button className="bg-red-700 text-white px-3 py-1 rounded hover:bg-blue-600">
          Mua ngay
        </button>
      </div>
    </div>
  );
}
