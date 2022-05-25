import React from 'react'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Nav from './components/Nav.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'
import About from './components/About.js'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
