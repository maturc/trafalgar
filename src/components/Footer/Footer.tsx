import { Container, Typography } from '@material-ui/core';
import React from 'react';
import './Footer.css';
import logo from '../../assets/logo-footer.svg';
import FooterNav from './FooterNav';

export function Footer() {
  return (
    <div className="footer">
      <Container maxWidth="lg" className="footer__container">
        <div className="footer__info">
          <img src={logo} alt="" width="160" height="41" />
          <Typography variant="body1">
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
          </Typography>
          <Typography variant="body2">
            ©Trafalgar PTY LTD 2020. All rights reserved
          </Typography>
        </div>
        <FooterNav
          head="Company"
          listItem1="About"
          listItem2="Testimonials"
          listItem3="Find a doctor"
          listItem4="Apps"
        />
        <FooterNav
          head="Region"
          listItem1="Indonesia"
          listItem2="Singapore"
          listItem3="Hongkong"
          listItem4="Canada"
        />
        <FooterNav
          head="Help"
          listItem1="Help center"
          listItem2="Contact support"
          listItem3="Instructions"
          listItem4="How it works"
        />
      </Container>
    </div>
  );
}