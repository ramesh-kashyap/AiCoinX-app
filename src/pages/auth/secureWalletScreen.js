import React from "react";
import { Link } from "react-router-dom";
function SecureWallet() {
  return (
    <div className="container bg-n900 h-dvh relative overflow-hidden flex justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>

      <div className="px-6 py-8 relative z-20 w-full">
        <div className="flex justify-start items-center gap-20">
          <a
            href="/import-seed" // Update URL as needed for your routing setup
            className="flex justify-center items-center p-2 rounded-full bg-g300 text-n900"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </a>
          <div className="flex justify-start items-center">
            <div className="size-2 rounded-full bg-g300"></div>
            <div className="w-16 h-px bg-g600"></div>
            <div className="size-2 rounded-full bg-g600"></div>
            <div className="w-16 h-px bg-g600"></div>
            <div className="size-2 rounded-full bg-g600"></div>
          </div>
        </div>

        <div className="flex justify-center items-center pt-10">
          <img src="assets/images/sheild-image.png" alt="Shield" />
        </div>

        <div className="flex justify-center items-center flex-col text-center pt-8">
          <h2 className="text-xl">Secure Your Wallet</h2>
          <p className="text-sm text-n70 pt-6">
            Secure your wallet and save your{" "}
            <a href="/" className="text-g300">
              Seed Phrase
            </a>{" "}
            in a trusted location. It's crucial for wallet recovery in case of
            app lockout or device change, ensuring your funds remain accessible
            and protected.
          </p>
          <p className="text-sm text-n70 pt-4">
            It's the only way to recover your wallet if you get locked out of
            the app or get a new device.
          </p>
        </div>

        <div className="w-full pt-20 flex justify-between items-center gap-4">
          <a
            href="/choose-account" // Update URL for your routing as needed
            className="border text-g300 border-g300 font-semibold text-center py-3 rounded-lg w-full text-nowrap"
          >
            Remind Me Later
          </a>

          <Link
            to="/seed-phrase"
            className="bg-g300 font-semibold text-center py-3 rounded-lg w-full"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SecureWallet;
