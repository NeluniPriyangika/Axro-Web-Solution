import React from 'react';
import './navbar.css';
import Logo from '../../asesst/logo.png';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="AXRO TECH Logo" />
        </div>
  
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li className="dropdown">
            <a href="#">Services</a>
            <ul className="dropdown-content">
              <li><a href="#">Home Security Sloutions</a></li>
              <li><a href="#">Software Development</a></li>
              <li><a href="#">Innovations and Engineering</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">About</a>
            <ul className="dropdown-content">
              <li><a href="#">Company Overview</a></li>
              <li><a href="#">Existing Projects</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Gallary</a></li>
            </ul>
          </li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;