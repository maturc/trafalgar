import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import { ButtonCustom } from '../shared/ButtonCustom';
import './Article.css';

interface IArticle {
  img:   string;
  alt:   string;
  title: string;
  body:  string;
}

export default function Article( {img, alt, title, body}: IArticle ) {
  return (
    <Card className="article">
      <CardMedia className="article__img"
        component="img"
        alt={alt}
        height="240"
        image={img}
      />
      <CardContent>
        <Typography variant="h3">
          {title}
        </Typography>
        <Typography variant="body2">
          {body}
        </Typography>
        <ButtonCustom>Read more →</ButtonCustom>
      </CardContent>
    </Card>
  );
}