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


  const [amounts, setAmounts] = useState("");
  const transactionFee = 0.02;
  const minimumWithdraw = 20;

  const walletAddress = "0xef80b424a560f45ac34190d16c47cc8a53e2312d";
  const [balance, setBalance] = useState("");
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

  const fetchGetBalance = async () => {
    try {
      // Fetch news data (adjust the endpoint as needed)
      const response = await Api.get('/getBalance');
      if (response.data.status) {
        setBalance(response.data.data.
          available_balance);



      } else {
        console.error('Failed to fetch balance:', response.data);
      }

    } catch (error) {
      console.error('Error fetching news data:', error);
    }
  }
  // Update wallet type and fetch corresponding wallet address (dummy data)
  useEffect(() => {
    fetchGetBalance();

  }, []);
  // Handle input changes for text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "amount") {

      // Remove any character that's not a digit or decimal
      const cleanedValue = value.replace(/[^\d.]/g, "");

      // Prevent multiple decimals
      const parts = cleanedValue.split(".");
      if (parts.length > 2) return;

      // Format integer part with commas
      const formattedInt = parts[0].replace(/\B(?=(\d{100})+(?!\d))/g, ",");

      const formattedValue = parts.length === 2 ? `${formattedInt}.${parts[1]}` : formattedInt;

      setAmounts(formattedValue);
    }
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


    if (amountValue < 20) {
      toast.error("Amount must be at least 20 AICX");
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
        <div className="flex justify-start items-center gap-3 pb-8 w-full " style={{ gap: "3rem", paddingTop: '1rem' }}>
          <Link to="/account" className="flex justify-center items-center p-2 rounded-full bg-g300 text-n900">
            <i className="ph-bold ph-caret-left"></i>
          </Link>
          <div className="flex justify-center items-center flex-col gap-2 pt-8" >
            <h1 className="text-2xl font-semibold" style={{marginLeft:'48px'}}>Withdraw</h1>
            <p className="text-sm font-semibold pb-2" style={{marginLeft:'48px'}}>Withdrawable Balance: {parseFloat(balance).toFixed(2)}</p>
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


          <div
            className="flex justify-between items-center gap-3 p-4 bg-white3 bg-opacity-5 rounded-xl text-n70 text-xl"
            style={{
              backgroundColor: '#fff',
              borderColor: '#aeaeae',
              borderWidth: '1px',
              borderStyle: 'solid',
              color: '#000',
              padding: '0.75rem',
            }}
          >
            <img
              src="assets/images/ok3d.png"
              alt="BEP20 Logo"
              className="inline mr-1"
              style={{ width: '25px' }}
            />

            <select
              disabled

              className="bg-transparent outline-none text-black text-sm w-full"
              defaultValue="AICOINX"

              style={{ marginLeft: '-15px', position: 'relative' }}
            // onChange={(e) => setFormData(prev => ({ ...prev, coin: e.target.value }))} // Example if you need to track it
            >
              <option value="" disabled hidden>Select a coin</option>
              <option value="AICOINX">AICOINX</option>

              {/* Add more options as needed */}
            </select>
          </div>

          {/* Amount Input */}
          <div>
            <p className="text-sm font-semibold pb-2">Withdraw Amount</p>
            <div className="flex justify-between items-center gap-3 p-4 bg-white3 bg-opacity-5 rounded-xl text-n70 text-xl" style={{ backgroundColor: '#fff', padding: '0.75rem', borderColor: '#aeaeae', borderWidth: '1px', color: '#000' }}>
              <input
                type="text"
                name="amount"
                placeholder="Enter the Amount"
                value={formData.amount}
                onChange={handleChange}
                className="bg-transparent outline-none placeholder:text-sm text-black text-sm w-full"
              />
            </div>
          </div>

          {/* Wallet Address Input */}
          <div>
            <p className="text-sm font-semibold pb-2">Wallet Address</p>
            <div className="flex justify-between items-center gap-3 p-4 bg-white3 bg-opacity-5 rounded-xl text-white text-n70 text-xl" style={{ padding: '0.75rem', backgroundColor: '#fff', borderColor: '#aeaeae', borderWidth: '1px', color: '#000' }}>
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
          <div>

            <div className="flex justify-between items-center gap-3 p-4 bg-white3 bg-opacity-5 rounded-xl text-white text-n70 text-xl" style={{ padding: '0.75rem', backgroundColor: '#fff', borderColor: '#aeaeae', borderWidth: '1px', color: '#000' }}>
              <input
                type="text"
                name="walletAddress"
                placeholder="Transaction Fee Token"
                value={"Transaction Fee"}

                className="bg-transparent outline-none placeholder:text-sm text-sm w-full"
                disabled
              />
              <p className=" text-sm text-red-500" style={{ color: 'red' }}>{(amounts * transactionFee).toFixed(2)}</p>
            </div>
            <p style={{ marginTop: "15px", fontWeight: "bold", color: '#000' }}>Total Receive: {(amounts - (amounts * transactionFee)).toFixed(2)} AICX</p>

          </div>
          <div className="w-full pt-4 text-left text-sm text-n70" style={{background:'#d7d0ff',padding:'13px',borderRadius:'10px'}}>


            <p className="pt-2 ">⚠️ The Minimum Withdraw Amount Is {minimumWithdraw} AICX</p>
            <p className="pt-2 ">⚠️ Transaction Fee {transactionFee * 100}%</p>

            <p className="pt-2 ">⚠️The withdrawal amount has been successfully processed and received within a period of 92 hours from the time of request.</p>
          </div>
          <div className="w-full pt-20" style={{ paddingTop: '1rem' }}>
            <button
              type="submit"
              className="block font-semibold bg-white2 text-center rounded-xl py-3 w-full"
            >
              Withdraw



            </button>
          </div>

        </form>

        {/* Withdraw Button */}

        {/* Bottom Instruction */}

      </div>
      <Toaster />
    </div>
  );
}

export default Withdraw;