import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeGenerator = ({ value }) => {
  return (
    <div >
      <h3 style={{color:'#000'}}>Scan this QR Code:</h3>
      <QRCodeCanvas value={value} size={200} style={{margin:'0px auto',marginTop:'10px'}} />
      <br/>
    </div>
  );
};

export default QRCodeGenerator;