import React from 'react';
import { Link } from 'react-router-dom'; // 1. Link import kiya
import { ArrowRight } from 'lucide-react'; 

const ReadyToTrain = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#ebebeb' }}>
      <div className="container text-center py-5">
        
        {/* Heading */}
        <h2 className="display-4 fw-bold mb-3" style={{ fontFamily: 'Playfair Display', color: '#222' }}>
          Ready to Train as One?
        </h2>

        {/* Subtext */}
        <p className="text-muted mb-5 mx-auto" style={{ maxWidth: '600px', fontSize: '1.1rem', lineHeight: '1.6' }}>
          Discover workout programs designed to bring you closer, push you further, and celebrate every milestone together.
        </p>

        {/* CTA Button converted to Link */}
        <Link 
          to="/products" 
          className="btn rounded-pill px-5 py-3 fw-bold text-white d-inline-flex align-items-center gap-2 cta-btn text-decoration-none"
        >
          View Programs <ArrowRight size={18} />
        </Link>

      </div>

      {/* Button Styling */}
      <style jsx>{`
        .cta-btn {
          background-color: #E0A852; /* Brand Gold Color */
          border: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .cta-btn:hover {
          background-color: #d49a45; /* Darker Gold on Hover */
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(224, 168, 82, 0.25);
          color: white; /* Ensure text remains white on hover */
        }
      `}</style>
    </section>
  );
};

export default ReadyToTrain;