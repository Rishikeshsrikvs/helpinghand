import React from 'react'
import './Footer.css';

import { NavLink,Link } from 'react-router-dom';


import twit from './../../assets/footer/TwitterX.png';
import li from './../../assets/footer/LinkedIn.png';
import ins from './../../assets/footer/Instagram.png';
import face from './../../assets/footer/Facebook.png';
import logo from './../../assets/head/logo.png';
const Footer = () => {
  return (
    <div className='footerparent'>
        <div className="footback">
            <div className="footiconcontainer">
               <Link to="https://www.linkedin.com/company/helping-hands-charitable-trust-chennai/"  target="_blank"><img src={li} alt="" /></Link>
               <Link to="https://www.instagram.com/helpinghands.charitabletrust/"  target="_blank"><img src={ins} alt="" /></Link>
               <Link to="https://www.facebook.com/profile.php?id=61554899485699"  target="_blank"><img src={face} alt="" /></Link>
               <Link><img src={twit} alt="" /></Link>
            </div>
        </div>
      <div className="footsubparent">
          <div className="footmain">
                <div className="footlogo">
                    <img src={logo} alt="" />
                </div>
                <h1>“ No one has ever become poor by giving ”</h1>
                <p>Your contribution provides vital support and transforms lives. Every gift makes a difference.</p>
                <div className="footbtn">
                    <Link to="/donate">Donate Now</Link>
                </div>
                
                <ul className='footul navul'>
                    <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink></li>
                    <li><NavLink to="About" className={({ isActive }) => (isActive ? 'active-link' : '')}>About Us</NavLink></li>
                    <li><NavLink to="ourprogram" className={({ isActive }) => (isActive ? 'active-link' : '')}>Our Programs</NavLink></li>
                    <li><NavLink to="media" className={({ isActive }) => (isActive ? 'active-link' : '')}>Media</NavLink></li>
                    <li><NavLink to="getinvolved" className={({ isActive }) => (isActive ? 'active-link' : '')}>Get Involved</NavLink></li>
            
                </ul>
                
          </div>
          <div className='footsub'>
                <div className="fsubleft">
                    <Link to= "https://srikvstech.com/">designed by sri KVS Tech</Link>
                </div>
                <div className="fsubright">
                    <Link>privacy policy</Link>
                    <Link>terms & conditions</Link>
                </div>
          </div>
      </div>
    </div>
  )
}

export default Footer
