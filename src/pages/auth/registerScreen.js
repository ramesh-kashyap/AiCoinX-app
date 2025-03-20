import React, { useState , useEffect} from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import countryList from "react-select-country-list";

import Api from "../../service/Api";
function Register() {
  // State for form fields
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState(null)

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    
   
    password: "",
    confirmPassword: "",
    refferal: "", 
    terms: false,
    };
  
    const [formData, setFormData] = useState(initialState);
  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Get countries from the package
  const countries = countryList().getData();
  
  // Total number of fields on this page
  const totalFields = 7;
  let filledCount = 0;
  if (formData.firstName.trim() !== "") filledCount++;
  if (formData.lastName.trim() !== "") filledCount++;
  if (formData.email.trim() !== "") filledCount++;
  
  if (formData.refferal.trim() !== "") filledCount++;
  if (formData.password.trim() !== "") filledCount++;
  if (formData.confirmPassword.trim() !== "") filledCount++;
  if (formData.terms) filledCount++;

  // Multiply by 33.33 so that if all 8 fields are filled, progress is 33.33%
  const progressPercentage = Math.round((filledCount / totalFields) * 33.33);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
   useEffect(() => {
      const unwanted = document.getElementById("GOOGLE_INPUT_CHEXT_FLAG");
      console.log('unwanted:',unwanted);
      const unwantedIframe = document.querySelector(
        'iframe[frameborder="0"][scrolling="no"]'
      );
      console.log('unwantedIframe:',unwantedIframe);
      if (unwantedIframe) {
        unwantedIframe.remove();
      }
      if (unwanted) {
        if (unwanted) {
          unwanted.style.backgroundColor = "#ffffff"; 
          unwanted.remove();// Set to your desired color
        }
      }
    }, []);
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
          toast.error("Passwords do not match");
          return;
        }
        const {
          fullname,
          lastname,
          email,
          password,
         
          confirmPassword,
          refferal,
        } = formData;
        // Basic validation
    
        try {
          const payload = {
            fullname: formData.firstName,       // or combine firstName and lastName if needed
            lastname: formData.lastName,
           
            email: formData.email,
            password: formData.password,
            refferal: formData.refferal,
          };
      
          console.log(payload);
          const response = await Api.post("/register", {
            fullname: formData.firstName,
            lastname: formData.lastName,
            
            email,
            password,
            referralCode:refferal,
          });
          if (response.data.status) {
            // Reset form after successful registration
            setFormData(initialState);
            // toast.success(response.data.message); // Use message from backend
            navigate("/verify-email", { state: { email } });
    
          } else {
            toast.error(response.data.message || "Login failed");
          }
        } catch (error) {
          toast.error(error.response?.data?.error || "Something went wrong!"); 
        } 
      };
  return (
    <>
      <style>{`
        /* Import Inter font from Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        /* Global Reset & Font */
        * {
         
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
        }
        body {
          background-color: #fff;
          color: #fff;
        }
        /* Container (mobile-friendly) */
        .container {
          // max-width: 480px;
             height: 130dvh;
          margin: 0 auto;
          padding: 1rem;
           background-color:  #EDE7F6
        }
           @media only screen and (max-width: 600px) {.container {
          max-width: 480px;
             height: 130dvh;
          margin: 0 auto;
          padding: 1rem;
           background-color:  #EDE7F6
        }}
        /* Header */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1rem;
          font-weight: 700;
          color: #000;
        }
        .logo-icon {
          width: 35px;
          height: 44px;
          fill: none;
          stroke: #000;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .login-btn {
          padding: 8px 20px;
            border: 2px solid #beb7b7;
            border-radius: 20px;
            font-weight: 500;
            background: transparent;
            cursor: pointer;
            transition: all 0.2s;
        }
        .login-btn:hover {
          // text-decoration: #7f5af0;
           border: 2px solid #7f5af0;
        }
        /* Progress Bar Section */
        .progress-section {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1rem;
          height: 2.5rem;
        }
        .progress-bar {
          position: relative;
          width: 80%;
          height: 8px;
          background-color: #beb7b7;
          border-radius: 4px;
          overflow: hidden;
          margin: 0 auto;
        }
          
        .progress-fill {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          background-color: #7f5af0;
          width: ${progressPercentage}%;
          transition: width 0.3s ease;
          border-radius: 4px;
        }
        /* (Optional) Vertical dividers for visual effect */
        .segment {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: #fff;
        }
        .segment-1 { left: 33.33%; }
        .segment-2 { left: 66.66%; }
        .progress-text {
          position: absolute;
          left: 0;
          bottom: 0;
          transform: translateY(30%);
          font-size: 0.9rem;
          color: #000;
        }
        /* Signup Headings */
        .signup-container h1 {
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
        }
        .signup-container p {
          font-size: 0.9rem;
          color: #000;
          margin-bottom: 1rem;
        }
        /* Signup Form */
        .signup-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .name-row {
          display: flex;
          gap: 1rem;
        }
        .input-field {
          width: 100%;
            background-color: rgba(255, 255, 255, 5%);
          border: none;
          border-radius: 8px;
          padding: 0.75rem 1rem;
          font-size: 1rem;
           border: 1px solid #beb7b7;
          color: #000; 
          }
           .name-row input.input-field {
             flex: 1;
            }

        .input-field:focus {
          outline: 2px solid #7f5af0;
        }
        .input-field::placeholder {
          color: #aaa;
        }
        /* Inputs with icons (email, date, country, password) */
        .input-icon {
          display: flex;
          align-items: center;
          
          background-color: rgba(255, 255, 255, 5%);
          border-radius: 8px;
          padding: 0.75rem 1rem;
          border: 1px solid #beb7b7;
        }
        .input-icon:focus-within {
          outline: 2px solid #7f5af0;
        }
        .icon {
          width: 20px;
          height: 20px;
          margin-right: 0.5rem;
          fill: none;
          stroke: #7f5af0;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .input-icon input,
        .input-icon select {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          font-size: 1rem;
          color: #000;
        }
        .input-icon input::placeholder {
          color: #aaa;
        }
        /* Toggle button for password visibility */
        .toggle-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          margin-left: 0.5rem;
          display: flex;
          align-items: center;
        }
        /* Checkbox + Terms */
        .form-check {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: #000;
        }
        .form-check input[type="checkbox"] {
          margin-top: 0.2rem;
        }
        .form-check a {
          color: #7f5af0;
          text-decoration: none;
        }
        .form-check a:hover {
          text-decoration: underline;
        }
        /* Continue button */
        .continue-btn {
          background-color: #7f5af0;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 0.75rem;
          font-size: 1rem;
          cursor: pointer;
        }
          input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(1);
}
        .continue-btn:hover {
          background-color: #6e48d9;
        }
      `}</style>
      <Toaster position="top-center" />
<div className="container relative overflow-hidden justify-start items-start text-white">
        <div className="w-[582px] h-[582px] rounded-full  absolute -top-48 -left-20 blur-[575px] pointer-events-none "></div>
        <div  className="bg-n900">
      <div className="relative z-20 px-6">
        <header className="header">
          <div className="logo">
            <div className="logo-icon" >
            <img src="assets/images/ok3d.png" alt="ok3d"  style={{ maxWidth: "45px" }} />
            </div>
           AICOINX
          </div>
          <Link to='/login'>
          <button className="login-btn">Login</button>
          </Link>
        </header>

        <section className="progress-section">
          <div className="progress-bar">
            <div className="progress-fill"></div>
            <div className="segment segment-1"></div>
            <div className="segment segment-2"></div>
          </div>
          <span className="progress-text">{progressPercentage}%</span>
        </section>

        <main className="signup-container">
          <h1>Sign Up</h1>
          <p>Please fill in the form to continue</p>
          <form  onSubmit={handleSubmit} className="signup-form">
            <div className="name-row">
              <input
                type="text"
                name="firstName"
                className="input-field"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                className="input-field"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="input-icon">
              <svg className="icon" viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
              <input
                type="email"
                name="email"
                placeholder="Enter email (We'll verify this)"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {/* <div className="input-icon">
              <svg className="icon" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <input
                type="text"
                name="dob"
                 placeholder="Date of Birth"
                value={formData.dob}
                onChange={handleChange}
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = 'text';
                }}
              />
               
            </div> */}
            <div className="input-icon">
            <svg className="icon" viewBox="0 0 24 24">
    {/* Example Gift Icon */}
    <path d="M12 2C10.343 2 9 3.343 9 5c0 1.105.895 2 2 2h2c1.105 0 2-.895 2-2 0-1.657-1.343-3-3-3z" />
    <path d="M18 8h-2V5c0-1.105-.895-2-2-2h-2C8.895 3 8 3.895 8 5v3H6c-1.105 0-2 .895-2 2v11c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2V10c0-1.105-.895-2-2-2zM10 5c0-.552.448-1 1-1h2c.552 0 1 .448 1 1v3H10V5zm8 16H6V10h12v11z" />
  </svg>
              <input
                type="text"
                name="refferal"
                placeholder="Refferal Code"
                value={formData.refferal}
                onChange={handleChange}
              />
            </div>
            {/* <div className="input-icon">
              <svg className="icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 0 20" />
              </svg>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select Country
                </option>
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
            </div> */}
            <div className="input-icon">
              <svg className="icon" viewBox="0 0 24 24">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20C5 20 1 12 1 12a21.65 21.65 0 0 1 5.06-7.06" />
                    <path d="M22 12c0 .74-.08 1.46-.21 2.16" />
                    <path d="M9.88 9.88A3 3 0 0 1 14.12 14.12" />
                    <path d="M3 3l18 18" />
                  </svg>
                ) : (
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
            <div className="input-icon">
              <svg className="icon" viewBox="0 0 24 24">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <button
                type="button"
                className="toggle-btn"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20C5 20 1 12 1 12a21.65 21.65 0 0 1 5.06-7.06" />
                    <path d="M22 12c0 .74-.08 1.46-.21 2.16" />
                    <path d="M9.88 9.88A3 3 0 0 1 14.12 14.12" />
                    <path d="M3 3l18 18" />
                  </svg>
                ) : (
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                checked={formData.terms}
                onChange={handleChange}
              />
              <label htmlFor="terms">
                By checking this box you confirm that you have read, understood and agree to the <a href="#!">Terms of Service</a> and <a href="#!">Privacy Policy</a>.
              </label>
            </div>
            <button type="submit" className="continue-btn">
              Continue
            </button>
          </form>
        </main>
      </div>
      </div>
      </div>
    </>
  );
}

export default Register;
