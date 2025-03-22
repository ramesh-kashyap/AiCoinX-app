import React from 'react';
import { Link } from "react-router-dom";
 const styles = {
  p:{
    color:"#101014",
  }
 }
function HelpCenter() {
  return (
    <div className="container bg-n900 min-h-dvh relative overflow-hidden flex justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full bg-g3001 absolute -top-32 -left-20 blur-[575px]"></div>
      <div className="px-6 py-8 relative z-20 w-full">
        <div className="flex justify-start items-center pb-8 mr-8">
         <Link to="/account" 
            className="flex justify-center items-center p-2 rounded-full bg-g3001 text-n900"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <div className="flex justify-center items-center w-full">
            <h1 className="font-semibold text-2xl">Help Center</h1>
          </div>
        </div>
        <div className="border-t border-dashed border-white border-opacity-10">
          <div className="max-h-[600px] overflow-y-auto my-8 pr-4">
            <p className="text-lg" style={styles.p}>Frequently Asked Questions (FAQs)</p>
            <p className="text-n70 pt-4">
              Welcome to the Help Center! Here, you'll find answers to the most frequently 
              asked questions. If you need further assistance, feel free to contact our support team.
            </p>

            <p className="text-lg pt-4" style={styles.p}>How do I reset my password?</p>
            <p className="text-n70 pt-4">
              You can reset your password by clicking on the 'Forgot Password' link 
              on the login page and following the instructions sent to your email.
            </p>

            <p className="text-lg pt-4" style={styles.p}>How do I contact customer support?</p>
            <p className="text-n70 pt-4">
              You can reach our support team via email at support@example.com 
              or through the contact form available on our website.
            </p>

            <p className="text-lg pt-4" style={styles.p}>Where can I find updates about new features?</p>
            <p className="text-n70 pt-4">
              We regularly update our platform with new features and improvements. 
              Check out our blog or announcements section for the latest updates.
            </p>
          </div>
        </div>
        {/* <div className="w-full">
          <a
            href="/support"
            className="block bg-g3001 font-semibold text-center py-3 rounded-lg"
          >
            Contact Support
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default HelpCenter;
