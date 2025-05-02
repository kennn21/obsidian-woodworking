import React from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';
import { fadeInUpVariant } from '../../utils/animation';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
  fullWidth?: boolean;
}

export function Section({ 
  id, 
  className, 
  children, 
  dark = false, 
  fullWidth = false 
}: SectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id={id}
      className={cn(
        "section-padding",
        dark ? "bg-obsidian text-stone-100" : "bg-stone-50 text-stone-800",
        className
      )}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUpVariant}
        className={cn(
          fullWidth ? "w-full" : "container-custom"
        )}
      >
        {children}
      </motion.div>
    </section>
  );
}