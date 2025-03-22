import { useState } from "react";

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <img src="/fpt.png" alt="FPT Logo" className="w-16 mx-auto mb-4" />
        <h2 className="text-center text-xl font-bold mb-2">Đăng ký tài khoản</h2>
        
        <form className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Họ và tên"
            className="w-full p-2 border rounded-lg"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded-lg"
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Số điện thoại"
            className="w-full p-2 border rounded-lg"
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Địa chỉ"
            className="w-full p-2 border rounded-lg"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Mật khẩu"
            className="w-full p-2 border rounded-lg"
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Xác nhận mật khẩu"
            className="w-full p-2 border rounded-lg"
            onChange={handleChange}
          />
          <button className="w-full bg-red-500 text-white p-2 rounded-lg font-semibold">
            Đăng ký
          </button>
        </form>


      </div>
    </div>
  );
};

export default RegisterForm;
