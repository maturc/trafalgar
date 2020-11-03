import React from 'react';
import './ButtonCustom.css';
import { Button as ButtonUI } from '@material-ui/core';

interface IButton {
  buttonStyle?: string;
  children: string;
}

export function ButtonCustom( {buttonStyle="secondary", children}:IButton ) {
  const isPrimary = (buttonStyle==="primary");
  return (
    <ButtonUI disableRipple={true} className={`button ${isPrimary? "button--primary" : ""}`}>
      {children}
    </ButtonUI>
  );
}