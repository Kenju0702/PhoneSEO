import React, {useRef, useState} from "react";
import {FaUserCircle, FaSearch} from "react-icons/fa";
import {IoMdCart} from "react-icons/io";
import {IoMenuSharp} from "react-icons/io5";
import Navigation from "./navigation/NavigationModal";
import { useNavigate } from "react-router-dom";
import LoginForm from "./Login/Login";
import Cart from "./Cart/Cart";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };
  const timeoutRef = useRef(null);

  const navigate = useNavigate(); // Đặt useNavigate ở đầu Header

  const handleLoginClick = () => {
    navigate("/Login"); // Điều hướng đến trang LoginForm
  };

  const cart_click =()=>{
    navigate("/cart")
  }

  // Khi chuột vào nút hoặc menu, hủy timeout nếu có và hiển thị menu
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenMenu(true);
  };



  // Khi chuột ra khỏi nút hoặc menu, thiết lập timeout để ẩn menu sau 200ms
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(false);
    }, 200); // Thời gian trễ 200ms, bạn có thể điều chỉnh theo nhu cầu
  };
  return (
    <div
      className="w-full h-full"
      style={{
        background: "linear-gradient(5deg, #cb1c22 67.61%, #d9503f 95.18%)",
      }}
    >
      <div className="grid grid-cols-[150px_1fr_240px] gap-4 px-5 mx-20  text-white py-2">
        <div className="h-full w-36 p-2 ">
          <img
            src="https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/small/logo_main_ddc98ef35b.png"
            alt="hello"
          />
        </div>
        <div className="search p-2  flex  w-full justify-center  items-center gap-4">
          <div className="navigation">
            <button
              onClick={toggleMenu}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="py-2.5 px-4 relative bg-red-900 w-32 flex gap-0.5 items-center rounded-2xl"
            >
              {" "}
              <IoMenuSharp />
              <span>Danh mục</span>
              {openMenu ? <Navigation /> : null}
            </button>
          </div>
          <div className=" form-Search bg-white rounded-[35px] py-1 px-4 w-full  max-w-[570px]  ">
            {" "}
            <form action="" className="flex">
              <input
                type="text"
                placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm "
                className="text-gray-500 pl-2.5 pr-6 w-full focus:outline-none"
              />{" "}
              <button className="w-9 h-9 rounded-full bg-red-300 flex items-center justify-center">
                <FaSearch className="text-red-400" />
              </button>
            </form>
          </div>
        </div>

        <div className="user flex gap-4  items-center p-2  ">
          <button className="w-10 h-10 rounded-full bg-red-900  flex items-center justify-center">
            <FaUserCircle className="text-2xl"   onClick={handleLoginClick}/>
          </button>
          <div className="cart">
            <button className="py-2.5 px-4 bg-black w-32 flex gap-0.5 items-center text-center content-center rounded-2xl"
            onClick={cart_click}
            >
              <IoMdCart />
              Giỏ Hàng
            </button>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex justify-center gap-4 text-white" >
          <li className="h-full">
            <a href="/" className="p-4 block ">
              Iphone
            </a>
          </li>
          <li className="h-full">
            <a href="/product" className="p-4 block ">
              Samsung
            </a>
          </li>
          <li className="h-full">
            <a href="" className="p-4 block ">
              Oppo
            </a>
          </li>
          <li className="h-full">
            <a href="" className="p-4 block ">
              Xiaomi
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
