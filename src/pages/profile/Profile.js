import React, { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import Api from "../../service/Api";
import Deposit from '../components/Deposit'; // Correct relative path

import Footer from '../components/footer';
function Profile() {
  const [users, setUsers] = useState({
    username: "",
    fullname: "",
    lastname: "",
    email: "",
    date_of_birth: ""
  }); 
  const [error, setError] = useState("");

  useEffect(() => {
    updateUser();
    // handleSubmit();
    
}, []);

const updateUser = async () => {
  try {
      const response = await Api.put('/user-details', users); // PUT request bhej rahe hain
      setUsers(response.data.user); // Updated user data set kar rahe hain
      console.log("User updated:", response.data);
  } catch (err) {
      setError(err.response?.data?.error || "Error updating user");
  }
};


const handleChange = (e) => {
  setUsers({ ...users, [e.target.name]: e.target.value });
};




  return (
    <div className="container bg-n900 min-h-dvh relative overflow-hidden flex justify-start items-start text-white pb-28">
      {/* Background Circle */}
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>

      <div className="relative z-20 p-6 w-full">
        {/* Header */}
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold">ChainMaster</p>
          <div className="flex justify-start items-center gap-3">
            <div className="p-2 rounded-full flex justify-center items-center bg-n700 text-g300">
              <i className="ph ph-headset"></i>
            </div>
            <div className="p-2 rounded-full flex justify-center items-center bg-n700 text-g300">
            {/* <img src="../assets/images/bell.png" alt="swap" style={{width:25, height:"auto"}}/> */}
              <i className="ph ph-bell"></i>
            </div>
          </div>
        </div>

        {/* Account Card */}
        <div className="py-8">
          <a className="w-full flex justify-between items-center gap-6 bg-white bg-opacity-5 p-4 rounded-xl">
            <div className="flex justify-start items-center gap-3">
              <img src="assets/images/personal.png" alt="DigitalNomad" />
              <div>
                <p className="font-semibold">Personal Details</p>
              </div>
            </div>
            {/* <i className="ph ph-caret-right text-g300"></i> */}
          </a>
        </div>

        {/* Wallet Section */}
        <div>
          {/* <p className="text-n70 font-semibold pb-5">Wallet</p> */}
          <div className="flex flex-col gap-5">
         
            <a
              
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
               
                <p className="font-semibold">{users.fullname}</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </a>
            <a
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
             
                <p className="font-semibold">{users.lastname}</p>
              </div>
              {/* <i className="ph ph-caret-right text-g300"></i> */}
            </a>
          
            <a
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
               
                <p className="font-semibold">{users?.date_of_birth}</p>
              </div>
              {/* <i className="ph ph-caret-right text-g300"></i> */}
            </a>
            <a
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
              
                <p className="font-semibold">{users?.email}</p>
              </div>
              {/* <i className="ph ph-caret-right text-g300"></i> */}
            </a>
           
          </div>
        </div>

      

      

        {/* Tab Area (Footer Navigation) */}
        <Footer />
        {/* End Tab Area */}

        {/* Hidden Modals */}
        <div className="hidden inset-0 z-40 checkBiometrics">
          <div className="container bg-white bg-opacity-10 flex justify-end items-end h-full">
            <div className="bg-n900 px-6 pt-3 pb-6 w-full rounded-t-[31px] relative">
              <div className="flex justify-center items-center">
                <div className="w-16 h-1 bg-white bg-opacity-5 rounded-full"></div>
              </div>
              <h2 className="text-xl font-semibold text-center pt-8">
                Check your biometrics
              </h2>
              <button className="absolute top-4 right-4 text-2xl text-g300 checkBiometricsCloseButton">
                <i className="ph ph-x-circle"></i>
              </button>
              <div className="flex flex-col gap-4 pt-8">
                <div className="text-[100px] text-g300 flex justify-center items-center">
                  <i className="ph ph-fingerprint"></i>
                </div>
                <div className="text-center">
                  <p className="text-xs text-n70">Touch the fingerprint sensor</p>
                </div>
              </div>
            </div>
          </div>
        </div>

             <Deposit />

        <div className="hidden inset-0 z-40 logoutModal">
          <div className="container bg-white bg-opacity-10 flex justify-end items-end h-full">
            <div className="bg-n900 px-6 pt-3 pb-6 w-full rounded-t-[31px] relative">
              <div className="flex justify-center items-center">
                <div className="w-16 h-1 bg-white bg-opacity-5 rounded-full"></div>
              </div>
              <h2 className="text-2xl font-semibold text-center pt-8 text-g300 pb-5">
                Logout
              </h2>
              <div className="pt-5 border-t border-dashed border-white border-opacity-10">
                <p className="text-n70 text-center">
                  Are you sure you want to log out of your account?
                </p>
              </div>
              <div className="w-full pt-12 flex justify-between items-center gap-3">
                <button className="block text-g300 border border-g300 bg-white bg-opacity-5 font-semibold text-center py-3 rounded-lg w-full logoutModalCloseButton">
                  Cancel
                </button>
                <a href="" className="block bg-g300 font-semibold text-center py-3 rounded-lg w-full">
                  Yes, Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
