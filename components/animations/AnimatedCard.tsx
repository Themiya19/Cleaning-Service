'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverScale?: number;
  hoverRotate?: number;
}

export default function AnimatedCard({ 
  children, 
  className = '', 
  delay = 0,
  hoverScale = 1.05,
  hoverRotate = 0
}: AnimatedCardProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      animate={inView ? { 
        opacity: 1, 
        y: 0, 
        rotateX: 0 
      } : {}}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{
        scale: hoverScale,
        rotate: hoverRotate,
        y: -10,
        transition: { duration: 0.3 }
      }}
      whileTap={{
        scale: 0.98
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
