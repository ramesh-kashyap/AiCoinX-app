import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { FaRegCalendarAlt } from "react-icons/fa";
import Api from "../../service/Api";
import { Toaster, toast } from "react-hot-toast";

function Withdraw() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);

  // Updated initial state without password fields.
  const initialState = {
    fullname: "",
    lastname: "",
    email: "",
    date: "",
    wallet: "usdtBEP20", // default wallet
    walletAddress: "",
    amount: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Dummy API call to simulate fetching wallet address from backend
  const fetchWalletAddress = async (walletType) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (walletType === "usdtBEP20") {
          resolve("DummyBEP20Address123");
        } else if (walletType === "usdtTRC20") {
          resolve("DummyTRC20Address456");
        } else {
          resolve("");
        }
      }, 500); // simulate a 500ms delay
    });
  };

  // Update wallet type and fetch corresponding wallet address (dummy data)
  
  // Handle input changes for text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    console.log("handleSubmit called");
    if (!formData.walletAddress || !formData.amount) {
      toast.error("Please fill in all required fields");
      setLoading(false);
      return;
    }

    const amountValue = Number(formData.amount);
if (isNaN(amountValue) || !Number.isInteger(amountValue)) {
  toast.error("Amount must be an integer value");
  setLoading(false);
  return;
}
    // Navigate to OTP page with state data
    navigate("/withdraw/otp", {
      state: { walletAddress: formData.walletAddress, amount: formData.amount },
    });
      localStorage.setItem("otpauth", "true"); 
      
  };

 

  return (
    <div className="container bg-n900 h-dvh relative overflow-hidden justify-start items-start text-white">
      {/* Blurred Circular Background */}
      <div className="w-[582px] h-[582px] rounded-full text-g301 absolute -top-32 -left-20 blur-[575px]"></div>
      
      <div className="relative z-20 px-6 w-full">
        {/* Header Text */}
        <div className="flex justify-start items-center gap-3 pb-8 w-full " style={{ gap: "3rem" ,paddingTop: '1rem' }}>
                      <Link to="/account" className="flex justify-center  p-2 rounded-full text-g301 text-n900">
                        <i className="ph-bold ph-caret-left"></i>
                      </Link>
                      <div className="flex justify-center items-center flex-col gap-2 pt-8" >
                      <h1 className="text-2xl font-semibold">Withdraw</h1>
          <p className="text-n70 text-sm ">
            Please fill in the form to continue
          </p>
                      </div>
                    </div>
       

        <form onSubmit={handleSubmit} className="pt-8 flex flex-col gap-4">
          {/* Wallet Selection */}
          {/* <div>
            <p className="text-sm font-semibold pb-2">Select Wallet</p>
            <div className="w-full">
              <button
                type="button"
                
                className={`flex items-center justify-center gap-2 w-full py-3 px-4 border rounded-xl text-sm transition-colors ${
                  formData.wallet === "usdtBEP20"
                    ? "bg-blue-500 text-white"
                    : "bg-white bg-opacity-5 text-n70"
                }`}
              >
                <img
                  src="assets/images/ok3d.png"
                  alt="BEP20 Logo"
                  width="40px"
                  className="inline mr-1"
                />
                <span className="font-bold text-xl leading-10">AiCoinX</span>
              </button>
            </div>
          </div> */}

         

          {/* Amount Input */}
          <div>
            <p className="text-sm font-semibold pb-2">Amount  <img
                  src="assets/images/ok3d.png"
                  alt="BEP20 Logo"
                  width="25px"
                  className="inline mr-1"
                /></p>
            <div className="flex justify-between items-center gap-3 p-4 bg-white3 bg-opacity-5 rounded-xl text-n70 text-xl">
              <input
                type="text"
                name="amount"
                placeholder="Enter the Amount"
                value={formData.amount}
                onChange={handleChange}
                className="bg-transparent outline-none placeholder:text-sm text-white text-sm w-full"
              />
            </div>
          </div>

           {/* Wallet Address Input */}
           <div>
            <p className="text-sm font-semibold pb-2">Wallet Address</p>
            <div className="flex justify-between items-center gap-3 p-4 bg-white3 bg-opacity-5 rounded-xl text-white text-n70 text-xl">
              <input
                type="text"
                name="walletAddress"
                placeholder="Wallet Address"
                value={formData.walletAddress}
                onChange={handleChange}
                className="bg-transparent outline-none placeholder:text-sm text-sm w-full"
              />
            </div>
          </div>
          <div className="w-full pt-20" style={{ paddingTop: '1rem' }}>
          <button
      type="submit"
      className="block font-semibold bg-white2 text-center rounded-xl py-3 w-full"
    >
      Withdraw
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-5 h-5 ml-2 inline"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 6l6 6-6 6"
        />
      </svg>
      
    </button>
        </div>

        </form>

        {/* Withdraw Button */}
        
        {/* Bottom Instruction */}
        <div className="w-full pt-4 text-left text-sm text-n70">
            
          <p className="pt-2 ">
            Please ensure that your wallet address is correct before submitting the withdrawal request.
          </p>
          
          <p className="pt-2">
            If you encounter any issues, contact our support team for assistance.
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Withdraw;
