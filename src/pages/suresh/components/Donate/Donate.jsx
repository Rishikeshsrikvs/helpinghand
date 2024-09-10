import React, { useEffect, useState } from 'react';
import tgall1 from "../Donate/Donateimage/don1.png";
import tgall2 from "../Donate/Donateimage/don2.png";
import tgall3 from "../Donate/Donateimage/don3.png";
import tgall4 from "../Donate/Donateimage/don4.png";
import tgall5 from "../Donate/Donateimage/don5.png";
import "./Donate.css";
import CardGrid from "./CardGrid.jsx";
import api from "../../../../api/api.js";

const Donate = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlepay = () => {
    console.log("pay clicked");
    const {data:{order}}= api.post('/pay', {
        donationType: "fooddonation",
        donationAmount: 25000,
        conOMY: "month"
      })
  
   
      
    // Uncomment and fill the options below to integrate Razorpay
    /*
    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay key_id
      amount: 2500000, // Amount in paise (25000 INR)
      currency: 'INR',
      name: 'Helping Hands',
      description: 'Donation Transaction',
      order_id: 'order_generated_in_backend', // Use actual order_id from your backend
      callback_url: 'http://localhost:3000/payment-success', // Your success URL
      prefill: {
        name: 'Your Name',
        email: 'your.email@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#F37254'
      }
    };

    const rzp = new Razorpay(options);
    rzp.open();
    */
  };

  return (
    <div className="donate">
      <div className="donate-container">
        <div className="top-gallery">
          <div className="tgall">
            <img src={tgall1} alt="Donation 1" />
          </div>
          <div className="tgall tgall1">
            <img src={tgall2} alt="Donation 2" />
          </div>
          <div className="tgall">
            <img src={tgall3} alt="Donation 3" />
          </div>
          <div className="tgall">
            <img src={tgall4} alt="Donation 4" />
          </div>
          <div className="tgall">
            <img src={tgall5} alt="Donation 5" />
          </div>
        </div>
        <div className="donate-text">
          <h2>Support the Journey of Those in Need</h2>
          <p>
            Your donation will provide essential support for handicapped
            individuals, homeless people, children, and those affected by
            disaster situations. Your generosity will help ensure their access
            to basic needs, such as shelter, healthcare, and nutrition, leading
            them towards a life of dignity and hope for a brighter future.
          </p>
          <button className="donate-btn" onClick={handlepay}>Donate Now</button>
        </div>
        <div className="cardgrid">
          <CardGrid />
        </div>
      </div>
    </div>
  );
};

export default Donate;
