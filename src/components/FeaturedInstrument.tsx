import React from 'react';
import { Instrument } from '../types';
import { ChevronRight } from 'lucide-react';

interface FeaturedInstrumentProps {
  instrument: Instrument;
}

const FeaturedInstrument: React.FC<FeaturedInstrumentProps> = ({ instrument }) => {
  return (
    <div className="bg-amber-50 rounded-lg overflow-hidden shadow-xl transform transition-all hover:scale-[1.02] duration-300">
      <div className="md:flex">
        <div className="md:w-1/2">
          <img 
            src={instrument.imageUrl} 
            alt={instrument.name} 
            className="h-64 w-full object-cover md:h-full"
          />
        </div>
        <div className="p-6 md:w-1/2 flex flex-col justify-between">
          <div>
            <div className="uppercase tracking-wide text-sm text-amber-700 font-semibold">
              Featured Instrument
            </div>
            <h2 className="mt-2 text-2xl font-serif font-bold text-amber-900 leading-tight">
              {instrument.name}
            </h2>
            <p className="mt-3 text-amber-800">
              {instrument.description}
            </p>
            
            {instrument.details && (
              <div className="mt-4 border-t border-amber-200 pt-4">
                <h3 className="font-medium text-amber-800">Craftsmanship Details:</h3>
                <ul className="mt-2 space-y-1 text-sm text-amber-700">
                  <li>Material: {instrument.details.material}</li>
                  <li>Origin: {instrument.details.origin}</li>
                </ul>
              </div>
            )}
          </div>
          
          <div className="mt-6 flex items-center">
            <span className="text-amber-900 font-bold text-xl">${instrument.price}</span>
            <a 
              href={`#instrument-${instrument.id}`} 
              className="ml-auto inline-flex items-center px-4 py-2 bg-amber-700 hover:bg-amber-600 text-amber-50 rounded-md shadow-md transition-colors duration-300"
            >
              View Details
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInstrument;