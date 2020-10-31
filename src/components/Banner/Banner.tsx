import { Typography } from '@material-ui/core';
import React from 'react';
import './Banner.css';
import bannerImg from '../../assets/banner.png'
import { ButtonCustom } from '../shared/ButtonCustom';

export function Banner() {
  return (
    <div className="banner">
      <div className="banner__text">
        <Typography variant="h1">
          Virtual healthcare
          for you
        </Typography>
        <Typography variant="body1">
          Trafalgar provides progressive, and affordable 
          healthcare, accessible on mobile and online 
          for everyone
        </Typography>
        <ButtonCustom buttonStyle="primary">
          Consult today
        </ButtonCustom>
      </div>
      <div className="banner__image">
        {/* would be better without wrapper div I guess, delete later maybe */}
        <img src={bannerImg} alt="Healthcare illustration" width="693" height="598"/>
      </div>
    </div>
  );
}