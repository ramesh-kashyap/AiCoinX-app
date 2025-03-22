import React, { useState } from "react";
import { Link } from 'react-router-dom';

const PromoCodePage = () => {
  const [promoCode, setPromoCode] = useState("hello");

  return (
    <div className="container bg-n900 min-h-dvh relative overflow-hidden flex justify-start items-start text-white pb-28">
      {/* Background Circle */}
      <div className="w-[582px] h-[582px] rounded-full  absolute -top-32 -left-20 blur-[575px]"></div>

      <div className="relative z-20 p-6 w-full">
        {/* Header */}
        <div className="flex justify-start items-center pb-8 mr-8">
          <Link to="/account" className="flex justify-center items-center p-2 rounded-full bg-g300 text-n900">
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <div className="flex justify-center items-center w-full">
            <h1 className="font-semibold text-2xl">Profile</h1>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center my-6">
          <img
            src="\assets\images\gift.png"
            alt="Promo Code Illustration"
            className="w-48 h-48"
          />
        </div>

        {/* Text Content */}
        <h2 style={{ color: "#000" }}className="text-2xl font-bold text-center text-white mb-2">
          Add Promo Code
        </h2>
        <p style={{ color: "#4f5358" }} className="text-center text-gray-400 mb-6">
          If you have a promo code, add it here to receive the free reward.
        </p>

        {/* Input Field */}
        <div style={{ backgroundColor: "#D1C4E9",marginTop:"20px" }} className="flex items-center bg-gray-100 text-black rounded-lg p-3 mb-6  ">
          <i style={{ color: "#9583ff" }} className="ph-bold ph-tag text-purple-600 text-lg mr-2"></i>
          <input style={{ color: "#4f5358",marginLeft:"10px" }}
            type="text"
            className="bg-transparent flex-1 outline-none text-lg"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
        </div>


        {/* Continue Button */}
        <button  style={{ backgroundColor: "#9583ff",color:"#fff",marginTop:"20px" }}className="w-full bg-purple-600 text-white text-lg font-bold py-3 rounded-lg">
          Continue
        </button>
      </div>
    </div>
  );
};

export default PromoCodePage;
