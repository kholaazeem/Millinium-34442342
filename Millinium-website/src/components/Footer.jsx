import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom'; // Agar react-router use kar rahay hain

const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-4" style={{ backgroundColor: '#222' }}>
      <div className="container">
        
        {/* Top Section: Grid Layout */}
        <div className="row g-4 justify-content-between">
          
          {/* Column 1: Brand & Description */}
          <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
            <h3 className="fw-bold mb-3" style={{ fontFamily: 'Playfair Display', letterSpacing: '1px' }}>
              MILLENNIUM
            </h3>
            <p className="text-white-50" style={{ lineHeight: '1.6', maxWidth: '400px' }}>
              Transforming the way couples work out together. Science-backed, crowd-sourced fitness experiences that strengthen your body and your bond.
            </p>
          </div>

          {/* Column 2: Navigate Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="text-uppercase fw-bold text-white-50 mb-3" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>
              Navigate
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="footer-link">Home</Link></li>
              <li className="mb-2"><Link to="/products" className="footer-link">Products</Link></li>
              <li className="mb-2"><Link to="/contact" className="footer-link">Contact</Link></li>
              <li className="mb-2"><Link to="/terms" className="footer-link">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 3: Connect Info */}
          <div className="col-lg-3 col-md-6 col-6">
            <h6 className="text-uppercase fw-bold text-white-50 mb-3" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>
              Connect
            </h6>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2">
                <a href="mailto:hello@millennium.fit" className="footer-link">hello@millennium.fit</a>
              </li>
              <li className="mb-2">+1 (555) 000-0000</li>
            </ul>
          </div>

        </div>

        {/* Divider Line */}
        <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Bottom Section: Copyright & Credits */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-white-50 small">
          
          {/* Left Side */}
          <div className="mb-2 mb-md-0">
            © 2026 Millennium. All rights reserved.
          </div>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-1">
            Built with <Heart size={14} fill="#E0A852" color="#E0A852" /> for couples everywhere
          </div>

        </div>
      </div>

      {/* Internal CSS for Hover Effects */}
      <style jsx>{`
        .footer-link {
          color: rgba(255, 255, 255, 0.5); /* Text White-50 */
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: #E0A852; /* Gold Brand Color on Hover */
        }
      `}</style>
    </footer>
  );
};

export default Footer;