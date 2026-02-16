import React from 'react';
import { MoveRight } from 'lucide-react';

const Hero = () => {
  return (
    <div 
      className="hero-section position-relative vh-100 d-flex align-items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/assets/hero-couple.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container text-white pt-5">
        <div className="row">
          <div className="col-lg-7 col-md-10">
            {/* Small Gold Heading */}
            <h6 className="text-uppercase fw-bold mb-3 animate-fade-up" style={{ color: '#E0A852', letterSpacing: '2px', fontSize: '0.9rem' }}>
              Fitness Reimagined
            </h6>

            {/* Main Heading */}
            <h1 className="display-2 fw-bold mb-4 animate-fade-up delay-1" style={{ lineHeight: '1.1' }}>
              Stronger Together,<br />
              <span style={{ color: '#E0A852' }}>Every Step.</span>
            </h1>

            {/* Description */}
            <p className="lead mb-5 opacity-75 animate-fade-up delay-2" style={{ maxWidth: '550px', fontSize: '1.1rem' }}>
              Millennium combines crowd-sourced data with scientific research to deliver workout experiences made for couples.
            </p>

            {/* Buttons */}
            <div className="d-flex gap-3 animate-fade-up delay-3 flex-wrap">
              <button className="btn btn-gold d-flex align-items-center gap-2">
                Explore Programs <MoveRight size={20} />
              </button>
              <button className="btn btn-outline-custom">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default Hero;