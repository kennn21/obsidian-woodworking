import React from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionTitle({ 
  title, 
  subtitle, 
  centered = false, 
  light = false,
  className 
}: SectionTitleProps) {
  return (
    <div className={cn(
      "mb-12",
      centered && "text-center",
      className
    )}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={cn(
          "heading-lg",
          light ? "text-stone-100" : "text-obsidian"
        )}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={cn(
            "mt-4 body-lg max-w-3xl",
            centered && "mx-auto",
            light ? "text-stone-300" : "text-stone-600"
          )}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className={cn(
          "h-0.5 w-24 mt-6 origin-left",
          centered ? "mx-auto" : "",
          light ? "bg-gold" : "bg-oak"
        )}
      />
    </div>
  );
}