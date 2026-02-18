import React from 'react';
import { Link } from 'react-router-dom'; // Link import hona zaroori hai
import { MoveRight, Flame } from 'lucide-react'; // Flame icon for Power

const StrengthSection = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          
          {/* CONTENT COLUMN */}
          {/* Mobile: Order 2 (Neeche), Desktop: Order 1 (Left) */}
          <div className="col-lg-6 order-2 order-lg-1 animate-fade-up">
            
            {/* Tagline / Label */}
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="p-1 rounded-circle" style={{ backgroundColor: 'rgba(224, 168, 82, 0.1)' }}>
                <Flame size={20} color="#E0A852" />
              </div>
              <span className="fw-bold text-uppercase" style={{ color: '#E0A852', letterSpacing: '1px', fontSize: '0.85rem' }}>
                Power & Trust
              </span>
            </div>

            {/* Title */}
            <h2 className="display-4 fw-bold mb-3" style={{ fontFamily: 'Playfair Display' }}>
              Strength Synergy
            </h2>

            {/* Description */}
            <p className="text-muted lead mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              Build strength together with partner-assisted exercises and crowd-sourced 
              programming. Spot each other, push each other, and celebrate PRs as a team.
            </p>

            {/* Stats Grid */}
            <div className="d-flex gap-5 mb-4 border-bottom pb-4">
              <div>
                <h4 className="fw-bold mb-0">12 Weeks</h4>
                <small className="text-muted">Duration</small>
              </div>
              <div>
                <h4 className="fw-bold mb-0">Medium-High</h4>
                <small className="text-muted">Intensity</small>
              </div>
            </div>

            {/* Bullet List */}
            <ul className="list-unstyled mb-5">
              {[
                "4 sessions per week",
                "Partner spotting techniques",
                "Progressive overload plans",
                "Nutrition guidance for two"
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

          {/* IMAGE COLUMN */}
          {/* Mobile: Order 1 (Upar), Desktop: Order 2 (Right) */}
          <div className="col-lg-6 order-1 order-lg-2 animate-fade-up delay-1">
            <div className="image-wrapper position-relative">
              {/* Image Path: Make sure to add this image in public folder */}
              <img 
                src="/assets/product-strength.jpg" 
                alt="Couples Strength Training" 
                className="img-fluid rounded-4 shadow-lg w-100"
                style={{ objectFit: 'cover', minHeight: '400px' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StrengthSection;