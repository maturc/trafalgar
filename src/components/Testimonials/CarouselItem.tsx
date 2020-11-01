import { Typography } from '@material-ui/core';
import React from 'react';

interface ICarouselItem {
  img: string;
  name: string;
  company: string;
  quote: string;
}

export function CarouselItem( {img, name, company, quote}: ICarouselItem ) {
  return (
    <blockquote className="item">
      <img src={img} alt="" />
      <footer className="item__author">
        <cite>
          <Typography variant="h4" component="span" className="item__name">
            {name}
          </Typography>
          <Typography variant="subtitle2" component="span" className="item__company">
            {company}
          </Typography>
        </cite>
      </footer>
      <Typography variant="body1">
        {quote}
      </Typography>
    </blockquote>
  );
}