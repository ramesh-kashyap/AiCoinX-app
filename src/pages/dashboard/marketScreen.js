import React, { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import {       BadgeCent, Trophy,  AlertCircle } from 'lucide-react';
import Api from "../../service/Api";
import Footer from '../components/footer';
import WalletBalance from '../components/wallet';
function Marketplace() {
  const [activeTab, setActiveTab] = useState('tokens');
  const [users, setUsers] = useState([]); 
  const [income, setIncome] = useState([]); // ✅ Always start with an empty array
  const [balance, setBalance] = useState([]); 
  // ✅ Always start with an empty array
  const [error, setError] = useState("");

  
const fetchUsers = async () => {
    try {
      const response = await Api.get("/deposit-History");
      console.log('response:',response);
      if (response.data && Array.isArray(response.data.data)) {
        console.log('response2:',response.data.data);
        setUsers(response.data.data);
        
      } else {
        setUsers([]);
      }
    } catch (err) {
      setError(err.response?.data?.error || "Error fetching data");
    }
  };


const fetchIncomes = async () => {
  try {
     const response = await Api.get('/user-incomes');
     console.log('cehel',response.data.data);
     setIncome(response.data.data);
     setBalance(response.data.data.balanceData.available_balance);
     
  } catch (err) {
     setError(err.response?.data?.error || "Error fetching income");
  }
};

useEffect(() => {
  fetchUsers();
  fetchIncomes();
  console.log('users:',users);
}, []);



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


console.log('users:',users);

const styles = {
    container: {
      maxWidth: "430px",
      minHeight:"600px",
      margin: "auto",
      // background: "#fff",
      padding: "20px",
      // borderRadius: "20px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
      marginBottom: "65px"
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    profile: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    avatar: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
    },
    balanceCard: {
      background: "#222129",      
      color: "white",
      padding: "20px",
      borderRadius: "12px",
      textAlign: "center",
      marginTop: "15px",
    },
    actionButtons: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "15px",
      textAlign: "center",
    },
    actionItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "5px",
    },
    iconButton: {
      background: "#D1C4E9",
      border: "none",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      fontSize: "20px",
      cursor: "pointer",
    },
    button: {
      background: "#6a5acd",
      border: "none",
      color: "white",
      padding: "10px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      gap: "5px",
      fontSize: "14px",
      cursor: "pointer",
    },
    transactions: {
      marginTop: "20px",
    },
    transaction: {
      // backgroundColor: "#d1c4e9",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      // background: "white",
      padding: "12px",
      borderRadius: "10px",
      marginTop: "10px",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    },
    received: {
      color: "green",
      fontSize: "14px",
      // fontWeight: "bold",
    },
    outgoing: {
      color: "red",
      fontWeight: "bold",
    },
    quickActions: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "20px",
    },
    actionCard: {
      background: "#D1C4E9",
      padding: "15px",
      borderRadius: "12px",
      textAlign: "center",
      flex: "1",
      margin: "5px",
    },
    bottomNav: {
      display: "flex",
      justifyContent: "space-around",
      padding: "10px",
      background: "#101014",
      borderRadius: "12px",
      position: "fixed",
      bottom: "20px",
      width: "50%",
      left: "50%",
      transform: "translateX(-50%)",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
    navButton: {
      background: "none",
      border: "none",
      fontSize: "20px",
      cursor: "pointer",
    },
    p: {
      fontSize: "14px",
      margin: 0,
      color: "#101014",
    },
    span:{
      fontSize: "10px",
      fontWeight: "100",
      color: "#101014",
    },
    h1: {
      fontWeight:"800",
      fontSize: "30px",
    },
    h2: {
      color: "#222129",
      fontWeight:"800",
      fontSize: "20px",
    },
    h3:{
      color: "#101014",
    }
  };

  return (
    <div style={{paddingBottom:"17rem"}} className="container bg-n900 relative overflow-hidden flex justify-start items-start text-white pb-36">
      <div className="w-[582px] h-[582px] rounded-full bg-g300/10 absolute -top-48 -left-20 blur-[575px]"></div>
      <div className="relative z-20 w-full">
        {/* Header Card */}
        <div className="bg-white2 bg-opacity-5 py-8 px-6 rounded-b-3xl" style={{backgroundColor:"#EDE7F6"}}>
          <div className="flex justify-between items-center">
          <NavLink to="/home"> <i className="ph-bold ph-caret-left"></i>

          </NavLink>

          <div class="flex justify-center items-center w-full" style={{justifyContent:'center'}}><h1 class="font-semibold text-2xl">Assets</h1></div>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-5">
          {/* Item 1 */}
          <div className="rounded-xl overflow-hidden col-span-1">
            <div className="bg-opacity-5 p-3 flex justify-between items-center"  style={{backgroundColor:"#D1C4E9"}}>
            <img src="\assets\images\06.png" alt="DigitalNomad" style={{width:45, height:"auto"}}/>
              <div className="flex flex-col gap-2">
                
              {/* <i className="ph ph-wallet text-2xl text-g300"></i> */}
              {/* <img src="\assets\images\stake1.png" alt="DigitalNomad" style={{width:25, height:"auto"}}/> */}
                <p className="font-semibold" style={{color:"#101014", marginTop:30}}>Total Stake</p>
                <div className="flex  items-center  gap-1">
                  <img src="assets/images/ok3d.png"  className="h-5" />
                  <p className=" font-medium"style={{color:"#101014"}}>{parseFloat(income.totalInvestmentAmount).toFixed(2)}</p>
                </div>
              </div>
              <div className="flex justify-start items-center text-n70 text-sm">
               
              </div>
            </div>
          </div>
          {/* Item 2 */}
          <div className="rounded-xl overflow-hidden col-span-1">
            {/* <img src="assets/images/nft-tab-img-2.png" alt="Item 2" /> */}
            <div className=" bg-opacity-5 p-3 flex justify-between items-center" style={{backgroundColor:"#D1C4E9"}}>
            <img src="\assets\images\02.png" alt="DigitalNomad" style={{width:45, height:"auto"}}/>
              <div className="flex flex-col gap-2">
              {/* <i className="ph ph-handbag text-2xl text-g300"></i> */}
              {/* <img src="\assets\images\withdraw1.png" alt="DigitalNomad" style={{width:25, height:"auto"}}/> */}
                <p className=" font-semibold" style={{color:"#101014", marginTop:30}}>Total Withdraw</p>
                <div className="flex  items-center  gap-1">
                  <img src="assets/images/ok3d.png"  className="w-4 h-4" />
                  <p className="  font-medium" style={{color:"#101014"}}>{parseFloat(income.totalWithdrawlAmount).toFixed(2)}</p>
                </div>
              </div>
              <div className="flex justify-start items-center text-n70 text-sm">
              </div>
            </div>
          </div>
       
        </div>


        <div className="grid grid-cols-2 gap-4 pt-5">
          {/* Item 1 */}
          <div className="rounded-xl overflow-hidden col-span-1">
            <div className="bg-opacity-5 p-3 flex justify-between items-center"  style={{backgroundColor:"#D1C4E9"}}>
            <img src="\assets\images\05.png" alt="DigitalNomad" style={{width:45, height:"auto"}}/>
              <div className="flex flex-col gap-2">
              {/* <img src="\assets\images\team1.png" alt="DigitalNomad" style={{width:25, height:"auto"}}/> */}
              {/* <i className="ph ph-users text-2xl text-g300"></i> */}

                <p className="font-semibold" style={{color:"#101014", marginTop:30}}>Team Commission</p>
                <div className="flex  items-center  gap-1">
                  <img src="assets/images/ok3d.png"   className="h-5" />
                  <p className=" font-medium"style={{color:"#101014"}}>{parseFloat(income.totalTeamAmount).toFixed(2)}</p>
                </div>
              </div>
              <div className="flex justify-start items-center text-n70 text-sm">
               
              </div>
            </div>
          </div>
          {/* Item 2 */}
          <div className="rounded-xl overflow-hidden col-span-1">
            {/* <img src="assets/images/nft-tab-img-2.png" alt="Item 2" /> */}
            <div className=" bg-opacity-5 p-3 flex justify-between items-center" style={{backgroundColor:"#D1C4E9"}}>
            <img src="\assets\images\03.png" alt="DigitalNomad" style={{width:45, height:"auto"}}/>
              <div className="flex flex-col gap-2">
              {/* <i className="ph ph-coins text-2xl text-g300"></i>  */}
              {/* <img src="\assets\images\roi1.png" alt="DigitalNomad" style={{width:25, height:"auto"}}/> */}
                <p className=" font-semibold"style={{color:"#101014", marginTop:30}}>Roi Income</p>
                <div className="flex  items-center  gap-1">
                  <img src="assets/images/ok3d.png"  className="w-4 h-4" />
                  <p className="  font-medium"style={{color:"#101014"}}>{parseFloat(income.totalRoiAmount).toFixed(2)}</p>
                </div>
              </div>
              <div className="flex justify-start items-center text-n70 text-sm">
              </div>
            </div>
          </div>
       
        </div>

        </div>

     {/* Claimable Section */}<div className="px-6 pt-8">
   
  <WalletBalance balance={balance} />

  </div>
        
        {/* Invite Section */}
        <div className="px-6 pt-8">
          <div className="w-full  p-5 flex justify-between items-center rounded-xl relative bg-opacity-20 overflow-hidden" style={{
           color: '#fff',
          // backgroundColor: 'rgba(255,255,255,0.9)', // White bg with 5% opacity
        }}>
            <img
              src="assets/images/invite_bg.png"
              alt="Invite Background"
              className="absolute top-0 right-0 bottom-0 h-full"
            />
            <div className="max-w-[200px]">
              <p className="text-xl font-semibold" style={{color:"#101014"}}>
                Invite a friends and get <span className="text-g301">5%</span>
              </p>
              <p className="text-n70 pt-4 text-xs" style={{color:"#101014"}}>
                This section can be used as an Advertisement or a Call to Action
              </p>
            </div>
            <div>
              <img src="assets/images/invite_img.png" alt="Invite" />
            </div>
          </div>
        </div>



     {/* Tab Section */}
     <div className="homeTab pt-8 px-6">
          <ul className="tab-button flex justify-between items-center text-lg font-semibold">
            <li   onClick={() => setActiveTab('tokens')} className={`tabButton w-full  pb-2 border-b-2 border-n700 ${activeTab === 'activity' ? 'activeTabButton' : ''}`} style={{color:"#000"}}>
              History
            </li>          
            <li 
  
  style={{
    textAlign: "right",
    fontSize: "14px",  
    padding: "10px 1px", 
    lineHeight: "1.1",  
  }}  
  onClick={() => setActiveTab('activity')} 
  className={`tabButton w-full border-b-2 border-n700 ${
    activeTab === 'tokens' ? 'activeTabButton' : ''
  }`}
> <Link to="/all/transaction">View More</Link>
  
</li>

          </ul>
          <div className="pt-8">
          
            <div className="tab-content " >
              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold"></p>
                {/* <p className="text-sm text-g300">View All</p> */}
              </div>

               {users.length > 0 ? (
                      users.slice(0, 5).map((user, index) => (
                       <div key={index} style={styles.transaction}>
                         {/* Replace with a valid image URL */}
                         <img src={user.remark === "Deposit" ? "/assets/images/recived.png" : "/assets/images/send.png"} alt="User" style={{width:20, height:20}} />
                         <span style={{ fontSize: 12, marginLeft: "-20%" ,color:'#000'}}>
                             {user.remark}
                           </span>
                         <div>
                           {/* <p style={styles.p}>{user.remark}</p> */}
                           <span style={styles.p}>
                             {parseFloat(user.amount || 0).toFixed(2)}
                           </span>
                         </div>
             
                         <span style={styles.received}>
                           {user.status === "Active" ? "Success": "Pending"}
                         </span>
                       </div>
                     ))
                   ) : (
                     <div style={{
                       display: 'flex',
                       flexDirection: 'column',
                       justifyContent: 'center',
                       alignItems: 'center',
                       // height: '100vh',
                       textAlign: 'center'
                     }}>
                       <img 
                         src="/assets/images/empty_state.svg" 
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





              {/* <div className="pt-6">
                <Link
                  to="/add-token"
                  className="p-3 border border-dashed border-g300 rounded-xl w-full flex justify-center items-center gap-3 text-g300 font-medium"
                >
                  <span className="flex justify-center items-center p-1 text-n900 bg-g300 rounded-full">
                    <i className="ph ph-sliders-horizontal"></i>
                  </span>
                  Add Custom Token
                </Link>
              </div> */}
            </div>
              
            {activeTab === 'nft' && (
            <div className="tab-content " id="tabTwo_data">
              <ul className="flex justify-start items-center gap-3 overflow-y-auto">
                <li className="flex justify-center items-center gap-1 py-2 px-4 rounded-md text-n900 bg-g300 border border-g300">
                  All <i className="ph ph-caret-right"></i>
                </li>
                <li className="flex justify-center items-center gap-1 py-2 px-4 rounded-md border border-g300">
                  All <i className="ph ph-caret-right"></i>
                </li>
              </ul>
              <div className="flex justify-between items-center pt-8">
                <p className="text-xl font-semibold">Popular Collection</p>
                <p className="text-sm text-g300">View All</p>
              </div>
              <div className="flex justify-between items-center gap-5 pt-5">
                <div className="rounded-xl overflow-hidden">
                  <img src="assets/images/nft-tab-img-1.png" alt="NFT 1" />
                  <div className="bg-white bg-opacity-5 p-3 flex justify-between items-start">
                    <div className="flex justify-start items-start flex-col gap-2">
                      <p className="text-sm font-semibold">Abstract Lava</p>
                      <div className="flex justify-center items-center bg-white bg-opacity-5 py-1 px-2 rounded-md gap-1">
                        <img src="assets/images/Ethereum_ETH.png" alt="Ethereum" className="h-4" />
                        <p className="text-xs text-n70 font-medium">148.50k</p>
                      </div>
                    </div>
                    <button>
                      <i className="ph ph-dots-three-vertical"></i>
                    </button>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img src="assets/images/nft-tab-img-2.png" alt="NFT 2" />
                  <div className="bg-white bg-opacity-5 p-3 flex justify-between items-start">
                    <div className="flex justify-start items-start flex-col gap-2">
                      <p className="text-sm font-semibold">ArtVibes NFT</p>
                      <div className="flex justify-center items-center bg-white bg-opacity-5 py-1 px-2 rounded-md gap-1">
                        <img src="assets/images/Bitcoin_icon.png" alt="Bitcoin" className="h-4" />
                        <p className="text-xs text-n70 font-medium">164.44k</p>
                      </div>
                    </div>
                    <button>
                      <i className="ph ph-dots-three-vertical"></i>
                    </button>
                  </div>
                </div>
                {/* <div className="rounded-xl overflow-hidden">
                  <img src="assets/images/nft-tab-img-3.png" alt="NFT 3" />
                  <div className="bg-white bg-opacity-5 p-3 flex justify-between items-start">
                    <div className="flex justify-start items-start flex-col gap-2">
                      <p className="text-sm font-semibold">Crypto Punk</p>
                      <div className="flex justify-center items-center bg-white bg-opacity-5 py-1 px-2 rounded-md gap-1">
                        <img src="assets/images/Ethereum_ETH.png" alt="Ethereum" className="h-4" />
                        <p className="text-xs text-n70 font-medium">99.10k</p>
                      </div>
                    </div>
                    <button>
                      <i className="ph ph-dots-three-vertical"></i>
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
             )}
              {activeTab === 'activity' && (
            <div className="tab-content " id="tabThree_data">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center border-b border-white border-opacity-5 pb-4">
                  <div className="flex justify-start items-center gap-2">
                    <div className="text-g300 flex justify-center items-center p-2 rounded-full text-xl bg-white bg-opacity-5">
                      <i className="ph ph-arrow-up"></i>
                    </div>
                    <p className="font-semibold">0.01564 ETH</p>
                  </div>
                  <div className="flex flex-col justify-end items-end">
                    <p className="font-semibold">Top up</p>
                    <p className="text-g300 text-sm">1 hour ago</p>
                  </div>
                </div>
                <div className="flex justify-between items-center border-b border-white border-opacity-5 pb-4">
                  <div className="flex justify-start items-center gap-2">
                    <div className="text-g300 flex justify-center items-center p-2 rounded-full text-xl bg-white bg-opacity-5">
                      <i className="ph ph-arrow-up-right"></i>
                    </div>
                    <p className="font-semibold">0.01564 BTC</p>
                  </div>
                  <div className="flex flex-col justify-end items-end">
                    <p className="font-semibold">Send</p>
                    <p className="text-g300 text-sm">1 hour ago</p>
                  </div>
                </div>
                <div className="flex justify-between items-center border-b border-white border-opacity-5 pb-4">
                  <div className="flex justify-start items-center gap-2">
                    <div className="text-g300 flex justify-center items-center p-2 rounded-full text-xl bg-white bg-opacity-5">
                      <i className="ph ph-arrow-down"></i>
                    </div>
                    <p className="font-semibold">0.01564 NEO</p>
                  </div>
                  <div className="flex flex-col justify-end items-end">
                    <p className="font-semibold">Receive</p>
                    <p className="text-g300 text-sm">1 hour ago</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex justify-start items-center gap-2">
                    <div className="text-g300 flex justify-center items-center p-2 rounded-full text-xl bg-white bg-opacity-5">
                      <i className="ph ph-arrow-up"></i>
                    </div>
                    <p className="font-semibold">0.01564 EOS</p>
                  </div>
                  <div className="flex flex-col justify-end items-end">
                    <p className="font-semibold">Top up</p>
                    <p className="text-g300 text-sm">1 hour ago</p>
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>

        {/* Top Gainers */}
        {/* <div className="px-6 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Top Gainers</p>
            <Link to="/top-gainers" className="text-sm text-g300">
              View All
            </Link>
          </div>
          <div className="flex flex-col gap-2 pt-5">
            <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl">
              <div className="flex justify-start items-center gap-2">
                <p className="text-sm text-n70">#01</p>
                <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
                  <img src="assets/images/Ethereum_ETH.png" alt="Ethereum" />
                </div>
                <p className="font-semibold">Ethereum</p>
              </div>
              <div className="flex flex-col justify-end items-end">
                <p className="font-semibold">$0.272889</p>
                <p className="text-g300 text-sm">+8.00%</p>
              </div>
            </div>
            <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl">
              <div className="flex justify-start items-center gap-2">
                <p className="text-sm text-n70">#02</p>
                <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
                  <img src="assets/images/Bitcoin_icon.png" alt="Bitcoin" />
                </div>
                <p className="font-semibold">Bitcoin</p>
              </div>
              <div className="flex flex-col justify-end items-end">
                <p className="font-semibold">$0.432586</p>
                <p className="text-g300 text-sm">+3.00%</p>
              </div>
            </div>
            <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl">
              <div className="flex justify-start items-center gap-2">
                <p className="text-sm text-n70">#03</p>
                <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
                  <img src="assets/images/Litecoin.png" alt="Litecoin" />
                </div>
                <p className="font-semibold">Litecoin</p>
              </div>
              <div className="flex flex-col justify-end items-end">
                <p className="font-semibold">$0.692657</p>
                <p className="text-g300 text-sm">+2.00%</p>
              </div>
            </div>
          </div>
        </div> */}

     
        {/* Tab Area Start */}
        <Footer />
        {/* Tab Area End */}
      </div>
    </div>
  );
}

export default Marketplace;
