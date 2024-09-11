import React, { useEffect, useState } from 'react';
import tgall1 from "../Donate/Donateimage/don1.png";
import tgall2 from "../Donate/Donateimage/don2.png";
import tgall3 from "../Donate/Donateimage/don3.png";
import tgall4 from "../Donate/Donateimage/don4.png";
import tgall5 from "../Donate/Donateimage/don5.png";
import "./Donate.css";
import Popup from './Popup.jsx'; // Import the Popup component
import api from "../../../../api/api.js";
import Card from './Card.jsx';

import card1 from './Donateimage/card1.png';
import card2 from './Donateimage/card2.png';
import card3 from './Donateimage/card3.png';
import card4 from './Donateimage/card4.png';
import card5 from './Donateimage/card5.png';
import card6 from './Donateimage/card6.png';
import card7 from './Donateimage/card7.png';
import card8 from './Donateimage/card8.png';

const Donate = () => {
  const [order, setOrder] = useState({});
  const [razorpayKey, setRazorpayKey] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);  // State to control popup visibility
  const [selectedImage, setSelectedImage] = useState(null);  // State to store the clicked image

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch Razorpay Key from the backend
    const fetchRazorpayKey = async () => {
      try {
        console.log("Fetching Razorpay key...");
        const response = await api.get('/piKey');
        if (response.data && response.data.key) {
          setRazorpayKey(response.data.key);
          console.log('Razorpay key fetched successfully:', response.data.key);
        } else {
          console.error('Invalid key data received from /piKey:', response.data);
          setErrorMessage('An error occurred while fetching the payment key.');
        }
      } catch (error) {
        console.error('Error fetching Razorpay key:', error);
        setErrorMessage('Failed to fetch Razorpay key. Please try again later.');
      }
    };

    fetchRazorpayKey();
  }, []);

  const handlePay = async () => {
    try {
      console.log("Pay clicked");
      const response = await api.post('/pay', {
        donationType: "fooddonation",
        donationAmount: 25000,
        conOMY: "month"
      });

      if (response.data.order) {
        setOrder(response.data.order);
        console.log('Payment order created:', response.data.order);

        // Initialize Razorpay only after getting a valid order and key
        const options = {
          key: razorpayKey,
          amount: response.data.order.amount * 100,
          currency: 'INR',
          name: 'Helping Hands',
          description: 'Donation Transaction',
          order_id: response.data.order.id,
          callback_url: 'localhost:5173/donate',
          prefill: {
            name: '',
            email: '',
            contact: ''
          },
          theme: {
            color: '#0699FF'
          }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        console.error('Invalid order data received:', response.data);
        setErrorMessage('An error occurred while creating the payment order.');
      }
    } catch (error) {
      console.error('There was an error processing the payment!', error);
      setErrorMessage('There was an error processing the payment. Please try again.');
    }
  };

  // Function to handle image click
  const handleImageClick = (imageUrl) => {
    console.log("clicked");
    setSelectedImage(imageUrl);  // Set the selected image dynamically
    setShowPopup(true);  // Show the popup
  };

  const cardData = [
    { id: "1", imageUrl: card1 },
    { id: "2", imageUrl: card2 },
    { id: "3", imageUrl: card3 },
    { id: "5", imageUrl: card4 },
    { id: "6", imageUrl: card5 },
    { id: "4", imageUrl: card6 },
    { id: "7", imageUrl: card7 },
    { id: "8", imageUrl: card8 },
  ];

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
          <button className="donate-btn" onClick={handlePay} disabled={!razorpayKey}>Donate Now</button>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
        <div className="cardgrid">
          <div className="card-grid">
            {cardData.map((card) => (
              <Card
                key={card.id}
                imageUrl={card.imageUrl}
                onClick={handleImageClick}  // Correctly pass the image URL of the clicked card
              />
            ))}
          </div>
        </div>
      </div>
      {/* Render Popup only if showPopup is true */}
      {showPopup && (
        <Popup 
          image={selectedImage} 
          onClose={() => setShowPopup(false)}  // Close popup on button click
          handlePay={handlePay}  // Pass handlePay function to Popup
        />
      )}
    </div>
  );
};

export default Donate;
