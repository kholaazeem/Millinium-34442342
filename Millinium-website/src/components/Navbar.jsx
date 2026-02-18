import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Link import hona zaroori hai
import { X, Menu } from 'lucide-react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm py-3">
      <div className="container">
        {/* Logo */}
        <Link 
          className="navbar-brand fw-bold fs-3 text-black" 
          to="/" 
          style={{ fontFamily: 'Playfair Display', letterSpacing: '1px' }}
        >
          MILLENNIUM
        </Link>
        
        {/* Mobile Toggle Button */}
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
          
          {/* UPDATED BUTTON SECTION */}
          <div className="text-center mt-3 mt-lg-0">
            {/* Button ko Link se replace kiya hai */}
            <Link 
              to="/contact" 
              className="btn btn-gold text-decoration-none"
              onClick={() => setIsOpen(false)} // Mobile menu band karne ke liye
            >
              Get Started
            </Link>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;