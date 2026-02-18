import React, { useState } from 'react';
import Swal from 'sweetalert2'; // SweetAlert import karein

const Newsletter = () => {
  const [email, setEmail] = useState(''); // Email save karne ke liye state

  const handleSubscribe = () => {
    // 1. Check karein agar email khali hai
    if (!email) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please enter your email address first!',
        confirmButtonColor: '#E0A852', // Brand Gold Color
      });
      return;
    }

    // 2. Success "Cute" Alert
    Swal.fire({
      title: 'Welcome Aboard! 💛',
      text: 'You are now part of the Millennium community. Get ready to transform together!',
      icon: 'success',
      confirmButtonText: 'Let’s Go!',
      confirmButtonColor: '#E0A852', // Brand Gold Color
      background: '#fff',
      backdrop: `
        rgba(0,0,0,0.8)
      `
    });

    // 3. Input clear karein
    setEmail('');
  };

  return (
    <section className="py-5 text-white" style={{ backgroundColor: '#222' }}>
      <div className="container text-center py-5">
        
        <h2 className="display-5 fw-bold mb-3" style={{ fontFamily: 'Playfair Display' }}>
          Start Your Journey Together
        </h2>

        <p className="text-white-50 mb-5 mx-auto" style={{ maxWidth: '600px', fontSize: '1.1rem', lineHeight: '1.6' }}>
          Subscribe to our newsletter for science-backed tips, couples workout ideas, and exclusive access to new programs.
        </p>

        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 mx-auto" style={{ maxWidth: '500px' }}>
          
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email} // Value ko state se connect kiya
            onChange={(e) => setEmail(e.target.value)} // Type karne par state update ho
            className="form-control rounded-pill px-4 py-3 border-0 w-100"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              color: '#fff',
              fontSize: '1rem' 
            }}
          />
          
          <button 
            onClick={handleSubscribe} // Button click par function chalega
            className="btn rounded-pill px-4 py-3 fw-bold text-white subscribe-btn w-100 w-sm-auto" 
            style={{ whiteSpace: 'nowrap' }}
          >
            Subscribe
          </button>

        </div>

      </div>

      <style jsx>{`
        .subscribe-btn {
          background-color: #E0A852;
          border: none;
          transition: all 0.3s ease;
          min-width: 140px;
        }

        .subscribe-btn:hover {
          background-color: #d49a45;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(224, 168, 82, 0.3);
        }

        input::placeholder {
          color: rgba(255, 255, 255, 0.5) !important;
        }
        
        input:focus {
           background-color: rgba(255, 255, 255, 0.15) !important;
           color: #fff !important;
           box-shadow: none !important;
           outline: 1px solid #E0A852;
        }

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