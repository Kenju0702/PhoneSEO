import React, { useEffect, useRef, useState } from "react";
import ItemProduct from "./ItemProduct";

const Product = () => {
  // Mảng sản phẩm với nhiều object
  const products = [
    {
      img: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/2023_3_10_638140581404516389_noi-lau-dien-mishio-4-lit-mk-348-nau-1.jpg",
      text: "iPhone 16 ProMax",
      price: "32.000.000đ",
      discount: "28.000.000đ",
    },
    {
      img: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/2023_3_10_638140581404516389_noi-lau-dien-mishio-4-lit-mk-348-nau-1.jpg",
      text: "iPhone 16 ProMax",
      price: "32.000.000đ",
      discount: "28.000.000đ",
    },
    {
      img: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/2023_3_10_638140581404516389_noi-lau-dien-mishio-4-lit-mk-348-nau-1.jpg",
      text: "iPhone 16 ProMax",
      price: "32.000.000đ",
      discount: "28.000.000đ",
    },
    {
      img: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/2023_3_10_638140581404516389_noi-lau-dien-mishio-4-lit-mk-348-nau-1.jpg",
      text: "iPhone 16 ProMax",
      price: "32.000.000đ",
      discount: "28.000.000đ",
    },
    {
      img: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/2023_3_10_638140581404516389_noi-lau-dien-mishio-4-lit-mk-348-nau-1.jpg",
      text: "iPhone 16 ProMax",
      price: "32.000.000đ",
      discount: "28.000.000đ",
    },
    {
      img: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/2023_3_10_638140581404516389_noi-lau-dien-mishio-4-lit-mk-348-nau-1.jpg",
      text: "iPhone 16 ProMax",
      price: "32.000.000đ",
      discount: "28.000.000đ",
    },
    {
      img: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/2023_3_10_638140581404516389_noi-lau-dien-mishio-4-lit-mk-348-nau-1.jpg",
      text: "iPhone 16 ProMax",
      price: "32.000.000đ",
      discount: "28.000.000đ",
    },
    {
      img: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/2023_3_10_638140581404516389_noi-lau-dien-mishio-4-lit-mk-348-nau-1.jpg",
      text: "iPhone 16 ProMax",
      price: "32.000.000đ",
      discount: "28.000.000đ",
    },
    // Bạn có thể thêm nhiều sản phẩm khác
  ];

  // Chunk mảng products thành các slide, mỗi slide chứa 4 sản phẩm
  const chunkSize = 4;
  const slides = [];
  for (let i = 0; i < products.length; i += chunkSize) {
    slides.push(products.slice(i, i + chunkSize));
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;
  const [openButton, setOpenButton] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
          const intervalId = setInterval(() => {
            nextSlide();
          }, 2000);
          return () => clearInterval(intervalId);
        }, [currentSlide]);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Hàm chuyển sang slide trước đó
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenButton(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenButton(false);
    }, 400);
  };

  return (
    <div className="max-w-7xl mx-auto py-4">
      <div
        className="relative w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="grid grid-cols-4 gap-4 py-4 w-full flex-shrink-0"
              >
                {slide.map((product, productIndex) => (
                  <ItemProduct
                    key={productIndex}
                    img={product.img}
                    text={product.text}
                    price={product.price}
                    discount={product.discount}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        {openButton && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-white text-black px-3 py-2 font-bold rounded-full opacity-75 hover:opacity-100 z-10"
            >
              {"<"}
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-white text-black font-bold px-3 py-2 rounded-full opacity-75 hover:opacity-100 z-10"
            >
              {">"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
