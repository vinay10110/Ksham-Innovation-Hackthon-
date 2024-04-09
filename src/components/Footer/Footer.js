import React from 'react';
import './Footer.css'; 
import logo from '../../assets/logo.png';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
       
        <img src={logo} alt="Logo" className="footer-logo" />
        <span>Copyright © Ksham Innovation 2023. All Rights Reserved.</span>
      </div>
      <div className="footer-center">
        
        <a href="/">Privacy |</a>
        <a href="/">License |</a>
        <a href="/">Agreement</a>
      </div>
      <div className="footer-right">
        <a href="https://www.instagram.com">Follow Us On <FaInstagram size={35} /></a>
        <a href="https://www.linkedin.com"><FaLinkedin size={35} /></a>
      </div>
    </footer>
  );
}; 

export default Footer;