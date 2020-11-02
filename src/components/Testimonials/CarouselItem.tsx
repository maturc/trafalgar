import { Typography } from '@material-ui/core';
import React from 'react';
import './CarouselItem.css';

interface ICarouselItem {
  img: string;
  name: string;
  company: string;
  quote: string;
}

export function CarouselItem( {img, name, company, quote}: ICarouselItem ) {
  return (
    <blockquote className="item">
      <div className="item__person">
        <img src={img} alt="" className="item__img"/>
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
      </div>
      <Typography variant="body1">
        {quote}
      </Typography>
    </blockquote>
  );
}