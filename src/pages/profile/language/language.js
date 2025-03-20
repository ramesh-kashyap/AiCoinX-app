import React from 'react';
// If using React Router, uncomment the following line
// import { Link } from 'react-router-dom';

function Language() {
  return (
    <div className="container bg-n900 min-h-dvh relative overflow-hidden flex justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>

      <div className="px-6 py-8 relative z-20 w-full">
        <div className="flex justify-start items-center pb-8 mr-8">
          {/* Replace with Link if needed */}
          <a
            href="/account"
            className="flex justify-center items-center p-2 rounded-full bg-g300 text-n900"
          >
            <i className="ph-bold ph-caret-left"></i>
          </a>
          <div className="flex justify-center items-center w-full">
            <h1 className="font-semibold text-2xl">Language</h1>
          </div>
        </div>

        <div className="border border-g300 p-6 rounded-xl bg-g20 mt-8 text-g60 font-medium text-sm">
          <p className="text-g300">Suggested</p>
          <div className="pt-4 suggestedLanguage radioItems">
            <div className="flex justify-between items-center item active border-b border-dashed border-white border-opacity-10 pb-5">
              <p>English (US)</p>
              <i className="ph ph-radio-button text-xl"></i>
            </div>
            <div className="flex justify-between items-center item pt-5">
              <p>English (UK)</p>
              <i className="ph ph-radio-button text-xl !leading-none text-white"></i>
            </div>
          </div>
        </div>

        <div className="border border-white border-opacity-10 p-6 rounded-xl mt-8 text-g60 font-medium text-sm">
          <p className="text-g300">Language</p>
          <div className="pt-4 otherLanguage radioItems">
            <div className="flex justify-between items-center item border-b border-white border-opacity-10 border-dashed pb-5">
              <p>Brazil</p>
              <i className="ph ph-radio-button text-xl !leading-none text-white"></i>
            </div>
            <div className="flex justify-between items-center item border-b border-white border-opacity-10 border-dashed py-5">
              <p>Arabic</p>
              <i className="ph ph-radio-button text-xl !leading-none text-white"></i>
            </div>
            <div className="flex justify-between items-center item active border-b border-white border-opacity-10 border-dashed py-5">
              <p>Spanish</p>
              <i className="ph ph-radio-button text-xl !leading-none text-white"></i>
            </div>
            <div className="flex justify-between items-center item border-b border-white border-opacity-10 border-dashed py-5">
              <p>Chinese</p>
              <i className="ph ph-radio-button text-xl !leading-none text-white"></i>
            </div>
            <div className="flex justify-between items-center item border-b border-white border-opacity-10 border-dashed py-5">
              <p>Bangla</p>
              <i className="ph ph-radio-button text-xl !leading-none text-white"></i>
            </div>
            <div className="flex justify-between items-center item pt-3">
              <p>India</p>
              <i className="ph ph-radio-button text-xl !leading-none text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Language;
