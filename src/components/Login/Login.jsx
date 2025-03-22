import { useState } from "react";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import RegisterForm from "../../Register/Register";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        {/* Logo */}
        {/* <div className="flex justify-center">
          <div className="bg-purple-200 p-4 rounded-full">
            🌐
          </div>
        </div> */}
      <img src="/fpt.png" alt="FPT Logo" className="w-16 h-16 mx-auto rounded-lg" />

        {/* Tiêu đề */}
        <h2 className="text-2xl font-bold text-center mt-4">Chào mừng đến FPT Shop</h2>
        <p className="text-gray-500 text-center">Vui điền thông tin</p>

        {/* Các nút đăng nhập */}
        <div className="flex justify-center gap-4 mt-4">
          <button className="border p-2 rounded-lg w-1/3 flex justify-center">
            <FaGoogle className="text-red-500" />
          </button>
          <button className="border p-2 rounded-lg w-1/3 flex justify-center">
            <FaApple className="text-black" />
          </button>
          <button className="border p-2 rounded-lg w-1/3 flex justify-center">
            <FaFacebook className="text-blue-500" />
          </button>
        </div>

        {/* Hoặc */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Form đăng nhập */}
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-gray-600">Email</label>
          <input
            type="email"
            placeholder="Nhập email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-lg mb-4 focus:ring focus:ring-purple-300"
          />

          <label className="block mb-2 text-gray-600">Mật khẩu</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-lg mb-4 focus:ring focus:red-purple-300"
          />

          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="mr-2" /> Ghi nhớ mất khẩu ? 
            </label>
            <a href="#" className="text-red-600">Quên mật khẩu ?</a>
          </div>

          <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">
            Đăng ký
          </button>
        </form>

        {/* Đăng ký tài khoản */}
        <p className="text-center text-gray-600 mt-4">
          Chưa có tài khoản ? <a href="/register" className="text-red-600">Tạo tài khoản</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
