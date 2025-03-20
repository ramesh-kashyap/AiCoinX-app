import React, { useState, useEffect } from "react";
import Api from "../../../service/Api";
import { useNavigate,Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

function EnterPin() {
  const [pin, setPin] = useState("");
  const navigate = useNavigate();

  const handleDigitClick = (digit) => {
    setPin((prevPin) => (prevPin.length < 4 ? prevPin + digit.toString() : prevPin));
  };

  // ✅ Backspace: Remove last digit
  const handleBackspace = () => {
    setPin((prevPin) => prevPin.slice(0, -1));
  };

  // ✅ API Call when PIN is complete
  useEffect(() => {
    if (pin.length === 4) {
      verifyPin(pin);
    }
  }, [pin]); // 🔥 Runs only when `pin` changes

  const verifyPin = async (pin) => {
    console.log("Verifying PIN:", pin);
  
    try {
      const response = await Api.post("/verify-pin", { pin });
  
      toast.dismiss(); // Ensure only one toast at a time
  
      if (response.data.status) {
        toast.success(response.data.message); // Use message from backend
        navigate("/security/new-password");
      } else {
        toast.error(response.data.error || "PIN verification failed.");
      }
    } catch (error) {
      console.error("API Error:", error.response?.data?.error || "Unknown error");
  
      toast.dismiss(); // Remove previous toasts
  
      // Display error message from backend
      toast.error(error.response?.data?.error || "Something went wrong!"); 
    }
  };
  
  // ✅ Render PIN dots (displays dots for entered digits)
  const renderPinDots = () => (      

    <div style={styles.pinDisplay}>
      {[0, 1, 2, 3].map((i) => (
        <div key={i} style={styles.pinDot}>
          {pin[i] ? <div style={styles.filledDot} /> : null}
        </div>
      ))}
    </div>
  );

  return (
    <><Toaster position="top-center" /><div className="container relative overflow-hidden justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full bg-g3001 absolute -top-48 -left-20 blur-[575px]"></div>
      
      <div style={styles.container} className="bg-n900">
      <div className="buySellTab pt-8 px-6 w-full relative z-20">

         <div style={{marginRight:"20rem"}}  className="flex justify-start items-center pb-8 mr-8">
          
                  <Link to="/account" className="flex justify-center items-center p-2 rounded-full bg-g300 text-n900">
                                    <i className="ph-bold ph-caret-left"></i>
                                  </Link>
                 
                </div></div>
        {/* Logo */}
        <div style={{marginBottom:"20px"}}>
          <img style={{width:"70px"}} alt="Profile picture of a person with sunglasses" className="w-12 h-12 rounded-full" height="50" src="\assets\images\userIcon.edc1c75ce595e5bb3b239b6d69ec9cf4.svg" width="50"/>

        </div>

        {/* Title & Subtitle */}
        <h1 style={styles.title}>Verify Your Old PIN!</h1>
        <p style={styles.subtitle}>Enter your four-digit PIN to create a new PIN</p>

        {/* PIN Dots */}
        {renderPinDots()}

        {/* Keypad */}
        <div style={styles.keypad}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              style={styles.keyButton}
              onClick={() => handleDigitClick(num)}
            >
              {num}
            </button>
          ))}

          {/* Empty Space for Layout */}
          <div />

          {/* Zero Button */}
          <button style={styles.keyButton} onClick={() => handleDigitClick(0)}>
            0
          </button>

          {/* Backspace Button */}
          
          <button style={styles.keyButton} onClick={handleBackspace}>
            ✕
          </button>
        </div>

        {/* Fingerprint Authentication Button */}
       

        {/* Forgot PIN Link */}
      </div>
    </div></>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#EDE7F6",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem 1rem",
    fontFamily: "sans-serif",
    color: "#000",
  },
  logoContainer: {
    BorderColor: "#f4f4f4",
    marginBottom: "1.5rem",
    marginTop: "2rem",
  },
  title: {
    margin: 0,
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#101014",
  },
  subtitle: {
    margin: "0.5rem 0 2rem 0",
    fontSize: "0.95rem",
    color: "#101014",
    textAlign: "center",
    maxWidth: "300px",
  },
  pinDisplay: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1.5rem",
  },
  pinDot: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    border: "2px solid #ccc",
    margin: "0 5px",
    display: "flex",
    alignItems: "center",    
    justifyContent: "center",
  },
  filledDot: {
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    backgroundColor: "#101014",
  },
  keypad: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 60px)",
    gridGap: "3rem",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1.5rem",
  },
  keyButton: {
    width: "60px",
    height: "60px",
    fontSize: "1.5rem",
    borderRadius: "50%",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    cursor: "pointer",
    outline: "none",
    position: "relative", // ✅ Ensure button is not blocked
    zIndex: 10,
  },
  fingerprintButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    border: "1px solid #6f49ed",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    cursor: "pointer",
    outline: "none",
    marginBottom: "1rem",
  },
  fingerprintText: {
    marginLeft: "0.5rem",
    color: "#6f49ed",
    fontSize: "1rem",
    fontWeight: "500",
  },
  forgotPin: {
    marginTop: "auto",
    color: "#6f49ed",
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default EnterPin;
