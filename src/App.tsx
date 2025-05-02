import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedInstrument from './components/FeaturedInstrument';
import InstrumentGrid from './components/InstrumentGrid';
import Craftsmanship from './components/Craftsmanship';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { instruments, getFeaturedInstruments } from './data/instruments';

function App() {
  const featuredInstruments = getFeaturedInstruments();

  return (
    <div className="font-sans bg-amber-50 text-amber-900">
      <Navbar />
      <Hero />
      
      <div className="py-16 bg-[url('https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-fixed bg-center relative">
        <div className="absolute inset-0 bg-amber-900/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-amber-50 mb-8 text-center">
            Featured Instruments
          </h2>
          
          <div className="space-y-8">
            {featuredInstruments.map(instrument => (
              <FeaturedInstrument key={instrument.id} instrument={instrument} />
            ))}
          </div>
        </div>
      </div>
      
      <InstrumentGrid instruments={instruments} />
      <Craftsmanship />
      <Testimonials />
      <Newsletter />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;