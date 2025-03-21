import React, { useState, useEffect } from "react";
import { FiPlusCircle, FiRepeat, FiSend, FiArrowDownLeft, FiUsers, FiCreditCard, FiBell, FiHome, FiUser, FiDownload, FiTrendingUp } from "react-icons/fi";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Footer from '../components/footer';
import Api from '../../service/Api';
import WalletBalance from '../components/wallet';
import AirdropCard from '../components/airDrop';
import NewsCard from '../components/newsComponent';
import { fontSize, minHeight } from "@mui/system";
import { encryptID } from "../components/cryptoUtils";
import AutoCarousel from "../components/AutoCarousel";
import Marquee from "react-fast-marquee";
import { Volume2 } from "lucide-react"; // Using Lucide React for the icon


const WalletDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tokens');
  const [coinData, setCoinData] = useState(null);
  const [news, setNews] = useState(null);
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [encryptedId, setencryptedId] = useState(null);
  const [users, setUsers] = useState([]);
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState("");
  const [income, setIncome] = useState([]);
  const [liveData, setLiveData] = useState({ topGainers: [], topLosers: [] });
  const fetchNewsData = async () => {
    try {
      // Fetch news data (adjust the endpoint as needed)
      const newsResponse = await Api.get('/news');
      if (newsResponse.data.status) {
        setNews(newsResponse.data.data);
        setUser(newsResponse.data.userData[0].fullname);
        console.log('News data:', newsResponse.data.userData[0].fullname);
      } else {
        console.error('Failed to fetch balance:', newsResponse.data);
      }

    } catch (error) {
      console.error('Error fetching news data:', error);
    }
  }
  const fetchGetBalance = async () => {
    try {
      // Fetch news data (adjust the endpoint as needed)
      const response = await Api.get('/getBalance');
      if (response.data.status) {
        setBalance(response.data.data.
          available_balance);
          setUserId(response.data.
            userId);

        console.log('Balance data:', response.data);
      } else {
        console.error('Failed to fetch balance:', response.data);
      }

    } catch (error) {
      console.error('Error fetching news data:', error);
    }
  }
  useEffect(() => {
    // Function to fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await Api.get('/live-data'); // or the full URL if needed
        setLiveData(response.data);
        console.log('data:', response.data);
      } catch (error) {
        console.error('Error fetching live data:', error);
      }
    };
    fetchGetBalance();
    // fetchData();
    fetchNewsData();
    const encrypted = encryptID(userId);
    setencryptedId(encrypted);

    // Optional: Refresh data every 10 seconds
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await Api.get("/deposit-History");

      if (response.data && Array.isArray(response.data.data)) {
        setUsers(response.data.data);
       
      } else {
        setUsers([]);
      }
    } catch (err) {
      setError(err.response?.data?.error || "Error fetching data");
    }
  };

  // Run effect on component mount
  useEffect(() => {
    fetchUsers();
    fetchIncomes();
   
  }, []);

  const fetchIncomes = async () => {
    try {
      const response = await Api.get('/user-incomes');
      console.log('cehel', response.data.data);
      setIncome(response.data.data);

    } catch (err) {
      console.err("someting wrong");
      setError(err.response?.data?.error || "Error fetching income");
    }
  };

  // Inline CSS styles
  const styles = {
    container: {
      maxWidth: "430px",
      minHeight: "600px",
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
      background: "url('assets/images/referral-friend-bg2-88eb9f12.jpg')",
    color: "white",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    marginTop: "15px",
    boxShadow: "rgba(68, 110, 253, 0.2) 5px 12px 14px",
    backgroundPosition: "bottom",
    backgroundSize: "revert-layer",
    backgroundRepeat: "no-repeat"
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
    span: {
      fontSize: "10px",
      fontWeight: "100",
      color: "#101014",
    },
    h1: {
      fontWeight: "800",
      fontSize: "30px",
    },
    h2: {
      color: "#222129",
      fontWeight: "800",
      fontSize: "20px",
    },
    h3: {
      color: "#101014",
    }
  };

  return (
    <div style={styles.container} class="bg-n900">
      {/* User Info */}
      <header style={styles.header}>
        <div style={styles.profile}>
          <img src="assets/images/jabru.png" alt="User Avatar" style={styles.avatar} />
          <div>
            <span style={styles.span}>Hello,</span>
            <h2 style={styles.h2}>{user
              ? user.charAt(0).toUpperCase() + user.slice(1)
              : "Guest"}</h2>
          </div>
        </div>
        <FiBell style={{ fontSize: "20px", color: "#101014", }} />
      </header>

      {/* Balance Card */}
      <div style={styles.balanceCard}>
        <p style={{ textAlign: "left" }}>Your Balance</p>
        <h1 style={{ fontWeight: "800", fontSize: "30px", textAlign: "left", color: "#fff" }}>{parseFloat(balance).toFixed(2)}</h1>
        {/* <span style={{marginRight:"50%"}}>Total Stake<span style={{color:"#ffd502",marginLeft:10}}>{parseFloat(income.totalInvestmentAmount).toFixed(2)}</span></span> */}

        <div style={styles.actionButtons}>
          <div style={styles.actionItem}>
            <button onClick={() => window.open(`https://stake.aivault.world`, '_blank')} style={styles.iconButton}><FiDownload style={{ color: "#000" }} /></button>
            <p>Add AICX</p>
          </div>
          <div style={styles.actionItem}>
            <button onClick={() => window.open(`https://stake.aivault.world/stake?userId=${userId}`, '_blank')}
              style={styles.iconButton}><FiTrendingUp style={{ color: "#000" }} /></button>
            <p>Stake</p>
          </div>
          <div style={styles.actionItem}>
            <button onClick={() => navigate('/withdraw')} style={styles.iconButton}><FiArrowDownLeft style={{ color: "#000" }} /></button>
            <p>Withdraw</p>
          </div>
          
          
          <div style={styles.actionItem}>
            <button  onClick={() => window.open(`https://stake.aivault.world/sellToken`, '_blank')} style={styles.iconButton}><FiSend style={{ color: "#000" }} /></button>
            <p>Swap</p>
          </div>
        </div>

      </div>
        <br/>

        <AutoCarousel/>

        <div className="w-full bg-white shadow-md rounded-2xl p-2 flex items-center" style={{marginTop:'10px'}}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white">
              <Volume2 size={20}  stroke="#9583ff"/>
            </div>
            <Marquee speed={50} gradient={false} className="ml-2 text-gray-800">
              Contributions you will bring to our team and are committed to providing you with the resources and opportunities you need to thrive.
              Together, we can achieve great things. Thank you for choosing to be a part of our journey.
            </Marquee>
          </div>


      {/* Transactions */}
      <div style={styles.transactions} >
        <h3 style={styles.h3}>
          Transactions
          <span onClick={() => navigate('/all/transaction')} style={{ color: "#101014", cursor: "pointer", marginLeft: "60%" }}>See all</span>
        </h3>

        {users.length > 0 ? (
          users.slice(0, 5).map((user, index) => (
            <div key={index} style={styles.transaction}>
              {/* Replace with a valid image URL */}
              <img src={user.remark === "Deposits" ? "/assets/images/recived.png" : "/assets/images/send.png"} alt="User" style={{ width: 20, height: 20 }} />
              <span style={{ fontSize: 12, marginLeft: "-20%" }}>
                {user.remark}
              </span>
              <div>
                {/* <p style={styles.p}>{user.remark}</p> */}
                <span style={styles.p}>
                  {parseFloat(user.amount || 0).toFixed(2)}
                </span>
              </div>

              <span style={styles.received}>
                {user.status === "Active" ? "Completed" : "Pending"}
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
      </div>

      {/* Quick Actions */}
      {/* <div style={styles.quickActions}>
  <div 
    onClick={() => navigate('/security/refferals-user')} 
    style={{ 
      ...styles.actionCard, 
      position: "relative", 
      overflow: "visible"
    }}
  >
    <div style={{ flex: "1", textAlign: "left" }}>
      <p style={{ fontWeight: "bold", fontSize: "16px", color: "#222129" }}>Invite Friends</p>
      <p style={{ fontSize: "12px", color: "#222129" }}>Invite friends to join using our application</p>
    </div>
    <div 
      style={{ 
        position: "absolute", 
        right: "-20px", 
        top: "50%", 
        transform: "translateY(-50%)"
      }}
    >
      <img src="assets/images/refer.png" alt="Invite Friends" style={{width:120,height:120}} />
    </div>
  </div>
</div> */}
      <div style={styles.quickActions}>
        {/* Invite Friends Section */}
        <div onClick={() => navigate('/security/refferals-user')} style={styles.actionCard}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
            <img src="assets/images/jabru.png" alt="Friend 1" style={styles.avatar} />
            <img src="assets/images/payal.png" alt="Friend 2" style={{ ...styles.avatar, marginLeft: "-10px" }} />
            <img src="assets/images/rahul.png" alt="Friend 3" style={{ ...styles.avatar, marginLeft: "-10px" }} />
          </div>
          <p style={{ fontWeight: "bold", fontSize: "16px" }}>Invite Friends</p>
          <p style={{ fontSize: "12px", color: "#666" }}>Invite friends to join using our application</p>
        </div>

        {/* Add Card Section */}
        <div style={styles.actionCard}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
            <img src="assets/images/card.png" alt="Card" style={{ borderRadius: "8px" }} />
          </div>
          <p style={{ fontWeight: "bold", fontSize: "16px" }}>Add Card</p>
          <p style={{ fontSize: "12px", color: "#666" }}>Stake your AI CoinX tokens and earn passive rewards </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <Footer />
    </div>
  );
};

export default WalletDashboard;
