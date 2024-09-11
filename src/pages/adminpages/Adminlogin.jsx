import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'; // Import axios for API requests
import { useNavigate } from 'react-router-dom';
import './Adminlogin.css';
import { useAuth } from './auth/AuthContext'; // Import useAuth from AuthContext
import api from '../../api/api'; // Assume you have a custom API instance
import logo from './../../assets/adminlogin/loginlogo.png';
const Adminlogin = () => {
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [adminEmail, setAdminEmail] = useState('rishikesh.srikvstech@gmail.com'); // Initialize with empty string
  const [adminPassword, setAdminPassword] = useState('rishi27'); // Initialize with empty string
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');
  const otpPopupRef = useRef(null);
  const navigate = useNavigate();

  // Access the auth context
  const { login, token } = useAuth();

  // Handle login submission
  const handleLoginSubmit = async () => {
    try {
      const response = await api.post('/admin/login', {
        adminEmail,
        adminPassword,
      });

      if (response.status === 200) {
        login(response.data.jwt); // Store the JWT token in the context using login function
        console.log('Logged in with token:', response.data.jwt);
        setShowOtpPopup(true);
        setErrorMessage('');
      }
    } catch (error) {
      setErrorMessage('Login failed. Please check your credentials.');
    }
  };

  // Handle OTP popup close
  const handleCloseOtpPopup = () => {
    setShowOtpPopup(false);
  };

  // Handle clicking outside the OTP popup
  const handleClickOutside = (event) => {
    if (otpPopupRef.current && !otpPopupRef.current.contains(event.target)) {
      setShowOtpPopup(false);
    }
  };

  useEffect(() => {
    if (showOtpPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showOtpPopup]);

  // Handle OTP input change
  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < otp.length - 1 && value) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  // Handle OTP submission
  const handleOtpSubmit = async () => {
    const otpValue = otp.join(''); // Combine the OTP values into one string

    try {
      const response = await api.get(`/admin/verify/${otpValue}`, {
        headers: { authorization: `${token}` }, // Use the token from AuthContext
      });

      if (response.status === 200) {
        login(response.data.jwt); // Update token after OTP verification
        console.log('OTP verified, new token set:', response.data.jwt);
        navigate('/admin/SHRA/dashboard'); // Redirect to dashboard on successful OTP verification
      } else {
        setErrorMessage('OTP verification failed. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred during OTP verification.');
    }
  };

  return (
    <div className="aloginparent">
      <div className="aloginmain">
        {/* <h1>ADMIN PAGE</h1> */}
        <div className="alogincontainer">
          <div className={`aloginsubcon ${showOtpPopup ? 'blur' : ''}`}>
            <img className='aloginimg' src={logo} alt="" />
            <h1 className='alogintext'>WELCOME</h1>
            <div className="aloginin">
              <label>Email</label>
              <input
                type="text"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
              />
            </div>
            <div className="aloginin">
              <label>Password</label>
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
              />
            </div>
            <button className="aloginbtn" onClick={handleLoginSubmit}>
              Submit
            </button>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
          </div>

          {showOtpPopup && (
            <div className="aloginpop" ref={otpPopupRef}>
              <button className="aloginclose" onClick={handleCloseOtpPopup}>
                X
              </button>
              <div className="aloginotpmain">
                <label>OTP</label>
                <div className="otp-field">
                  {otp.map((value, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      value={value}
                      onChange={(e) => handleOtpChange(e, index)}
                      maxLength="1"
                    />
                  ))}
                </div>
                <button className="aloginotpbtn" onClick={handleOtpSubmit}>
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Adminlogin;
