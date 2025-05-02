import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from './ui/Section';
import { SectionTitle } from './ui/SectionTitle';
import { projects, categories } from '../data/projects';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/Button';

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(6);
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
    
  const hasMoreProjects = visibleProjects < filteredProjects.length;
  
  const loadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <Section id="portfolio">
      <SectionTitle 
        title="Our Portfolio" 
        subtitle="Browse our collection of custom woodworking projects, showcasing the quality and craftsmanship that defines our work."
        centered
      />
      
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map(category => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setActiveCategory(category.id);
              setVisibleProjects(6);
            }}
            className={`px-4 py-2 rounded-sm text-sm transition-all duration-300 ${
              activeCategory === category.id 
                ? 'bg-obsidian text-white' 
                : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
            }`}
          >
            {category.name}
          </motion.button>
        ))}
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-sm shadow-custom overflow-hidden group"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-obsidian/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                    icon={<ExternalLink size={16} />}
                  >
                    View Project
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-serif font-medium">{project.title}</h3>
                  <span className="text-xs uppercase tracking-wider px-2 py-1 bg-stone-100 text-stone-700 rounded">
                    {project.year}
                  </span>
                </div>
                <p className="text-stone-600 text-sm mb-3">{project.description}</p>
                <div className="flex justify-between items-center text-xs text-stone-500">
                  <span>{project.client}</span>
                  <span>{project.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {/* Load More Button */}
      {hasMoreProjects && (
        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            onClick={loadMore}
          >
            Load More Projects
          </Button>
        </div>
      )}
    </Section>
  );
}