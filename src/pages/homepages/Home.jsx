import React from 'react'
import { useState } from 'react';
import './Home.css';
import Footer from './Footer'
import { Header } from './Header'
import { Routes, Route } from 'react-router-dom';
import AboutUs from './../suresh/components/Aboutpage/AboutUs.jsx';
import Land from './Land';
import Contact from '../suresh/components/Contact/Contact.jsx';
import Gallery from './../suresh/components/Gallery/Gallery.jsx';
import Ourprogrms from './../suresh/components/Ourprogram/Ourprogram.jsx';
import Donate from './../suresh/components/Donate/Donate.jsx';
import Donatenow from './../suresh/components/DonateNow/DonateNow.jsx';
import Involve from './Involve.jsx';
import Blooddonate from './Blooddonate.jsx';
import logo from './../../assets/head/logo.png';
const Home = () => {

  const [isImageVisible, setIsImageVisible] = useState(true);
  const closeImageOverlay = () => {
      setIsImageVisible(false);}


  return (
    <div>
      <Header/>
      {/* {isImageVisible && (
        <div className="popupimage-overlay" onClick={closeImageOverlay}>
          <div className="popupimage-container" onClick={(e) => e.stopPropagation()}>
            <button className="popupcloseimage-button" onClick={closeImageOverlay}>X</button>
            <img src={logo} alt="Sample" />
          </div>
        </div>
      )} */}

      
      <div className="homemain">
        <Routes>
        
              <Route path="/" element={<Land />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/media" element={<Gallery />} />
              <Route path="/connect" element={<Contact/>} />
              <Route path="/ourprogram" element={<Ourprogrms />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/donatenow" element={<Donatenow />} />
              <Route path="/getinvolved" element={<Involve />} />
              <Route path="/blooddonate" element={<Blooddonate />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
