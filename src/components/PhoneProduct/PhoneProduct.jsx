import React from "react";
import ItemPhone from "./itemPhone";

export const PhoneProduct = () => {
  const fakeDataArray = [
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-xiaomi-redmi-note-14_2__2.png",

      name: "iPhone 13 Pro",
      cost: "29,000,000 VND",
      discountNumber: "15%",
      discountStudent: "10%",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-xiaomi-redmi-note-14_2__2.png",

      name: "Samsung Galaxy S22",
      cost: "27,000,000 VND",
      discountNumber: "10%",
      discountStudent: "5%",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-xiaomi-redmi-note-14_2__2.png",

      name: "Xiaomi Mi 11",
      cost: "19,000,000 VND",
      discountNumber: "12%",
      discountStudent: "7%",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-xiaomi-redmi-note-14_2__2.png",

      name: "OPPO Find X3",
      cost: "22,000,000 VND",
      discountNumber: "8%",
      discountStudent: "6%",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-xiaomi-redmi-note-14_2__2.png",

      name: "Vivo Y72",
      cost: "15,000,000 VND",
      discountNumber: "5%",
      discountStudent: "3%",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-xiaomi-redmi-note-14_2__2.png",

      name: "Realme 8",
      cost: "13,000,000 VND",
      discountNumber: "10%",
      discountStudent: "5%",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-xiaomi-redmi-note-14_2__2.png",

      name: "Realme 8",
      cost: "13,000,000 VND",
      discountNumber: "10%",
      discountStudent: "5%",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-xiaomi-redmi-note-14_2__2.png",

      name: "Realme 8",
      cost: "13,000,000 VND",
      discountNumber: "10%",
      discountStudent: "5%",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-xiaomi-redmi-note-14_2__2.png",

      name: "Realme 8",
      cost: "13,000,000 VND",
      discountNumber: "10%",
      discountStudent: "5%",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-xiaomi-redmi-note-14_2__2.png",

      name: "Realme 8",
      cost: "13,000,000 VND",
      discountNumber: "10%",
      discountStudent: "5%",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-xiaomi-redmi-note-14_2__2.png",

      name: "Realme 8",
      cost: "13,000,000 VND",
      discountNumber: "10%",
      discountStudent: "5%",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-xiaomi-redmi-note-14_2__2.png",

      name: "Realme 8",
      cost: "13,000,000 VND",
      discountNumber: "10%",
      discountStudent: "5%",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-xiaomi-redmi-note-14_2__2.png",

      name: "Realme 8",
      cost: "13,000,000 VND",
      discountNumber: "10%",
      discountStudent: "5%",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-xiaomi-redmi-note-14_2__2.png",

      name: "Realme 8",
      cost: "13,000,000 VND",
      discountNumber: "10%",
      discountStudent: "5%",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-xiaomi-redmi-note-14_2__2.png",

      name: "Realme 8",
      cost: "13,000,000 VND",
      discountNumber: "10%",
      discountStudent: "5%",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-xiaomi-redmi-note-14_2__2.png",

      name: "Realme 8",
      cost: "13,000,000 VND",
      discountNumber: "10%",
      discountStudent: "5%",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-xiaomi-redmi-note-14_2__2.png",

      name: "Realme 8",
      cost: "13,000,000 VND",
      discountNumber: "10%",
      discountStudent: "5%",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-xiaomi-redmi-note-14_2__2.png",

      name: "Realme 8",
      cost: "13,000,000 VND",
      discountNumber: "10%",
      discountStudent: "5%",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-xiaomi-redmi-note-14_2__2.png",

      name: "Realme 8",
      cost: "13,000,000 VND",
      discountNumber: "10%",
      discountStudent: "5%",
    },
    {
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-xiaomi-redmi-note-14_2__2.png",

      name: "Realme 8",
      cost: "13,000,000 VND",
      discountNumber: "10%",
      discountStudent: "5%",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-4">
      {" "}
      <div className="grid grid-cols-[20%_80%] gap-4 ">
        <div className="w-full">
          <h1 className="uppercase text-2xl text-black text-center p-2">
            Điện Thoại Nổi bật
          </h1>
        </div>

        <ul className="flex justify-center  items-center">
          <li className="p-2 rounded-2xl w-23 mx-3 h-auto text-center  bg-gray-300">
            <a href="">Apple</a>
          </li>
          <li className="p-2 rounded-2xl w-23 mx-3 h-auto text-center  bg-gray-300">
            <a href="">SamSung</a>
          </li>
          <li className="p-2 rounded-2xl w-23 mx-3 h-auto text-center  bg-gray-300">
            <a href="">Xiaomi</a>
          </li>
          <li className="p-2 rounded-2xl w-23 mx-3 h-auto text-center  bg-gray-300">
            <a href="">OPPO</a>
          </li>
          <li className="p-2 rounded-2xl w-23 mx-3 h-auto text-center  bg-gray-300">
            <a href="">Vivo</a>
          </li>
          <li className="p-2 rounded-2xl w-23 mx-3 h-auto text-center  bg-gray-300">
            <a href="">Realme</a>
          </li>
          <li className="p-2 rounded-2xl w-23 mx-3 h-auto text-center  bg-gray-300">
            <a href="">Realme</a>
          </li>
        </ul>
      </div>
      <div className="mt-4 grid grid-cols-5 gap-4">
        {fakeDataArray.map((item, index) => (
          <ItemPhone key={index} {...item} />
        ))}
      </div>{" "}
    </div>
  );
};
