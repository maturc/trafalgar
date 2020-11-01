import React, { ReactElement, useState } from 'react';
import './Carousel.css';

interface ICarousel {
  children: Array<ReactElement>;
}

export function Carousel( {children}: ICarousel ) {
  const [index, setIndex] = useState<number>(0);
  function decrementIndex() {
    let value = index-1;
    if(value < 0)
      value = children.length-1;
    setIndex(value);
  }
  function incrementIndex() {
    let value = index+1;
    if(value >= children.length)
      value = 0;
    setIndex(value);
  }
  return (
    <div className="testimonials__carousel">
      <div 
        className="testimonials__container"
        style={{transform: `translateX(-${index*100}%)`}}
      >
        {children}
      </div>
      <button onClick={decrementIndex}>{"<"}</button>
      <button onClick={incrementIndex}>{">"}</button>
    </div>
  );
}