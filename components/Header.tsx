
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_LINKS, WHATSAPP_LINK } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLinkStyle = {
    color: '#DDB771',
    textDecoration: 'underline',
    textUnderlineOffset: '8px',
  };

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-eco-deep-teal tracking-wider">
          <img src="/WhatsApp Image 2025-11-13 at 04.00.53_06c78fc0.jpg" alt="EcoCast Logo" className="inline-block h-10 w-10 ml-2 rounded-full" />
          Eco<span className="text-eco-bright-green">Cast</span>
        
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              className="text-eco-deep-teal hover:text-eco-gold transition-colors duration-300"
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-eco-forest-green text-white px-4 py-2 rounded-md hover:bg-eco-bright-green transition-colors duration-300 shadow-sm"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-eco-deep-teal focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white pb-4 px-6">
          <ul className="flex flex-col items-center space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.name} className="w-full text-center">
                <NavLink
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                   style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                  className="block py-2 text-eco-deep-teal hover:text-eco-gold transition-colors duration-300"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
             <li className="w-full pt-2">
                <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-eco-forest-green text-white w-full block text-center px-4 py-2 rounded-md hover:bg-eco-bright-green transition-colors duration-300 shadow-sm"
                >
                    Contact Us
                </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
