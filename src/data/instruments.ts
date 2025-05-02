import { Instrument } from '../types';

export const instruments: Instrument[] = [
  {
    id: '1',
    name: 'Appalachian Banjo',
    category: 'String',
    price: 899,
    description: 'Hand-crafted open-back banjo with a warm, mellow tone perfect for old-time music.',
    imageUrl: 'https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true,
    soundSample: 'https://example.com/samples/banjo.mp3',
    details: {
      material: 'Maple rim with walnut neck',
      origin: 'Blue Ridge Mountains',
      craftsmanship: 'Each piece hand-selected for tonal quality and historical authenticity.'
    }
  },
  {
    id: '2',
    name: 'Tennessee Fiddle',
    category: 'String',
    price: 1250,
    description: 'Classic Tennessee fiddle with rich, expressive voice and exceptional playability.',
    imageUrl: 'https://images.pexels.com/photos/2100181/pexels-photo-2100181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false,
    details: {
      material: 'Aged spruce top with maple back and sides',
      origin: 'Eastern Tennessee',
      craftsmanship: 'Built using techniques passed down through five generations.'
    }
  },
  {
    id: '3',
    name: 'Heritage Acoustic Guitar',
    category: 'String',
    price: 1499,
    description: 'Dreadnought acoustic guitar with vintage tone and exceptional craftsmanship.',
    imageUrl: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true,
    soundSample: 'https://example.com/samples/guitar.mp3',
    details: {
      material: 'Solid Sitka spruce top with rosewood back and sides',
      origin: 'Kentucky Woodshop',
      craftsmanship: 'Each guitar voiced individually by master luthiers.'
    }
  },
  {
    id: '4',
    name: 'Mississippi Harmonica',
    category: 'Wind',
    price: 89,
    description: 'Blues harmonica with deep, soulful tone for authentic Delta blues playing.',
    imageUrl: 'https://images.pexels.com/photos/101640/pexels-photo-101640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false,
    details: {
      material: 'Brass reeds with pearwood comb',
      origin: 'Mississippi Delta',
      craftsmanship: 'Hand-tuned reeds for authentic blues tonality.'
    }
  },
  {
    id: '5',
    name: 'Ozark Mandolin',
    category: 'String',
    price: 1150,
    description: 'Traditional F-style mandolin with punchy chop and singing tremolo.',
    imageUrl: 'https://images.pexels.com/photos/4087991/pexels-photo-4087991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: false,
    details: {
      material: 'Carved spruce top with maple back and sides',
      origin: 'Ozark Mountains',
      craftsmanship: 'Each mandolin aged with proprietary techniques for vintage tone.'
    }
  },
  {
    id: '6',
    name: 'Shenandoah Dulcimer',
    category: 'String',
    price: 495,
    description: 'Mountain dulcimer with sweet, haunting voice perfect for traditional Appalachian music.',
    imageUrl: 'https://images.pexels.com/photos/111287/pexels-photo-111287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true,
    soundSample: 'https://example.com/samples/dulcimer.mp3',
    details: {
      material: 'Cherry wood with walnut fretboard',
      origin: 'Shenandoah Valley',
      craftsmanship: 'Traditional hourglass design with historical tuning methods.'
    }
  }
];

export const getFeaturedInstruments = (): Instrument[] => {
  return instruments.filter(instrument => instrument.featured);
};

export const getInstrumentById = (id: string): Instrument | undefined => {
  return instruments.find(instrument => instrument.id === id);
};

export const getInstrumentsByCategory = (category: string): Instrument[] => {
  return instruments.filter(instrument => instrument.category === category);
};