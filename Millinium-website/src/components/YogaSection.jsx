import React from 'react';
import { Link } from 'react-router-dom'; // 1. Yahan Link Import kiya
import { MoveRight, Sun, CheckCircle2 } from 'lucide-react';

const YogaSection = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          
          {/* Left Side: Image */}
          <div className="col-lg-6 animate-fade-up">
            <div className="image-wrapper position-relative">
              <img 
                src="/assets/product-yoga.jpg" 
                alt="Couples Yoga" 
                className="img-fluid rounded-4 shadow-lg w-100"
                style={{ objectFit: 'cover', minHeight: '400px' }}
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="col-lg-6 animate-fade-up delay-1">
            
            {/* Tagline / Label */}
            <div className="d-flex align-items-center gap-2 mb-3">
              <Sun size={20} color="#E0A852" />
              <span className="fw-bold text-uppercase" style={{ color: '#E0A852', letterSpacing: '1px', fontSize: '0.85rem' }}>
                Flexibility & Mindfulness
              </span>
            </div>

            {/* Title */}
            <h2 className="display-4 fw-bold mb-3" style={{ fontFamily: 'Playfair Display' }}>
              Couples Yoga Flow
            </h2>

            {/* Description */}
            <p className="text-muted lead mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              A science-backed yoga program designed specifically for partners. 
              Improve flexibility, reduce stress, and deepen your connection through 
              synchronized breathwork and poses.
            </p>

            {/* Stats Grid */}
            <div className="d-flex gap-5 mb-4 border-bottom pb-4">
              <div>
                <h4 className="fw-bold mb-0">8 Weeks</h4>
                <small className="text-muted">Duration</small>
              </div>
              <div>
                <h4 className="fw-bold mb-0">Low-Medium</h4>
                <small className="text-muted">Intensity</small>
              </div>
            </div>

            {/* Bullet List */}
            <ul className="list-unstyled mb-5">
              {[
                "30-minute daily sessions",
                "Beginner to advanced levels",
                "Guided meditation for two",
                "Progress tracking dashboard"
              ].map((item, index) => (
                <li key={index} className="d-flex align-items-center gap-3 mb-2 text-muted fw-medium">
                  <div style={{ width: '6px', height: '6px', backgroundColor: '#E0A852', borderRadius: '50%' }}></div>
                  {item}
                </li>
              ))}
            </ul>

            {/* 2. Button ko Link se replace kiya */}
            <Link 
              to="/contact" 
              className="btn btn-gold d-flex align-items-center gap-2 px-4 py-3 w-fit-content text-decoration-none"
              style={{ width: 'fit-content' }}
            >
              Get Started <MoveRight size={20} />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default YogaSection;