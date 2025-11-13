
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-eco-deep-teal text-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and Tagline */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-wider">
              Eco<span className="text-eco-light-green">Cast</span>
            </h3>
            <p className="text-gray-300">Building the Future Sustainably.</p>
            <p className="text-gray-400 text-sm">Designed with ♻️ by EcoCast Construction.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-white tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-eco-gold transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h4 className="font-semibold text-white tracking-wider mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-300 hover:text-eco-gold transition-colors duration-300"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>Copyright © {new Date().getFullYear()} EcoCast Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
