import React from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Contact />
      <Projects />
      <Skills />
    </div>
  );
};

export default App;
