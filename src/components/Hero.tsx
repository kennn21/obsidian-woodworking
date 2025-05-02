import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-cover bg-center h-[90vh]" 
         style={{ 
           backgroundImage: `url('https://images.pexels.com/photos/1021142/pexels-photo-1021142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
         }}>
      <div className="absolute inset-0 bg-amber-900/40"></div>
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-amber-50 mb-6 tracking-wider">
          Handcrafted Musical Traditions
        </h1>
        <p className="text-xl md:text-2xl text-amber-50 max-w-3xl mb-8">
          Authentic instruments built with time-honored techniques and generations of experience
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="#instruments" 
            className="px-8 py-3 bg-amber-800 hover:bg-amber-700 text-amber-50 rounded-md shadow-lg transition-colors duration-300 text-lg font-medium"
          >
            Explore Our Collection
          </a>
          <a 
            href="#craftsmanship" 
            className="px-8 py-3 bg-transparent border-2 border-amber-50 text-amber-50 hover:bg-amber-50 hover:text-amber-900 rounded-md shadow-lg transition-colors duration-300 text-lg font-medium"
          >
            Our Craftsmanship
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-900/80 to-transparent"></div>
    </div>
  );
};

export default Hero;