import React from 'react';
import { Link } from 'react-router-dom'; // if using react-router-dom for navigation

function ConfirmSeedPhrase() {
  return (
    <div className="container bg-n900 h-dvh relative overflow-hidden flex justify-start items-start text-white min-h-dvh">
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>

      <div className="px-6 py-8 relative z-20">
        {/* Header Navigation */}
        <div className="flex justify-start items-center gap-20">
          {/* Use Link for client-side navigation or keep <a> if not */}
          <Link
            to="/import-seed"
            className="flex justify-center items-center p-2 rounded-full bg-g300 text-n900"
          >
            <i className="ph-bold ph-caret-left"></i>
          </Link>
          <div className="flex justify-start items-center">
            <div className="size-2 rounded-full bg-g300"></div>
            <div className="w-16 h-px bg-g600"></div>
            <div className="size-2 rounded-full bg-g600"></div>
            <div className="w-16 h-px bg-g600"></div>
            <div className="size-2 rounded-full bg-g600"></div>
          </div>
        </div>

        {/* Page Title & Description */}
        <div className="flex justify-center items-center flex-col gap-3 pt-8">
          <h1 className="text-2xl font-semibold">Confirm Seed Phrase</h1>
          <p className="text-n70 text-sm text-center">
            Please confirm your Seed Phrase to ensure accurate account recovery details.
          </p>
        </div>

        <div className="border border-white border-opacity-5 border-dashed w-full mt-8"></div>

        {/* Modal Content (Seed List Preview) */}
        <div className="mt-8 p-7 bg-white bg-opacity-5 rounded-xl flex flex-col justify-center items-center text-center">
          <p className="text-n70 text-sm pt-3">
            Please confirm your Seed Phrase to ensure accurate account recovery details.
          </p>
          <ul className="flex justify-center items-center gap-3 flex-wrap pt-8">
            <li className="bg-white bg-opacity-5 py-2 px-4 rounded-md">
              <span className="text-n70">2.</span>
              <span className="font-medium">vacant</span>
            </li>
            <li className="bg-white bg-opacity-5 py-2 px-4 rounded-md">
              <span className="text-n70">4.</span>
              <span className="font-medium">ride</span>
            </li>
            <li className="bg-white bg-opacity-5 py-2 px-4 rounded-md">
              <span className="text-n70">6.</span>
              <span className="font-medium">girl</span>
            </li>
          </ul>
        </div>

        {/* Full Seed List */}
        <ul className="flex flex-wrap gap-2 pt-8">
          <li className="bg-white bg-opacity-5 py-2 px-4 rounded-md">
            <span className="text-n70">1.</span>
            <span className="font-medium">then</span>
          </li>
          <li className="bg-white bg-opacity-5 py-2 px-4 rounded-md">
            <span className="text-n70">2.</span>
            <span className="font-medium">vacant</span>
          </li>
          <li className="bg-white bg-opacity-5 py-2 px-4 rounded-md">
            <span className="text-n70">7.</span>
            <span className="font-medium">alien</span>
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

        {/* Next Button */}
        <div className="w-full pt-20">
         
          <Link to="/choose-account" className="block bg-g300 font-semibold text-center py-3 rounded-lg openAgreeModal w-full">
          Next
          </Link>
        </div>
      </div>

      {/* Agreement Modal (Initially Invisible) */}
      <div className="invisible absolute inset-0 bg-white bg-opacity-10 z-30 justify-start items-end agreementModal flex">
        <div className="bg-n900 w-full rounded-t-3xl px-6">
          <div className="flex justify-center items-center pt-4">
            <div className="w-20 h-1 rounded-full bg-g500 bg-opacity-20"></div>
          </div>
          <h1 className="text-xl font-semibold py-8 text-center">
            Please, read it carefully
          </h1>
          <div className="flex justify-start items-start gap-3 bg-white bg-opacity-5 rounded-xl p-5">
            <div className="bg-white bg-opacity-5 flex justify-center items-center py-1.5 px-2.5 rounded-md text-g300">
              <i className="ph ph-lock"></i>
            </div>
            <p className="text-n70 text-xs">
              The information below is important to guarantee your account security
            </p>
          </div>
          <div className="flex flex-col gap-4 text-n70 py-8">
            <p>
              1. Save your 24 or 12 words carefully. Avoid saving them on online storage, mobile phones, or any digital register.
            </p>
            <p>
              2. Write the 24 or 12 words down and keep them safe. You will only need them to restore your account. If you lose them, you can't access your account anymore.
            </p>
            <p>
              3. Your Seed is only for your personal use. We don't save it in our databases. Don't share this sequence of words with anyone else!
            </p>
          </div>
          <div className="w-full pb-8">
            <Link to="/choose-account" className="block bg-g300 font-semibold text-center py-3 rounded-lg">
              I Agree
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmSeedPhrase;
