import React from 'react';
// import './style.css';
// import EthereumImg from 'assets/images/Ethereum_ETH.png';
// import BitcoinImg from 'assets/images/Bitcoin_icon.png';
// import LitecoinImg from 'assets/images/Litecoin.png';
// import ZcashImg from 'assets/images/Zcash.png';
// import VeChainImg from 'assets/images/VeChain.png';
// import BittImg from 'assets/images/bitt.png';
// import BinImg from 'assets/images/bin.png';
// import TetImg from 'assets/images/tet.png';

const Buysells = () => {
  return (
    <div className="container bg-n900 min-h-dvh relative overflow-hidden flex justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>

      <div className="buySellTab pt-8 px-6 w-full relative z-20">
        <ul className="tab-button flex justify-between items-center text-lg font-semibold">
          <li className="activeTabButton tabButton w-full text-center pb-2 border-b-2 border-n700">
            Buy
          </li>
          <li className="tabButton w-full text-center pb-2 border-b-2 border-n700">
            Sell
          </li>
        </ul>

        <div className="pt-8">
          <div className="tab-content activeTab" id="tabOne_data">
            <div className="flex justify-between items-center gap-4 bg-white bg-opacity-5 rounded-lg py-3 px-4">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none bg-transparent w-full text-n70 placeholder:text-n70 text-sm"
              />
              <div>
                <i className="ph ph-magnifying-glass text-g300 text-xl"></i>
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-5">
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
              
              {/* Repeat all other crypto entries similarly */}
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

              {/* Continue with all remaining entries... */}

            </div>
          </div>
          
          <div className="tab-content hiddenTab" id="tabTwo_data">
            {/* Repeat same structure for Sell tab content */}
            <div className="flex justify-between items-center gap-4 bg-white bg-opacity-5 rounded-lg py-3 px-4">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none bg-transparent w-full text-n70 placeholder:text-n70 text-sm"
              />
              <div>
                <i className="ph ph-magnifying-glass text-g300 text-xl"></i>
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-5">
              <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl">
                <div className="flex justify-start items-center gap-2">
                  <p className="text-sm text-n70">#01</p>
                  <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
                    <img src="" alt="Ethereum" />
                  </div>
                  <p className="font-semibold">Ethereum</p>
                </div>
                <div className="flex flex-col justify-end items-end">
                  <p className="font-semibold">$0.352416</p>
                  <p className="text-g300 text-sm">+3.00%</p>
                </div>
              </div>
              
              {/* Repeat all entries again for Sell tab... */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buysells;