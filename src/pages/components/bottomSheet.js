import zIndex from "@mui/material/styles/zIndex";
import React , { useState,useEffect }from "react";
import { FaCreditCard, FaArrowDown, FaExchangeAlt, FaArrowUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
const BottomSheet = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const styles = {
    overlay: {
      position: "fixed",
      zIndex:10,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
    },
    sheet: {
      width: "425px",
    
      backgroundColor: "#EDE7F6",
      borderRadius: "20px 20px 0 0",
      padding: "20px",
      boxShadow: "0px -4px 10px rgba(0,0,0,0.1)",
      
    },
    handle: {
      width: "50px",
      height: "5px",
      backgroundColor: "#ccc",
      borderRadius: "10px",
      margin: "auto",
    },
    option: {
      display: "flex",
      alignItems: "center",
      padding: "15px",
      borderBottom: "1px solid #eee",
      cursor: "pointer",
      fontSize: "16px",
    },
    icon: {
      marginRight: "15px",
      color: "#fff",
      backgroundColor: "#6a0dad",
      fontSize: "20px",
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      display: "flex", // Flexbox for centering the icon
      alignItems: "center", // Vertically centers the icon
      justifyContent: "center", // Horizontally centers the icon
      textAlign: "center", // Ensures the icon is centered within the circle
    },
    arrow: {
      marginLeft: "auto",
      color: "#999",
    },
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.sheet} onClick={(e) => e.stopPropagation()}>
        {/* Handle Bar */}
        <div style={styles.handle}></div>

        {/* Options */}
        <Link to="/security/refferals-user"  style={styles.option}>
       
          <div style={styles.icon} >
          {/* <div className="flex justify-center items-center p-4 text-xl bg-white bg-opacity-5 rounded-full text-g300"> */}
                <i className="ph-fill ph-swap"></i>
                {/* <img src="../assets/images/swap.png" alt="swap" style={{width:25, height:"auto"}}/> */}
                {/* </div> */}
            {/* <i className="fas fa-exchange-alt mr-2"></i>  */}
            </div>
    
          <div>
            <strong style={{color:"#101014"}}>Swap</strong>
            <p style={{ margin: "0", fontSize: "12px", color: "#101014" }}>
            Exchange one token for another
            </p>
          </div>
          <span style={styles.arrow}>›</span>
        </Link>

        <Link to="/withdraw" style={styles.option}>
        <div style={styles.icon} >
          {/* <i className="fas fa-arrow-down mr-2"></i> */}
          <i className="ph-fill ph-currency-dollar"></i>
           </div>
          <div>
            <strong style={{color:"#101014"}}>Withdraw</strong>
            <p style={{ margin: "0", fontSize: "12px", color: "#101014" }}>
              Withdraw tokens from other wallets
            </p>
          </div>
          <span style={styles.arrow}>›</span>
        </Link>

        <Link to="#" style={styles.option}>
        <div style={styles.icon} >
          {/* <i className="fas fa-layer-group mr-2"></i> */}
          <i className="ph-fill ph-wallet"></i> 
          </div>
          <div>
            <strong style={{color:"#101014"}}>Stake</strong>
            <p style={{ margin: "0", fontSize: "12px", color: "#101014" }}>
            Lock tokens to earn rewards or interest.
            </p>
          </div>
          <span style={styles.arrow}>›</span>
        </Link>

        <Link to="/all/transaction" style={styles.option}>
        <div style={styles.icon} >
          {/* <i className="fas fa-history mr-2"></i> */}
          <i className="fas fa-history"></i>
          </div>
          <div>
            <strong style={{color:"#101014"}}>History</strong>
            <p style={{ margin: "0", fontSize: "12px", color: "#101014" }}>
            View your past transactions and activities.
            </p>
          </div>
          <span style={styles.arrow}>›</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomSheet;
