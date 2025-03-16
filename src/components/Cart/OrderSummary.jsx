import React from 'react';

function OrderSummary() {
  return (
    <div className="w-full lg:w-1/3">
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <span>Quà tặng</span>
          <a href="#" className="text-blue-500">Xem quà (2)</a>
        </div>
        <div className="flex items-center mb-4">
          <i className="fas fa-gift text-red-500 mr-2"></i>
          <span>Chọn hoặc nhập ưu đãi</span>
        </div>
        <div className="flex items-center mb-4">
          <i className="fas fa-coins text-yellow-500 mr-2"></i>
          <span>Đổi 0 điểm (~0 đ)</span>
          <label className="switch ml-auto">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between mb-2">
            <span>Tổng tiền</span>
            <span className="font-semibold">51.980.000 đ</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Tổng khuyến mãi</span>
            <span className="font-semibold text-red-500">4.500.000 đ</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Cần thanh toán</span>
            <span className="font-semibold text-red-500">47.480.000 đ</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Điểm thưởng</span>
            <span className="font-semibold text-yellow-500">+11,870</span>
          </div>
          <a href="#" className="text-blue-500 mb-4 block">Xem chi tiết</a>
          <button className="w-full bg-red-500 text-white py-2 rounded-lg">
            Xác nhận đơn
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;