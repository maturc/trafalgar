import React, { ReactElement, useState } from 'react';

interface ICarousel {
  children: Array<ReactElement>;
}

export function Carousel( {children}: ICarousel ) {
  const [index, setIndex] = useState<number>(0);
  function decrementIndex() {
    let value = index-1;
    if(value < 0)
      value = children.length-1;
    setIndex(value)
  }
  function incrementIndex() {
    let value = index+1;
    if(value >= children.length)
      value = 0;
    setIndex(value)
  }
  return (
    <div className="testimonials__carousel">
      {children[index]}
      <button onClick={decrementIndex}>{"<"}</button>
      <button onClick={incrementIndex}>{">"}</button>
    </div>
  );
}