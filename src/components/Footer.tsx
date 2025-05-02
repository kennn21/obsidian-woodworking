import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-obsidian text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-6">
              Obsidian <span className="text-gold">Woodworking</span>
            </h3>
            <p className="text-stone-300 mb-6">
              Custom woodworking and cabinetry, crafting heirloom-quality pieces that celebrate the beauty of natural wood and traditional craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-gold transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-stone-400 hover:text-gold transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-stone-400 hover:text-gold transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-stone-400 hover:text-gold transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-stone-300 hover:text-gold transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-stone-300 hover:text-gold transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-stone-300 hover:text-gold transition-colors duration-300">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="text-stone-300 hover:text-gold transition-colors duration-300">Portfolio</a>
              </li>
              <li>
                <a href="#testimonials" className="text-stone-300 hover:text-gold transition-colors duration-300">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-stone-300 hover:text-gold transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Services */}
          <div>
            <h3 className="text-lg font-medium mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-stone-300 hover:text-gold transition-colors duration-300">Custom Cabinetry</a>
              </li>
              <li>
                <a href="#services" className="text-stone-300 hover:text-gold transition-colors duration-300">Custom Furniture</a>
              </li>
              <li>
                <a href="#services" className="text-stone-300 hover:text-gold transition-colors duration-300">Architectural Millwork</a>
              </li>
              <li>
                <a href="#services" className="text-stone-300 hover:text-gold transition-colors duration-300">Commercial Projects</a>
              </li>
              <li>
                <a href="#services" className="text-stone-300 hover:text-gold transition-colors duration-300">Design Consultation</a>
              </li>
              <li>
                <a href="#services" className="text-stone-300 hover:text-gold transition-colors duration-300">Restoration Services</a>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-gold mr-3 mt-1 flex-shrink-0" />
                <span className="text-stone-300">
                  123 Craftsman Way<br />
                  Portland, OR 97205
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-gold mr-3 flex-shrink-0" />
                <span className="text-stone-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-gold mr-3 flex-shrink-0" />
                <span className="text-stone-300">info@obsidianwoodworking.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-stone-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Obsidian Woodworking & Custom Cabinetry. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-stone-400 text-sm hover:text-gold transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-stone-400 text-sm hover:text-gold transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}