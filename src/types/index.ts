export interface Instrument {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
  featured: boolean;
  soundSample?: string;
  details?: {
    material: string;
    origin: string;
    craftsmanship: string;
  };
}

export interface TestimonialType {
  id: string;
  name: string;
  location: string;
  text: string;
  instrument: string;
}