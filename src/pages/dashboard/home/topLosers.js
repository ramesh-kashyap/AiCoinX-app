import React from 'react';
import { Link } from 'react-router-dom'; // Uncomment if using React Router

function TopLosers() {
  return (
    <div className="container bg-n900 min-h-dvh relative overflow-hidden flex justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>

      <div className="px-6 py-8 relative z-20 w-full">
        <div className="flex justify-start items-center pb-8 mr-8">
          {/* Replace with <Link> if using React Router */}
          <Link
            to="/home"
            className="flex justify-center items-center p-2 rounded-full bg-g300 text-n900"
          >
            <i className="ph-bold ph-caret-left"></i>
          </Link>
          <div className="flex justify-center items-center w-full">
            <h1 className="font-semibold text-2xl">Top Losers</h1>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-5">
          <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl">
            <div className="flex justify-start items-center gap-2">
              <p className="text-sm text-n70">#01</p>
              <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
                <img src="assets/images/Ethereum_ETH.png" alt="Ethereum" />
              </div>
              <p className="font-semibold">Ethereum</p>
            </div>
            <div className="flex flex-col justify-end items-end">
              <p className="font-semibold">$0.352416</p>
              <p className="text-red-400 text-sm">-7.00%</p>
            </div>
          </div>
          <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl">
            <div className="flex justify-start items-center gap-2">
              <p className="text-sm text-n70">#02</p>
              <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
                <img src="assets/images/Bitcoin_icon.png" alt="Bitcoin" />
              </div>
              <p className="font-semibold">Bitcoin</p>
            </div>
            <div className="flex flex-col justify-end items-end">
              <p className="font-semibold">$0.352416</p>
              <p className="text-red-400 text-sm">-2.00%</p>
            </div>
          </div>
          <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl">
            <div className="flex justify-start items-center gap-2">
              <p className="text-sm text-n70">#03</p>
              <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
                <img src="assets/images/Litecoin.png" alt="Litecoin" />
              </div>
              <p className="font-semibold">Litecoin</p>
            </div>
            <div className="flex flex-col justify-end items-end">
              <p className="font-semibold">$0.352416</p>
              <p className="text-red-400 text-sm">-1.00%</p>
            </div>
          </div>
          <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl">
            <div className="flex justify-start items-center gap-2">
              <p className="text-sm text-n70">#04</p>
              <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
                <img src="assets/images/Zcash.png" alt="Zcash" />
              </div>
              <p className="font-semibold">Zilliqa</p>
            </div>
            <div className="flex flex-col justify-end items-end">
              <p className="font-semibold">$0.352416</p>
              <p className="text-red-400 text-sm">-1.00%</p>
            </div>
          </div>
          <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl">
            <div className="flex justify-start items-center gap-2">
              <p className="text-sm text-n70">#05</p>
              <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
                <img src="assets/images/Litecoin.png" alt="Litecoin" />
              </div>
              <p className="font-semibold">Worldcoin</p>
            </div>
            <div className="flex flex-col justify-end items-end">
              <p className="font-semibold">$0.352416</p>
              <p className="text-red-400 text-sm">-5.00%</p>
            </div>
          </div>
          <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl">
            <div className="flex justify-start items-center gap-2">
              <p className="text-sm text-n70">#06</p>
              <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
                <img src="assets/images/VeChain.png" alt="VeChain" />
              </div>
              <p className="font-semibold">BitDAO</p>
            </div>
            <div className="flex flex-col justify-end items-end">
              <p className="font-semibold">$0.352416</p>
              <p className="text-red-400 text-sm">-0.00%</p>
            </div>
          </div>
          <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl">
            <div className="flex justify-start items-center gap-2">
              <p className="text-sm text-n70">#07</p>
              <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
                <img src="assets/images/bitt.png" alt="Bittensor" />
              </div>
              <p className="font-semibold">Bittensor</p>
            </div>
            <div className="flex flex-col justify-end items-end">
              <p className="font-semibold">$0.352416</p>
              <p className="text-red-400 text-sm">-3.00%</p>
            </div>
          </div>
          <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl">
            <div className="flex justify-start items-center gap-2">
              <p className="text-sm text-n70">#08</p>
              <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
                <img src="assets/images/bin.png" alt="Binance" />
              </div>
              <p className="font-semibold">Binance</p>
            </div>
            <div className="flex flex-col justify-end items-end">
              <p className="font-semibold">$0.352416</p>
              <p className="text-red-400 text-sm">-1.00%</p>
            </div>
          </div>
          <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl">
            <div className="flex justify-start items-center gap-2">
              <p className="text-sm text-n70">#09</p>
              <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
                <img src="assets/images/tet.png" alt="Tether" />
              </div>
              <p className="font-semibold">Tether</p>
            </div>
            <div className="flex flex-col justify-end items-end">
              <p className="font-semibold">$0.352416</p>
              <p className="text-red-400 text-sm">-3.00%</p>
            </div>
          </div>
          <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl">
            <div className="flex justify-start items-center gap-2">
              <p className="text-sm text-n70">#10</p>
              <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
                <img src="assets/images/Zcash.png" alt="Zcash" />
              </div>
              <p className="font-semibold">Zilliqa</p>
            </div>
            <div className="flex flex-col justify-end items-end">
              <p className="font-semibold">$0.352416</p>
              <p className="text-red-400 text-sm">-6.00%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopLosers;
