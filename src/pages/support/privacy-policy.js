import React from 'react';
// Uncomment the following line if you are using react-router-dom for internal navigation
import { Link } from 'react-router-dom';
const styles ={
  h1:{
    color: "#101014",
  }  
}
function PrivacyPolicy() {
  return (
    <div className="container bg-n900 min-h-dvh relative overflow-hidden flex justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full bg-g3001 absolute -top-32 -left-20 blur-[575px]"></div>
      <div className="px-6 py-8 relative z-20 w-full">
        <div className="flex justify-start items-center pb-8 mr-8">
          {/* Use Link if you are using react-router */}
            <Link to="/account"
            className="flex justify-center items-center p-2 rounded-full bg-g3001 text-n900"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <div className="flex justify-center items-center w-full">
            <h1 className="font-semibold text-2xl">Privacy Policy</h1>
          </div>
        </div>
        <div className="border-t border-dashed border-white border-opacity-10">
          <div className="max-h-[600px] overflow-y-auto my-8 pr-4">
            <p className="text-lg"  style={styles.h1}>Terms</p>
            <p className="text-n70 pt-4">
              By using our services, you agree to comply with our terms and
              conditions. We reserve the right to update these terms at any
              time. Continued use of the service after modifications indicates
              acceptance of the new terms. Please review the terms regularly to
              stay informed about any changes. Your adherence ensures a secure
              and reliable experience for all users.
            </p>
            <p className="text-lg pt-4" style={styles.h1}>Changes to the Service</p>
            <p className="text-n70 pt-4">
              We reserve the right to modify, update, or discontinue the Service
              at any time, with or without notice. Changes may include, but are
              not limited to, the addition or removal of features, adjustments
              to functionality, or alterations to user interface design. Any
              significant changes to the Service will be communicated through
              our website, app notifications, or email. Your continued use of
              the Service after such changes constitutes your acceptance of the
              modifications. It is your responsibility to review this Privacy
              Policy periodically for any updates. If you do not agree with the
              changes, you should discontinue use of the Service. We appreciate
              your understanding and cooperation as we strive to enhance your
              experience.
            </p>
          </div>
        </div>
        <div className="w-full">
          <a
            href=""
            className="block bg-g300 font-semibold text-center py-3 rounded-lg"
          >
            Continue
          </a>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
