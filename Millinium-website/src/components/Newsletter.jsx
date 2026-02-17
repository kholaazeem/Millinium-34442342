import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-5 text-white" style={{ backgroundColor: '#222' }}> {/* Dark Grey Background */}
      <div className="container text-center py-5">
        
        {/* Heading */}
        <h2 className="display-5 fw-bold mb-3" style={{ fontFamily: 'Playfair Display' }}>
          Start Your Journey Together
        </h2>

        {/* Subtext */}
        <p className="text-white-50 mb-5 mx-auto" style={{ maxWidth: '600px', fontSize: '1.1rem', lineHeight: '1.6' }}>
          Subscribe to our newsletter for science-backed tips, couples workout ideas, and exclusive access to new programs.
        </p>

        {/* Input & Button Form */}
        {/* Mobile: Column (Stack), Desktop: Row (Side-by-Side) */}
        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 mx-auto" style={{ maxWidth: '500px' }}>
          
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="form-control rounded-pill px-4 py-3 border-0 w-100" // w-100 ensures full width on mobile
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              color: '#fff',
              fontSize: '1rem' 
            }}
          />
          
          <button className="btn rounded-pill px-4 py-3 fw-bold text-white subscribe-btn w-100 w-sm-auto" style={{ whiteSpace: 'nowrap' }}>
            Subscribe
          </button>

        </div>

      </div>

      {/* CSS Styling */}
      <style jsx>{`
        .subscribe-btn {
          background-color: #E0A852; /* Gold Brand Color */
          border: none;
          transition: all 0.3s ease;
          min-width: 140px;
        }

        .subscribe-btn:hover {
          background-color: #d49a45;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(224, 168, 82, 0.3);
        }

        /* Placeholder color styling */
        input::placeholder {
          color: rgba(255, 255, 255, 0.5) !important;
        }
        
        /* Focus state styling */
        input:focus {
           background-color: rgba(255, 255, 255, 0.15) !important;
           color: #fff !important;
           box-shadow: none !important;
           outline: 1px solid #E0A852;
        }

        /* Mobile specific adjustments if needed */
        @media (min-width: 576px) {
          .w-sm-auto {
            width: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Newsletter;