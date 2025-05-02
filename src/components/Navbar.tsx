import React, { useState } from 'react';
import { Menu, X, Music } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-amber-900/90 backdrop-blur-sm text-amber-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Music className="h-8 w-8 text-amber-200" />
            <span className="ml-2 text-xl font-serif tracking-wider">Woodland Instruments</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="font-medium hover:text-amber-200 transition-colors">Home</a>
              <a href="#instruments" className="font-medium hover:text-amber-200 transition-colors">Instruments</a>
              <a href="#craftsmanship" className="font-medium hover:text-amber-200 transition-colors">Craftsmanship</a>
              <a href="#testimonials" className="font-medium hover:text-amber-200 transition-colors">Testimonials</a>
              <a href="#contact" className="font-medium hover:text-amber-200 transition-colors">Contact</a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-200 hover:text-white hover:bg-amber-800 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-amber-900 pb-3 px-2">
          <div className="flex flex-col space-y-2 px-3 pt-2 pb-3 sm:px-5">
            <a href="#" className="font-medium hover:text-amber-200 transition-colors py-2 px-3 border-b border-amber-800/50">
              Home
            </a>
            <a href="#instruments" className="font-medium hover:text-amber-200 transition-colors py-2 px-3 border-b border-amber-800/50">
              Instruments
            </a>
            <a href="#craftsmanship" className="font-medium hover:text-amber-200 transition-colors py-2 px-3 border-b border-amber-800/50">
              Craftsmanship
            </a>
            <a href="#testimonials" className="font-medium hover:text-amber-200 transition-colors py-2 px-3 border-b border-amber-800/50">
              Testimonials
            </a>
            <a href="#contact" className="font-medium hover:text-amber-200 transition-colors py-2 px-3">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;