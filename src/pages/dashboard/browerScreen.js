import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
function Browser() {
  return (
    <div className="container bg-n900 min-h-dvh relative overflow-hidden flex justify-start items-start text-white pb-28">
      {/* Background Circle */}
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>

      <div className="px-6 py-8 relative z-20 w-full">
        {/* Title */}
        <div className="flex justify-center items-center pb-8">
          <div className="flex justify-center items-center w-full">
            <h1 className="font-semibold text-2xl">Dapp Browser</h1>
          </div>
        </div>

        {/* Invite Card */}
        <div>
          <div className="w-full bg-g300 p-5 flex justify-between items-center rounded-xl relative bg-opacity-20 overflow-hidden">
            <img
              src="assets/images/invite_bg.png"
              alt="Invite Background"
              className="absolute top-0 right-0 bottom-0 h-full"
            />
            <div className="max-w-[200px]">
              <p className="text-xl font-semibold">
                Invite a friends and get <span className="text-g300">$</span>20
              </p>
              <p className="text-n70 pt-4 text-xs">
                This section can be used as an Advertisement or a Call to Action
              </p>
            </div>
            <div>
              <img src="assets/images/invite_img.png" alt="Invite" />
            </div>
          </div>
        </div>

        {/* Category List */}
        <ul className="flex justify-start items-center gap-3 overflow-y-auto pt-8 vertical-scrollbar pb-3 browserCategory">
          <li className="item active">
            All <i className="ph ph-caret-right"></i>
          </li>
          <li className="item">
            Art <i className="ph ph-caret-right"></i>
          </li>
          <li className="item">
            Sport <i className="ph ph-caret-right"></i>
          </li>
          <li className="item">
            People <i className="ph ph-caret-right"></i>
          </li>
          <li className="item">
            Celebraties <i className="ph ph-caret-right"></i>
          </li>
        </ul>

        {/* Grid of Items */}
        <div className="grid grid-cols-2 gap-4 pt-5">
          {/* Item 1 */}
          <div className="rounded-xl overflow-hidden col-span-1">
            <img src="assets/images/nft-tab-img-1.png" alt="NFT 1" />
            <div className="bg-white bg-opacity-5 p-3 flex justify-between items-start">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">Abstract Lava</p>
                <div className="flex justify-center items-center bg-white bg-opacity-5 py-1 px-2 rounded-md gap-1">
                  <img src="assets/images/Ethereum_ETH.png" alt="Ethereum" className="h-4" />
                  <p className="text-xs text-n70 font-medium">148.50k</p>
                </div>
              </div>
              <button>
                <i className="ph ph-dots-three-vertical"></i>
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="rounded-xl overflow-hidden col-span-1">
            <img src="assets/images/nft-tab-img-2.png" alt="NFT 2" />
            <div className="bg-white bg-opacity-5 p-3 flex justify-between items-start">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">ArtVibes NFT</p>
                <div className="flex justify-center items-center bg-white bg-opacity-5 py-1 px-2 rounded-md gap-1">
                  <img src="assets/images/Bitcoin_icon.png" alt="Bitcoin" className="h-4" />
                  <p className="text-xs text-n70 font-medium">164.44k</p>
                </div>
              </div>
              <button>
                <i className="ph ph-dots-three-vertical"></i>
              </button>
            </div>
          </div>

          {/* Item 3 */}
          <div className="rounded-xl overflow-hidden col-span-1">
            <img src="assets/images/nft-tab-img-2.png" alt="NFT 3" />
            <div className="bg-white bg-opacity-5 p-3 flex justify-between items-start">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">ArtVibes NFT</p>
                <div className="flex justify-center items-center bg-white bg-opacity-5 py-1 px-2 rounded-md gap-1">
                  <img src="assets/images/Bitcoin_icon.png" alt="Bitcoin" className="h-4" />
                  <p className="text-xs text-n70 font-medium">164.44k</p>
                </div>
              </div>
              <button>
                <i className="ph ph-dots-three-vertical"></i>
              </button>
            </div>
          </div>

          {/* Item 4 */}
          <div className="rounded-xl overflow-hidden col-span-1">
            <img src="assets/images/nft-tab-img-1.png" alt="NFT 4" />
            <div className="bg-white bg-opacity-5 p-3 flex justify-between items-start">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">Abstract Lava</p>
                <div className="flex justify-center items-center bg-white bg-opacity-5 py-1 px-2 rounded-md gap-1">
                  <img src="assets/images/Ethereum_ETH.png" alt="Ethereum" className="h-4" />
                  <p className="text-xs text-n70 font-medium">148.50k</p>
                </div>
              </div>
              <button>
                <i className="ph ph-dots-three-vertical"></i>
              </button>
            </div>
          </div>

          {/* Item 5 */}
          <div className="rounded-xl overflow-hidden col-span-1">
            <img src="assets/images/nft-tab-img-1.png" alt="NFT 5" />
            <div className="bg-white bg-opacity-5 p-3 flex justify-between items-start">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">Abstract Lava</p>
                <div className="flex justify-center items-center bg-white bg-opacity-5 py-1 px-2 rounded-md gap-1">
                  <img src="assets/images/Ethereum_ETH.png" alt="Ethereum" className="h-4" />
                  <p className="text-xs text-n70 font-medium">148.50k</p>
                </div>
              </div>
              <button>
                <i className="ph ph-dots-three-vertical"></i>
              </button>
            </div>
          </div>

          {/* Item 6 */}
          <div className="rounded-xl overflow-hidden col-span-1">
            <img src="assets/images/nft-tab-img-2.png" alt="NFT 6" />
            <div className="bg-white bg-opacity-5 p-3 flex justify-between items-start">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">ArtVibes NFT</p>
                <div className="flex justify-center items-center bg-white bg-opacity-5 py-1 px-2 rounded-md gap-1">
                  <img src="assets/images/Bitcoin_icon.png" alt="Bitcoin" className="h-4" />
                  <p className="text-xs text-n70 font-medium">164.44k</p>
                </div>
              </div>
              <button>
                <i className="ph ph-dots-three-vertical"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Area (Footer Navigation) */}
        <Footer />
        {/* End Tab Area */}
      </div>
    </div>
  );
}

export default Browser;
