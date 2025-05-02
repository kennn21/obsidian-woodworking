import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from './ui/Section';
import { SectionTitle } from './ui/SectionTitle';
import { Button } from './ui/Button';
import { ChevronRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      id: 'custom-cabinetry',
      title: 'Custom Cabinetry',
      description: 'Elevate your space with bespoke cabinetry designed to your exact specifications. From kitchen cabinets to built-in wardrobes, our custom solutions blend seamless functionality with exceptional craftsmanship.',
      features: [
        'Premium hardwood construction',
        'Dovetail joinery for maximum durability',
        'Custom finishes and hardware options',
        'Soft-close hinges and drawer slides',
        'Personalized interior organization systems',
        'Integrated lighting solutions'
      ],
      image: 'https://images.pexels.com/photos/5824902/pexels-photo-5824902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'custom-furniture',
      title: 'Custom Furniture',
      description: 'Commission heirloom-quality furniture pieces crafted specifically for your space and lifestyle. Each piece is meticulously constructed using traditional joinery techniques that ensure generations of use.',
      features: [
        'One-of-a-kind designs',
        'Traditional mortise and tenon construction',
        'Live edge and character wood options',
        'Custom sizing for perfect fit',
        'Hand-rubbed oil and wax finishes',
        'Material selection consultation'
      ],
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'architectural-millwork',
      title: 'Architectural Millwork',
      description: 'Transform your space with custom architectural elements that add character and refinement. From crown molding to built-in shelving, our millwork brings distinctive quality to any interior.',
      features: [
        'Custom wainscoting and wall paneling',
        'Decorative ceiling treatments',
        'Handcrafted stairs and railings',
        'Built-in bookshelves and media centers',
        'Interior doors and trim work',
        'Restoration of historical elements'
      ],
      image: 'https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'commercial-projects',
      title: 'Commercial Projects',
      description: 'Enhance your business space with custom woodwork that communicates quality and attention to detail. From restaurant interiors to retail displays, we create functional, beautiful commercial environments.',
      features: [
        'Reception desks and workstations',
        'Retail displays and fixtures',
        'Restaurant furnishings and bar tops',
        'Office cabinetry and storage solutions',
        'Custom conference tables',
        'Hospitality and hotel furnishings'
      ],
      image: 'https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const [activeService, setActiveService] = useState(services[0]);

  return (
    <Section id="services" dark>
      <SectionTitle 
        title="Our Custom Services" 
        subtitle="We offer a comprehensive range of woodworking services, each delivered with meticulous attention to detail and unwavering commitment to quality."
        light
        centered
      />

      {/* Services Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {services.map((service) => (
          <motion.button
            key={service.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveService(service)}
            className={`px-6 py-3 rounded-sm transition-all duration-300 ${
              activeService.id === service.id 
                ? 'bg-gold text-white' 
                : 'bg-charcoal text-white hover:bg-charcoal/80'
            }`}
          >
            {service.title}
          </motion.button>
        ))}
      </div>

      {/* Service Details */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeService.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Left Column - Image */}
          <div className="rounded-sm overflow-hidden shadow-custom-lg">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7 }}
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Right Column - Content */}
          <div>
            <h3 className="heading-md text-white mb-4">{activeService.title}</h3>
            <p className="text-stone-300 mb-8">{activeService.description}</p>
            
            <h4 className="text-gold font-medium mb-4">Features & Benefits</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {activeService.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <ChevronRight size={16} className="text-gold mt-1 mr-2 flex-shrink-0" />
                  <span className="text-stone-200">{feature}</span>
                </motion.li>
              ))}
            </ul>
            
            <Button
              variant="primary"
              className="bg-gold hover:bg-gold/90 focus:ring-gold/50"
            >
              Request Consultation
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}