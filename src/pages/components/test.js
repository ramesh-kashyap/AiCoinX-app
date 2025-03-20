import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useNavigate, Link } from "react-router-dom";
import Api from "../../service/Api";
import { Toaster, toast } from "react-hot-toast";
const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await Api.post("/login", {
        email,
        password,
      });
      console.log('response:',response);

      if(response.data.status){
        
      const { token } = response.data;
      localStorage.setItem("authToken", token);
      toast.success(response.data.message); // Use message from backend
      
      navigate("/home");}
      else{
        console.error('Login failed:', response.data.error);
      }

    } catch (error) {
      console.error(error);
       toast.error(error.response?.data?.error || "Something went wrong!"); 
    }
  };
  return (
    <><Toaster position="top-center" />
    <div className="container relative overflow-hidden justify-start items-start text-white">
        <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-48 -left-20 blur-[575px] pointer-events-none"></div>
        <div  className="bg-n900 ">
    <div className="login-container  ">
      <style>
        {`
          .login-container {
            padding: 20px;
            max-width: 100%;
            min-height: 100vh;
              background-color: #111820;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          }

          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 60px;
          }

          .logo {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 24px;
            font-weight: bold;
          }

          .logo-dot {
            width: 8px;
            height: 8px;
            background-color: #6366f1;
            border-radius: 50%;
          }

          .sign-up-button {
            padding: 8px 20px;
            border: 2px solid #e5e7eb;
            border-radius: 20px;
            font-weight: 500;
            background: transparent;
            cursor: pointer;
            transition: all 0.2s;
          }

          .sign-up-button:hover {
            border-color: #d1d5db;
          }

          .illustration {
            width: 100%;
            max-width: 400px;
            margin: 0 auto 40px;
            display: block;
          }

          .content {
            padding: 0 20px;
            max-width: 400px;
            margin: 0 auto;
          }

          .title {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 12px;
            color: #fff;
          }

          .subtitle {
            font-size: 16px;
            color: #fff;
            margin-bottom: 32px;
          }

          .input-container {
            position: relative;
            margin-bottom: 24px;
          }

          .input-icon {
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: #6366f1;
          }

          .toggle-password {
            position: absolute;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: #6b7280;
            cursor: pointer;
            padding: 4px;
            border-radius: 4px;
            transition: all 0.2s;
          }

          .toggle-password:hover {
            color: #4b5563;
            
          }

          .input-field {
            width: 100%;
            padding: 16px 16px 16px 48px;
            border-radius: 12px;
            border: none;
               background-color: rgba(255, 255, 255, 5%);
            font-size: 16px;
            outline:2px solid #fff;
            transition: all 0.2s;
          }

          .input-field.with-toggle {
            padding-right: 48px;
          }

          .input-field:focus {
          outline: 2px solid #7f5af0;
          }

          .continue-button {
            width: 100%;
            padding: 16px;
            border-radius: 12px;
            border: none;
            background-color: #e0e7ff;
            color: #4f46e5;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
          }

          .continue-button:hover {
            background-color: #c7d2fe;
          }

          .forgot-password {
            text-align: right;
            margin-top: -12px;
            margin-bottom: 24px;
          }
             .illustration {
            width: 220px; /* Adjust as needed */
            height: auto;
            margin-bottom: 1.5rem;
          }

          .forgot-password a {
            color: #6366f1;
            font-size: 14px;
            text-decoration: none;
          }

          .forgot-password a:hover {
            text-decoration: underline;
          }
        `}
      </style>

      <div className="header">
        <div className="logo">
          <div className="logo-dot"></div>
          Klink
        </div>
        <Link to='/register'>
        <button className="sign-up-button">Sign Up</button>
        </Link>
      </div>

      <img src="\assets\images\login_icon.png" alt="Account" className='illustration' />

      <div className="content">
        <h1 className="title">Login to Account</h1>
        <p className="subtitle">Enter your email and password to continue</p>

        <div className="input-container">
          <Mail className="input-icon" size={20} />
          <input
            type="email"
            className="input-field"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-container">
          <Lock className="input-icon" size={20} />
          <input
            type={showPassword ? "text" : "password"}
            className="input-field with-toggle"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

      

        <button className="continue-button"   onClick={handleSubmit}>
          Continue
        </button>
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Signin;