import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import Api from "../../service/Api";
import Footer from '../components/footer';
import "swiper/css";
import "swiper/css/pagination";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RedditIcon from "@mui/icons-material/Reddit";
import PinterestIcon from "@mui/icons-material/Pinterest";
import EmailIcon from "@mui/icons-material/Email";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { Toaster, toast } from "react-hot-toast";
import QRCodeGenerator from "../components/QRCodeGenerator";
export default function ReferralProgram() {
  const inputRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [username, setUsername] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalUser, setTotalUser] = useState(0);




  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await Api.get("/news"); // API call to fetch user data
        if (response.data && response.data.userData) {
          setUsername(response.data.username);
          setShareUrl(response.data.userData[0].username);

        }
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);


  useEffect(() => {
    const fetchUserData = async () => {
        try {
            const response = await Api.get("/Direct-income"); // API call to fetch user data
            
            if (response.data.success) { 
                setTotalIncome(response.data.total_income || 0); // ✅ Corrected reference
            }
        } catch (error) {
            console.log("Error fetching user data:", error);
        }
    };

    fetchUserData();
}, []);

const copyToClipboard = () => {
  if (inputRef.current) {
    inputRef.current.select();
    navigator.clipboard.writeText(inputRef.current.value);
    setIsCopied(true);
    
    // Alert ki jagah toast message show karega
    toast.success("Referral link copied! ✅", {
      duration: 3000, // 3 seconds tak show hoga
      position: "top-center",
    });
  }
};
useEffect(() => {
  const fetchUserData = async () => {
      try {
          const response = await Api.get("/Direct-user"); // API call to fetch user data
          
          if (response.data.success) { 
              setTotalUser(response.data.total_user || 0); // ✅ Corrected reference
          }
      } catch (error) {
          console.log("Error fetching user data:", error);
      }
  };

  fetchUserData();
}, []);


  const handleShare = (platform) => {
    let url = "";
  
    switch (platform) {
      case "whatsapp":
        url = `https://wa.me/?text=Join%20now%20using%20my%20referral%20link:%20${encodeURIComponent(shareUrl)}`;
        break;
      case "instagram":
        url = `https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=Join%20now!`;
        break;
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case "chrome":
        url = `https://www.google.com/search?q=${encodeURIComponent(shareUrl)}`;
        break;
      case "quickshare":
        navigator.share
          ? navigator.share({ title: "Join Now!", url: shareUrl })
          : alert("Quick Share not supported on this device.");
        return;
      case "telegram":
        url = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case "reddit":
        url = `https://www.reddit.com/submit?url=${encodeURIComponent(shareUrl)}`;
        break;
      case "pinterest":
        url = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case "skype":
        url = `https://web.skype.com/share?url=${encodeURIComponent(shareUrl)}`;
        break;
      case "email":
        url = `mailto:?subject=Join%20Now!&body=Sign%20up%20with%20this%20referral%20link:%20${encodeURIComponent(shareUrl)}`;
        break;
      default:
        return;
    }
    window.open(url, "_blank");
  };

  const styles = {
    h1:{
      color:"#101014",
    },
    h2:{
      color:"#101014",
    },
    p:{
      color:"#101014",
    }
  }
  // Copy Function
  // const copyToClipboard = () => {
  //   if (inputRef.current) {
  //     inputRef.current.select();
  //     navigator.clipboard.writeText(inputRef.current.value);
  //     setIsCopied(true);
  //     alert("Referral link copied! ✅");
  //   }
  // };
  return (    
    <div 
      // style={{ backgroundColor: "#fff" }} 
      className="container bg-n900 h-dvh relative flex justify-start items-start text-white"
      // style={{ backgroundColor: "#EDE7F6" }} 
      // className="container bg-n900 h-dvh relative flex justify-start items-start text-white"
    >
      <Toaster />
      {/* Page Content */}
      <div   style={{backgroundColor:"rgb(255 255 255)", paddingBottom:"110px" }}  className="w-full max-w-md mx-auto p-5">
        {/* Header */}
        <div className="flex justify-start items-center pb-8 mr-8">
          <Link to="/home" className="flex justify-center items-center p-2 rounded-full bg-g300 text-n900">
            <i className="ph-bold ph-caret-left"></i>
          </Link>
          <div className="flex justify-center items-center w-full">
            <h1 style={styles.h1} className="font-semibold text-2xl">Referral Program</h1>
          </div>
        </div>

        {/* Referral Card */}




        {showPopup && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setShowPopup(false)} 
        >
          <div
            style={{ backgroundColor: "#D1C4E9", width: 429, height: 542, marginBottom: "-200px",borderTopLeftRadius: "38px",
              borderTopRightRadius: "38px"  }}
            className="fixed bottom-10 bg-n900 text-white p-6 shadow-lg transition-transform transform translate-y-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-1 w-16 bg-gray-300 rounded mx-auto mb-3"></div>
          <h2 style={{ marginBottom: "30px", textAlign: "center", color: "#101014" }} className="text-lg font-bold">Invite Friends</h2>

            {/* Swiper Slider */}
            <Swiper
          modules={[Pagination]}  
          pagination={{ clickable: true , el: ".swiper-pagination", }}
          spaceBetween={10}
          slidesPerView={1}
          style={{ position: "relative" }}
          className="pt-5 pb-3"


        >              {/* First Slide */}
              <SwiperSlide>
                <div className="grid grid-cols-4 gap-4 justify-center">
                  <button onClick={() => handleShare("whatsapp")}>
                    <WhatsAppIcon style={{ color: "#25D366", fontSize: "40px" }} />
                  </button>
                  <button onClick={() => handleShare("instagram")}>
                    <InstagramIcon style={{ color: "#E4405F", fontSize: "40px" }} />
                  </button>
                  <button onClick={() => handleShare("twitter")}>
                    <TwitterIcon style={{ color: "#1DA1F2", fontSize: "40px" }} />
                  </button>
                  <button onClick={() => handleShare("facebook")}>
                    <FacebookIcon style={{ color: "#1877F2", fontSize: "40px" }} />
                  </button>
                  <button onClick={() => handleShare("chrome")}>
                    <GoogleIcon style={{ color: "#4285F4", fontSize: "40px" }} />
                  </button>
                  <button onClick={() => handleShare("quickshare")}>
                    <ScreenShareIcon style={{ color: "#ff9800", fontSize: "40px" }} />
                  </button>
                  <button onClick={() => handleShare("telegram")}>
                    <TelegramIcon style={{ color: "#0088cc", fontSize: "40px" }} />
                  </button>
                  <button onClick={() => handleShare("linkedin")}>
                    <LinkedInIcon style={{ color: "#0e76a8", fontSize: "40px" }} />
                  </button>
                  
                </div>
              </SwiperSlide>

              {/* Second Slide */}
              <SwiperSlide>
                <div className="grid grid-cols-4 gap-4 justify-center">
                  <button onClick={() => handleShare("reddit")}>
                    <RedditIcon style={{ color: "#FF5700", fontSize: "40px" }} />
                  </button>
                  <button onClick={() => handleShare("pinterest")}>
                    <PinterestIcon style={{ color: "#E60023", fontSize: "40px" }} />
                  </button>
                 
                  <button onClick={() => handleShare("email")}>
                    <EmailIcon style={{ color: "#D44638", fontSize: "40px" }} />
                  </button>
                  
                </div>
              </SwiperSlide>
              <div
    className="swiper-pagination"
    style={{
      position: "absolute",
      bottom: "100px", // Adjust for spacing
      left: "92%",
      transform: "translateX(-50%)",
      textAlign: "center",
      zIndex: 10,
    }}
  ></div>
            </Swiper>

            {/* Cancel Button */}
            <button 
              style={{ backgroundColor: "#ccc", borderRadius: "44px", color: "#444", marginTop: "20px" }} 
              className="w-full py-2" 
              onClick={() => setShowPopup(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
        {/* Referral Card */}



        

        <div
style={{
  backgroundImage: `url('/assets/images/referral-friend-bg2-88eb9f12.jpg')`,
  backgroundPosition: "center top",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  marginTop: "-3px"
}}
  className="bg-purple-700 p-5 rounded-lg mt-5 text-center"
>
 



  {/* <img src="\assets\images\connected-world-concept-illustration_114360-3027-removebg-preview.png" alt="Referral" className="mx-auto mb-4 w-32 h-32" /> */}
       <QRCodeGenerator value={shareUrl} />
  
  <h2  className="text-lg font-bold">Invite friends and earn up to</h2>

  {/* 100 USDT with icon in one line */}
  <p className="text-2xl font-bold text-400 flex items-center justify-center">
    <img src="/assets/images/ok3d.png" alt="Crypto Icon" className="w-6 h-5 mr-2" style={{width:'30px',height:'30px', color:"#fff3b7"}}/>
    {totalIncome ?? 0} 
      </p>

  <p style={{ marginBottom: "17px",marginTop: "10px" }} className="text-sm text-gray-200 mt-2">
    Earn a permanent bonus based on your friend's earnings for every successful referral.
  </p>

          {/* Referral Link */}
          <div style={{ backgroundColor: "#f4f4f4" }} className="bg-white text-black p-2 rounded-md flex justify-between items-center mt-4">
            <input style={{ color: "#101014" }} type="text" ref={inputRef}   value={`Referral Code: ${shareUrl}`}className="bg-transparent w-full text-sm px-2" readOnly />
            <button onClick={copyToClipboard} className="text-blue-600">
              <i style={{ color: "#101014" }} className="ph-bold ph-copy"></i>
            </button>
          </div>

          {/* Invite Button */}
          <button     onClick={() => setShowPopup(true)} style={{ backgroundColor: "#f4f4f4",color:"#101014", marginTop: "16px", marginRight: "5px",borderRadius:"30px",width: "45%" }} className="bg-black rounded-md px-5 py-2 text-white mt-3 w-full">
            Invite Friends
          </button>
          <Link to='/team-list'>
          <button   style={{ backgroundColor: "#f4f4f4",color:"#101014", marginTop: "16px",borderRadius:"30px", marginLeft: "5px",width: "45%" }} className="bg-black rounded-md px-5 py-2 text-white mt-3 w-full">
            Team View
          </button>
          </Link>
        </div>
        
        <p style={{ marginBottom: "14px",marginTop: "12px",fontStyle:"oblique",fontSize:"17px",marginLeft:"75px",color:"#101014" }} className="text-sm text-gray-200 mt-2">
        *Invite must use your unique link.
       </p>
        {/* Referral Performance */}
        <div className="mt-6">
          <h2 style={styles.h2} className="text-lg font-semibold mb-3">Referral Performance</h2>
          <div style={{ marginTop: "10px" }} className="grid grid-cols-2 gap-4">
          <div style={{ backgroundColor: "#D1C4E9" }} className="p-4 rounded-lg text-center">
  <p style={styles.p} className="text-sm text-gray-400">Referral Earnings</p>
  <p style={styles.p} className="text-xl font-bold flex justify-center items-center">
  <img src="/assets/images/ok3d.png" alt="Crypto Icon" style={{ width: '30px', height: '30px' }} className="ml-2"/>   {totalIncome}
    
  </p>
</div>





            <div style={{ backgroundColor: "#D1C4E9" }} className="p-4 rounded-lg text-center">
              <p style={{ color: "#101014" }} className="text-sm text-gray-400">Successful Referrals</p>
              <p style={{ color: "#101014" }} className="text-xl font-bold flex justify-center items-center">
              {/* <img src="../assets/images/users.png" alt="swap" style={{width:25, height:"auto"}}/> */}
                 <FontAwesomeIcon style={{ color: "#101014",marginRight:"7px",height:"18px" }} icon={faUserFriends} /> 
                 {totalUser}
              </p>
            </div>
          </div>
        </div>

        {/* How to Earn USDT Payouts */}

        <div className="mt-6">
  <h2 style={{ color: "#101014",borderColor:"#5e6dac" }} className="text-lg font-semibold text-center mb-3">
    How to earn USDT payouts
  </h2>

  {/* Combined Steps in One Div */}
  <div
  style={{
    backgroundColor: "transparent", // Background hata diya
    marginTop: "10px",
    border: "2px solid", // Border width set kiya
    borderRadius: "13px", // Border ko rounded banane ke liye
    padding: "16px", // Andar ka space maintain karne ke liye
    borderColor:"#3A3F4A"
  }}
  className="mb-3"
>
  <div className="flex items-center mb-3">
    <img src="/assets/images/ok3d.png" alt="Task Icon" className="w-8 h-8 mr-3"   style={{
   width: '40px'
  }}/>
    <p style={{ color: "#101014", marginLeft: "10px" }} className="text-sm text-gray-700">
      Your invited friend must earn <strong>10 %</strong> by completing featured offer quests.
    </p>
  </div>

  <div style={{ marginTop: "30px" }} className="flex items-center" >
    <img  src="/assets/images/ok3d.png" alt="Bonus Icon" className="w-8 h-8 mr-3"  style={{
   width: '40px'
  }}/>
    <p style={{ color: "#101014", marginLeft: "10px" }} className="text-sm text-gray-700">
      You and your friend both earn <strong>5 %</strong>  earned by your friend.
    </p>
  </div>
</div>


  {/* Note */}
  <p  style={{ color: "#101014",marginTop:'20px',fontStyle:"oblique" }} className="text-sm text-gray-700">
    *Repeatable up to 20 times for each friend (100 Coin bonus).
  </p>
</div>

      </div>
       <Footer />
    </div>
  );
}
