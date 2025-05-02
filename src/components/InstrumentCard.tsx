import React from 'react';
import { Instrument } from '../types';

interface InstrumentCardProps {
  instrument: Instrument;
}

const InstrumentCard: React.FC<InstrumentCardProps> = ({ instrument }) => {
  return (
    <div 
      className="bg-amber-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transform transition-all hover:-translate-y-1 duration-300"
      id={`instrument-${instrument.id}`}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={instrument.imageUrl} 
          alt={instrument.name} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-serif font-bold text-amber-900 mb-2">{instrument.name}</h3>
        <p className="text-amber-700 text-sm mb-4">{instrument.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-amber-900">${instrument.price}</span>
          <button className="px-3 py-1 bg-amber-700 hover:bg-amber-600 text-amber-50 rounded-md text-sm transition-colors duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstrumentCard;