import React from 'react';
import { Link } from 'react-router-dom';

function confirmdeposit() {
  return (
    <div className="container bg-n900 min-h-dvh relative overflow-hidden flex justify-start items-start text-white">
      {/* Background Circle */}
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>

      <div className="px-6 py-8 relative z-20 w-full">
        {/* Header */}
        <div className="flex justify-start items-center pb-8 mr-8">
          <Link
            to="/home"  // Adjust the route as needed
            className="flex justify-center items-center p-2 rounded-full bg-g300 text-n900"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <div className="flex justify-center items-center w-full">
            <h1 className="font-semibold text-2xl">Deposit</h1>
          </div>
        </div>

        {/* QR Code Image */}
        <div className="flex justify-center items-center pt-12">
          <img src="/assets/images/qr-code.png" alt="QR Code" />
        </div>

        {/* Amount Section */}
        <div className="flex justify-center items-start gap-1 pt-8">
          <p className="text-xl font-semibold">0.1653 1INCH</p>
          <p className="text-g300 font-semibold">($8.80)</p>
        </div>
        <p className="text-sm text-n70 text-center pt-4">
          Don't risk losing your funds. Protect your wallet by saving it in a place you trust.
        </p>

        {/* Address and Share */}
        <div className="flex justify-center items-center gap-2 pt-6">
          <div className="flex justify-center items-center gap-1 py-2 px-4 bg-white bg-opacity-5 rounded-md">
            <p className="text-xs text-n70">0x76D...fdF0x763D...fdF9</p>
            <i className="ph ph-copy text-g300"></i>
          </div>
          <button>
            <i className="ph ph-share-network text-g300 p-2 bg-white bg-opacity-5 rounded-md"></i>
          </button>
        </div>

        {/* Request Payment Button */}
        <div className="w-full pt-20">
          <Link
            to="/received-amount" // Adjust the route as needed
            className="block bg-g300 font-semibold text-center py-3 rounded-lg"
          >
            Request Payment
          </Link>
        </div>
      </div>
    </div>
  );
}

export default confirmdeposit;
