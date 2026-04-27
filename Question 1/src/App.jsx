import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} @24071A05F4</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
