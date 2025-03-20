import React from "react";

const WalletBalance = ({ balance }) => {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
  
      padding: "15px",
      borderRadius: "12px",
      boxShadow: "0 2px 6px rgb(17 24 32)", // Subtle shadow
      maxWidth: "100%",
      backgroundImage: "url('assets/images/referral-friend-bg2-88eb9f12.jpg')",
      backgroundPosition: "bottom",
      backgroundSize: "auto",
      backgroundRepeat: "no-repeat"
     
    },
    icon: {
      width: "40px",
      height: "40px",
    },
    balanceText: {
      fontSize: "20px",
      fontWeight: "bold",
      color:"#fff",
      margin: "0",
    },
    description: {
      fontSize: "14px",
      color: "#fff",
      margin: "0",
    },
  };

  return (
    <div style={styles.container}>
      {/* Wallet Icon */}
      <img
        src="assets/images/ok3d.png" // Replace with actual icon URL
        alt="Wallet Icon"
        style={styles.icon}
      />

      {/* Balance Info */}
      <div>
        <p style={styles.balanceText}>{parseFloat(balance).toFixed(2)}</p>
        <p style={{ ...styles.description}}>in the wallet</p>
      </div>
    </div>
  );
};

export default WalletBalance;
