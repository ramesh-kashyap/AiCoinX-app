import React from 'react';
import { Link } from 'react-router-dom';

function SendTo() {
  return (
    <div className="container bg-n900 min-h-dvh relative overflow-hidden flex justify-start items-start text-white">
      {/* Background Circle */}
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>

      <div className="px-6 py-8 relative z-20 w-full">
        {/* Header */}
        <div className="flex justify-start items-center pb-8 mr-8">
          <Link
            to="/import-seed"  // Adjust route as needed
            className="flex justify-center items-center p-2 rounded-full bg-g300 text-n900"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <div className="flex justify-center items-center w-full">
            <h1 className="font-semibold text-2xl">Send To</h1>
          </div>
        </div>

        {/* "From" Section */}
        <div>
          <p className="text-sm font-semibold pb-2">From</p>
          <Link
            to="/send-to"  // Adjust route if needed; otherwise, leave as anchor if no navigation change is intended
            className="w-full flex justify-between items-center gap-6 border border-white border-opacity-5 bg-white bg-opacity-5 p-4 rounded-xl"
          >
            <div className="flex justify-start items-center gap-3">
              <img src="assets/images/account-img-3.png" alt="CoinCollector" />
              <div>
                <p className="font-semibold">CoinCollector</p>
                <p className="text-n70 text-sm">
                  Balance: 2.548546 <span className="text-g300">(1INCH)</span>
                </p>
              </div>
            </div>
            <i className="ph ph-caret-right text-g300"></i>
          </Link>
        </div>

        {/* "To" Section */}
        <div className="pt-6">
          <p className="text-sm font-semibold pb-2">To</p>
          <Link
            to="/send-to"  // Adjust route if needed
            className="w-full flex justify-between items-center gap-6 border border-white border-opacity-5 bg-white bg-opacity-5 p-4 rounded-xl"
          >
            <div className="flex justify-start items-center gap-3">
              <img src="assets/images/account-img-2.png" alt="DigitalNomad" />
              <div>
                <p className="font-semibold">DigitalNomad</p>
                <p className="text-n70 text-sm">0x3R2E...DxR9</p>
              </div>
            </div>
            <i className="ph ph-caret-right text-g300"></i>
          </Link>
        </div>

        {/* Next Button */}
        <div className="w-full pt-20">
          <Link
            to="/input-amount" // Adjust route as needed
            className="block bg-g300 font-semibold text-center py-3 rounded-lg"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SendTo;
