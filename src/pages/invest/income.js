import React, { useEffect, useState } from "react";
import Api from "../../service/Api";
import { Link } from "react-router-dom";

const AllIncome = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    
    fetchUsers();
  }, [searchQuery, currentPage]); 

  const fetchUsers = async () => {
    try {
      const response = await Api.get("/all-income", {
        params: { search: searchQuery, page: currentPage, limit: itemsPerPage }, 
      });

      if (response.data && Array.isArray(response.data.data)) {
        setUsers(response.data.data);
        setTotalPages(response.data.totalPages);
      } else {
        setUsers([]);
      }
    } catch (err) {
      setError(err.response?.data?.error || "Error fetching data");
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const currentDate = new Date();
  
    // Difference in milliseconds
    const diffTime = currentDate - date;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Convert to days
  
    if (diffDays === 0) {
      return "Today";
    } else if (diffDays === 1) {
      return "1 day ago";
    } else {
      return `${diffDays} days ago`;
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="container bg-n900 min-h-dvh relative overflow-hidden flex justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full absolute -top-32 -left-20 blur-[575px]"></div>


     
      <div className="buySellTab pt-8 px-6 w-full relative z-20">
       <div style={{marginTop:"14px"}} className="flex justify-start items-center pb-8 mr-8">
                <Link to="/home" className="flex justify-center items-center p-2 rounded-full bg-g300 text-n900">
                  <i className="ph-bold ph-caret-left"></i>
                </Link>
                <div className="flex justify-center items-center w-full">
                  <h1 className="font-semibold text-2xl">Transaction</h1>
                </div>
              </div>

        <div className="pt-8">
          <div style={styles.box} className="flex justify-between items-center gap-4 bg-white bg-opacity-5 rounded-lg py-3 px-4">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="outline-none bg-transparent w-full text-n70 placeholder:text-n70 text-sm"
            />
            <div>
              <i className="ph ph-magnifying-glass text-g300 text-xl"></i>
            </div>
          </div>

      

        {users.length > 0 ? (
  users.map((user, index) => {
    const isWithdrawal = user.remark?.toLowerCase().includes("withdraw");
    const amountSign = isWithdrawal ? "-" : "+";
    const amountColor = isWithdrawal ? "text-red-400" : ""; 

    return (
      <div key={index} className="homeTab pt-8 px-6">
        <div className="pt-8">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-white border-opacity-5 pb-4">
              <div className="flex justify-start items-center gap-2">
           
                <div className="text-g300 flex justify-center items-center p-2 rounded-full text-xl bg-white bg-opacity-5">
                  <i className={`ph ${isWithdrawal ? "ph-arrow-up" : "ph-arrow-down"}`}></i>
                </div>

                <p className={`font-semibold  ${amountColor} !important`}>
                  {amountSign}{user.amount} 
                </p>
                {/* <img alt="USDT icon" className=" ml-2 w-5 h-5 mr-1" height="30" width="20px" src="/assets/images/ok3d.png" /> */}

              </div>
          
              <div className="flex flex-col justify-end items-end">
                <p className="font-semibold">{user.remark}</p>
                <p style={{color:"#fff"}} className="text-g300 text-sm">{formatDate(user.created_at)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  })
) : (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center'
  }}>
    <img 
      src="\assets\images\empty_state.svg" 
      alt="empty" 
      style={{
        maxWidth: '100%',
        height: 'auto',
        marginBottom: '20px'
      }} 
    />
    <p style={{ fontSize: '16px', color: '#000' }}>No users found.</p>
  </div>
)}

          
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                className="px-4 py-2 bg-g300 text-white rounded-md"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &lt;&lt;
              </button>
              
              {currentPage > 2 && <span className="text-white">1, 2...</span>}
              <span className="text-white">{currentPage}</span>
              {currentPage < totalPages - 1 && <span className="text-white">... {totalPages}</span>}
              
              <button
                className="px-4 py-2 bg-g300 text-white rounded-md"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                &gt;&gt;
              </button>
            </div>







          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  box: {
    backgroundColor: "#D1C4E9",
  },
};

export default AllIncome;
