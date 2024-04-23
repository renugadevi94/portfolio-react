
import React from 'react';
import "./App.css"
import { Header } from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div id="top" className="App">
        <Header />
        <Intro />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;