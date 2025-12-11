import { useState, useEffect } from 'react';
// 1. Keep the routing component imports
import { Routes, Route } from 'react-router-dom'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Career from './components/Careers';
import './App.css';

function App() {
  useEffect(() => {
      AOS.init({
          duration: 1000,
          once: true, 
          easing: 'ease-in-out',
      });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/careers' element={<Career />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;