import React from "react";
import { Link } from "react-router-dom";
function Profile() {
  return (
    <div className="container bg-n900 h-dvh relative overflow-hidden flex justify-start items-start text-white">
       <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>
            
                  <div className="px-6 py-8 relative z-20 w-full">
                    {/* Header */}
                    <div className="flex justify-start items-center pb-8 mr-8">
                      <Link
                        to="/account"  // Adjust the route as needed
                        className="flex justify-center items-center p-2 rounded-full bg-g300 text-n900"
                      >
                        <i className="ph-bold ph-caret-left"></i>
                      </Link>
                      <div className="flex justify-center items-center w-full">
                        <h1 className="font-semibold text-2xl">Update Profile</h1>
                      </div>
                    </div>

        <form className="pt-8 flex flex-col gap-4">
          <div>
            <p className="text-sm font-semibold pb-2"> Enter Email</p>
            <div className="flex justify-between items-center gap-3 p-4 bg-white bg-opacity-5 rounded-lg text-n70 text-xl">
              <input
                type="text"
                placeholder="Enter Email"
                className="bg-transparent outline-none placeholder:text-sm text-sm"
              />
            </div>
          </div>
          <div>

</div>
        </form>
        
        <div className="w-full pt-20">
          <Link
            to="/create-password"
            className="block bg-g300 font-semibold text-center py-3 rounded-lg"
          >
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;