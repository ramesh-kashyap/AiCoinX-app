import React, { useState,useEffect } from "react";
import Api from "../../service/Api";
import { useLocation, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

function SetPin() {
  const location = useLocation();
  const [step, setStep] = useState("setPin"); // 'setPin' -> Set PIN, 'confirmPin' -> Confirm PIN
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const navigate = useNavigate();
  const email = location.state?.email || "";

  // Calculate progress using a three-part bar:
  // The first two segments (66.66%) are auto-filled.
  useEffect(() => {
    if (!email) {
      navigate("/register");
    }
  }, [email, navigate]);
  // The third segment (33.33%) is based on user input.
  const baseProgress = 66.66;
  const segmentProgress = 16.5;
  const progressValue =
    step === "setPin"
      ? baseProgress + (pin.length / 4) * segmentProgress
      : baseProgress + (confirmPin.length / 4) * segmentProgress+16.5;

  // Handle PIN digit click
  const handleDigitClick = (digit) => {
    if (step === "setPin") {
      if (pin.length < 4) {
        const newPin = pin + digit.toString();
        setPin(newPin);
        if (newPin.length === 4) {
          setStep("confirmPin"); // Move to confirm step
        }
      }
    } else {
      if (confirmPin.length < 4) {
        const newConfirmPin = confirmPin + digit.toString();
        setConfirmPin(newConfirmPin);
        if (newConfirmPin.length === 4) {
          verifyPin(pin, newConfirmPin); // Verify once both PINs are entered
        }
      }
    }
  };

  // Remove the last digit from the current PIN entry
  const handleBackspace = () => {
    if (step === "setPin") {
      setPin((prevPin) => prevPin.slice(0, -1));
    } else {
      setConfirmPin((prevPin) => prevPin.slice(0, -1));
    }
  };

  // Verify PINs and call API
  const verifyPin = async (enteredPin, confirmedPin) => {
    if (enteredPin !== confirmedPin) {
      alert("PINs do not match! Try again.");
      setPin("");
      setConfirmPin("");
      setStep("setPin");
      return;
    }

    try {
      const response = await Api.post("/set-pin", { email, pin });
      console.log("API Response:", response.data);
      if (response.data.status) {
        const { token } = response.data;
        localStorage.setItem("authToken", token);
        navigate("/home");
      } else {
        alert("Error setting PIN.");
      }
    } catch (error) {
      console.log(
        "API Error:",
        error.response?.data?.error || "Unknown Error"
      );
      toast.error(error.response?.data?.error || "Something went wrong!");
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="container relative overflow-hidden justify-start items-start text-white">
        <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-48 -left-20 blur-[575px]"></div>
        <div style={styles.container} >
          {/* Progress Bar with 3 segments */}
          <div style={styles.progressContainer}>
            <div style={styles.progressBar}>
              <div
                style={{
                  ...styles.progressFill,
                  width: `${progressValue}%`,
                }}
              />
              {/* Divider segments */}
              <div style={{ ...styles.segment, ...styles.segment1 }} />
              <div style={{ ...styles.segment, ...styles.segment2 }} />
            </div>
            <span style={styles.progressText}>
              {progressValue.toFixed(0)}%
            </span>
          </div>

          {/* Logo */}
          <div style={{ marginBottom: "20px" }}>
            <img
              style={{ width: "70px" }}
              alt="Profile picture of a person with sunglasses"
              className="w-12 h-12 rounded-full"
              height="50"
              src="\assets\images\userIcon.edc1c75ce595e5bb3b239b6d69ec9cf4.svg"
              width="50"
            />
          </div>

          {/* Title & Subtitle */}
          <h1 style={styles.title}>
            {step === "setPin" ? "Set PIN" : "Confirm PIN"}
          </h1>
          <p style={styles.subtitle}>
            {step === "setPin"
              ? "Enter a 4-digit PIN"
              : "Confirm your 4-digit PIN"}
          </p>

          {/* PIN Dots */}
          <div style={styles.pinDisplay}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} style={styles.pinDot}>
                {(step === "setPin" ? pin[i] : confirmPin[i]) ? (
                  <div style={styles.filledDot} />
                ) : null}
              </div>
            ))}
          </div>

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
            <button
              style={styles.keyButton}
              onClick={() => handleDigitClick(0)}
            >
              0
            </button>
            {/* Backspace Button */}
            <button style={styles.keyButton} onClick={handleBackspace}>
              ✕
            </button>
          </div>

          {/* Forgot PIN Link */}
          <a href="#!" style={styles.forgotPin}>
            Forgot PIN?
          </a>
        </div>
      </div>
    </>
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
    color: "#000",
  },
  progressContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginBottom: "20px",
  },
  progressBar: {
    position: "relative",
    flex: 1,
    height: "8px",
    backgroundColor: "#f0f0f0",
    borderRadius: "4px",
    overflow: "hidden",
  },
  progressFill: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "#7f5af0",
    borderRadius: "4px",
    transition: "width 0.3s ease",
  },
  progressText: {
    fontSize: "0.9rem",
    color: "#666666",
    marginLeft: "0.5rem",
  },
  // Segment styles for dividing the progress bar into 3 parts
  segment: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "2px",
    backgroundColor: "#ffffff",
  },
  segment1: {
    left: "33.33%",
  },
  segment2: {
    left: "66.66%",
  },
  title: {
    margin: 0,
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    margin: "0.5rem 0 2rem 0",
    fontSize: "0.95rem",
    color: "#fff",
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
    position: "relative",
    zIndex: 10,
  },
  forgotPin: {
    marginTop: "auto",
    color: "#6f49ed",
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default SetPin;
