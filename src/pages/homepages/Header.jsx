import React, { useEffect, useState } from 'react';
import './Header.css';
// import logo from './../../assets/Header/logo.png';
import logo from './../../assets/head/logo.png';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let lastScrollTop = 0;

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop > lastScrollTop) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar-container ${isVisible ? 'visible' : 'hidden'}`}>
      <div className='navbar-logo'>
        <NavLink to="/"><img src={logo} alt="Logo" /></NavLink>
        <div className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      
      <div className={`navcontainer ${isMenuOpen ? 'active' : ''}`}>
        <ul className='navul'>
          <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink></li>
          <li><NavLink to="About" className={({ isActive }) => (isActive ? 'active-link' : '')}>About Us</NavLink></li>
          <li><NavLink to="ourprogram" className={({ isActive }) => (isActive ? 'active-link' : '')}>Our Programs</NavLink></li>
          <li><NavLink to="media" className={({ isActive }) => (isActive ? 'active-link' : '')}>Media</NavLink></li>
          <li><NavLink to="getinvolved" className={({ isActive }) => (isActive ? 'active-link' : '')}>Get Involved</NavLink></li>
         
        </ul>
        <div className='navcar'>
        <li><NavLink to="Connect" className={({ isActive }) => (isActive ? 'active-link' : '')}>Cantact Us</NavLink></li>

        </div>
      </div>
    </div>
  );
};
