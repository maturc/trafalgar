import React from 'react';
import ImageAndText from './ImageAndText';
import './Info.css';
import img1 from '../../assets/info-section-1.png';
import img2 from '../../assets/info-section-2.png';

export function Info() {
  return (
    <div className="image-and-text__container">
      <ImageAndText
        img={img1}
        alt="illustration"
        title="Leading healthcare providers"
        body="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
        in the solutions we deliver"
        button="Learn more"
      />
      <ImageAndText
        img={img2}
        alt="illustration"
        title="Download our mobile apps"
        body="Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
        button="Download"
        isReverse={true}
      />
    </div>
  );
}