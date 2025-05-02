import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { SectionTitle } from './ui/SectionTitle';
import { Award, Clock, Users } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: <Award size={24} className="text-gold" />,
      title: "Award-Winning Craftsmanship",
      description: "Recognized for exceptional quality and artistry in woodworking"
    },
    {
      icon: <Clock size={24} className="text-gold" />,
      title: "30+ Years of Experience",
      description: "Decades of expertise in creating timeless, functional woodwork"
    },
    {
      icon: <Users size={24} className="text-gold" />,
      title: "Master Woodworkers",
      description: "A team of skilled artisans dedicated to perfection in every detail"
    }
  ];

  return (
    <Section id="about" className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column - Text Content */}
        <div>
          <SectionTitle 
            title="Our Passion for Fine Woodworking" 
            subtitle="At Obsidian Woodworking, we transform raw lumber into functional art pieces that stand the test of time. Our commitment to quality craftsmanship is evident in every project we undertake."
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-stone-600 mb-8"
          >
            Founded in 1992 by master craftsman James Blackwood, our workshop has grown from a small one-person operation to a respected studio of artisans. We specialize in custom cabinetry, furniture, and architectural millwork, using traditional joinery techniques alongside modern precision tools.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-stone-600 mb-12"
          >
            We source only the finest sustainable hardwoods, carefully selected for their character, grain, and durability. Every piece that leaves our workshop is not just built to last—it's crafted to become a cherished heirloom that tells a story for generations to come.
          </motion.p>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-sm shadow-custom"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-stone-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Right Column - Image Collage */}
        <div className="grid grid-cols-2 gap-4 h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-2 img-hover rounded-sm overflow-hidden"
          >
            <img 
              src="https://images.pexels.com/photos/1094770/pexels-photo-1094770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Workshop" 
              className="w-full h-72 object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="img-hover rounded-sm overflow-hidden"
          >
            <img 
              src="https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Woodworking detail" 
              className="w-full h-52 object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="img-hover rounded-sm overflow-hidden"
          >
            <img 
              src="https://images.pexels.com/photos/3637786/pexels-photo-3637786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Craftsman working" 
              className="w-full h-52 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}