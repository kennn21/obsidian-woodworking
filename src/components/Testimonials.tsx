import React from 'react';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  return (
    <div id="testimonials" className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-amber-900 mb-2 text-center">Our Customers' Stories</h2>
        <p className="text-amber-800 text-center max-w-3xl mx-auto mb-12">
          Hear from musicians who have found their voice with our instruments.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md border border-amber-200"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-amber-700 flex items-center justify-center text-amber-50 font-serif text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-amber-900">{testimonial.name}</h3>
                  <p className="text-sm text-amber-700">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-amber-800 italic mb-4">"{testimonial.text}"</p>
              <p className="text-sm text-amber-700 font-medium">{testimonial.instrument}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;