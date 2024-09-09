import React from "react";
import "./Adnotification.css"

const Adnotification = () => {
  return (
    <div className="notification">
      <div className="content-notification">
        <div className="notifications">
          <h2>12</h2>
          <h3>Contact</h3>
          <div className="noti-dot"></div>
        </div>
        <div className="notifications">
          <h2>12</h2>
          <h3>Contact</h3>
        </div>
        <div className="notifications">
          <h2>12</h2>
          <h3>Contact</h3>
          <div className="noti-dot"></div>
        </div>
        <div className="notifications">
          <h2>12</h2>
          <h3>Contact</h3>
        </div>
      </div>
      <div className="content-qr-gen">
        <button className="qr-gen">QR CODE GENERATER</button>
      </div>
    </div>
  );
};

export default Adnotification;
