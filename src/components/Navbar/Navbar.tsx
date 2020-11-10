import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClick() {
    setIsOpen(!isOpen);
    if(document.body.style.overflowY === "hidden")
      document.body.style.overflowY = "visible";
    else
      document.body.style.overflowY = "hidden";
  }
  return (
    <>
      <nav className="navbar">
        <a href="/" className="navbar__logo" style={{backgroundImage: `url(${logo})`}}><span>Trafalgar</span></a>
        <ul className={`navbar__links ${isOpen ? "navbar__burger--open" : ""}`}>
          <li><a href="/" className="navbar__link--active">Home         </a></li>
          <li><a href="/">Find a doctor</a></li>
          <li><a href="/">Apps         </a></li>
          <li><a href="/">Testimonials </a></li>
          <li><a href="/">About us     </a></li>
        </ul>
        <nav className="navbar__burger">
          <IconButton color="primary" aria-label="Open navigation menu" component="button" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
        </nav>
      </nav>
      
    </>
  );
}