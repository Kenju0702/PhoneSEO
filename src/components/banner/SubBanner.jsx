import React, { useEffect, useRef, useState } from "react";

const SubBanner = () => {
  const images = [
    "https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_01f767bd39.png",
    "https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_01f767bd39.png",
    "https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_01f767bd39.png",
    "https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_01f767bd39.png",
  ];
  //[]

  // Mỗi ảnh chiếm 50% => hiển thị 2 ảnh trong 1 view
  const visibleImages = 2;
  // Cho slider chạy từ 0 đến (số ảnh - số ảnh hiển thị)
  const maxIndex = images.length - visibleImages; // 4 - 2 = 2

  const [currentIndex, setCurrentIndex] = useState(0);
  const [openButton, setOpenButton] = useState(false);
  const timeoutRef = useRef(null);

  // Tự động chuyển slide sau 3 giây
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenButton(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenButton(false);
    }, 400);
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slider dùng flex để xếp các ảnh liên tục theo hàng */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 50}%)` }}
      >
        {images.map((imgSrc, index) => (
          <div key={index} className="w-1/2 flex-shrink-0">
            <img
              src={imgSrc}
              alt={`Image ${index}`}
              className="w-full object-cover px-2"
            />
          </div>
        ))}
      </div>
      {openButton && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black px-3 py-2 font-bold rounded-full opacity-75 hover:opacity-100 z-10"
          >
            {"<"}
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black font-bold px-3 py-2 rounded-full opacity-75 hover:opacity-100 z-10"
          >
            {">"}
          </button>
        </>
      )}
    </div>
  );
};

export default SubBanner;
