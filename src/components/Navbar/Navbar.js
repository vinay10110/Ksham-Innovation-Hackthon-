import React, { useState, useEffect } from 'react';
import './Navbar.css'; 
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setIsSticky(currentScroll > 0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="navbar-logo"><img src={logo} alt="logo" /></div>
      {isMobile && ( 
        <button className="navbar-toggle" onClick={toggleNavbar}>
          <span className="navbar-toggle-icon">&#9776;</span>
        </button>
      )}
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/About" className="navbar-link">About</Link></li>
        <li><Link to="/Howdoesitwork" className="navbar-link">How Does it Work?</Link></li>
        <li><Link to="/Contact" className="navbar-link">Contact</Link></li> 
      </ul>
    </nav>
  );
};

export default Navbar;