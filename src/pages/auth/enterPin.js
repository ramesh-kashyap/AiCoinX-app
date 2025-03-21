import React, { useState } from "react";
import Api from "../../service/Api";
import { useNavigate, Link } from "react-router-dom";
import { BorderColor } from "@mui/icons-material";
import { Toaster, toast } from "react-hot-toast";

function EnterPin() {
  const [pin, setPin] = useState("");
  const navigate = useNavigate();
  // ✅ FIXED: Properly updates state using prevPin
  const handleDigitClick = (digit) => {
    console.log("Button clicked:", digit); // Debugging
    setPin((prevPin) => {
      if (prevPin.length < 4) {
        console.log("Updated PIN:", prevPin + digit.toString()); // Debugging
        const newPin =
          prevPin.length < 4 ? prevPin + digit.toString() : prevPin;
        if (newPin.length === 4) {
          verifyPin(newPin); // 🔥 API Call when PIN is complete
        }
        return prevPin + digit.toString();
      }
      return prevPin;
    });
  };

  // ✅ Backspace: Remove last digit
  const handleBackspace = () => {
    setPin((prevPin) => prevPin.slice(0, -1));
  };

  
  const verifyPin = async (pin) => {
    console.log("Verifying PIN:", pin); // Debugging

    try {
      const response = await Api.post("/verify-pin", {
        pin,
      });

      if (response.data.status) {
        navigate("/home");
      } else {
        console.error("Login failed:", response.message);
      }
    } catch (error) {
      console.error("API Error:", error.response.data.error);
      toast.error(error.response?.data?.error || "Something went wrong!"); 
      setPin(""); // Clear PIN on error
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
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-48 -left-20 blur-[575px]"></div>
      <div style={styles.container} className="bg-n900">
        {/* Logo */}
        <div style={styles.logoContainer}>
          <img
            alt="Profile picture of a person with sunglasses"
            className="w-12 h-12 rounded-full"
            height="50"
            src="\assets\images\userIcon.edc1c75ce595e5bb3b239b6d69ec9cf4.svg"
            width="50"
          />
        </div>

        {/* Title & Subtitle */}
        <h1 style={styles.title}>Enter PIN!</h1>
        <p style={styles.subtitle}>
          Enter your four-digit PIN to create a new PIN
        </p>

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
        <a href="#!" style={styles.forgotPin}>
          Forgot PIN?
        </a>
      </div>
    </div></>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    // backgroundColor: "rgb(17 22 27)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem 1rem",
    fontFamily: "sans-serif",
    color: "#000",
  },
  logoContainer: {
    BorderColor: "#fff",
    marginBottom: "1.5rem",
    marginTop: "2rem",
  },
  title: {
    margin: 0,
    fontSize: "1.5rem",
    fontWeight: "bold",
    // color: "#fff",
  },
  subtitle: {
    margin: "0.5rem 0 2rem 0",
    fontSize: "0.95rem",
    // color: "#fff",
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
    backgroundColor: "#9583ff",
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
