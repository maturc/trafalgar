import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Carousel } from './Carousel';
import { CarouselItem } from './CarouselItem';
import './Testimonials.css';
import controlsLeftIcon from '../../assets/carousel-left.svg';
import controlsDotIcon from '../../assets/carousel-dot.svg';

import testimonials1 from '../../assets/testimonials-1.jpg';

export function Testimonials() {
  const [index, setIndex]       = useState<number>(0);
  const [numberOfCarouselItems] = useState<number>(4);
  let timer: NodeJS.Timeout;

  function decrementIndex() {
    let value = index-1;
    if(value < 0)
      value = numberOfCarouselItems-1;
    setIndex(value);
  }
  function incrementIndex() {
    let value = index+1;
    if(value >= numberOfCarouselItems)
      value = 0;
    setIndex(value);
  }

  function startSlideTimer() {
    timer = setTimeout(function(){ incrementIndex() }, 3000);
  }
  useEffect(() => {
    startSlideTimer();
    return () => clearTimeout(timer);
  }, [index, startSlideTimer]); //eslint-disable-line

  const controlsArrow: React.CSSProperties = { background: `url(${controlsLeftIcon})` }
  const controlsDot:   React.CSSProperties = { background: `url(${controlsDotIcon})`  }
  const dotIsActive1 = index===0 ? "testimonials__controls-dot--active" : "";
  const dotIsActive2 = index===1 ? "testimonials__controls-dot--active" : "";
  const dotIsActive3 = index===2 ? "testimonials__controls-dot--active" : "";
  const dotIsActive4 = index===3 ? "testimonials__controls-dot--active" : "";
  return (
    <>
      <div className="testimonials">
        <Typography variant="h2">
          What our customer are saying
        </Typography>
        <hr />
        <Carousel
          index={index}
        >
          <CarouselItem
            img={testimonials1}
            name="Edward Newgate"
            company="Founder Circle"
            quote="“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”"
          />
          <CarouselItem
            img={testimonials1}
            name="Aaddward Neswgate"
            company="sdada Cidasdasdrcle"
            quote="“Our ed pasdasdagement app and 
            web portal allow asdasdyousdas toasda access information instantaneously (no tedeous form, long calls, 
            or administrasecurely”"
          />
          <CarouselItem
            img={testimonials1}
            name="Bdwswgate"
            company="Fossder Airsade"
            quote="“Ogement snd 
            web portal allow ormation instantaneously (no tedeous dlls, 
            or administracurely”"
          />
          <CarouselItem
            img={testimonials1}
            name="Cdwte"
            company="Foule"
            quote="“Oed agement app and 
            web portal allormation instantaneously (no tedeous form, long calls, 
            or administrative hasly”"
          />
        </Carousel>
      </div>
      <div className="testimonials__controls">
        <button onClick={decrementIndex}  className="testimonials__controls-left"  style={controlsArrow}></button>
        <button onClick={()=>setIndex(0)} className={`testimonials__controls-dot ${dotIsActive1}`} style={controlsDot}></button>
        <button onClick={()=>setIndex(1)} className={`testimonials__controls-dot ${dotIsActive2}`} style={controlsDot}></button>
        <button onClick={()=>setIndex(2)} className={`testimonials__controls-dot ${dotIsActive3}`} style={controlsDot}></button>
        <button onClick={()=>setIndex(3)} className={`testimonials__controls-dot ${dotIsActive4}`} style={controlsDot}></button>
        <button onClick={incrementIndex}  className="testimonials__controls-right" style={controlsArrow}></button>
      </div>
    </>
  );
}