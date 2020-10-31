import { Container } from '@material-ui/core';
import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Services } from './components/Services';
import { Info } from './components/Info';

function App() {
  return (
    <>
      <header>
        <Container maxWidth="lg">
          <Navbar />
          <Banner />
        </Container>
      </header>
      <Container maxWidth="md">
        <main>
          <Services />
          <Info />
        </main>
      </Container>
      <footer>

      </footer>
    </>
  );
}

export default App;
