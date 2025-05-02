import React from 'react';
import { Music, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-950 text-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Music className="h-8 w-8 text-amber-400" />
              <span className="ml-2 text-xl font-serif tracking-wider text-amber-50">Woodland Instruments</span>
            </div>
            <p className="mb-4">
              Crafting authentic musical instruments with tradition and soul since 1897.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-400 hover:text-amber-200 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-400 hover:text-amber-200 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-400 hover:text-amber-200 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium text-amber-50 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-50 transition-colors">Home</a></li>
              <li><a href="#instruments" className="hover:text-amber-50 transition-colors">Instruments</a></li>
              <li><a href="#craftsmanship" className="hover:text-amber-50 transition-colors">Craftsmanship</a></li>
              <li><a href="#testimonials" className="hover:text-amber-50 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-amber-50 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium text-amber-50 mb-4">Instrument Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-50 transition-colors">String Instruments</a></li>
              <li><a href="#" className="hover:text-amber-50 transition-colors">Wind Instruments</a></li>
              <li><a href="#" className="hover:text-amber-50 transition-colors">Percussion</a></li>
              <li><a href="#" className="hover:text-amber-50 transition-colors">Accessories</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium text-amber-50 mb-4">Workshop Hours</h3>
            <ul className="space-y-1">
              <li className="flex justify-between">
                <span>Tuesday - Friday</span>
                <span>10am - 5pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9am - 4pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday - Monday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-amber-900 text-center text-sm">
          <p>© {new Date().getFullYear()} Woodland Instruments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;