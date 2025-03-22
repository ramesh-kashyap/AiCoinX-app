import React, { useState, useEffect } from "react";
import Api from "../../service/Api";
import { useLocation, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

function VerifyEmail() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  // State variables
  const [progress, setProgress] = useState(33.3);
  const [code, setCode] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [timer, setTimer] = useState(0);
  const countdownTime = 180; // 180 seconds = 3 minutes

  // Redirect if email is missing
  useEffect(() => {
    if (!email) {
      navigate("/register");
    }
  }, [email, navigate]);

  // Update progress based on OTP code input
  useEffect(() => {
    if (code.trim() !== "") {
      setProgress(33.3 + 33.3);
    } else {
      setProgress(33.3);
    }
  }, [code]);

  // On mount, check for a saved OTP expiry in localStorage
  useEffect(() => {
    const storedExpiry = localStorage.getItem("otpExpiryTimestamp");
    if (storedExpiry) {
      const expiryTime = parseInt(storedExpiry, 10);
      const remainingTime = Math.floor((expiryTime - Date.now()) / 1000);
      if (remainingTime > 0) {
        setIsDisabled(true);
        setTimer(remainingTime);
      } else {
        localStorage.removeItem("otpExpiryTimestamp");
      }
    }
  }, []);

  // Countdown timer effect
  useEffect(() => {
    let intervalId;
    if (isDisabled && timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(intervalId);
            setIsDisabled(false);
            localStorage.removeItem("otpExpiryTimestamp");
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isDisabled, timer]);

  // Prevent page refresh/close when countdown is active
  useEffect(() => {
    if (isDisabled && timer > 0) {
      const handleBeforeUnload = (e) => {
        e.preventDefault();
        e.returnValue = "";
      };
      window.addEventListener("beforeunload", handleBeforeUnload);
      return () => window.removeEventListener("beforeunload", handleBeforeUnload);
    }
  }, [isDisabled, timer]);

  // Remove unwanted elements from the DOM (if needed)
  useEffect(() => {
    const unwanted = document.getElementById("GOOGLE_INPUT_CHEXT_FLAG");
    const unwantedIframe = document.querySelector('iframe[frameborder="0"][scrolling="no"]');
    if (unwantedIframe) {
      unwantedIframe.remove();
    }
    if (unwanted) {
      unwanted.style.backgroundColor = "#ffffff";
      unwanted.remove();
    }
  }, []);

  // Resend OTP email handler
  const handleResendEmail = async () => {
    try {
      const response = await Api.post("/authgenerate-otp", { email });
      console.log("OTP resent:", response.data);
      toast.success("OTP has been resent to your email.");
      setIsDisabled(true);
      setTimer(countdownTime);
      const expiryTimestamp = Date.now() + countdownTime * 1000;
      localStorage.setItem("otpExpiryTimestamp", expiryTimestamp.toString());
    } catch (error) {
      console.log("Error resending OTP:", error);
      toast.error("Failed to resend OTP. Please try again.");
    }
  };

  // OTP verification handler
  const handleVerifyOtp = async () => {
    if (code.trim().length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }
    try {
      const response = await Api.post("/authverify-otp", { email, otp: code });
      console.log("OTP verification response:", response.data);
      if (response.data.status) {
        setIsDisabled(false);
        setTimer(0);
        toast.success("OTP verified successfully");
        navigate("/set-pin", { state: { email } });
      } else {
        toast.error("Invalid or expired OTP. Please try again.");
      }
    } catch (error) {
      console.log("Error verifying OTP:", error.response?.data?.error || error);
      toast.error("Error verifying OTP. Please try again.");
    }
  };

  return (
    <>
      <style>{`
        /* Import Inter font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Inter', sans-serif; }
        body { background-color: #ffffff; color: #fff; }
        .container { max-width: 480px; margin: 0 auto; padding: 1rem; height: 130dvh; background-color: #fff; }
        .header { display: flex; justify-content: center; align-items: center; margin-bottom: 1rem; }
        .header h2 { font-size: 1.25rem; font-weight: 600; }
        .progress-section { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; }
        .progress-bar { position: relative; flex: 1; height: 8px; background-color: #f0f0f0; border-radius: 4px; overflow: hidden; }
        .progress-fill { position: absolute; top: 0; left: 0; bottom: 0; background-color: #7f5af0; transition: width 0.3s ease; border-radius: 4px; }
        .segment { position: absolute; top: 0; bottom: 0; width: 2px; background-color: #ffffff; }
        .segment-1 { left: 33.33%; }
        .segment-2 { left: 66.66%; }
        .progress-text { font-size: 0.9rem; color: #000; }
        .illustration { display: flex; justify-content: center; margin-bottom: 1.5rem; }
        .verify-heading { font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;color:#000; }
        .verify-text { font-size: 0.9rem; color: #000; margin-bottom: 1.5rem; line-height: 1.4; }
        .input-with-icon { display: flex; align-items: center; background-color: rgba(255, 255, 255, 0.05); border: 1px solid #e0e0e0; border-radius: 8px; padding: 0.75rem 1rem; margin-bottom: 1rem; }
        .icon { width: 20px; height: 20px; margin-right: 0.75rem; fill: none; stroke: #707070; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
        .input-with-icon input { flex: 1; border: none; outline: none; background: transparent; font-size: 1rem; color: #000; }
        .input-with-icon input::placeholder { color: #aaaaaa; }
        .btn-row { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1rem; }
        .secondary-btn { background-color: #ffffff; color: #000000; border: 1px solid #000000; border-radius: 8px; font-size: 1rem; padding: 0.75rem; cursor: pointer; }
        .secondary-btn:hover { background-color: #f2f2f2; }
        .primary-btn { background-color: #7f5af0; color: #ffffff; border: none; border-radius: 8px; font-size: 1rem; padding: 0.75rem; cursor: pointer; }
        .primary-btn:hover { background-color: #6e48d9; }
      `}</style>
      <Toaster position="top-center" />
      <div className="container relative overflow-hidden justify-start items-start text-white">
        <div className="w-[582px] h-[582px] rounded-full absolute -top-48 -left-20 blur-[575px]"></div>
        <div className="bg-n900">
          <div className="container">
            {/* Header */}
            <header className="header">
              <h2>Sign Up</h2>
            </header>
            {/* Progress Bar Section */}
            <section className="progress-section">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                <div className="segment segment-1"></div>
                <div className="segment segment-2"></div>
              </div>
              <span className="progress-text">{progress}%</span>
            </section>
            {/* Illustration */}
            <div className="illustration">
              <svg width="150" height="150" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 0L123.6 38.2L167.6 34.6L149.4 73.4L167.6 112.2L123.6 108.6L100 146.8L76.4 108.6L32.4 112.2L50.6 73.4L32.4 34.6L76.4 38.2L100 0Z" fill="#E8E2F8" />
                <path d="M100 30L116.6 57.3L148.6 54.7L133.4 82.6L148.6 110.5L116.6 107.9L100 135.2L83.4 107.9L51.4 110.5L66.6 82.6L51.4 54.7L83.4 57.3L100 30Z" fill="#CBB8F6" />
              </svg>
            </div>
            {/* Heading & Subtext */}
            <h3 className="verify-heading">Verify your email</h3>
            <p className="verify-text">
              We have sent you an email containing a code to enter. If you have not received the email, check the spam or press "send email again".
            </p>
            {/* Code Input Field */}
            <div className="input-with-icon">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M6.5 11.5a2 2 0 1 1 2 2" />
                <path d="M14.5 11.5a2 2 0 1 1 2 2" />
                <path d="M2 12v6h20v-6" />
                <path d="M2 9v2h20V9" />
                <path d="M7 9V6.5a5 5 0 0 1 10 0V9" />
              </svg>
              <input
                type="text"
                placeholder="Enter code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            {/* Buttons */}
            <div className="btn-row">
              <button className="secondary-btn" onClick={handleResendEmail} disabled={isDisabled}>
                {isDisabled ? `Wait (${timer}s)` : 'Send email'}
              </button>
              <button className="primary-btn" onClick={handleVerifyOtp}>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyEmail;
