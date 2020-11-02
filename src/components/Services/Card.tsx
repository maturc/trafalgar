import { Card as CardUI, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import './Card.css';

interface ICard {
  img: string;
  title: string;
  body: string;
}

export default function Card( {img, title, body}:ICard ) {
  return (
    <CardUI className="card">
      <CardMedia
          className="card__media"
          image={img}
          title=""
        />
      <CardContent>
        <Typography variant="h3">
          {title}
        </Typography>
        <Typography variant="body2">
          {body}
        </Typography>
      </CardContent>
    </CardUI>
  );
}