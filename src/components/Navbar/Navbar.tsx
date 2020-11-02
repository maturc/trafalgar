import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';

export function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar__logo" style={{backgroundImage: `url(${logo})`}}><span>Trafalgar</span></a>
      <ul className="navbar__links">
        <li><a href="/" className="navbar__link--active">Home         </a></li>
        <li><a href="/">Find a doctor</a></li>
        <li><a href="/">Apps         </a></li>
        <li><a href="/">Testimonials </a></li>
        <li><a href="/">About us     </a></li>
      </ul>
    </nav>
  );
}