import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Mulish, sans-serif',
    h1: {
      fontSize: "48px",
      fontWeight: 700,
      lineHeight: "56px"
    },
    h2: {
      fontSize: "36px",
      fontWeight: 700,
      lineHeight: "56px"
    },
    h3: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "56px"
    },
    h4: {
      fontSize: "22px",
      fontWeight: 700,
      lineHeight: "48px"
    },
    body1: {
      fontSize: "18px",
      fontWeight: 300,
      lineHeight: "30px"
    },
    body2: {
      fontSize: "16px",
      fontWeight: 300,
      lineHeight: "28px"
    },
    subtitle2: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "48px"
    },
    button: {
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "60px"
    }
  }   
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
