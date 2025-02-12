import React from "react";
import SubBanner from "./SubBanner";

const Banner = () => {
  return (
    <div className="bg-blue-300 p-5 min-h-[300px] w-full">
      <div className="max-w-7xl mx-auto gap-4">
        <img
          src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/desk_header_c706c7740a.png"
          alt="Banner"
          className="w-full h-auto object-cover"
        />
        <SubBanner />
      </div>
    </div>
  );
};

export default Banner;
