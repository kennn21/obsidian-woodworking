import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "p1",
    title: "Walnut Executive Office",
    category: "custom-furniture",
    image: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Complete office redesign featuring solid walnut desk, bookcase, and integrated storage.",
    year: 2023,
    client: "Financial Executive",
    location: "Boston, MA",
    featured: true
  },
  {
    id: "p2",
    title: "Modern Kitchen Renovation",
    category: "custom-cabinetry",
    image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Sleek, contemporary kitchen with white oak cabinetry, integrated appliances, and island.",
    year: 2023,
    client: "Residential",
    location: "Seattle, WA",
    featured: true
  },
  {
    id: "p3",
    title: "Craftsman Dining Table & Chairs",
    category: "custom-furniture",
    image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Handcrafted cherry dining set for 8 with traditional mortise and tenon joinery.",
    year: 2022,
    client: "Private Residence",
    location: "Portland, OR",
    featured: true
  },
  {
    id: "p4",
    title: "Boutique Retail Displays",
    category: "commercial-projects",
    image: "https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Custom display cases, shelving, and counter for upscale clothing boutique.",
    year: 2022,
    client: "Luxe Apparel",
    location: "Chicago, IL",
    featured: false
  },
  {
    id: "p5",
    title: "Maple Library Paneling",
    category: "architectural-millwork",
    image: "https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Floor-to-ceiling maple paneling with integrated bookshelves and ladder system.",
    year: 2021,
    client: "Private Estate",
    location: "Greenwich, CT",
    featured: true
  },
  {
    id: "p6",
    title: "Wine Bar & Cellar",
    category: "commercial-projects",
    image: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Walnut bar top with custom bottle storage, display shelving, and cellar entrance.",
    year: 2021,
    client: "Vineyard Restaurant",
    location: "Napa, CA",
    featured: false
  },
  {
    id: "p7",
    title: "Master Bathroom Vanities",
    category: "custom-cabinetry",
    image: "https://images.pexels.com/photos/6585601/pexels-photo-6585601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Dual floating vanities in rift-sawn white oak with integrated lighting.",
    year: 2020,
    client: "Luxury Condominium",
    location: "Miami, FL",
    featured: false
  },
  {
    id: "p8",
    title: "Live Edge Conference Table",
    category: "custom-furniture",
    image: "https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Monolithic 14-foot black walnut slab table for executive boardroom.",
    year: 2020,
    client: "Tech Headquarters",
    location: "Austin, TX",
    featured: true
  }
];

export const categories = [
  { id: "all", name: "All Projects" },
  { id: "custom-cabinetry", name: "Custom Cabinetry" },
  { id: "custom-furniture", name: "Custom Furniture" },
  { id: "architectural-millwork", name: "Architectural Millwork" },
  { id: "commercial-projects", name: "Commercial Projects" }
];