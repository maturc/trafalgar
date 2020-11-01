import { Container } from '@material-ui/core';
import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Services } from './components/Services';
import { Info } from './components/Info';
import { Testimonials } from './components/Testimonials';
import { Articles } from './components/Articles';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Container maxWidth="lg">
        <header>
          <Navbar />
          <Banner />
        </header>
      </Container>
      <Container maxWidth="md">
        <main>
          <Services />
          <Info />
          <Testimonials />
          <Articles />
        </main>
      </Container>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
