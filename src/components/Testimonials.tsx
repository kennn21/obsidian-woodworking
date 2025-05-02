import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { SectionTitle } from './ui/SectionTitle';
import { testimonials } from '../data/testimonials';
import { Star } from 'lucide-react';

export function Testimonials() {
  return (
    <Section id="testimonials" dark>
      <SectionTitle 
        title="Client Testimonials" 
        subtitle="Hear what our clients have to say about their experience working with Obsidian Woodworking."
        light
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-charcoal p-8 rounded-sm shadow-custom relative"
          >
            {/* Quote mark */}
            <div className="absolute -top-4 -left-2 text-6xl text-gold opacity-30 font-serif">"</div>
            
            {/* Rating */}
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < testimonial.rating ? "text-gold" : "text-stone-600"}
                  fill={i < testimonial.rating ? "#D4AF37" : "none"}
                />
              ))}
            </div>
            
            {/* Content */}
            <p className="text-stone-300 mb-6 relative z-10">"{testimonial.content}"</p>
            
            {/* Author */}
            <div className="flex items-center">
              {testimonial.image && (
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
              )}
              <div>
                <h4 className="text-white font-medium">{testimonial.name}</h4>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  {testimonial.role && (
                    <span className="text-stone-400 text-sm">{testimonial.role}</span>
                  )}
                  {testimonial.project && (
                    <>
                      <span className="hidden sm:inline text-stone-400 text-sm mx-2">•</span>
                      <span className="text-gold text-sm">{testimonial.project}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-stone-300 text-lg mb-6">
          Ready to start your custom woodworking project?
        </p>
        <a 
          href="#contact" 
          className="inline-flex items-center justify-center px-8 py-3 bg-gold text-white font-medium rounded-sm transition-all duration-300 hover:bg-gold/90"
        >
          Get in Touch
        </a>
      </motion.div>
    </Section>
  );
}