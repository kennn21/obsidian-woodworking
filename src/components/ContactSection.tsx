import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <div id="contact" className="py-16 bg-amber-900 text-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4">Visit Our Workshop</h2>
          <p className="text-lg text-amber-100">
            Experience our craftsmanship firsthand and find the perfect instrument for your musical journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-amber-800/80 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-serif font-bold mb-6 border-b border-amber-700 pb-3">
              Contact Information
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-amber-300 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Our Location</h4>
                  <p className="text-amber-200">123 Woodland Road, Blue Ridge, TN 37650</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-amber-300 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-amber-200">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-amber-300 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-amber-200">info@woodlandinstruments.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-amber-300 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Workshop Hours</h4>
                  <p className="text-amber-200">Tuesday - Saturday: 10am - 5pm</p>
                  <p className="text-amber-200">Closed Sunday & Monday</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-800/80 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-serif font-bold mb-6 border-b border-amber-700 pb-3">
              Send Us a Message
            </h3>
            
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 bg-amber-50 text-amber-900 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 bg-amber-50 text-amber-900 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your email"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 bg-amber-50 text-amber-900 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Message subject"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-amber-50 text-amber-900 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your message"
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-500 text-amber-50 rounded-md transition-colors duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;