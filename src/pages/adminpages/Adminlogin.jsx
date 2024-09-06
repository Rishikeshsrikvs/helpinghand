import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import './Adminlogin.css';
import { useAuth } from './auth/AuthContext';
import logo from './../../assets/adminlogin/loginlogo.png';
import back from './../../assets/adminlogin/loginback.png';


const Adminlogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');
  const otpPopupRef = useRef(null);
  const navigate = useNavigate();
  const { login, token } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = async () => {
    try {
      const response = await axios.post('/api/admin/login', {
        adminEmail: formData.username,
        adminPassword: formData.password,
      });

      if (response.status === 200) {
        login(response.data.jwt);
        setShowOtpPopup(true);
        setErrorMessage('');
      }
    } catch (error) {
      setErrorMessage('Login failed. Please check your credentials.');
    }
  };

  const handleCloseOtpPopup = () => {
    setShowOtpPopup(false);
  };

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

  const handleOtpSubmit = async () => {
    const otpValue = otp.join('');

    try {
      const response = await axios.get(`/api/admin/verify/${otpValue}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        login(response.data.jwt);
        navigate('/admin/SHRA/dashboard');
      } else {
        setErrorMessage('OTP verification failed. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred during OTP verification.');
    }
  };

  return (
    <div className="adminpagesback">
      <div className={`adminpagescontainer ${showOtpPopup ? 'blur' : ''}`}>
        <img src={logo} alt="Logo" className="adminpages-logo" />
        <h1 className="adminpages-heading">WELCOME</h1>
        <div className={`adminpagesform ${showOtpPopup ? 'blur' : ''}`}>
          <div className="adminpages-group">
            <label className="ad-label" htmlFor="username">USER Name:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="adminpages-group">
            <label className="ad-label" htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="adsubmit">
            <button className="adminpagesbtn" onClick={handleLoginSubmit}>Submit</button>
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>

        {showOtpPopup && (
          <div className="aloginpop" ref={otpPopupRef}>
            <button className="aloginclose" onClick={handleCloseOtpPopup}>X</button>
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
              <button className="aloginotpbtn" onClick={handleOtpSubmit}>Submit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Adminlogin;
