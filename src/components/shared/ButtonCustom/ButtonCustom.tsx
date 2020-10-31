import React from 'react';
import './ButtonCustom.css';
import { Button as ButtonUI } from '@material-ui/core';

interface IButton {
  buttonStyle: string;
  children: any;
}

export function ButtonCustom( {buttonStyle, children}:IButton ) {
  return (
    <ButtonUI>
      {children}
    </ButtonUI>
  );
}