import React, { useState, useEffect, useRef } from "react";
import Api from "../../service/Api";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
function Otp() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const otpGenerated = useRef(false);
  const verifyingRef = useRef(false);
  const handleResendOtp = async () => {
    // Optionally reset the current OTP
    setOtp("");

    // Optionally disable the resend link for a few seconds here (not shown)

    // Call your OTP generation function again
    await generateOtp();

    // Optionally display a toast notification or message to the user
    toast.success("OTP has been resent!");
  };
  // When a digit is clicked, append it to the OTP (max 6 digits)
  const handleDigitClick = (digit) => {
    setOtp((prevOtp) => {
      if (prevOtp.length < 6) {
        const newOtp = prevOtp + digit.toString();
        if (newOtp.length === 6) {
          verifyOtp(newOtp); // API Call when OTP is complete
        }
        return newOtp;
      }
      return prevOtp;
    });
  };
  useEffect(() => {
    const otpAuth = localStorage.getItem("otpauth"); // Get flag
    if (otpAuth !== "true") {
      navigate("/home");
    } else if (!otpGenerated.current) {
      otpGenerated.current = true;
      generateOtp();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Calls the backend API to generate an OTP.
   */
  const generateOtp = async () => {
    try {
      const response = await Api.post("/generate-otp");
      if (response.data.status) {
        // In production, do not show OTP in response.
        console.log("otp gentrate", response.data.status);
      }
    } catch (error) {
      console.error("Error generating OTP", error.response.data.message);
    }
  };

  // Remove the last digit (Backspace functionality)
  const handleBackspace = () => {
    setOtp((prevOtp) => prevOtp.slice(0, -1));
  };

  // Verify OTP using API
  const verifyOtp = async (otpValue) => {
    if (verifyingRef.current) return; // Prevent duplicate verification calls
    verifyingRef.current = true;

    const { walletAddress, amount } = location.state || {};
    console.log("Verifying OTP:", otpValue);
    try {
      const response = await Api.post("/verify-otp", { otp: otpValue });
      if (response.data.status) {
        localStorage.removeItem("otpauth");
        const response = await Api.post("/withdraw", {
          walletAddress, // sending the wallet address obtained from dummy data
          amount,
        });
        if (response.data.status) {
          navigate("/home");
        } else {
          console.error("OTP verification failed:", response.data.message);
        }
      } else {
        console.error("OTP verification failed:", response.data.message);
        setOtp(""); // Clear OTP on failure
      }
    } catch (error) {
      console.error("API Error:", error);
      toast.error(error.response?.data?.message);

      setOtp(""); // Clear OTP on error
      setTimeout(() => {
        navigate("/withdraw");
      }, 5000);
    }
  };

  // Render OTP digits (each entered digit is shown in a box)
  const renderOtpDigits = () => (
    <div style={styles.otpDisplay}>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div key={i} style={styles.otpBox}>
          {otp[i] || ""}
        </div>
      ))}
    </div>
  );

  return (
    <div className="container relative overflow-hidden justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-48 -left-20 blur-[575px]"></div>
      <div style={styles.container} className="bg-n900">
        {/* Logo */}
        <div style={styles.logoContainer}>
          <img
            alt="Profile"
            className="w-12 h-12 rounded-full"
            height="50"
            src="\assets\images\userIcon.edc1c75ce595e5bb3b239b6d69ec9cf4.svg"
            width="50"
          />
        </div>

        {/* Title & Subtitle */}
        <h1 style={styles.title}>Enter OTP!</h1>
        <p style={styles.subtitle}>
          Enter the 6-digit OTP sent to your phone to verify your account.
        </p>

        {/* OTP Digits */}
        {renderOtpDigits()}

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

          {/* Empty space for layout */}
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

        {/* Resend OTP Link */}
        <a href="#!" style={styles.forgotPin} onClick={handleResendOtp}>
          Resend OTP?
        </a>
      </div>
      <Toaster />
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem 1rem",
    fontFamily: "sans-serif",
    color: "#fff",
  },
  logoContainer: {
    marginBottom: "1.5rem",
    marginTop: "2rem",
  },
  title: {
    margin: 0,
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    margin: "0.5rem 0 2rem 0",
    fontSize: "0.95rem",
    color: "#000",
    textAlign: "center",
    maxWidth: "300px",
  },
  otpDisplay: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1.5rem",
  },
  otpBox: {
    width: "30px",
    height: "40px",
    margin: "0 5px",
    borderBottom: "2px solid #ccc",
    fontSize: "1.5rem",
    textAlign: "center",
    color: "#000",
    lineHeight: "40px",
  },
  keypad: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 60px)",
    gridGap: "1rem",
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
    position: "relative",
    zIndex: 10,
    color: "#000",
  },
  forgotPin: {
    marginTop: "auto",
    color: "#000",
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default Otp;
