import React from 'react';
import { Link } from 'react-router-dom';

function ChooseAccount() {
  return (
    <div className="container bg-n900 h-dvh relative overflow-hidden flex justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>

      <div className="px-6 py-8 relative z-20 w-full">
        {/* Header */}
        <div className="flex justify-start items-center gap-24">
          <Link
            to="/import-seed"  // update route as needed
            className="flex justify-center items-center p-2 rounded-full bg-g300 text-n900"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <div className="flex justify-start items-center">
            <h1 className="font-semibold text-xl">Accounts</h1>
          </div>
        </div>

        {/* Account List */}
        <div className="pt-12 flex flex-col gap-3">
          <Link
            to="/home"  // update route as needed
            className="w-full flex justify-between items-center gap-6 border border-white border-opacity-5 hover:bg-white hover:bg-opacity-5 duration-300 p-4 rounded-xl"
          >
            <div className="flex justify-start items-center gap-3">
              <img src="assets/images/account-img-1.png" alt="DigitalNomad" />
              <div>
                <p className="font-semibold">DigitalNomad</p>
                <p className="text-n70 text-sm">digital_nomad456@example.com</p>
              </div>
            </div>
            <i className="ph ph-caret-right"></i>
          </Link>
          <Link
            to="/home"  // update route as needed
            className="w-full flex justify-between items-center gap-6 border border-white border-opacity-5 hover:bg-white hover:bg-opacity-5 duration-300 p-4 rounded-xl"
          >
            <div className="flex justify-start items-center gap-3">
              <img src="assets/images/account-img-2.png" alt="TechWhiz" />
              <div>
                <p className="font-semibold">TechWhiz</p>
                <p className="text-n70 text-sm">tech_whiz789@example.com</p>
              </div>
            </div>
            <i className="ph ph-caret-right"></i>
          </Link>
          <Link
            to="/home"  // update route as needed
            className="w-full flex justify-between items-center gap-6 border border-white border-opacity-5 hover:bg-white hover:bg-opacity-5 duration-300 p-4 rounded-xl"
          >
            <div className="flex justify-start items-center gap-3">
              <img src="assets/images/account-img-3.png" alt="CoinCollector" />
              <div>
                <p className="font-semibold">CoinCollector</p>
                <p className="text-n70 text-sm">coin_collector654@example.com</p>
              </div>
            </div>
            <i className="ph ph-caret-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ChooseAccount;
