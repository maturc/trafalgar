import { Typography } from '@material-ui/core';
import React from 'react';
import { ButtonCustom } from '../shared/ButtonCustom';

interface IArticle {
  img:   string;
  alt:   string;
  title: string;
  body:  string;
}

export default function Article( {img, alt, title, body}: IArticle ) {
  return (
    <div className="article">
      <img src={img} alt={alt} />
      <Typography variant="h3">
        {title}
      </Typography>
      <Typography variant="body1">
        {body}
      </Typography>
      <ButtonCustom>Read more →</ButtonCustom>
    </div>
  );
}