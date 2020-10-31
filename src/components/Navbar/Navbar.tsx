import React from 'react';
import './Navbar.css';

export function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar__logo">Logo</a>
      <ul className="navbar__links">
        <li><a href="/">Home         </a></li>
        <li><a href="/">Find a doctor</a></li>
        <li><a href="/">Apps         </a></li>
        <li><a href="/">Testimonials </a></li>
        <li><a href="/">About us     </a></li>
      </ul>
    </nav>
  );
}