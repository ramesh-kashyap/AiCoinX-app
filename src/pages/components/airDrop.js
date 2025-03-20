import React from 'react';
const AirdropCard = () => {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "transparent",
      padding: "15px",
      borderRadius: "15px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      border: "2px solid #222129", // Light purple border
      maxWidth: "400px",
      margin: "20px auto",
    },
    content: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    icon: {
      width: "50px",
      height: "50px",
      borderRadius:"50%"
    },
    title: {
      fontSize: "16px",
      fontWeight: "bold",
      margin: "0",
      color: "#101014",
    },
    points: {
      display: "flex",
      alignItems: "center",
      fontSize: "14px",
      color: "white",
      marginTop: "5px",
    },
    amount: {
      fontWeight: "bold",
      color: "#3A3F4A",
      fontSize: "18px",
      marginRight: "5px",
    },
    tokenIcon: {
      width: "18px",
      height: "18px",
      marginRight: "5px",
    },
    arrow: {
      fontSize: "20px",
      color: "#101014",
    },
  };

  return (
    <div style={styles.container}>
      {/* Left Side Content */}
      <div style={styles.content}>
        {/* Parachute Icon */}
        <img
          src="\assets\images\SxSoOaFiKKPtK5BDitkmVcvn2HTgm69wuHAJeJzcjmQ.jpg" // Replace with actual parachute icon URL
          alt="Airdrop"
          style={styles.icon}
        />

        {/* Text Content */}
        <div>
          <h2 style={styles.title}>Earn more AI CoinX!</h2>
          <p style={styles.points}>
            <span style={styles.amount}>70,000.00</span>
            <img
              src="assets/images/ok3d.png" // Replace with actual token logo
              alt="Klink Logo"
              style={styles.tokenIcon}
            />
            <span style={{color:"#101024"}}>points earned so far</span>
          </p>
        </div>
      </div>

      {/* Right Arrow */}
      <span style={styles.arrow}>➜</span>
    </div>
  );
  };
  export default AirdropCard;