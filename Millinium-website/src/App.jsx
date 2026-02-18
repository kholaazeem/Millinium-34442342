import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

// Components Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ReadyToTrain from './components/ReadyToTrain';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

// Contact Page ke 2 Components Import karein
import ContactHeader from './components/ContactHeader';
import LetsConnect from './components/LetsConnect';
import OurPrograms from './components/OurPrograms';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <ReadyToTrain />
            <Newsletter />
          </>
        } />
        
        {/* Products Page (Placeholder) */}
        <Route path="/products" element={
          <>
          <OurPrograms/>
          <Newsletter/>
          </>
        } />
        
        {/* Contact Page - Dono Components yahan laga diye */}
        <Route path="/contact" element={
          <>
            <ContactHeader />
            <LetsConnect />
          </>
        } /> 
        
        {/* Terms Page (Placeholder) */}
        <Route path="/terms" element={<div style={{paddingTop: '100px', minHeight: '60vh'}}>Terms Page</div>} />
      </Routes>

      <Footer /> 
    </Router>
  );
}

export default App;