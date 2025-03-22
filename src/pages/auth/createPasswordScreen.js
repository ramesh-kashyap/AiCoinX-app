import React from 'react';
import { Link } from "react-router-dom";
function CreatePassword() {
  return (
    <div className="container bg-n900 h-dvh relative overflow-hidden flex justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>

      <div className="px-6 py-8 relative z-20">
        <div className="flex justify-start items-center gap-20">
          <a
            href="import-seed.html"
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

        <div className="flex justify-center items-center flex-col gap-3 pt-8">
          <h1 className="text-2xl font-semibold">Create Password</h1>
          <p className="text-n70 text-sm text-center">
            Minimum 8 characters, include uppercase, lowercase, numbers, and symbols.
          </p>
        </div>

        <form className="pt-8 flex flex-col gap-4">
          <div>
            <p className="text-sm font-semibold pb-2">New Password</p>
            <div className="flex justify-between items-center gap-3 p-4 bg-white bg-opacity-5 rounded-lg text-n70 text-xl">
              <input
                type="password"
                placeholder="******"
                className="bg-transparent outline-none placeholder:text-sm text-sm passwordField"
              />
              <div className="flex justify-start items-center gap-1">
                <i className="ph ph-eye-closed cursor-pointer passwordShow"></i>
              </div>
            </div>
            <p className="text-xs text-n70 text-end pt-2">
              Must be at least 8 characters
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold pb-2">Confirm Password</p>
            <div className="flex justify-between items-center gap-3 p-4 bg-white bg-opacity-5 rounded-lg text-n70 text-xl">
              <input
                type="password"
                placeholder="******"
                className="bg-transparent outline-none placeholder:text-sm text-sm confirmPasswordField"
              />
              <div className="flex justify-start items-center gap-1">
                <i className="ph ph-eye-closed cursor-pointer confirmPasswordShow"></i>
              </div>
            </div>
          </div>
        </form>
        <div className="pt-8 flex justify-between items-center">
          <p className="font-medium">Sign in with Face ID?</p>
          <div className="sign-in-toggle active toggle">
            <div className="circle"></div>
          </div>
        </div>
        <div className="flex justify-start items-start gap-3 pt-8 customCheckbox">
          <input id="check" type="checkbox" className="" />
          <label htmlFor="check">
            Minimum 8 characters, include uppercase, lowercase, numbers, and symbols.
          </label>
        </div>
        <div className="w-full pt-20">
       
          <Link
            to="/secure-wallet"
            className="block bg-g300 font-semibold text-center py-3 rounded-lg"
          >
           Create
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CreatePassword;
