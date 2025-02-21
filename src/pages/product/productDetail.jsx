import React from "react";
import {useParams} from "react-router-dom";
import Promotion from "../../components/promotion/Promotion";

const ProductDetail = () => {
  const {productId} = useParams();

  const productData = {
    1: {
      title:
        "20w 30W Sạc Nhanh Thông Minh USB C PD US Cắm Dữ Liệu Sạc Nhanh 1 Mét PD Cáp Adapter Dây USB-C Cắm",
      description: "Chi tiết sản phẩm 1",
    },
    2: {title: "Sản phẩm 2", description: "Chi tiết sản phẩm 2"},
  };

  const product = productData[productId];

  if (!product) {
    return <div>Sản phẩm không tồn tại!</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-4">
      <div className="grid grid-cols-[1fr_2fr] gap-4">
        <div>
          <img
            src="https://down-vn.img.susercontent.com/file/sg-11134301-7ra18-m4yf71ymyis7e5@resize_w450_nl.webp"
            alt={product.title}
            className="aspect-square object-cover"
          />
        </div>
        <div className="p-4 bg-gray-100">
          <h1>
            <span className="p-0.5 text-white bg-red-400">yêu thích</span>{" "}
            {product.title}
          </h1>
          <p>{product.description}</p>
          <div className="flex p-4 bg-gray-200 justify-center text-3xl">
            <span className="mr-10 text-red-500">10.000 -50.000 đ</span>
            <span className="line-through font-extralight opacity-20">
              20.000 -70.000 đ
            </span>
          </div>
          <ul className="p-4 bg-gray-200 my-4">
            <li className="grid grid-cols-[1fr_2fr] py-2 w-full">
              <span className="">Mã giảm giá của Shop</span>
              <span className="p-0.5 bg-red-400 w-fit">Giảm 20%</span>
            </li>
            <li className="grid grid-cols-[1fr_2fr] py-2 w-full">
              <span>Vận chuyển</span>
              <span>Nhận hàng 24 Th02 - 1 Th03, phí giao ₫0</span>
            </li>
            <li className="grid grid-cols-[1fr_2fr] py-2 w-full">
              <span>An tâm mua sắm cùng Chúng tôi</span>
              <span>Trả hàng miễn phí 15 ngày · Chính hãng 100%</span>
            </li>
          </ul>
          <div className="flex justify-start gap-4">
            <button className="p-4 bg-red-200 text-red-700">Thêm vào giỏ hàng</button>
            <button className="p-4 bg-red-700 text-white">Mua ngay</button>

          </div>

        </div>
      </div>
            <Promotion/>    
      
    </div>
  );
};

export default ProductDetail;
