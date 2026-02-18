import React from 'react';

const TermsHeader = () => {
  return (
    <section 
      className="text-center d-flex align-items-center justify-content-center" 
      style={{ 
        backgroundColor: '#ecebeb', 
        paddingTop: '160px',  // Navbar ke liye extra jagah (Push content down)
        paddingBottom: '100px', // Section ko bada karne ke liye
        minHeight: '50vh' // Kam se kam आधी screen jitna bada ho
      }}
    >
      <div className="container">
        <h6 className="text-uppercase fw-bold mb-3" style={{ color: '#E0A852', letterSpacing: '3px', fontSize: '1rem' }}>
          Legel
        </h6>
        <h1 className="display-3 fw-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
        Terms of Service
        </h1>
        <p className="text-muted mx-auto lead" style={{ maxWidth: '700px', fontSize: '1.25rem' }}>
         Last updated: February 2026
        </p>
      </div>
    </section>
  );
};

export default TermsHeader;