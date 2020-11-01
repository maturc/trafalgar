import { Typography } from '@material-ui/core';
import React from 'react';
import { Carousel } from './Carousel';
import { CarouselItem } from './CarouselItem';
import './Testimonials.css';

export function Testimonials() {
  return (
    <div className="testimonials">
      <Typography variant="h2">
        What our customer are saying
      </Typography>
      <hr />
      <Carousel>
        <CarouselItem 
          img=""
          name="Edward Newgate"
          company="Founder Circle"
          quote="“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”"
        />
        <CarouselItem 
          img=""
          name="Aadasddward Nesdadswgate"
          company="sdada Cidasdasdrcle"
          quote="“Our ed pasdasdagement app and 
          web portal allow asdasdyousdas toasda access information instantaneously (no tedeous form, long calls, 
          or administrasecurely”"
        />
        <CarouselItem 
          img=""
          name="Bdwswgate"
          company="Fossder Airsade"
          quote="“Ogement snd 
          web portal allow ormation instantaneously (no tedeous dlls, 
          or administracurely”"
        />
        <CarouselItem 
          img=""
          name="Cdwte"
          company="Foule"
          quote="“Oed agement app and 
          web portal allormation instantaneously (no tedeous form, long calls, 
          or administrative hasly”"
        />
      </Carousel>
     
    </div>
  );
}