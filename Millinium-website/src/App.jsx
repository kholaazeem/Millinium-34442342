import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features'; // Import kiya

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page par Hero ke baad Features section */}
        <Route path="/" element={
          <>
            <Hero />
            <Features /> 
          </>
        } />
        <Route path="/products" element={<div style={{paddingTop: '100px'}}>Products Page</div>} />
        <Route path="/contact" element={<div style={{paddingTop: '100px'}}>Contact Page</div>} />
        <Route path="/terms" element={<div style={{paddingTop: '100px'}}>Terms Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;