import React from 'react';


const Fromswap = () => {
  return (
    <div className="container bg-n900 min-h-dvh relative overflow-hidden flex justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>
      
      <div className="px-6 py-8 relative z-20 w-full">
        <div className="flex justify-start items-center pb-8 mr-8">
          <a
            href="swap.html"
            className="flex justify-center items-center p-2 rounded-full bg-g300 text-n900"
          >
            <i className="ph-bold ph-caret-left"></i>
          </a>
          <div className="flex justify-center items-center w-full">
            <h1 className="font-semibold text-2xl">Swap From</h1>
          </div>
        </div>
        
        <div className="flex justify-between items-center gap-4 bg-white bg-opacity-5 rounded-lg py-3 px-4">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none bg-transparent w-full text-n70 placeholder:text-n70 text-sm"
          />
          <div className="">
            <i className="ph ph-magnifying-glass text-g300 text-xl"></i>
          </div>
        </div>
        
        <div className="flex flex-col gap-2 pt-5">
          {/* Crypto Item 1 */}
          <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl">
            <div className="flex justify-start items-center gap-2">
              <p className="text-sm text-n70">#01</p>
              <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
                <img src="/assets/images/Ethereum_ETH.png" alt="Ethereum" />
              </div>
              <p className="font-semibold">Ethereum</p>
            </div>
            <div className="flex flex-col justify-end items-end">
              <p className="font-semibold">$0.352416</p>
              <p className="text-g300 text-sm">+3.00%</p>
            </div>
          </div>

          {/* Crypto Item 2 */}
          <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl">
            <div className="flex justify-start items-center gap-2">
              <p className="text-sm text-n70">#02</p>
              <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
                <img src="/assets/images/Bitcoin_icon.png" alt="Bitcoin" />
              </div>
              <p className="font-semibold">Bitcoin</p>
            </div>
            <div className="flex flex-col justify-end items-end">
              <p className="font-semibold">$0.352416</p>
              <p className="text-g300 text-sm">+3.00%</p>
            </div>
          </div>

          {/* Crypto Item 3 */}
          <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl">
            <div className="flex justify-start items-center gap-2">
              <p className="text-sm text-n70">#03</p>
              <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
                <img src="/assets/images/Litecoin.png" alt="Litecoin" />
              </div>
              <p className="font-semibold">Litecoin</p>
            </div>
            <div className="flex flex-col justify-end items-end">
              <p className="font-semibold">$0.352416</p>
              <p className="text-g300 text-sm">+3.00%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fromswap;