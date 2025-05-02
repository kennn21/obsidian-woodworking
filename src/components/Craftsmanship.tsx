import React from 'react';

const Craftsmanship: React.FC = () => {
  return (
    <div id="craftsmanship" className="py-16 bg-[url('https://images.pexels.com/photos/4709496/pexels-photo-4709496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-amber-900/70"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-amber-50">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4">Our Tradition of Craftsmanship</h2>
          <p className="text-lg">
            For five generations, we've been crafting musical instruments using time-honored techniques
            and hand-selected materials to create authentic sounds with real character.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-amber-800/80 backdrop-blur-sm p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-serif font-bold mb-3">Hand-Selected Materials</h3>
            <p>
              We personally select each piece of wood for its tonal properties, 
              aging our materials naturally for years to develop their unique voice.
            </p>
          </div>
          
          <div className="bg-amber-800/80 backdrop-blur-sm p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-serif font-bold mb-3">Traditional Techniques</h3>
            <p>
              Our master craftspeople use the same methods passed down through generations,
              with subtle improvements that preserve the authentic character.
            </p>
          </div>
          
          <div className="bg-amber-800/80 backdrop-blur-sm p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-serif font-bold mb-3">Individual Voice</h3>
            <p>
              We voice each instrument individually, taking the time to bring out its
              unique character rather than mass-producing identical instruments.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-amber-700 hover:bg-amber-600 text-amber-50 rounded-md shadow-lg transition-colors duration-300"
          >
            Schedule a Workshop Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Craftsmanship;