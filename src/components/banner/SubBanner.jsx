import React, {useEffect, useRef, useState} from "react";

const SubBanner = () => {
  const slides = [
    [
      "https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_01f767bd39.png",
      "https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_01f767bd39.png",
    ],
    [
      "https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_01f767bd39.png",
      "https://cdn2.fptshop.com.vn/unsafe/640x0/filters:quality(100)/H2_614x212_01f767bd39.png",
    ],
    // Bạn có thể thêm nhiều slide hơn nếu cần
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;
  const [openButton, setOpenButton] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentSlide]);
  // Hàm chuyển sang slide tiếp theo
  const nextSlide = () => {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  };

  // Hàm chuyển sang slide trước đó
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
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
    // Wrapper ngoài không có overflow-hidden, giúp nút không bị cắt
    <div
      className="relative w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Container slider có overflow-hidden */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{transform: `translateX(-${currentSlide * 100}%)`}}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="grid grid-cols-2 gap-4 py-4 w-full flex-shrink-0"
            >
              {slide.map((imgSrc, i) => (
                <img
                  key={i}
                  src={imgSrc}
                  alt={`Slide ${index + 1} - Image ${i + 1}`}
                  className="w-full object-cover"
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
  );
};

export default SubBanner;
