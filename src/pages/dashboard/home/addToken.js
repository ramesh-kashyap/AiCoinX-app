import React, { useState } from 'react';
// If using React Router for navigation, import Link
// import { Link } from 'react-router-dom';

function AddToken() {
  const [activeTab, setActiveTab] = useState('search');

  return (
    <div className="container bg-n900 min-h-dvh relative overflow-hidden flex justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>

      <div className="relative z-20 w-full p-6">
        <div className="flex justify-center items-center flex-col gap-2 w-full">
          <h1 className="text-2xl font-semibold text-center">Add Token</h1>
          <div className="px-4 py-2 rounded-lg bg-white bg-opacity-5 flex justify-between items-center gap-2">
            <div className="flex justify-start items-center gap-1">
              <img src="assets/images/1INCH_icon.png" alt="1INCH Icon" className="h-5" />
              <p className="text-n70 text-xs uppercase">1INCH Main network</p>
            </div>
            <i className="ph ph-caret-down text-g300"></i>
          </div>
        </div>

        <div className="my-8 border-t border-dashed border-white border-opacity-10"></div>
        <div className="homeTab">
          <ul className="tab-button flex justify-between items-center text-lg font-semibold">
            <li
              onClick={() => setActiveTab('search')}
              className={`tabButton w-full text-center pb-2 border-b-2 border-n700 cursor-pointer ${
                activeTab === 'search' ? 'activeTabButton' : ''
              }`}
            >
              Search
            </li>
            <li
              onClick={() => setActiveTab('custom')}
              className={`tabButton w-full text-center pb-2 border-b-2 border-n700 cursor-pointer ${
                activeTab === 'custom' ? 'activeTabButton' : ''
              }`}
            >
              Custom Token
            </li>
          </ul>

          <div className="pt-8">
            {activeTab === 'search' && (
              <div className="tab-content" id="tabOne_data">
                <div className="flex justify-between items-center gap-4 bg-white bg-opacity-5 rounded-lg py-3 px-4">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="outline-none bg-transparent w-full text-n70 placeholder:text-n70 text-sm"
                  />
                  <div>
                    <i className="ph ph-magnifying-glass text-n70 text-xl"></i>
                  </div>
                </div>
                <div className="flex flex-col gap-5 pt-6">
                  <div className="flex justify-between items-center border-b border-white border-dashed border-opacity-5 pb-5">
                    <div className="flex justify-start items-center gap-2">
                      <div className="size-10 rounded-full bg-white bg-opacity-5 flex justify-center items-center">
                        <img src="assets/images/Zcash.png" alt="Zcash" className="h-5" />
                      </div>
                      <div className="flex justify-start items-center gap-2">
                        <p className="font-semibold">CryptoGems</p>
                        <p className="text-g300 text-sm uppercase">GEMS</p>
                      </div>
                    </div>
                    <i className="ph ph-check text-g300"></i>
                  </div>
                  <div className="flex justify-between items-center border-b border-white border-dashed border-opacity-5 pb-5">
                    <div className="flex justify-start items-center gap-2">
                      <div className="size-10 rounded-full bg-white bg-opacity-5 flex justify-center items-center">
                        <img src="assets/images/Zcash.png" alt="Zcash" className="h-5" />
                      </div>
                      <div className="flex justify-start items-center gap-2">
                        <p className="font-semibold">BitPulse</p>
                        <p className="text-g300 text-sm uppercase">BPUL</p>
                      </div>
                    </div>
                    <i className="ph ph-check text-g300"></i>
                  </div>
                  <div className="flex justify-between items-center border-b border-white border-dashed border-opacity-5 pb-5">
                    <div className="flex justify-start items-center gap-2">
                      <div className="size-10 rounded-full bg-white bg-opacity-5 flex justify-center items-center">
                        <img src="assets/images/Zcash.png" alt="Zcash" className="h-5" />
                      </div>
                      <div className="flex justify-start items-center gap-2">
                        <p className="font-semibold">TokenForge</p>
                        <p className="text-g300 text-sm uppercase">TFOR</p>
                      </div>
                    </div>
                    <i className="ph ph-check text-g300"></i>
                  </div>
                  <div className="flex justify-between items-center border-b border-white border-dashed border-opacity-5 pb-5">
                    <div className="flex justify-start items-center gap-2">
                      <div className="size-10 rounded-full bg-white bg-opacity-5 flex justify-center items-center">
                        <img src="assets/images/Zcash.png" alt="Zcash" className="h-5" />
                      </div>
                      <div className="flex justify-start items-center gap-2">
                        <p className="font-semibold">CoinCraft</p>
                        <p className="text-g300 text-sm uppercase">CRAFT</p>
                      </div>
                    </div>
                    <i className="ph ph-check text-g300"></i>
                  </div>
                  <div className="flex justify-between items-center border-b border-white border-dashed border-opacity-5 pb-5">
                    <div className="flex justify-start items-center gap-2">
                      <div className="size-10 rounded-full bg-white bg-opacity-5 flex justify-center items-center">
                        <img src="assets/images/Zcash.png" alt="Zcash" className="h-5" />
                      </div>
                      <div className="flex justify-start items-center gap-2">
                        <p className="font-semibold">TokenVerse</p>
                        <p className="text-g300 text-sm uppercase">TVRS</p>
                      </div>
                    </div>
                    <i className="ph ph-check text-g300"></i>
                  </div>
                </div>

                <div className="w-full pt-20">
                  <a
                    href=""
                    className="block bg-g300 font-semibold text-center py-3 rounded-lg"
                  >
                    Next
                  </a>
                </div>
              </div>
            )}

            {activeTab === 'custom' && (
              <div className="tab-content" id="tabTwo_data">
                <p className="text-lg font-semibold">
                  Select the type of account you want to Create
                </p>
                <div className="flex justify-start gap-2 overflow-x-auto vertical-scrollbar py-3">
                  <div className="p-3 border border-white border-opacity-5 flex justify-center items-center rounded-md">
                    <div className="flex justify-center items-center bg-white bg-opacity-5 rounded-full size-10">
                      <i className="ph ph-sliders-horizontal text-g300"></i>
                    </div>
                  </div>
                  <div className="p-3 border border-white border-opacity-5 flex flex-col justify-center items-center rounded-md">
                    <div className="flex justify-center items-center bg-white bg-opacity-5 rounded-full size-10">
                      <img
                        src="assets/images/crypto-icon.png"
                        alt="Crypto Icon"
                      />
                    </div>
                    <p className="text-sm font-semibold pt-1">ZIL</p>
                  </div>
                  <div className="p-3 border border-white border-opacity-5 flex flex-col justify-center items-center rounded-md">
                    <div className="flex justify-center items-center bg-white bg-opacity-5 rounded-full size-10">
                      <img
                        src="assets/images/crypto_icon.png"
                        alt="Crypto Icon"
                      />
                    </div>
                    <p className="text-sm font-semibold pt-1">BITT</p>
                  </div>
                  <div className="p-3 border border-white border-opacity-5 flex flex-col justify-center items-center rounded-md">
                    <div className="flex justify-center items-center bg-white bg-opacity-5 rounded-full size-10">
                      <img
                        src="assets/images/Ethereum_ETH.png"
                        alt="Ethereum"
                      />
                    </div>
                    <p className="text-sm font-semibold pt-1">ETH</p>
                  </div>
                  <div className="p-3 border border-white border-opacity-5 flex flex-col justify-center items-center rounded-md">
                    <div className="flex justify-center items-center bg-white bg-opacity-5 rounded-full size-10">
                      <img src="assets/images/NEO.png" alt="NEO" />
                    </div>
                    <p className="text-sm font-semibold pt-1">TET</p>
                  </div>
                  <div className="p-3 border border-white border-opacity-5 flex flex-col justify-center items-center rounded-md">
                    <div className="flex justify-center items-center bg-white bg-opacity-5 rounded-full size-10">
                      <img src="assets/images/Litecoin.png" alt="Litecoin" />
                    </div>
                    <p className="text-sm font-semibold pt-1">MAK</p>
                  </div>
                </div>
                <p className="text-xl font-semibold pt-8">Identify address</p>
                <div className="pt-4">
                  <p className="text-sm font-semibold text-n70 pb-2">
                    Contact Address
                  </p>
                  <div className="flex justify-between items-center gap-4 bg-white bg-opacity-5 rounded-lg py-3 px-4">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="outline-none bg-transparent w-full text-n70 placeholder:text-n70 text-sm"
                    />
                    <div>
                      <i className="ph ph-trash-simple text-g300 text-xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToken;
