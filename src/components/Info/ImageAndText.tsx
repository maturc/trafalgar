import { Typography } from '@material-ui/core';
import React from 'react';
import { ButtonCustom } from '../shared/ButtonCustom';
import './ImageAndText.css';
import dotsBlue from '../../assets/bg-dots-blue.svg';

interface IImageAndText {
  img:    string;
  alt:    string;
  title:  string;
  body:   string;
  button: string;
  isReverse?: boolean;
}

export default function ImageAndText( {img, alt, title, body, button, isReverse=false}:IImageAndText ) {
  const reverse = isReverse ? "image-and-text--reverse" : "";
  return (
    <section className={`image-and-text ${reverse}`}>
      <img className="image-and-text__img target" src={img} alt={alt} />
      <div className="image-and-text__text">
        <Typography variant="h2">
          {title}
        </Typography>
        <hr />
        <Typography variant="body1">
          {body}
        </Typography>
        <div className="image-and-text__button">
          <ButtonCustom>
            {button}
          </ButtonCustom>
        </div>
      </div>
      {/* background elements */}
        <div className="image-and-text__bg-container">
            <img src={dotsBlue} alt="" className="image-and-text__dots-blue" />
          </div>
      {/* /////////////////// */}
    </section>
  );
}