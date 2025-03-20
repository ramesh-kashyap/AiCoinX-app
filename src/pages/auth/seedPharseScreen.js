import React from 'react';
import { Link } from 'react-router-dom';

function SeedPhrase() {
  return (
    <div className="container bg-n900 h-dvh relative overflow-hidden flex justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>

      <div className="px-6 py-8 relative z-20">
        <div className="flex justify-start items-center gap-20">
          <Link
            to="/import-seed" // Update this route as needed
            className="flex justify-center items-center p-2 rounded-full bg-g300 text-n900"
          >
            <i className="ph-bold ph-caret-left"></i>
          </Link>
          <div className="flex justify-start items-center">
            <div className="size-2 rounded-full bg-g300"></div>
            <div className="w-16 h-px bg-g300"></div>
            <div className="size-2 rounded-full bg-g300"></div>
            <div className="w-16 h-px bg-g600"></div>
            <div className="size-2 rounded-full bg-g600"></div>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col gap-3 pt-8">
          <h1 className="text-2xl font-semibold">Write Down Your Phrase</h1>
          <p className="text-n70 text-sm">
            Save your seed phrase—important for securing and recovering your account.
          </p>
        </div>

        <div className="border border-white border-opacity-5 border-dashed w-full mt-8"></div>

        <div className="mt-8 p-7 bg-white bg-opacity-5 rounded-xl flex flex-col justify-center items-center text-center showSeedList">
          <h3 className="font-semibold">Tap to open your Seed Phrase</h3>
          <p className="text-n70 text-sm pt-3">
            Make sure nobody is watching your screen
          </p>
          <button
            className="bg-white bg-opacity-5 text-g300 py-2 px-4 rounded-md flex justify-center items-center gap-1 mt-5 showSeedListButton"
          >
            <i className="ph ph-eye"></i>
            View
          </button>
        </div>

        <ul className="hidden flex-wrap gap-2 pt-8 seedList">
          <li className="bg-white bg-opacity-5 py-2 px-4 rounded-md">
            <span className="text-n70">1.</span>
            <span className="font-medium">then</span>
          </li>
          <li className="bg-white bg-opacity-5 py-2 px-4 rounded-md">
            <span className="text-n70">2.</span>
            <span className="font-medium">vacant</span>
          </li>
          <li className="bg-white bg-opacity-5 py-2 px-4 rounded-md">
            <span className="text-n70">3.</span>
            <span className="font-medium">hub</span>
          </li>
          <li className="bg-white bg-opacity-5 py-2 px-4 rounded-md">
            <span className="text-n70">4.</span>
            <span className="font-medium">ride</span>
          </li>
          <li className="bg-white bg-opacity-5 py-2 px-4 rounded-md">
            <span className="text-n70">5.</span>
            <span className="font-medium">avoid</span>
          </li>
          <li className="bg-white bg-opacity-5 py-2 px-4 rounded-md">
            <span className="text-n70">6.</span>
            <span className="font-medium">girl</span>
          </li>
          <li className="bg-white bg-opacity-5 py-2 px-4 rounded-md">
            <span className="text-n70">7.</span>
            <span className="font-medium">alien</span>
          </li>
          <li className="bg-white bg-opacity-5 py-2 px-4 rounded-md">
            <span className="text-n70">8.</span>
            <span className="font-medium">cross</span>
          </li>
          <li className="bg-white bg-opacity-5 py-2 px-4 rounded-md">
            <span className="text-n70">9.</span>
            <span className="font-medium">exist</span>
          </li>
          <li className="bg-white bg-opacity-5 py-2 px-4 rounded-md">
            <span className="text-n70">10.</span>
            <span className="font-medium">comic</span>
          </li>
          <li className="bg-white bg-opacity-5 py-2 px-4 rounded-md">
            <span className="text-n70">11.</span>
            <span className="font-medium">upon</span>
          </li>
        </ul>

        <div className="w-full pt-20">
          <Link
            to="/confirm-seed-phrase" // Update this route as needed
            className="block bg-g300 font-semibold text-center py-3 rounded-lg"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SeedPhrase;
