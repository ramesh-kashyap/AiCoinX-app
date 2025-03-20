import React, { useState } from "react";
import EditPhotoPopup from "./EditPhotoPopup";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="p-5 flex flex-col items-center justify-center h-screen">
      <button
        onClick={() => setShowPopup(true)}
        className="bg-blue-500 text-white p-3 rounded-md"
      >
        Open Edit Photo
      </button>
      <EditPhotoPopup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
};

export default App;
