import React, { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import Api from "../../service/Api";


const Withdrawhistroy = () => {
  const [users, setUsers] = useState([]); // ✅ Always start with an empty array
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
    
}, []);

const fetchUsers = async () => {
    try {
        const response = await Api.get("/withdraw-History");

        if (response.data && Array.isArray(response.data.data)) {
            setUsers(response.data.data);
        } else {
            setUsers([]); 
        }

        console.log(response.data);


        console.log(response.data.data);
    } catch (err) {
        setError(err.response?.data?.error || "Error fetching income");
    }
};


const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      weekday: "short", // Includes day of the week (e.g., Mon, Tue)
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false // Ensures 24-hour format
  }).replace(",", ""); // Remove comma for a cleaner format
};



  return (
    <div className="container bg-n900 min-h-dvh relative overflow-hidden flex justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>

      <div className="buySellTab pt-8 px-6 w-full relative z-20">
        <ul className="tab-button flex justify-between items-center text-lg font-semibold">
          <li className="activeTabButton tabButton w-full text-center pb-2 border-b-2 border-n700">
            Withdraw Histroy
          </li>
          {/* <li className="tabButton w-full text-center pb-2 border-b-2 border-n700">
            Sell
          </li> */}
        </ul>

        <div className="pt-8">
          <div className="tab-content activeTab" id="tabOne_data">
            <div className="flex justify-between items-center gap-4 bg-white bg-opacity-5 rounded-lg py-3 px-4">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none bg-transparent w-full text-n70 placeholder:text-n70 text-sm"
              />
              <div>
                <i className="ph ph-magnifying-glass text-g300 text-xl"></i>
              </div>
            </div>


            {users.length > 0 ? (
            users.map((user, index) => (
            <div className="flex flex-col gap-2 pt-5" key={index}>
              <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl">
                <div className="flex justify-start items-center gap-2">
                  <p className="text-sm text-n70">#01</p>
                  <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
                    <img src="/assets/images/tet.png" alt="Ethereum" />
                  </div>
                  <p className="font-semibold">{user.user_id_fk}</p>
                </div>
                <div className="flex flex-col justify-end items-end">
                  <p className="font-semibold">+{user.amount}</p>
                  <p className="text-g300 text-sm">{formatDate(user.created_at)}</p>
                </div>
              </div>
              
            

            </div>

))
) : (
    <p>No users found</p>
)}
          </div>
          
          <div className="tab-content hiddenTab" id="tabTwo_data">
            {/* Repeat same structure for Sell tab content */}
            <div className="flex justify-between items-center gap-4 bg-white bg-opacity-5 rounded-lg py-3 px-4">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none bg-transparent w-full text-n70 placeholder:text-n70 text-sm"
              />
              <div>
                <i className="ph ph-magnifying-glass text-g300 text-xl"></i>
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-5">
              <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl">
                <div className="flex justify-start items-center gap-2">
                  {/* <p className="text-sm text-n70">#01</p> */}
                  <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
                    <img src="" alt="Ethereum" />
                  </div>
                  <p className="font-semibold">Ethereum</p>
                </div>
                <div className="flex flex-col justify-end items-end">
                  <p className="font-semibold">$0.352416</p>
                  <p className="text-g300 text-sm">+3.00%</p>
                </div>
              </div>
              
              {/* Repeat all entries again for Sell tab... */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdrawhistroy;