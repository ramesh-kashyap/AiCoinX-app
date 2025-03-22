import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'; // Uncomment if using React Router
import Api from '../../service/Api';
function Notification() {
     const [message, setMessage] = useState([]);
  const fetchNotification = async () => {  try {
    // Fetch news data (adjust the endpoint as needed)
    const response = await Api.get('/getNotifications'); 
    if(response.data.status){
      setMessage(response.data.data);
   
    console.log('News data:', response.data.data );
  }else {
    console.log('Failed to fetch balance:', response.data);
}
 
  } catch (error) {
    console.log('Error fetching news data:', error);
  }
}

useEffect(() => {
  
  
  fetchNotification();
  
 
}, []);
  const styles = {
    // We removed maxWidth/margin from here since we're using Tailwind to center
    container: {
      backgroundColor: '#fff',
      color: '#000',
      fontFamily: 'sans-serif',
      padding: '16px',
      borderRadius: '8px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px',
    },
    title: {
      margin: 0,
      fontSize: '18px',
      fontWeight: 'bold',
    },
    clearButton: {
      background: 'transparent',
      border: 'none',
      color: '#000',
      fontSize: '14px',
      cursor: 'pointer',
    },
    unreadRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '8px',
    },
    unreadTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
    },
    unreadBadge: {
      backgroundColor: 'red',
      color: '#000',
      borderRadius: '50%',
      padding: '0 6px',
      fontSize: '14px',
    },
    date: {
      fontSize: '14px',
      color: '#777',
      margin: '8px 0',
    },
    notificationItem: {
      display: 'flex',
      alignItems: 'flex-start',
      backgroundColor:"#2E2E2E",
      padding: '12px',
      borderRadius: '8px',
      marginBottom: '16px',
    },
    iconContainer: {
      marginRight: '8px',
    },
    infoIcon: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      backgroundColor: '#007bff',
      color: '#fff',
      fontWeight: 'bold',
    },
    notificationText: {
      flex: 1,
    },
    notificationTitle: {
      margin: 0,
      marginBottom: '4px',
      fontSize: '14px',
      color: '#fff',
    },
    notificationDate: {
      margin: 0,
      fontSize: '12px',
      color: '#888',
    },
    notificationTitle: {
      fontSize: "16px",
      fontWeight: "bold",
      margin: "0",
    },
    notificationDescription: {
      fontSize: "14px",
      color: "#fff",
      margin: "5px 0",
    },
  };
  return (
    <div className="container bg-n900 min-h-dvh relative overflow-hidden flex justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full absolute -top-32 -left-20 blur-[575px]"></div>

      <div className="px-6 py-8 relative z-20 w-full">
        <div className="flex justify-start items-center pb-8 mr-8">
          {/* Replace with <Link> if using React Router */}
          <Link
            to="/home"
            className="flex justify-center items-center p-2 rounded-full bg-g300 text-n900"
          >
            <i className="ph-bold ph-caret-left"></i>
          </Link>
          <div className="flex justify-center items-center w-full">
            <h1 className="font-semibold text-2xl">Notification</h1>
          </div>
          <div style={{
          marginLeft: 'auto',
          display: 'flex',
       
          
          fontSize: '1.25rem', // Equivalent to Tailwind's text-xl
          padding: '0.75rem',  // Equivalent to Tailwind's p-3
          color: '#B8C1CC',    // Replace with your desired color for text-g300
          borderRadius: '50%', // For a fully rounded (circular) button
          backgroundColor: 'rgba(255,255,255,0.05)', // White background with 5% opacity
        }}>
    <p className="text-sm">Clear</p>
  </div>
        </div>
         {/* Unread Section */}
      <div style={styles.unreadRow}>
        <span style={styles.unreadTitle}>Unread</span>
        <span style={styles.unreadBadge}>1</span>
      </div>

      {/* Date */}
      <p style={styles.date}>20 February 2025</p>


      {/* Notification Item */}
      {message.length > 0 ? (
        message.map((notification) => (
      <div style={styles.notificationItem}>
        <div style={styles.iconContainer}>
          <span style={styles.infoIcon}>i</span>
        </div>
        <div style={styles.notificationText}>
        <p style={styles.notificationTitle}>{notification.title}</p>
          <p style={styles.notificationDescription}>
          {notification.description}
          </p>
          <p style={styles.notificationDate}>{new Date(notification.createdAt).toLocaleString()}</p>
        </div>
      </div>
      ))

        ) : (
          <p>No notifications found.</p>
        )}

        {/* <div className="flex flex-col justify-center items-center pt-6 text-center">
          <img src="assets/images/not-found-illus.png" alt="Not found illustration" />
          <h1 className="text-2xl font-semibold pt-10">Nothing to show here.</h1>
          <p className="text-sm text-n70 pt-10">
            Currently, there is nothing to show. Please check back later for updates or new content.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Notification;
