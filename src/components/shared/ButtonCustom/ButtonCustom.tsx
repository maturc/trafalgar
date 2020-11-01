import React from 'react';
import './ButtonCustom.css';
import { Button as ButtonUI } from '@material-ui/core';

interface IButton {
  buttonStyle?: string;
  children: string;
}

export function ButtonCustom( {buttonStyle="secondary", children}:IButton ) {
  return (
    <ButtonUI>
      {children}
    </ButtonUI>
  );
}