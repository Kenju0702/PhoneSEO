import React, { useState } from "react";
import {IoIosStar} from "react-icons/io";
import {FaHeart, FaRegHeart} from "react-icons/fa";

export default function ItemPhone({
  img,
  name,
  cost,
  discountNumber,
  discountStudent,
}) {
  const [like,setLike]=useState(true);
  const togglelike = () =>{
    setLike((prevState)=>!prevState)
  }
  return (
    <div>
      <div className="border-2 border-red-500 p-4 rounded-2xl">
        <img src={img} alt={name} className=" p-4  w-64" />
        <h1 className="text-black text-xl mb-8">{name}</h1>
        <span className="text-red-500 font-bold">{cost}</span>
        <p>Snember giảm giá Thêm <span className="text-red-500 font-bold">{discountNumber}</span></p>
        <p>Student giảm giá Thêm   <span className="text-red-500 font-bold">{discountStudent}</span></p>
        <p className="bg-gray-300 p-0.5 text-center rounded-lg">
          Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng
        </p>
        <div className="flex justify-between p-2 items-center">
          <ul className="flex text-yellow-500">
            <li>
              <IoIosStar />
            </li>
            <li>
              <IoIosStar />
            </li>
            <li>
              <IoIosStar />
            </li>
            <li>
              <IoIosStar />
            </li>
            <li>
              <IoIosStar />
            </li>
          </ul>
          <div className=" p-2">
            <button onClick={togglelike}  className="flex items-center cursor-pointer">
             <span>yêu thích</span>  
            
            {like?<FaRegHeart className=" text-red-600 text-xl ml-2" />:<FaHeart className=" text-red-600 text-xl ml-2" />
            } 
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
