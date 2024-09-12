import React, { useState } from 'react';
import api from '../../api/api'; // Import Axios
import './Involve.css';
import { Link } from 'react-router-dom';
import hr1 from './../../assets/involve/image (1).png';
import hr2 from './../../assets/involve/image (2).png';
import hr3 from './../../assets/involve/image (3).png';
import hr4 from './../../assets/involve/image (4).png';
import hr5 from './../../assets/involve/image (5).png';
import hr6 from './../../assets/involve/image.png';
import { useEffect } from 'react';
const Involve = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    location: '',
    area: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.mobile) newErrors.mobile = 'Mobile is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.area) newErrors.area = 'Area is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Merge firstName and lastName for API submission
    const apiData = {
      volunteerName: `${formData.firstName} ${formData.lastName}`,
      volunteerContact: formData.mobile,
      volunteerEmail: formData.email,
      volunteerLocation: formData.location,
      volunteerArea: formData.area
    };

    try {
      const response = await api.post('/voluteer', apiData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      if (response.status === 201) {
        setSuccessMessage('Registration successful!');
        setFormData({
          firstName: '',
          lastName: '',
          mobile: '',
          email: '',
          location: '',
          area: ''
        });
        setErrors({});
      } else {
        setSuccessMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      setSuccessMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className='involparent'>
      <div className="inheromain">
        <div className="iheroback">
          <div className="iheroimg">
            <img src={hr1} alt="" />
            <img src={hr2} alt="" />
            <img src={hr3} alt="" />
            <img src={hr4} alt="" />
            <img src={hr5} alt="" />
            <img src={hr6} alt="" />
          </div>
        </div>
        <div className="iherosub">
          <div className="iherobtn">
            <Link>volunteer with us</Link>
          </div>
          <h1>Make Your Weekends More <br /> <span>Meaningful</span></h1>
        </div>
      </div>
      <div className="intitle">
        <h1>Why Volunteer With us</h1>
        <p>We provide a variety of volunteer options to suit your preferences. You'll join a group of people that are dedicated to changing things for the better.</p>
      </div>
      <div className="informmain">
        <form onSubmit={handleSubmit} className="inform">
          <h1>Registration</h1>
          <div className="invcon">
            <div className="invsub">
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
              {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>
            <div className="invsub">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
              {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>
          </div>
          <div className="invcon">
            <div className="invsub">
              <label htmlFor="mobile">Mobile</label>
              <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
              {errors.mobile && <span className="error">{errors.mobile}</span>}
            </div>
          </div>
          <div className="invcon">
            <div className="invsub">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" value={formData.email} onChange={handleChange} />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>
          <div className="invcon">
            <div className="invsub">
              <label htmlFor="location">Location</label>
              <input type="text" name="location" value={formData.location} onChange={handleChange} />
              {errors.location && <span className="error">{errors.location}</span>}
            </div>
            <div className="invsub">
              <label htmlFor="area">Area</label>
              <input type="text" name="area" value={formData.area} onChange={handleChange} />
              {errors.area && <span className="error">{errors.area}</span>}
            </div>
          </div>
          <div className="informbtn">
            <button type="submit" className='inforbutton'>Submit</button>
          </div>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Involve;
