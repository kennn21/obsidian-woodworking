import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { SectionTitle } from './ui/SectionTitle';
import { Button } from './ui/Button';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export function Contact() {
  return (
    <Section id="contact">
      <SectionTitle 
        title="Contact Us" 
        subtitle="Interested in our services? Get in touch with us to discuss your project requirements or schedule a consultation."
        centered
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - Contact Info */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-sm shadow-custom h-full"
          >
            <h3 className="heading-sm mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-stone-100 p-3 rounded-sm mr-4">
                  <Phone size={20} className="text-obsidian" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-stone-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-stone-100 p-3 rounded-sm mr-4">
                  <Mail size={20} className="text-obsidian" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-stone-600">info@obsidianwoodworking.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-stone-100 p-3 rounded-sm mr-4">
                  <MapPin size={20} className="text-obsidian" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Workshop & Showroom</h4>
                  <p className="text-stone-600">
                    123 Craftsman Way<br />
                    Portland, OR 97205
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-stone-100 p-3 rounded-sm mr-4">
                  <Clock size={20} className="text-obsidian" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Hours</h4>
                  <p className="text-stone-600">
                    Monday-Friday: 9am - 5pm<br />
                    Saturday: By appointment<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <form className="bg-white p-8 rounded-sm shadow-custom">
            <h3 className="heading-sm mb-6">Send Us a Message</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-obsidian/50"
                  placeholder="John Smith"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-obsidian/50"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-obsidian/50"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-stone-700 mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-obsidian/50"
                >
                  <option value="">Select a service</option>
                  <option value="custom-cabinetry">Custom Cabinetry</option>
                  <option value="custom-furniture">Custom Furniture</option>
                  <option value="architectural-millwork">Architectural Millwork</option>
                  <option value="commercial-projects">Commercial Projects</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                Project Details
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-obsidian/50"
                placeholder="Please describe your project and any specific requirements..."
              ></textarea>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0 text-sm text-stone-600">
                We'll get back to you within 1-2 business days.
              </div>
              
              <Button
                type="submit"
                variant="primary"
                className="bg-obsidian hover:bg-obsidian/90"
                icon={<Send size={16} />}
              >
                Send Message
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}