import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Navbar hamesha White aur Fixed Rahega
    <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm py-3">
      <div className="container">
        {/* Logo - Hamesha Black */}
        <Link 
          className="navbar-brand fw-bold fs-3 text-black" 
          to="/" 
          style={{ fontFamily: 'Playfair Display', letterSpacing: '1px' }}
        >
          MILLENNIUM
        </Link>
        
        {/* Mobile Toggle Button - Black Icon */}
        <button 
          className="navbar-toggler border-0 p-0" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
        >
           {isOpen ? <X color="black" size={30} /> : <Menu color="black" size={30} />}
        </button>

        {/* Links Container */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto gap-4 text-center">
            {['Home', 'Products', 'Contact', 'Terms'].map((item) => (
              <li className="nav-item" key={item}>
                <Link 
                  className="nav-link fw-medium text-dark" 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Button */}
          <div className="text-center mt-3 mt-lg-0">
            <button className="btn btn-gold">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;