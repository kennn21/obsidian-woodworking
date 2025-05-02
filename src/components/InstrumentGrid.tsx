import React, { useState } from 'react';
import { Instrument } from '../types';
import InstrumentCard from './InstrumentCard';

interface InstrumentGridProps {
  instruments: Instrument[];
}

const InstrumentGrid: React.FC<InstrumentGridProps> = ({ instruments }) => {
  const [filter, setFilter] = useState<string>('All');
  
  // Get unique categories
  const categories = ['All', ...new Set(instruments.map(i => i.category))];
  
  // Filter instruments by category
  const filteredInstruments = filter === 'All' 
    ? instruments 
    : instruments.filter(i => i.category === filter);

  return (
    <div id="instruments" className="py-12 bg-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-amber-900 mb-2 text-center">Our Collection</h2>
        <p className="text-amber-800 text-center max-w-3xl mx-auto mb-8">
          Each instrument is carefully crafted to bring out its authentic voice and character.
        </p>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === category 
                  ? 'bg-amber-800 text-amber-50' 
                  : 'bg-amber-200 text-amber-800 hover:bg-amber-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Instrument grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInstruments.map(instrument => (
            <InstrumentCard key={instrument.id} instrument={instrument} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstrumentGrid;