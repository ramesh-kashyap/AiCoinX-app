import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useNavigate, Link } from "react-router-dom";
import Api from "../../service/Api";
import { Toaster, toast } from "react-hot-toast";
import { HideImage } from '@mui/icons-material';
const Forget = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await Api.post("/forgot", {
        email,
      });
      console.log('response:',response);

      if(response.data.status){        
      const { email } = response.data;
      localStorage.setItem("Email", email);
      toast.success(response.data.message); // Use message from backend
      
      navigate("/forgetOtp");}
      else{
        console.error('Forgot failed:', response.data.error);
      }

    } catch (error) {
      console.error(error);
       toast.error(error.response?.data?.error || "Something went wrong!"); 
    }
  };
  return (
    <><Toaster position="top-center" />
    <div className="container relative overflow-hidden justify-start items-start text-white">
        <div className="w-[582px] h-[582px] rounded-full  absolute -top-48 -left-20 blur-[575px] pointer-events-none"></div>
        <div  className="bg-n900 ">
    <div className="Forget-container  ">
      <style>
        {`
          .Forget-container {
            padding: 20px;
            max-width: 100%;
            min-height: 100vh;
              background-color: #fff;
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
            color : #000;
            font-size: 1rem;
            font-weight: bold;
          }

          .logo-dot {
            width: 8px;
            height: 8px;
            
            border-radius: 50%;
          }

          .sign-up-button {
            padding: 8px 20px;
            border: 2px solid #beb7b7;
            border-radius: 20px;
            font-weight: 500;
            background: transparent;
            cursor: pointer;
            transition: all 0.2s;
          }

          .sign-up-button:hover {
            border-color: #7f5af0;
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
            color: #000;
          }

          .subtitle {
            font-size: 16px;
            color: #000;
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
            color: #7f5af0;
          }

          .toggle-password {
            position: absolute;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            color:#7f5af0;
            cursor: pointer;
            padding: 4px;
            border-radius: 4px;
            transition: all 0.2s;
          }

         

          .input-field {
            width: 100%;
            padding: 16px 16px 16px 48px;
            border-radius: 12px;
            border: none;
               background-color: rgba(255, 255, 255, 5%);
            font-size: 16px;
            outline:1px solid #beb7b7;
            transition: all 0.2s;
            color:#000;
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
            background-color: #7f5af0;
            color: #fff;
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
            .logo-icon {
          width: 35px;
          height: 40px;
          fill: none;
          stroke: #000;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        `}
      </style>

      <div className="header relative z-20 ">
        <div className="logo">
          <img src="assets/images/ok3d.png" alt="ok3d"  style={{ maxWidth: "45px" }} />
         AICOINX
        </div>
        <Link to='/register'>
        <button className="sign-up-button">Sign Up</button>
        </Link>
      </div>

      <img src="\assets\images\personal.png" alt="Account" className='illustration' style={{height: 0, width: 0}}/>

      <div className="content">
        <h1 className="title">Forgot to Account</h1>
        <p className="subtitle">Enter your email  to continue</p>

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

export default Forget;