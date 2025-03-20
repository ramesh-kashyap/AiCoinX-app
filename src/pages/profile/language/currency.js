import React, { useState,useRef,useEffect } from 'react';
import { Link } from "react-router-dom";
import { Camera, Image as Gallery } from "lucide-react";
import Api from "../../../service/Api";
import { Toaster, toast } from "react-hot-toast";

function Profile() {
   const [showPopupProfile, setShowPopupProfile] = useState(false);
   const [user, setUser] = useState(null);
   const fileInputRef = useRef(null);
   const [selectedImage, setSelectedImage] = useState("/assets/images/referral-3272324_1280.webp"); // Default Image
   const [newName, setNewName] = useState(null); // User data store karne ke liye state
   const [UserData, setUserData] = useState(null); // User data store karne ke liye state



  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await Api.get("/news"); // API call to fetch user data
        if (response.data.userData && response.data.userData.length > 0) {

          setUserData(response.data.userData[0].user_name); 
          setNewName(response.data.userData[0]);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleUpdateProfile = async () => {
    try {
        const response = await Api.put("/updateUsername", { fullname: UserData });

        if (response.data) {
            setUser((prevUser) => ({ ...prevUser, fullname: UserData }));
            toast.success(response.data.message); // Use message from backend

             console.log("Profile Updated Successfully");
             
        }
       
    } catch (error) {
        console.error("Error updating profile:", error);
        toast.error(error.response?.data?.error || "Something went wrong!"); 

    } 
};


 
  return (
     <><Toaster position="top-center" /><div className="container bg-n900 h-dvh relative overflow-hidden flex justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full bg-g3001 absolute -top-32 -left-20 blur-[575px]"></div>
      
            <div className="px-6 py-8 relative z-20 w-full">


 


{showPopupProfile && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end z-20"
    onClick={() => setShowPopupProfile(false)} // Click outside to close
  >
    <div
      style={{
        backgroundColor: "#EDE7F6",
        width: 429,
        height: 300,
        borderTopLeftRadius: "38px",
        borderTopRightRadius: "38px"
      }}
      className="fixed bottom-10 bg-n900 text-white p-6 shadow-lg rounded-t-lg transition-transform transform translate-y-0" 
      onClick={(e) => e.stopPropagation()} // Prevent closing on click inside
    >
      {/* Info Icon */}
      <div className="h-1 w-16 bg-gray-300 rounded mx-auto mb-3"></div>
      <div className="flex justify-center items-center">
        <div style={{ backgroundColor: "#101014" }} className="w-16 h-1 bg-white bg-opacity-5 rounded-full"></div>
      </div>

      {/* Confirmation Message */}
      <h2 style={{ marginTop: "30px", marginBottom: "30px" }} className="text-lg font-bold mb-4 text-center">
        Edit Username
      </h2>
      <p style={{marginTop:"10px",marginBottom:"20px", color:"#101014"}} className="text-gray-500 text-center mb-4">
        Please fill in the field to continue
      </p>
      {/* Username Input Field */}
    
<div className="relative w-full">
          <i style={{marginTop:"24px",marginLeft:"10px",color:"#000"}} className="ph ph-user absolute inset-y-0 left-3 flex items-center text-white text-lg"></i>

          <input  
            style={{ 
              backgroundColor: "#fff", 
              color: "#000", 
              borderColor: "#292c3d",
              paddingLeft: "40px", // Left padding taaki text icon se overlap na ho
marginTop:"13px"
            }}
            type="text" 
            value={UserData}        
            onChange={(e) => setUserData(e.target.value)} 
            className="w-full p-3 border rounded-md text-black"
            required
          />
        </div>

      {/* Save Button */}
      <div style={{marginTop:"15px"}} className="flex flex-col gap-3">
        <button onClick={handleUpdateProfile} 
          style={{
            backgroundColor:  "#9583ff",
            color:"white",
            borderRadius: "12px",
            marginTop: "14px"
          }}
          className="w-full py-3 font-semibold rounded"
        >
          Save Change
        </button>
      </div>
    </div>
  </div>
)}



              {/* Header */}
              <div className="flex justify-start items-center pb-8 mr-8">
                <Link
                  to="/account"  // Adjust the route as needed
                  className="flex justify-center items-center p-2 rounded-full bg-g3001 text-n900"
                >
                  <i className="ph-bold ph-caret-left"></i>
                </Link>
                <div className="flex justify-center items-center w-full">
                  <h1 className="font-semibold text-2xl">Personal Details</h1>
                </div>
                
              </div>
         {/* Profile Image Section */}
         <div className="flex justify-center mb-6 relative">
         <img alt="Profile picture of a person with sunglasses" className="w-12 h-12 rounded-full" height="50" src="\assets\images\userIcon.edc1c75ce595e5bb3b239b6d69ec9cf4.svg" width="50"/>
         <div className="absolute bottom-0 right-10 bg-black text-white rounded-full p-1">
   
    </div>
   </div>

   <form className="pt-8 flex flex-col gap-4 items-center w-full">
  <div className="bg-gray-900 p-6 rounded-xl w-full max-w-md border border-gray-700">
    {newName ? (
      [
        { label: "User name", value: UserData, icon: true },
        { label: "Last name", value: newName.fullname },
        { label: "First name", value: newName.lastname },
        { label: "Date of birth", value: newName.date_of_birth },
        { label: "Email", value: newName.email },
      ].map((item, index, array) => (
        <div
          key={index}
          className={`py-3 flex justify-between items-center ${
            index !== array.length - 1 ? "border-b border-gray-700" : "" // Last element par border remove
          }`}
        >
          <div>
            <p className="text-gray-400 text-sm" style={{color:"#101014"}}>{item.label}</p>
            <p 
  className="text-lg font-semibold" 
  style={{ color: "#101014" }}
>
  {item.value || "N/A"}
</p>
          </div>
          {item.icon && (
            <i onClick={() => setShowPopupProfile(true)} className="ph-bold ph-caret-right"style={{ color: "#101014" }}></i>
          )}
        </div>
      ))
    ) : (
      <p className="text-center text-gray-400">Loading user data...</p>
    )}
  </div>
</form>

{/*         
        <div className="w-full pt-20">
          <Link
            to="/create-password"
            className="block bg-g300 font-semibold text-center py-3 rounded-lg"
          >
            Delete account
          </Link>
        </div> */}
      </div>
    </div></>
  );
}

export default Profile;
