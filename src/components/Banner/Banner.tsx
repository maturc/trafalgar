import { Typography } from '@material-ui/core';
import React from 'react';
import './Banner.css';
import bannerImg from '../../assets/banner.png'
import { ButtonCustom } from '../shared/ButtonCustom';
import dotsBlue from '../../assets/bg-dots-blue.svg';

export function Banner() {
  return (
    <div className="banner banner__bg-container">
      {/* background elements */}
        <img src={dotsBlue} alt="" className="banner__dots-blue" />
      {/* /////////////////// */}
      <div className="banner__text">
        <Typography variant="h1">
          Virtual healthcare
          for you
        </Typography>
        <Typography variant="body1" className="banner__body">
          Trafalgar provides progressive, and affordable 
          healthcare, accessible on mobile and online 
          for everyone
        </Typography>
        <ButtonCustom buttonStyle="primary">
          Consult today
        </ButtonCustom>
      </div>
      <img src={bannerImg} alt="Healthcare illustration" width="693" height="598" className="banner__image"/>
    </div>
  );
}