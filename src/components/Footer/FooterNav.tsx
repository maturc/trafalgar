import { Typography } from '@material-ui/core';
import React from 'react';

interface IFooterNav {
  head: string;
  listItem1: string;
  listItem2: string;
  listItem3: string;
  listItem4: string;
}

export default function FooterNav( {head, listItem1, listItem2, listItem3, listItem4}: IFooterNav ) {
  return (
    <div className="footer__navs">
      <Typography variant="h3" component="p">
        {head}
      </Typography>
      <ul>
        <li>
          <a href="/"><Typography variant="body1">
            {listItem1}
          </Typography></a>
        </li>
        <li>
          <a href="/"><Typography variant="body1">
            {listItem2}
          </Typography></a>
        </li>
        <li>
          <a href="/"><Typography variant="body1">
            {listItem3}
          </Typography></a>
        </li>
        <li>
          <a href="/"><Typography variant="body1">
            {listItem4}
          </Typography></a>
        </li>
      </ul>
    </div>
  );
}