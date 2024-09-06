import React from 'react'
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
const Home = () => {
  return (
    <div>
      <Header/>
      {/* <Land/> */}
      <Routes>
      
            <Route path="/" element={<Land />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/media" element={<Gallery />} />
            <Route path="/connect" element={<Contact/>} />
            <Route path="/ourprogram" element={<Ourprogrms />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/donatenow" element={<Donatenow />} />
            <Route path="/getinvolved" element={<Involve />} />
            

      </Routes>
      <Footer/>
    </div>
  )
}

export default Home
