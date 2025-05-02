export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  year: number;
  client?: string;
  location?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  image?: string;
  project?: string;
  rating: number;
}