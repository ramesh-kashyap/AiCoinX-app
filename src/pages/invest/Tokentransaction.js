import React from 'react';


const Tokentransaction = () => {
  return (
    <div className="container bg-n900 min-h-dvh relative overflow-hidden flex justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>

      <div className="relative z-20 w-full">
        <div className="px-6 pt-6 pb-8 bg-white bg-opacity-5 w-full rounded-b-[32px]">
          <div className="flex justify-center items-center flex-col gap-2 w-full">
            <h1 className="text-2xl font-semibold text-center">1INCH Token</h1>
            <div className="px-4 py-2 rounded-lg bg-white bg-opacity-5 flex justify-between items-center gap-2">
              <div className="flex justify-start items-center gap-1">
                <img src="assets/images/1INCH_icon.png" alt="1INCH Icon" className="h-5" />
                <p className="text-n70 text-xs uppercase">1INCH Main network</p>
              </div>
              <i className="ph ph-caret-down text-g300"></i>
            </div>
          </div>
          <div className="pt-8">
            <p className="text-n70 text-sm">Your available balance</p>
            <div className="flex justify-start items-center gap-2">
              <img src="assets/images/1INCH_icon.png" alt="1INCH Icon" />
              <p className="text-[32px] font-bold text-white relative">
                0.180275565
                <span className="text-sm font-normal text-g300 absolute top-1 -right-14">(1INCH)</span>
              </p>
            </div>
            <p className="text-sm text-n70">
              <span className="text-g300">$</span>210.44 (USD)
            </p>
            <div className="my-6 w-full border border-white border-opacity-5 border-dashed"></div>
          </div>
          <div className="flex justify-center items-center gap-8">
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="flex justify-center items-center text-2xl p-4 rounded-full bg-white bg-opacity-5">
                <i className="ph-fill ph-paper-plane-tilt text-g300"></i>
              </div>
              <p className="text-sm font-semibold">Send</p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="flex justify-center items-center text-2xl p-4 rounded-full bg-white bg-opacity-5">
                <i className="ph-fill ph-download-simple text-g300"></i>
              </div>
              <p className="text-sm font-semibold">Receive</p>
            </div>
          </div>
        </div>
        <div className="px-6 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Token History</p>
            <p className="text-sm text-g300">View All</p>
          </div>
          <div className="flex flex-col gap-4 pt-5">
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <div className="flex justify-between items-center gap-2">
                <div className="border-t border-white border-dashed border-opacity-10 w-full"></div>
                <p className="text-xs text-n70 text-nowrap">Mar 8, 2024 at 06:12AM</p>
                <div className="border-t border-white border-dashed border-opacity-10 w-full"></div>
              </div>
              <div className="flex justify-between items-center pt-3">
                <div className="flex justify-start items-start gap-3">
                  <div className="text-2xl text-g300 flex justify-center items-center p-2 rounded-full bg-white bg-opacity-5">
                    <i className="ph ph-arrow-up"></i>
                  </div>
                  <div>
                    <p className="font-semibold pb-1">Send BTC</p>
                    <p className="text-g300 text-sm bg-white bg-opacity-5 px-3 py-1 rounded-md">Confirmed</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold pb-1">0.548546 BTC</p>
                  <p className="text-sm text-end">
                    <span className="text-g300">$</span>44.00
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <div className="flex justify-between items-center gap-2">
                <div className="border-t border-white border-dashed border-opacity-10 w-full"></div>
                <p className="text-xs text-n70 text-nowrap">Apr 9, 2024 at 06:12AM</p>
                <div className="border-t border-white border-dashed border-opacity-10 w-full"></div>
              </div>
              <div className="flex justify-between items-center pt-3">
                <div className="flex justify-start items-start gap-3">
                  <div className="text-2xl text-g300 flex justify-center items-center p-2 rounded-full bg-white bg-opacity-5">
                    <i className="ph ph-arrow-down"></i>
                  </div>
                  <div>
                    <p className="font-semibold pb-1">Receive ETH</p>
                    <p className="text-red-400 text-sm bg-white bg-opacity-5 px-3 py-1 rounded-md">Failed</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold pb-1">0.654165 ETH</p>
                  <p className="text-sm text-end">
                    <span className="text-g300">$</span>32.00
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-white bg-opacity-5">
              <div className="flex justify-between items-center gap-2">
                <div className="border-t border-white border-dashed border-opacity-10 w-full"></div>
                <p className="text-xs text-n70 text-nowrap">June 10, 2024 at 04:34AM</p>
                <div className="border-t border-white border-dashed border-opacity-10 w-full"></div>
              </div>
              <div className="flex justify-between items-center pt-3">
                <div className="flex justify-start items-start gap-3">
                  <div className="text-2xl text-g300 flex justify-center items-center p-2 rounded-full bg-white bg-opacity-5">
                    <i className="ph ph-arrow-up"></i>
                  </div>
                  <div>
                    <p className="font-semibold pb-1">Receive EOS</p>
                    <p className="text-g300 text-sm bg-white bg-opacity-5 px-3 py-1 rounded-md">Confirmed</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold pb-1">0.546641 EOS</p>
                  <p className="text-sm text-end">
                    <span className="text-g300">$</span>28.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokentransaction;