import React, { ReactElement } from 'react';
import './Carousel.css';

interface ICarousel {
  index: number;
  children: Array<ReactElement>;
}

export function Carousel( {index, children}: ICarousel ) {
  return (
    <div className="testimonials__carousel">
      <div 
        className="testimonials__container"
        style={{transform: `translateX(-${index*100}%)`}}
      >
        {children}
      </div>
    </div>
  );
}